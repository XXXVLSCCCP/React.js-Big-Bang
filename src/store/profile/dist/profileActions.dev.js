"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setProfile = void 0;

var _profileTypes = require("./profileTypes");

var setProfile = function setProfile(payload) {
  return {
    type: _profileTypes.SET_PROFILE,
    payload: payload
  };
};

exports.setProfile = setProfile;