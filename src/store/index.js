import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "./profile/profileSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
});

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});
