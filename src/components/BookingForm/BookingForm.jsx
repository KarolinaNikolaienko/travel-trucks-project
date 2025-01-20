import { ErrorMessage, Form, Formik } from "formik";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import InputField from "../InputField/InputField";
import DatePicker from "react-datepicker";

const today = new Date();

const BookingForm = ({ submit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 letters")
      .max(50, "Maximum 50 letters")
      .required("Name is required"),
    email: Yup.string().required("Email is required"),
    date: Yup.date()
      .default(today)
      .min(
        today,
        `Date can not be earlier then today (${today.toLocaleDateString()})`
      )
      .required("Date is required"),
    id: Yup.string().required(),
  });

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: new Date(),
        id: nanoid(),
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <h3 className={css.formTitle}>Book your campervan now</h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.formFields}>
          <InputField
            placeholder={"Name*"}
            name={"name"}
            formikField={true}
          ></InputField>
          <ErrorMessage
            className={css.errorMsg}
            name="name"
            component="span"
          ></ErrorMessage>
          <InputField
            placeholder={"Email*"}
            name={"email"}
            type="email"
            formikField={true}
          ></InputField>
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          ></ErrorMessage>
          <InputField
            placeholder={"Booking date*"}
            name={"date"}
            type="date"
            formikField={true}
          ></InputField>
          <ErrorMessage
            className={css.errorMsg}
            name="date"
            component="span"
          ></ErrorMessage>
          <InputField
            placeholder={"Comment"}
            name={"comment"}
            type="text"
            component={"textarea"}
            formikField={true}
          ></InputField>
          <ErrorMessage
            className={css.errorMsg}
            name="comment"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={css.sendBtn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default BookingForm;
