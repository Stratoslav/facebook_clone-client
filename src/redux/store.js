import { configureStore } from "@reduxjs/toolkit";
import { registrationReducer } from "./slice/sliceRegistration";
import { userReducer } from "./slice/sliceUsers.js";
import { profileReducer } from "./slice/sliceProfile.js";
import { postsReducer } from "./slice/slicePosts";
export const store = configureStore({
  reducer: {
    registrationReducer,
    userReducer,
    profileReducer,
    postsReducer,
  },
});
