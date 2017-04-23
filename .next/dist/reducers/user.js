'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  auth: false,
  user: null,
  error: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return (0, _extends3.default)({}, state, {
        auth: true,
        user: action.payload,
        error: null
      });

    case 'LOGIN_FAILURE':
      return (0, _extends3.default)({}, state, {
        auth: false,
        user: null,
        error: action.payload
      });
    default:
      return state;
  }
};