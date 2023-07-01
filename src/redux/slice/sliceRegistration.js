import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("profile")) || [],
  loginData: [],
};

export const registrationSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("profile", JSON.stringify(state.data));
    },
    getLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    logout: (state, action) => {
      state.data = [];
      state.loginData = [];
      localStorage.setItem("profile", JSON.stringify(state.data));
    },
  },
});

export const { reducer: registrationReducer, actions: registrationAction } =
  registrationSlice;
