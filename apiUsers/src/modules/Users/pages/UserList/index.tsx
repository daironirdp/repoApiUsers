import { useState, useEffect } from 'react'

import Pagination from 'react-bootstrap/Pagination';


import { UserContainer } from "../../components/UserContainer";
import { useGetUsers } from "../../hooks/useGetUsers"
import { IUser } from "../../models/User";
import ModalForm from '../../components/UserForm';
import { Button } from 'react-bootstrap';
import { UserForm } from '../../components/UserForm/Userform';
import { initialValues } from '../../components/UserForm/InitialValues/userInitialValues';
import { Error } from '../../../../generalComponents/error';


export const UserList = () => {

    const [show, setShow] = useState(false);
    const values = useGetUsers();
    const [actualPage, setActualPage] = useState<number>(1)

    //pagination starter

    const active = actualPage;
    const items = [];
    const amoutOfPages = values.users.length % 2 == 0 ? values.users.length / 2 : Math.trunc((values.users.length / 2) + 1)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeUsers = (newUsers: IUser[]) => {

        values.setUsers(newUsers)


    }
    useEffect(() => {
        
        const startIndex = (actualPage - 1) * 2;
        const endIndex = startIndex + 2;
        values.setUsersToshow(values.users.slice(startIndex, endIndex));
    }, [actualPage, values.users]);




    const handlePagination = (page: number) => {

        if (values.users.length <= 2) {
            setActualPage(1);
        } else if (page > Math.ceil(values.users.length / 2)) {
            alert(actualPage)
            setActualPage(Math.ceil(values.users.length / 2));
        } else {
            setActualPage(page);
        }


        const itemsPerPage = 2
        const initialItemPosition = itemsPerPage * (actualPage - 1)
        const finalItemPosition = initialItemPosition + itemsPerPage;
        const actualPageUsers: IUser[] = values.users.slice(initialItemPosition, finalItemPosition);
        values.setUsersToshow(actualPageUsers)
    }

    for (let number = 1; number <= amoutOfPages; number++) {
        items.push(
            <Pagination.Item onClick={() => handlePagination(number)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


    return (<>


        <div className="d-flex flex-column align-items-center mt-2" >

            {values.error != undefined && <Error showProp={true}>Something went wrong while fetching data from the server</Error>}
            <div className='container'>
                {values.usersToShow.map((item) => (
                    <UserContainer key={item.id} user={item} users={values.users} pagesHandler={[actualPage,setActualPage]} changeUsers={changeUsers} ></UserContainer>
                ))}
            </div>

            <div className='mt-2'> <Pagination>{items} </Pagination> <br /></div>

            {!values.loading &&
                <div className='mt-2'><Button variant="primary" onClick={handleShow}>Create User</Button></div>}


            <ModalForm show={show} handleClose={handleClose} creating={true} >
                <UserForm handleClose={handleClose} users={values.users} changeUsers={changeUsers} creating={true} initialValues={initialValues} />
            </ModalForm>
        </div>



    </>)

}