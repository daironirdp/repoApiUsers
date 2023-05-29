import {  useField } from 'formik';


type MyTextInputProps = {

  label:string
  name:string
  type:string
  placeholder:string
  id:string
}

export const MyTextInput = (value: MyTextInputProps) => {
  
    const [field, meta] = useField(value.name);
    return (
      <>
      
        <label className="form-label" htmlFor={value.id || value.name}>{value.label}</label>
        <input className="text-input form-control" {...field} {...value} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      
      </>
    );
  };