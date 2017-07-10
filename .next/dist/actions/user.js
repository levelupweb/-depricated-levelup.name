'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.authenticateUser = authenticateUser;
exports.signIn = signIn;
exports.signUp = signUp;
exports.setUser = setUser;
exports.getLogout = getLogout;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.removeUser = removeUser;
exports.createUser = createUser;
exports.getUserStats = getUserStats;
exports.setFace = setFace;
exports.setUserFaces = setUserFaces;
exports.findUser = findUser;
exports.getUserSubscriptions = getUserSubscriptions;
exports.addSocial = addSocial;
exports.removeUserSocial = removeUserSocial;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _axiosAuth = require('../utils/axiosAuth.js');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _app = require('./app.js');

var _user = require('../models/user.js');

var MODEL = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// actions
function authenticateUser(token) {
	return function (dispatch) {
		if (token) {
			return MODEL.authenticateUser(token).then(function (res) {
				dispatch(setUser(res.data));
				return res.data;
			});
		} else {
			dispatch({ type: 'LOGIN_FAILURE' });
			return false;
		}
	};
}

// models
function signIn(user) {
	return function (dispatch) {
		return MODEL.signIn(user).then(function (res) {
			if (res.data.success) {
				dispatch(setUser(res.data.user));
			}
			return res;
		}).then(function (res) {
			if (res.data.token && res.data.success) {
				_jsCookie2.default.set('x-access-token', res.data.token, { expires: 7, path: '' });
				dispatch((0, _app.handleSuccess)('Привет, ' + res.data.user.userName, true));
				return {
					success: true,
					message: res.data.message,
					user: res.data.user
				};
			} else {
				return {
					success: false,
					message: res.data.message
				};
			}
		});
	};
}

function signUp(user) {
	return function (dispatch) {
		return MODEL.signUp(user).then(function (res) {
			if (res.data.success) {
				return {
					success: true,
					message: res.data.message
				};
			} else {
				return {
					success: false,
					message: res.data.message,
					errors: res.data.errors
				};
			}
		});
	};
}

function setUser(user) {
	if (user) {
		return {
			type: 'LOGIN_SUCCESS',
			payload: user
		};
	} else {
		return {
			type: 'LOGIN_FAILURE'
		};
	}
}

function getLogout() {
	return function (dispatch) {
		dispatch({
			type: 'LOGOUT'
		});
	};
}

function getUsers() {
	return MODEL.getUsers();
}

function getUser(id) {
	return MODEL.getUser(id);
}

function updateUser(id, user) {
	return MODEL.updateUser(id, user);
}

function removeUser(token, id) {
	return MODEL.removeUser(token, id);
}

function createUser(token, user) {
	return MODEL.createUser(token, user);
}

function getUserStats(id) {
	return MODEL.getUserStats(id);
}

// Faces Reducer
function setFaces(faces) {
	return function (dispatch) {
		dispatch({ type: 'SET_FACES', payload: faces });
	};
}

function setFace(face) {
	return function (dispatch) {
		return _promise2.default.all([dispatch({ type: 'SET_FACE', payload: face }), dispatch({ type: 'SET_POST_FIELD', payload: { field: 'postAuthor', value: {
					authorID: face._id,
					authorType: face.type
				} } })]);
	};
}

// DEPRICATED
function setUserFaces(user) {
	return function (dispatch) {
		return MODEL.getFaces(user._id).then(function (res) {
			dispatch(setFaces(res.data.concat(user)));
		});
	};
}

function findUser(query) {
	return MODEL.findUser(query);
}

// DEPRICATED
function getUserSubscriptions(id) {
	return MODEL.getUserSubscriptions(id);
}

// DEPRICATED
function addSocial(token, id, social) {
	return MODEL.addSocial(token, id, social);
}

// DEPRICATED
function removeUserSocial(token, userid, data) {
	return (0, _axios2.default)({
		url: _appConfig2.default.API + 'user/entries/' + userid + '/removesocial/',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
	});
}