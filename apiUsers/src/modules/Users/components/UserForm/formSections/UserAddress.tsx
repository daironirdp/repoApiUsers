import { MyTextInput } from "../../../../../generalComponents/formInputs/FieldsComponents/MyTextInput"


export const UserAddress = () => {

    return (
        <>

            <MyTextInput
                label="City"
                name="city"
                type="text"
                placeholder="Madrid"
                id=''
            />

            <MyTextInput
                label="Street"
                name="street"
                type="text"
                placeholder="Mantua"
                id=''
            />

            <MyTextInput
                label="Suite"
                name="suite"
                type="text"
                placeholder=""
                id=""
            />
            <MyTextInput
                label="Zip Code"
                name="zipcode"
                type="text"
                placeholder=""
                id=""
            />

            <MyTextInput
                label="Latitude"
                name="lat"
                type="number"
                placeholder=""
                id=""
            />

            <MyTextInput
                label="Longitude"
                name="lng"
                type="number"
                placeholder=""
                id=""
            />
        </>
    )

}