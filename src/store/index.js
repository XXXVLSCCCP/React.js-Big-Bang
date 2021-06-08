import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import profileReducer from "./profile/profileSlice";
import usersReducer from "./profile/usersSlice";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    users: usersReducer,
  },
  middleware: middleware,
  devTools: true,
});
