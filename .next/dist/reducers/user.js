'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    isLogged: false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return (0, _extends3.default)({}, state, {
                isLogged: true,
                profile: action.payload
            });

        case 'LOGIN_FAILURE':
            return (0, _extends3.default)({}, state, {
                isLogged: false,
                profile: null
            });

        case 'LOGOUT':
            return (0, _extends3.default)({}, state, {
                isLogged: false,
                profile: null,
                lol: '123'
            });

        default:
            return state;
    }
};