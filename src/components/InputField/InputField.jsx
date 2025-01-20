import { Field } from "formik";
import css from "./InputField.module.css";

const InputField = ({
  placeholder,
  id,
  name,
  children,
  style,
  component,
  type = "text",
  formikField = false,
}) => {
  return (
    <div className={css.inputField}>
      {formikField ? (
        <Field
          type={type}
          component={component}
          id={id}
          name={name}
          className={css.input}
          placeholder={placeholder}
          style={style}
        ></Field>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={css.input}
          placeholder={placeholder}
          style={style}
        ></input>
      )}
      {children}
    </div>
  );
};

export default InputField;
