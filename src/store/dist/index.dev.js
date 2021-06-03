"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _profileSlice = _interopRequireDefault(require("./profile/profileSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "./profile/profileReducer";
import usersReducer from "./users/usersReducer"; */

/* const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
 */
var store = (0, _toolkit.configureStore)({
  reducer: {
    name: _profileSlice["default"]
  }
});
exports.store = store;