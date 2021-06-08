import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../utils/constants";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(API);
  return await response.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    /*     setUsers: (state, action) => {
      state.users = action.payload; }*/
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUsers.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default usersSlice.reducer;
