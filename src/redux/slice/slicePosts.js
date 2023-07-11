import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPosts: [],
  isUpdateMode: false,
};

const postsSlice = createSlice({
  name: "posts/slice",
  initialState: initialState,
  reducers: {
    getUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
    isUpdatePost: (state, action) => {
      console.log("gdfg");
      state.isUpdateMode = action.payload;
    },
    updatePost: (state, action) => {
      const { id, data } = action.payload;
      const postToUpdate = state.userPosts.find((post) => post.id === id);
      if (postToUpdate) {
        Object.assign(postToUpdate, data);
      }
    },
    deletePost: (state, action) => {
      state.userPosts = state.userPosts.filter(
        (post) => post.id !== action.payload.id
      );
    },
    createNewPost: (state, action) => {
      // console.log(action.payload);
      // state.userPosts = state.userPosts.filter(
      //   (post) => post.user_id === action.payload.id
      // );
      // state.userPosts.push(newPost);
    },
  },
});

export const { reducer: postsReducer, actions: postsActions } = postsSlice;
