'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { accessable: true, builder: null, query: null, pageData: null, pageSettings: null };
    var action = arguments[1];

    switch (action.type) {
        case 'SET_PAGE_QUERY':
            return (0, _extends3.default)({}, state, {
                query: action.payload
            });
        case 'SET_PAGE_BUILDER':
            return (0, _extends3.default)({}, state, {
                builder: action.payload
            });
        case 'SET_PAGE_DATA':
            return (0, _extends3.default)({}, state, {
                pageData: action.payload
            });
        case 'SET_PAGE_SETTINGS':
            return (0, _extends3.default)({}, state, {
                pageSettings: action.payload
            });
        case 'SET_APP_ACCESSABILITY':
            return (0, _extends3.default)({}, state, {
                accessable: action.payload
            });
        default:
            return state;
    }
};