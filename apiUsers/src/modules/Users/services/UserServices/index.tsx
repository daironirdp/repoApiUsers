import { mycustomAxios } from "../../../../axios/axios.config";
import { IUser } from "../../models/User"

export const getUsers = async () => {
 
    return await mycustomAxios.get<IUser[]>("users/");
   
};


export const getUserByID = async (id:string ) => {

    return await mycustomAxios.get<IUser>(`users/${id}`);
    
};