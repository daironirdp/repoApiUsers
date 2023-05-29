import { formValue } from "../components/UserForm/InitialValues/userInitialValues";
import { IUser } from "../models/User";

export const transformToFormData = (data: IUser): formValue => {

  const newData: formValue = {
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
    id: data.id,
    city: data.address.city,
    street: data.address.street,
    zipcode: data.address.zipcode,
    suite: data.address.suite,
    lat: data.address.geo.lat,
    lng: data.address.geo.lng,
    companyName: data.company.name,
    bs: data.company.bs,
    catchPhrase: data.company.catchPhrase

  }
  return newData;

}


export const transformToIUser = (data: formValue, newId: number): IUser  => {

  const newData: IUser = {
    name: data.name,
    id: newId,
    phone: data.phone,
    email: data.email,
    username: data.username,
    website: data.website,
    company: {
      bs: data.bs,
      catchPhrase: data.catchPhrase,
      name: data.companyName
    },
    address: {
      city: data.city,
      street: data.street,
      zipcode: data.zipcode,
      suite: data.suite,
      geo: {
        lat: data.lat,
        lng: data.lng
      },
    }
  }
  return newData;

}