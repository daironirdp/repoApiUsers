import { MyTextInput } from "../../../../../generalComponents/formInputs/FieldsComponents/MyTextInput"
export const UserCompany = () => {

    return (

        <>

            <MyTextInput
                label="Bs"
                name="bs"
                type="text"
                placeholder=""
                id=''
            />

            <MyTextInput
                label="Company name"
                name="companyName"
                type="text"
                placeholder="Doe"
                id=''
            />

            <MyTextInput
                label="Catch phrases"
                name="catchPhrase"
                type="text"
                placeholder="jane@formik.com"
                id=""
            />

        </>
    )

}