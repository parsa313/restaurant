import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState, useRef, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Route, useHistory, useRouteMatch } from "react-router";
import FormContainer from "../ui/FormContainer/FormContainer";
import NewPasswordForm from "../NewPasswordForm/NewPasswordForm";
import { logInActions } from "./../../store/login-slice";
import styles from "./login.module.css";
import NewPassword from "../../pages/newpassword/NewPassword";
let initialValues = { email: "", password: "" };

function Login() {
  const [logein, setLogein] = useState(true);
  const history = useHistory();
  let dispatch = useDispatch();
  let match = useRouteMatch();

  let onSubmit = (values) => {
    let url;
    let email = values.email;
    let password = values.password;
    if (!logein) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBp5kJ3A3m0PKFX3oja3gYfq8U-hyKYW0A";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBp5kJ3A3m0PKFX3oja3gYfq8U-hyKYW0A";
    }
    axios
      .post(
        url,
        { email, password, returnSecureToken: true },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.status == 200) {
          return res;
        } else {
          let errorMessage = "Authenthication failed";
          if (res.data.error.message) {
            errorMessage = res.data.error.message;
          }
          throw new Error(errorMessage);
        }
      })
      .then((res) => {
        dispatch(
          logInActions.logIn({
            idToken: res.data.idToken,
            exptime: new Date(
              new Date().getTime() + +res.data.expiresIn * 1000
            ).toISOString(),
          })
        );
        history.replace("/home");
      })
      .catch((error) => {

        alert(error.message)
      })
    
  };

  function validate(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.trim().length < 6) {
      errors.password = "password should be at least 6 character";
    }

    return errors;
  }

  return (
    <Fragment>
      <Route path={`${match.url}/newpassword`}>
        <NewPassword />
      </Route>
      <Route path={`${match.url}`} exact>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          <FormContainer>
            <Form>
              <div className={`${styles.title} text-center`}>
                {logein ? "welcome back" : "welcome"}
              </div>
              <div class="mb-3">
                <label htmlFor="email" className="form-label">
                  email
                </label>

                <Field name="email">
                  {({ field, form, meta }) => (
                    <input
                      {...field}
                      id="email"
                      placeholder="name@gmail.com"
                      className={`${
                        meta.touched && meta.error && styles.inputerror
                      } form-control`}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <div className={styles.texterror}>{msg}</div>
                  )}
                />
              </div>
              <div class="mb-3">
                <label htmlFor="password" className="form-label">
                  password
                </label>
                <Field name="password">
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
                  name="password"
                  render={(msg) => (
                    <div className={styles.texterror}>{msg}</div>
                  )}
                />
              </div>
              {logein && (
                <div
                  className={`mb-2 ${styles.forget}`}
                  onClick={() => history.push(`${match.url}/newpassword`)}
                >
                  Forgot Your Password?
                </div>
              )}

              <div className="text-center">
                {" "}
                <button type="submit" className={styles.button}>
                  {logein ? "Log in" : "Sign up"}
                </button>
              </div>
              <div className={`${styles.bottom} text-center`}>
                {!logein ? (
                  <>
                    already have an account?'{" "}
                    <a href="#" onClick={() => setLogein((prev) => !prev)}>
                      log in
                    </a>
                  </>
                ) : (
                  <>
                    new user?{" "}
                    <a href="#" onClick={() => setLogein((prev) => !prev)}>
                      sign up
                    </a>
                  </>
                )}
              </div>
            </Form>
          </FormContainer>
        </Formik>
      </Route>
    </Fragment>
  );
}
export default Login;
