"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchUsers = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _constants = require("../../utils/constants");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchUsers = (0, _toolkit.createAsyncThunk)("users/fetchUsers", function _callee() {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(_constants.API));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchUsers = fetchUsers;
var usersSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: {
    users: []
  },
  reducers: {
    /*     setUsers: (state, action) => {
      state.users = action.payload; }*/
  },
  extraReducers: _defineProperty({}, fetchUsers.fulfilled, function (state, action) {
    return action.payload;
  })
});
var _default = usersSlice.reducer;
exports["default"] = _default;