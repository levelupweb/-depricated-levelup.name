'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: false };
  var action = arguments[1];

  switch (action.type) {
    case 'SEARCH_SWITCH':
      return (0, _extends3.default)({}, state, {
        search: !state.search
      });
    default:
      return state;
  }
};