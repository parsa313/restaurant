import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import styles from "./login.module.css";
let initialValues = { email: "", password: "" };

function Login() {
  let history = useHistory();
  let onSubmit = (values) => {
    let errors = {};
    errors.email = "some thing";
    history.push("/home");
    return errors;
  };

  return (
    <div className="d-flex justify-content-center">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles["form-container"]}>
          <div className={`${styles.title} text-center`}>welcome</div>
          <div class="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <Field
              name="email"
              id="email"
              className="form-control"
              placeholder="name@gmail.com"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <Field
              name="password"
              id="password"
              className="form-control"
              placeholder="6+ Character"
            />
          </div>

          <div className="text-center">
            {" "}
            <button type="submit" className={styles.button}>
              sign up
            </button>
          </div>

          <div className={`${styles.bottom} text-center`}>
            already have an account? <a href="#">log in</a>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
export default Login;
