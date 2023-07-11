import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditMode: false,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: initialState,
  reducers: {
    setEditMode: (state, action) => {
      state.isEditMode = action.payload;
    },
  },
});

export const { reducer: profileReducer, actions: profileActions } =
  profileSlice;
