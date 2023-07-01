import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  userData: JSON.parse(localStorage.getItem("user_data")) || [],
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("user_data", JSON.stringify(state.userData));
    },
  },
});

export const { reducer: userReducer, actions: userActions } = UserSlice;
