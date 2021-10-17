import { configureStore } from "@reduxjs/toolkit";
import { logInReducer } from "./login-slice";

export default configureStore({ reducer: { login: logInReducer } });
