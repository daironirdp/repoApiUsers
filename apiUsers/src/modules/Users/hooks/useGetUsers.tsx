import { useEffect, useState } from "react";
import { IUser } from "../models/User";
import { getUsers } from "../services/UserServices";
import { AxiosError } from "axios";

export const useGetUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [usersToShow, setUsersToshow] = useState<IUser[]>([]);
    const [loading, setSloading] = useState<boolean>(false);
    const [error, setError] = useState();

    const handleGetUsers = async () => {

        setSloading(true);

        try {
            const result = await getUsers()
            setUsers(result.data)
            setUsersToshow(result.data.slice(0, 2))
            setSloading(false);
        } catch (error : AxiosError) {

            setError(error.message)
            setSloading(false);
        }
    };
    useEffect(() => {
        handleGetUsers();
    }, []);
    return { users, loading, error, usersToShow, setUsersToshow, setUsers };
};
