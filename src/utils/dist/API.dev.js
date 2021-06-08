"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = void 0;
var API = "http://127.0.0.1:8000/api/profile/8";
var HEADERS = {
  "Content-Type": "application/json;charset=utf-8"
};

var Auth = function Auth(url, userData) {
  var response, data;
  return regeneratorRuntime.async(function Auth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error("Error ".concat(url, ", status ").concat(response));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          localStorage.setItem("token", data.token);
          return _context.abrupt("return", data.user);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.Auth = Auth;