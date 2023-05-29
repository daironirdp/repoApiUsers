import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';

import { SignupSchema } from './validationSchemas/userValidation';
import { formValue } from './InitialValues/userInitialValues';
import { PersonalData } from './formSections/PersonalData';
import { UserAddress } from './formSections/UserAddress';
import { UserCompany } from './formSections/UserCompany';
import { IUser } from '../../models/User';
import { transformToIUser } from '../../helpers/userHelpers';


interface formProps {

  creating: boolean;
  initialValues: formValue,
  changeUsers: (newUsers: IUser[]) => void;
  users: IUser[]
  handleClose: () => void

}

export const UserForm = (props: formProps) => {


  return (

    <Formik initialValues={props.initialValues} validationSchema={SignupSchema}

      onSubmit={(values, actions) => {

        const last = props.users.findLast((u) => u);

        const object: IUser = transformToIUser(values, last == undefined ? 1 : last.id)

        if (props.creating) {

          const userList: IUser[] = [...props.users, object]
          props.changeUsers(userList);


        } else {

          const newUsers = props.users.map((element) => element.id == props.initialValues.id ? {
            ...element, name: object.name, phone: object.phone, username: object.username, website: object.website,
            email: object.email, company: object.company, address: object.address
          } : element)

          props.changeUsers(newUsers)

        }

        actions.setSubmitting(false);
        props.handleClose()
      }}>

      <Form>
        <PersonalData />
        <UserAddress />
        <UserCompany />

        <div style={{display:"flex", justifyContent:"end", marginTop:"0.8rem"}}> <Button type="submit">Submit</Button></div>

      </Form>
    </Formik>

  );
};