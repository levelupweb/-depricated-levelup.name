'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeUserById = exports.updateUserById = exports.getUserById = undefined;
exports.setUser = setUser;
exports.getLogout = getLogout;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var getUserById = exports.getUserById = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/id/' + id);

					case 2:
						return _context.abrupt('return', _context.sent);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function getUserById(_x) {
		return _ref.apply(this, arguments);
	};
}();

var updateUserById = exports.updateUserById = function () {
	var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id, data) {
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return _axios2.default.post(_appConfig2.default.API + 'user/entries/' + id + '/update', data);

					case 2:
						return _context2.abrupt('return', _context2.sent);

					case 3:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function updateUserById(_x2, _x3) {
		return _ref2.apply(this, arguments);
	};
}();

var removeUserById = exports.removeUserById = function () {
	var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id) {
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + id + '/remove');

					case 2:
						return _context3.abrupt('return', _context3.sent);

					case 3:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	}));

	return function removeUserById(_x4) {
		return _ref3.apply(this, arguments);
	};
}();