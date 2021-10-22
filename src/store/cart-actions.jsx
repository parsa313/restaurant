import logInSlice from "./login-slice";
import { useDispatch } from "react-redux";
// window.logOutTimer;
export let RetrieveStoredToken = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  let exptime = localStorage.getItem("exptime");
  if (token && exptime) {
    let remainingTime = calculateRemainingTime(exptime);
    if (remainingTime > 6000) {
      window.logOutTimer = setTimeout(() => {
        dispatch(logout());
    }, remainingTime);

      return { token, islogedin: true };
    } else {
      return { token: null, islogedin: false };
    }
  } else {
    return { token: null, islogedin: false };
  }
};

let calculateRemainingTime = (exptime) => {
  return new Date(exptime).getTime() - new Date().getTime();
};
export function login(data) {
  return (dispatch, getState) => {
    localStorage.setItem("token", data.idToken);
    localStorage.setItem("exptime", data.exptime);
    dispatch(logInSlice.actions.setToken(data.idToken));
    dispatch(logInSlice.actions.setIsLogedIn(true));
    window.logOutTimer = setTimeout(() => {
      dispatch(logout());
    }, calculateRemainingTime(data.exptime));
  };
}

export function logout() {
  return (dispatch, getState) => {
    localStorage.removeItem("token");
    localStorage.removeItem("exptime");
    dispatch(logInSlice.actions.setToken(null));
    dispatch(logInSlice.actions.setIsLogedIn(false));
    if (window.logOutTimer) {
      clearTimeout(window.logOutTimer);
    }
  };
}
