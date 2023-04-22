import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: {},
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    userLoginReducer: (state, { type, payload }) => {
      state.userLogin = payload;
    },
  },
});

export const { userLoginReducer } = UserReducer.actions;
export default UserReducer.reducer;
