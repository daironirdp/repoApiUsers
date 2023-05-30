import { MyTextInput } from "../../../../../generalComponents/formInputs/FieldsComponents/MyTextInput"


export const PersonalData = () => {

    return (

        <>

            <MyTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Jane"
                id=''
            />

            <MyTextInput
                label="Username"
                name="username"
                type="text"
                placeholder="Doe"
                id=''
            />

            <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
                id=""
            />
            <MyTextInput
                label="Phone"
                name="phone"
                type="text"
                placeholder="14324-324-123"
                id=""
            />
            <MyTextInput
                label="Website"
                name="website"
                type="text"
                placeholder="World.com"
                id=""
            />
        </>
   )

}