import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({

  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  username: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  phone: Yup.string()
    .required('Required'),

  website: Yup.string()
    .required('Required')
    .matches(/^(?!www\.)([a-z\d]+(-[a-z\d]+)*\.)+[a-z]{2,}(:\d{1,5})?(\/[^\s]*)?$/i, 'The url is not valid'),
  zipcode: Yup.string()
    .required('Required'),

  city: Yup.string()
    .required('Required'),
  street: Yup.string()
    .required('Required'),
  suite: Yup.string()
    .required('Required'),
  lat: Yup.number()
    .min(-90)
    .max(90)
    .required()
    .required('Required'),
  lng: Yup.number()
    .min(-180)
    .max(180)
    .required('Required'),

  bs: Yup.string()
    .required('Required'),
  companyName: Yup.string()
    .required('Required'),
  catchPhrase: Yup.string()
    .required('Required')

});
