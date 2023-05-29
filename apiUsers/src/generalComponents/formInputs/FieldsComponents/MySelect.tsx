import {  useField } from 'formik';
import { FC } from 'react';

// intersecting
interface ICustomFieldProps  {
    label: string;
    name: string;
    id:string
    children: JSX.Element[]
  }


export const MySelect : FC<ICustomFieldProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };