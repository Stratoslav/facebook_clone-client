import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: [],
  userData: JSON.parse(localStorage.getItem("user_data")) || [],
  isUpdateMode: false,
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    getUsers: (state, action) => {
      state.user = action.payload;
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("user_data", JSON.stringify(state.userData));
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("user_data", JSON.stringify(state.userData));
    },
    updateUserData: (state, action) => {
      state.userData = action.payload;
      console.log(action.payload);
      localStorage.setItem("user_data", JSON.stringify(state.userData));
    },
    setUpdateMode: (state, action) => {
      state.isUpdateMode = action.payload;

      // state.iUpdateMode = action.payload;
    },
    updateAvatar: (state, action) => {
      state.userData.image = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = UserSlice;
