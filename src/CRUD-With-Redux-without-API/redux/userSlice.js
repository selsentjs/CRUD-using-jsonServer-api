import { createSlice } from "@reduxjs/toolkit";
import Data from "./../Data.js/Data";

const initialState = {
  userData: Data,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    updateUser: (state, action) => {
      state.userData = state.userData.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
          item.email = action.payload.email;
        }
        return item;
      });
    },
    removeUser: (state, action) => {
      state.userData = state.userData.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
