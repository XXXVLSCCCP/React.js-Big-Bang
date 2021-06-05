"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _profileSlice = _interopRequireDefault(require("./profile/profileSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _toolkit.combineReducers)({
  profile: _profileSlice["default"]
});
var store = (0, _toolkit.configureStore)({
  reducer: {
    root: rootReducer
  }
});
exports.store = store;