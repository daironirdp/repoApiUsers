
import { FC, useState } from 'react';
import { IUser } from '../../models/User';
import { Card, Button } from 'react-bootstrap';
import ModalForm from '../UserForm';
import { UserForm } from '../UserForm/Userform';
import { transformToFormData } from '../../helpers/userHelpers';
import { deleteUser } from '../../services/UserServices/';
import { Loading } from "../../../../generalComponents/loading"
import { Error } from "../../../../generalComponents/error"

type userContainerProps = {

    user: IUser,
    changeUsers: (newUsers: IUser[]) => void,
    users: IUser[],
    pagesHandler: [page: number, pageSetter: (page: number) => void]
}



export const UserContainer: FC<userContainerProps> = ({ user, changeUsers, users, pagesHandler }) => {

    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const [errorInstance, setError] = useState<boolean>(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleDelete = async () => {

        try {
            setLoading(true)
            const result = await deleteUser(user.id!)

            setLoading(false);
            changeUsers(users.filter((u) => u.id != user.id))

            if (users.length <= 2) {
                pagesHandler[1](1);
            } else if (pagesHandler[0] > Math.ceil((users.length - 1) / 2)) {
                pagesHandler[1](Math.ceil(users.length / 2) - 1);

            }


        } catch (error) {

            setError(true)
        }

    }


    return (<>
        <Card className="mt-2">
            <Card.Header as="h6"> <div className="d-flex justify-content-around"> <div>Name: <span style={{ fontSize: '0.8rem' }}>{user.name}</span></div>  <div> Username: <span style={{ fontSize: '0.8rem' }}>{user.username}</span></div> <div>Geolocalization:  <span style={{ fontSize: '0.8rem' }}>Latitude ({user.address.geo.lat})</span> <span style={{ fontSize: '0.8rem' }}>Longitude ({user.address.geo.lng})</span></div> </div>    </Card.Header>
            <Card.Body>

                {errorInstance && <Error showProp={true}>This element cannot be deleted</Error>}
                {loading && <Loading />}
                <Card.Title>Address</Card.Title>
                <Card.Text className="text-justify">
                    I live in  {user.address.city} city in the  {user.address.street}
                    my suite is  {user.address.suite} and the zipcode is  {user.address.zipcode},
                    you can reach me through my mail address {user.email}
                </Card.Text>

                <Card.Title>Company: {user.company.name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li> Bs: {user.company.bs}</li>
                        <li> Phrase: {user.company.catchPhrase}</li>
                        <li> Phone: {user.phone}</li>
                        <li> Website:<a href={"https://www." + user.website + ""} style={{ textDecoration: 'none' }} className={'link-info'}> {user.company.name} </a> </li>

                    </ul>

                </Card.Text>

                {!loading &&
                    <>
                        <Button variant="primary" onClick={handleShow}>Update</Button>
                        <Button style={{ marginLeft: "5px" }} variant="danger" onClick={handleDelete}>Delete</Button>
                    </>

                }


            </Card.Body>

            <ModalForm show={show} handleClose={handleClose} creating={false}>
                <UserForm handleClose={handleClose} users={users} changeUsers={changeUsers} creating={false} initialValues={transformToFormData(user)} />
            </ModalForm>
        </Card>

    </>)
}