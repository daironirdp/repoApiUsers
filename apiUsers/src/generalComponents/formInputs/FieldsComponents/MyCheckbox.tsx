import { useField } from 'formik';
type MyCheckboxProps = {

  children: string,
  name: string
}

export const MyCheckbox = (value: MyCheckboxProps) => {

  const [field, meta] = useField({ name: value.name, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field}  />
        {value.children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};