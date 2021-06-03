"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.setUsers = void 0;

var _usersTypes = require("./usersTypes");

var _constants = require("../../utils/constants");

var setUsers = function setUsers(payload) {
  return {
    type: _usersTypes.SET_USERS,
    payload: payload
  };
};

exports.setUsers = setUsers;

var getUsers = function getUsers() {
  return function _callee(dispatch) {
    var res, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(_constants.API));

          case 3:
            res = _context.sent;

            if (res.ok) {
              _context.next = 6;
              break;
            }

            throw new Error("Проверьте URL");

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap(res.json());

          case 8:
            response = _context.sent;
            dispatch(setUsers(response));
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            alert("\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441 \u0432\u0430\u0448\u0438\u043C fetch \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u043C: ".concat(_context.t0.message));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.getUsers = getUsers;