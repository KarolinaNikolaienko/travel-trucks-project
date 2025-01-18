import css from "./InputField.module.css";

const InputField = ({ placeholder, id, children, style }) => {
  return (
    <div className={css.inputField}>
      <input
        type="text"
        id={id}
        className={css.input}
        placeholder={placeholder}
        autoComplete="off"
        style={style}
      />
      {children}
    </div>
  );
};

export default InputField;
