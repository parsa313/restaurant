import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import { logInReducer } from "./login-slice";

export default configureStore({
  reducer: { login: logInReducer, cart: cartSlice.reducer },
});
