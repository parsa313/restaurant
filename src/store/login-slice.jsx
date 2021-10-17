import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  token: localStorage.getItem("token"),
  islogedin: localStorage.getItem("token") ? true : false,
};
let calculateRemainingTime = (exptime) => {
  return new Date(exptime).getTime() - new Date().getTime();
};
let logInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state, action) => {
      localStorage.setItem("token", action.payload.idToken);
      state.token = action.payload.idToken;

      setTimeout(() => {
        logInSlice.caseReducers.logOut();
      }, calculateRemainingTime(action.payload.exptime));

      state.islogedin = true;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.islogedin = false;
    },
  },
});

export default logInSlice;

export let logInActions = logInSlice.actions;
export let logInReducer = logInSlice.reducer;
