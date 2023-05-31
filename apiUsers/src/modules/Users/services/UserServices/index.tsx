import { mycustomAxios } from "../../../../axios/axios.config";
import { IUser } from "../../models/User"

export const getUsers = async () => {

    return await mycustomAxios.get<IUser[]>("users/");

};


export const getUserByID = async (id: string) => {

    return await mycustomAxios.get<IUser>(`users/${id}`);

};

export const deleteUser = async (id: number) => {

    return await mycustomAxios.delete<IUser>(`users/${id}`);
}

export const modifyUser = async (data: IUser, id: number) => {
    const config = {
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };
    return await mycustomAxios.put(`users/${id}`, data, config);

}

export const createUser = async (data: IUser) => {
    const config = {
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    return await mycustomAxios.post(`users/`, data, config);

}


