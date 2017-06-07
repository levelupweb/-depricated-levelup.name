'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeUserSocial = exports.getUserPostsCount = exports.getUserLikesCount = exports.addSocialToUser = exports.getUserSubscriptions = exports.registerUser = exports.getUserField = exports.removeUserById = exports.updateUserById = exports.getUserById = exports.getAllUsers = undefined;
exports.getUserByToken = getUserByToken;
exports.setUser = setUser;
exports.getLogout = getLogout;
exports.subscribeToUser = subscribeToUser;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Old Version
/* export function setUser(token) {
    return (dispatch) => {
        axios({
	      url: config.API + 'user/auth',
	      method: 'GET',
	      headers: {
	        'authorization': token
	      }
	    }).then((res) => {
	    	if(token == 0) { 
	    		dispatch({type: 'LOGIN_FAILURE'})
	    	} else {
	    		if (res.data) {
	    			dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
	    		} else {
	    			dispatch({type: 'LOGIN_FAILURE'})
	    		}
	    	}
	    }) 
	}
} */

function getUserByToken(token) {
	return function (dispatch) {
		if (token) {
			(0, _axios2.default)({
				url: _appConfig2.default.API + 'user/auth',
				method: 'GET',
				headers: {
					'authorization': token
				}
			}).then(function (res) {

				dispatch(setUser(res.data));
				return res.data;
			});
		} else {
			dispatch({ type: 'LOGIN_FAILURE' });
			return false;
		}
	};
}

function setUser(user) {
	return function (dispatch) {
		if (user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: user });
		} else {
			dispatch({ type: 'LOGIN_FAILURE' });
		}
	};
}

function getLogout() {
	return function (dispatch) {
		dispatch({ type: 'LOGOUT' });
	};
}

var getAllUsers = exports.getAllUsers = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries');

					case 2:
						return _context.abrupt('return', _context.sent);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function getAllUsers() {
		return _ref.apply(this, arguments);
	};
}();

var getUserById = exports.getUserById = function () {
	var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/id/' + id);

					case 2:
						return _context2.abrupt('return', _context2.sent);

					case 3:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function getUserById(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var updateUserById = exports.updateUserById = function () {
	var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id, data) {
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return _axios2.default.post(_appConfig2.default.API + 'user/entries/' + id + '/update', data);

					case 2:
						return _context3.abrupt('return', _context3.sent);

					case 3:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	}));

	return function updateUserById(_x2, _x3) {
		return _ref3.apply(this, arguments);
	};
}();

var removeUserById = exports.removeUserById = function () {
	var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id) {
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + id + '/remove');

					case 2:
						return _context4.abrupt('return', _context4.sent);

					case 3:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this);
	}));

	return function removeUserById(_x4) {
		return _ref4.apply(this, arguments);
	};
}();

function subscribeToUser(token, id) {
	return (0, _axios2.default)({
		url: _appConfig2.default.API + 'user/' + id + '/subscribe/author',
		method: 'GET',
		headers: {
			'authorization': token
		}
	});
}

var getUserField = exports.getUserField = function () {
	var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(id, field) {
		return _regenerator2.default.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + id + '/field/' + field);

					case 2:
						return _context5.abrupt('return', _context5.sent);

					case 3:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, this);
	}));

	return function getUserField(_x5, _x6) {
		return _ref5.apply(this, arguments);
	};
}();

var registerUser = exports.registerUser = function () {
	var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(data) {
		return _regenerator2.default.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						return _context6.abrupt('return', (0, _axios2.default)({
							url: _appConfig2.default.API + 'user/add',
							method: 'POST',
							data: data
						}));

					case 1:
					case 'end':
						return _context6.stop();
				}
			}
		}, _callee6, this);
	}));

	return function registerUser(_x7) {
		return _ref6.apply(this, arguments);
	};
}();

var getUserSubscriptions = exports.getUserSubscriptions = function () {
	var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(userID) {
		return _regenerator2.default.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						_context7.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + userID + '/getsubscriptions');

					case 2:
						return _context7.abrupt('return', _context7.sent);

					case 3:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, this);
	}));

	return function getUserSubscriptions(_x8) {
		return _ref7.apply(this, arguments);
	};
}();

var addSocialToUser = exports.addSocialToUser = function () {
	var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(token, id, data) {
		return _regenerator2.default.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						return _context8.abrupt('return', (0, _axios2.default)({
							url: _appConfig2.default.API + 'user/entries/' + id + '/addsocial',
							method: 'POST',
							data: data,
							headers: {
								'authorization': token
							}
						}));

					case 1:
					case 'end':
						return _context8.stop();
				}
			}
		}, _callee8, this);
	}));

	return function addSocialToUser(_x9, _x10, _x11) {
		return _ref8.apply(this, arguments);
	};
}();

var getUserLikesCount = exports.getUserLikesCount = function () {
	var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(userID) {
		return _regenerator2.default.wrap(function _callee9$(_context9) {
			while (1) {
				switch (_context9.prev = _context9.next) {
					case 0:
						_context9.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + userID + '/getlikecount');

					case 2:
						return _context9.abrupt('return', _context9.sent);

					case 3:
					case 'end':
						return _context9.stop();
				}
			}
		}, _callee9, this);
	}));

	return function getUserLikesCount(_x12) {
		return _ref9.apply(this, arguments);
	};
}();

var getUserPostsCount = exports.getUserPostsCount = function () {
	var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(userID) {
		return _regenerator2.default.wrap(function _callee10$(_context10) {
			while (1) {
				switch (_context10.prev = _context10.next) {
					case 0:
						_context10.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + userID + '/getpostscount');

					case 2:
						return _context10.abrupt('return', _context10.sent);

					case 3:
					case 'end':
						return _context10.stop();
				}
			}
		}, _callee10, this);
	}));

	return function getUserPostsCount(_x13) {
		return _ref10.apply(this, arguments);
	};
}();

var removeUserSocial = exports.removeUserSocial = function () {
	var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(token, userid, data) {
		return _regenerator2.default.wrap(function _callee11$(_context11) {
			while (1) {
				switch (_context11.prev = _context11.next) {
					case 0:
						return _context11.abrupt('return', (0, _axios2.default)({
							url: _appConfig2.default.API + 'user/entries/' + userid + '/removesocial/',
							method: 'POST',
							data: data,
							headers: {
								'authorization': token
							}
						}));

					case 1:
					case 'end':
						return _context11.stop();
				}
			}
		}, _callee11, this);
	}));

	return function removeUserSocial(_x14, _x15, _x16) {
		return _ref11.apply(this, arguments);
	};
}();