import logInSlice from "./login-slice";
// window.logOutTimer;

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
