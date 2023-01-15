import { createSlice } from "@reduxjs/toolkit";
import Data from "./../Data.js/Data";

const initialState = {
  userData: Data,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
