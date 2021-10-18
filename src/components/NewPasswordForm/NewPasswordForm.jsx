import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import FormContainer from "../ui/FormContainer/FormContainer";
import styles from "./newpassword.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
let initialValues = { newpassword: "" };

let validate = (values) => {
  let errors = {};
  if (!values.newpassword) {
    errors.newpassword = "Required";
  } else if (values.newpassword.trim().length < 6) {
    errors.newpassword = "password should be at least 6 character";
  }

  return errors;
};
function NewPasswordForm() {
  const idToken = useSelector((state) => state.login.token);
  let onSubmit = (values) => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBp5kJ3A3m0PKFX3oja3gYfq8U-hyKYW0A";
    let newPassword = values.newpassword;
    axios.post(
      url,
      { idToken, password: newPassword, returnSecureToken: false },
      { headers: { "Content-Type": "application/json" } }
    );
  };
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div class="mb-3">
            <div className="text-center mb-2">Enter Your New Password</div>
            <Field name="newpassword">
              {({ field, form, meta }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  placeholder="6+ Character"
                  className={`${
                    meta.touched && meta.error && styles.inputerror
                  } form-control`}
                />
              )}
            </Field>
            <ErrorMessage
              name="newpassword"
              render={(msg) => <div className={styles.texterror}>{msg}</div>}
            />
          </div>
          <button type="submit" className={styles.button}>
            Change
          </button>
        </Form>
      </Formik>
    </FormContainer>
  );
}

export default NewPasswordForm;
