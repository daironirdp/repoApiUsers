


export interface formValue {
  id: number;
  phone: string;
  bs: string;
  companyName: string;
  catchPhrase: string;
  name: string;
  email: string;
  username: string;
  website: string;
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  lat: number;
  lng: number;
}

export const initialValues: formValue = {
  id: 1,
  phone: "",


  bs: "",
  companyName: "",
  catchPhrase: "",

  name: "",
  email: "",
  username: "",
  website: "",
  city: "",
  street: "",
  suite: "",
  zipcode: "",
  lat: 0,
  lng: 0,


};