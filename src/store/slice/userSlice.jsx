import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isAuth: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.isAuth = action.payload
    },
  },
});

export const { authUser } = userSlice.actions;
export default userSlice.reducer;
