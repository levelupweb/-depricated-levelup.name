'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setUser = setUser;
exports.getLogout = getLogout;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setUser(token) {
	return function (dispatch) {
		(0, _axios2.default)({
			url: _appConfig2.default.API + 'user/auth',
			method: 'GET',
			headers: {
				'authorization': token
			}
		}).then(function (res) {
			if (token == 0) {
				dispatch({ type: 'LOGIN_FAILURE' });
			} else {
				if (res.data) {
					dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
				} else {
					dispatch({ type: 'LOGIN_FAILURE' });
				}
			}
		});
	};
}

function getLogout() {
	return function (dispatch) {
		dispatch({ type: 'LOGOUT' });
	};
}