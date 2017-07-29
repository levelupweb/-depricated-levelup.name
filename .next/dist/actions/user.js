'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.authenticateUser = authenticateUser;
exports.signIn = signIn;
exports.signUp = signUp;
exports.authenticateUserSuccess = authenticateUserSuccess;
exports.getLogout = getLogout;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.getUserByToken = getUserByToken;
exports.getUserPosts = getUserPosts;
exports.getUserSubscriptions = getUserSubscriptions;
exports.getUserCampaigns = getUserCampaigns;
exports.updateUser = updateUser;
exports.removeUser = removeUser;
exports.createUser = createUser;
exports.getUserStats = getUserStats;
exports.setFace = setFace;
exports.setUserFaces = setUserFaces;
exports.findUser = findUser;
exports.getSubscriptions = getSubscriptions;
exports.addSocial = addSocial;
exports.removeSocial = removeSocial;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
			return MODEL.authenticateUser(token).then(function (response) {
				dispatch(authenticateUserSuccess(response.data.user));
				return response.data.user;
			});
		} else {
			dispatch({ type: 'LOGIN_FAILURE' });
			return _promise2.default.resolve(false);
		}
	};
}

// models
function signIn(user) {
	return function (dispatch) {
		return MODEL.signIn(user).then(function (response) {
			if (response.data.success) {
				dispatch(authenticateUserSuccess(response.data.user));
			}
			return response;
		}).then(function (response) {
			if (response.data.token && response.data.success) {
				_jsCookie2.default.set('x-access-token', response.data.token, { expires: 7, path: '' });
				dispatch((0, _app.handleSuccess)('Привет, ' + response.data.user.fullName, true));
				return {
					success: true,
					message: response.data.message,
					user: response.data.user
				};
			} else {
				return {
					success: false,
					message: response.data.message
				};
			}
		});
	};
}

function signUp(user) {
	return function (dispatch) {
		return MODEL.signUp(user).then(function (response) {
			if (response.data.success) {
				return {
					success: true,
					message: response.data.message
				};
			} else {
				return {
					success: false,
					message: response.data.message,
					errors: response.data.errors
				};
			}
		});
	};
}

function authenticateUserSuccess(user) {
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

function getUserByToken(token) {
	return MODEL.getUserByToken(token);
}

function getUserPosts(id, limit, skip) {
	return MODEL.getUserPosts(id, limit, skip);
}

function getUserSubscriptions(id, limit, skip) {
	return MODEL.getUserSubscriptions(id, limit, skip);
}

function getUserCampaigns(id, limit, skip) {
	return MODEL.getUserCampaigns(id, limit, skip);
}

function updateUser(token, id, user) {
	return MODEL.updateUser(token, id, user);
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
	return {
		type: 'SET_FACES',
		payload: faces
	};
}

function setFace(face) {
	return function (dispatch) {
		var _id = face._id,
		    author = face.author;

		return _promise2.default.all([dispatch({
			type: 'SET_FACE',
			payload: face
		}), dispatch({
			type: 'SET_POST_FIELD',
			payload: {
				field: 'author',
				value: (0, _defineProperty3.default)({}, author, _id)
			}
		})]);
	};
}

function setUserFaces(user) {
	return function (dispatch) {
		var _id = user._id;

		return MODEL.getFaces(_id).then(function (response) {
			dispatch(setFaces([].concat((0, _toConsumableArray3.default)(response.data), [user])));
		});
	};
}

function findUser(query) {
	return MODEL.findUser(query);
}

// DEPRICATED
function getSubscriptions(id, type) {
	return MODEL.getSubscriptions(id, type);
}

// DEPRICATED
function addSocial(token, id, social) {
	return MODEL.addSocial(token, id, social);
}

// DEPRICATED
function removeSocial(token, id, social) {
	return MODEL.removeSocial(token, id, social);
}