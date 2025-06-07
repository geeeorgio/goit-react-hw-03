import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short. Min 3 chars")
    .max(50, "Max 50 chars"),

  number: Yup.string()
    .required("Required")
    .min(3, "Too short. Min 3 chars")
    .max(50, "Max 50 chars"),
});

const ContactForm = ({ handleFormSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleFormSubmit(values);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field className={css.input} id="name" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />

          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Field className={css.input} id="number" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
