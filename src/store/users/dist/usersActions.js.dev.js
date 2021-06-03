"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGists = exports.setUsers = void 0;

var _usersTypes = require("./usersTypes");

var setUsers = function setUsers(payload) {
  return {
    type: _usersTypes.SET_USERS,
    payload: payload
  };
};

exports.setUsers = setUsers;

var getGists = function getGists() {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(API).then(function (response) {
              return response.json();
            }).then(function (receivedUsers) {
              return dispatch(setUsers(receivedUsers));
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getGists = getGists;