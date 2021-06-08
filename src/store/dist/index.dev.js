"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _profileSlice = _interopRequireDefault(require("./profile/profileSlice"));

var _usersSlice = _interopRequireDefault(require("./profile/usersSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middleware = (0, _toolkit.getDefaultMiddleware)({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
});
var store = (0, _toolkit.configureStore)({
  reducer: {
    profile: _profileSlice["default"],
    users: _usersSlice["default"]
  },
  middleware: middleware,
  devTools: true
});
exports.store = store;