"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeName = void 0;

var _profileTypes = require("./profileTypes");

var changeName = function changeName(newName) {
  return {
    type: _profileTypes.CHANGE_NAME,
    name: newName
  };
};

exports.changeName = changeName;