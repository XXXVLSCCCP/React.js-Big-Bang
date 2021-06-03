import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
  },
  reducers: {
    login: (state, action) => {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.profile = null;
    },
  },
});

export const { login, logout } = profileSlice.actions;

export const selectProfile = (state) => state.profile.profile;

export default profileSlice.reducer;
