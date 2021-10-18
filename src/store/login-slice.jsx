import { createSlice } from "@reduxjs/toolkit";
let logOutTimer;

let calculateRemainingTime = (exptime) => {
  return new Date(exptime).getTime() - new Date().getTime();
};
let retrieveStoredToken = () => {
  let token = localStorage.getItem("token");
  let exptime = localStorage.getItem("exptime");
  if (token && exptime) {
    let remainingTime = calculateRemainingTime(exptime);
    if (remainingTime > 6000) {
      //if we have a little time left
      logOutTimer = setTimeout(() => {
        logInSlice.caseReducers.logOut();
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
    logIn: (state, action) => {
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("exptime", action.payload.exptime);
      state.token = action.payload.idToken;
      state.islogedin = true;

      logOutTimer = setTimeout(() => {
        logInSlice.caseReducers.logOut();
      }, calculateRemainingTime(action.payload.exptime));
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("exptime");
      state.token = null;
      state.islogedin = false;
      if (logOutTimer) {
        clearTimeout(logOutTimer);
      }
    },
  },
});

export default logInSlice;

export let logInActions = logInSlice.actions;
export let logInReducer = logInSlice.reducer;
