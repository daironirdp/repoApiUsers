
import { FC, useState } from 'react';
import { IUser } from '../../models/User';
import { Card, Button } from 'react-bootstrap';
import ModalForm from '../UserForm';
import { UserForm } from '../UserForm/Userform';
import { transformToFormData } from '../../helpers/userHelpers';

type userContainerProps = {

    user: IUser,
    changeUsers: (newUsers: IUser[]) => void,
    users: IUser[]
}



export const UserContainer: FC<userContainerProps> = ({ user, changeUsers, users }) => {

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = () => {

        changeUsers(users.filter((u) => u.id != user.id))

    }


    return (<>
        <Card className="mt-2">
            <Card.Header as="h6"> <div className="d-flex justify-content-around"> <div>Name: <span style={{ fontSize: '0.8rem' }}>{user.name}</span></div>  <div> Username: <span style={{ fontSize: '0.8rem' }}>{user.username}</span></div> <div>Geolocalization:  <span style={{ fontSize: '0.8rem' }}>Latitude ({user.address.geo.lat})</span> <span style={{ fontSize: '0.8rem' }}>Longitude ({user.address.geo.lng})</span></div> </div>    </Card.Header>
            <Card.Body>
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

                <Button variant="primary" onClick={handleShow}>Update</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Body>

            <ModalForm show={show} handleClose={handleClose} creating={false}>
                <UserForm handleClose={handleClose} users={users} changeUsers={changeUsers} creating={false} initialValues={transformToFormData(user)} />
            </ModalForm>
        </Card>

    </>)
} 