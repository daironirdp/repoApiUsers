export interface IUser {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: IAddress
    company: Company
    phone:string
    website:string
}


export interface IGeo {
    lat: number;
    lng: number;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo,
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}