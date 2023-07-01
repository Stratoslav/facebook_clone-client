import { configureStore } from "@reduxjs/toolkit";
import { registrationReducer } from "./slice/sliceRegistration";
import { userReducer } from "./slice/sliceUsers.js";
export const store = configureStore({
  reducer: {
    registrationReducer,
    userReducer,
  },
});
