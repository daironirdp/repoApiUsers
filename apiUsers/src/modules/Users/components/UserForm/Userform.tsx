import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useState } from 'react'

import { SignupSchema } from './validationSchemas/userValidation';
import { formValue } from './InitialValues/userInitialValues';
import { PersonalData } from './formSections/PersonalData';
import { UserAddress } from './formSections/UserAddress';
import { UserCompany } from './formSections/UserCompany';
import { IUser } from '../../models/User';
import { transformToIUser } from '../../helpers/userHelpers';
import { createUser, modifyUser } from "../../services/UserServices/";
import { Loading } from "../../../../generalComponents/loading";
import { Error } from "../../../../generalComponents/error";

interface formProps {

  creating: boolean;
  initialValues: formValue,
  changeUsers: (newUsers: IUser[]) => void;
  users: IUser[]
  handleClose: () => void

}

export const UserForm = (props: formProps) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [errorInstance, setError] = useState<boolean>(false)

  const handleModifyCreate = async (object: IUser, id?: number) => {

    try {

      if (props.creating) {
        setLoading(true)
        const result = await createUser(object)
        setLoading(false)
        const userList: IUser[] = [...props.users, result.data]
        props.changeUsers(userList);
        props.handleClose();
      } else {
        setLoading(true)
        const result = await modifyUser(object, props.initialValues.id!)
        setLoading(false)
        const userList = props.users.map((element) => element.id == result.data.id ? {
          ...element, name: result.data.name, phone: result.data.phone, username: result.data.username, website: result.data.website,
          email: object.email, company: result.data.company, address: result.data.address
        } : element)
        props.changeUsers(userList);
        props.handleClose()
      }

    } catch (error) {
      setError(true)

    }

  };


  return (
    <>
      {loading ? <Loading />

        : <Formik initialValues={props.initialValues} validationSchema={SignupSchema}

          onSubmit={(values, actions) => {

            const object: IUser = transformToIUser(values)
            handleModifyCreate(object);
            actions.setSubmitting(false);

          }}>

          <Form>
            <PersonalData />
            <UserAddress />
            <UserCompany />

            <div style={{ display: "flex", justifyContent: "end", marginTop: "0.8rem" }}> <Button type="submit">Submit</Button></div>

          </Form>
        </Formik>
      }

      {errorInstance && <Error showProp={true}> The server could not receive the data</Error>}
    </>
  );
};