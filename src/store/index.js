/* import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "./profile/profileReducer";
import usersReducer from "./users/usersReducer"; */
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile/profileSlice";

/* const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
 */

export const store = configureStore({
  reducer: {
    name: profileReducer,
  },
});
