"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = client;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function client(endpoint) {
  var _ref,
      body,
      customConfig,
      headers,
      config,
      data,
      response,
      _args = arguments;

  return regeneratorRuntime.async(function client$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, body = _ref.body, customConfig = _objectWithoutProperties(_ref, ["body"]);
          headers = {
            "Content-Type": "application/json"
          };
          config = _objectSpread({
            method: body ? "POST" : "GET"
          }, customConfig, {
            headers: _objectSpread({}, headers, {}, customConfig.headers)
          });

          if (body) {
            config.body = JSON.stringify(body);
          }

          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(window.fetch(endpoint, config));

        case 7:
          response = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(response.json());

        case 10:
          data = _context.sent;

          if (!response.ok) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", data);

        case 13:
          throw new Error(response.statusText);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
          return _context.abrupt("return", Promise.reject(_context.t0.message ? _context.t0.message : data));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 16]]);
}

client.get = function (endpoint) {
  var customConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return client(endpoint, _objectSpread({}, customConfig, {
    method: "GET"
  }));
};

client.post = function (endpoint, body) {
  var customConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return client(endpoint, _objectSpread({}, customConfig, {
    body: body
  }));
};