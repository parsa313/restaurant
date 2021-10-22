import { createSlice } from "@reduxjs/toolkit";
import store from "./store";
import { logout } from "./login-actions";
let calculateRemainingTime = (exptime) => {
  return new Date(exptime).getTime() - new Date().getTime();
};
let retrieveStoredToken = () => {
  let token = localStorage.getItem("token");
  let exptime = localStorage.getItem("exptime");
  if (token && exptime) {
    let remainingTime = calculateRemainingTime(exptime);
    if (remainingTime > 6000) {
      window.logOutTimer = setTimeout(() => {
        
        store.dispatch(logout());

        if (window.logOutTimer) {
          clearTimeout(window.logOutTimer);
        }
      }, remainingTime);

      return { token, islogedin: true };
    } else {
      return { token: null, islogedin: false };
    }
  } else {
    return { token: null, islogedin: false };
  }
};

let initialState = {
  token: retrieveStoredToken().token,
  islogedin: retrieveStoredToken().islogedin,
};
let logInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLogedIn: (state, action) => {
      state.islogedin = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default logInSlice;

export let logInActions = logInSlice.actions;
export let logInReducer = logInSlice.reducer;
