"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectProfile = exports.logout = exports.login = exports.profileSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var profileSlice = (0, _toolkit.createSlice)({
  name: "profile",
  initialState: {
    profile: null
  },
  reducers: {
    login: function login(state, action) {
      state.profile = action.payload;
    },
    logout: function logout(state) {
      state.profile = null;
    }
  }
});
exports.profileSlice = profileSlice;
var _profileSlice$actions = profileSlice.actions,
    login = _profileSlice$actions.login,
    logout = _profileSlice$actions.logout;
exports.logout = logout;
exports.login = login;

var selectProfile = function selectProfile(state) {
  return state.profile.profile;
};

exports.selectProfile = selectProfile;
var _default = profileSlice.reducer;
exports["default"] = _default;