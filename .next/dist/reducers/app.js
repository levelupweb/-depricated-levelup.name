'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { builder: null, query: null, pageData: null };
  var action = arguments[1];

  switch (action.type) {
    case 'SET_QUERY':
      return (0, _extends3.default)({}, state, {
        query: action.payload
      });
    case 'SET_BUILDER':
      return (0, _extends3.default)({}, state, {
        builder: action.payload
      });
    case 'SET_DATA':
      return (0, _extends3.default)({}, state, {
        pageData: action.payload
      });
    default:
      return state;
  }
};