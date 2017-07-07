'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.authenticateUser = authenticateUser;
exports.signIn = signIn;
exports.signUp = signUp;
exports.setUser = setUser;
exports.getLogout = getLogout;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.removeUserById = removeUserById;
exports.subscribeToUser = subscribeToUser;
exports.getUserField = getUserField;
exports.registerUser = registerUser;
exports.getUserSubscriptions = getUserSubscriptions;
exports.addSocialToUser = addSocialToUser;
exports.getUserLikesCount = getUserLikesCount;
exports.getUserPostsCount = getUserPostsCount;
exports.removeUserSocial = removeUserSocial;
exports.uploadImage = uploadImage;
exports.getUserStats = getUserStats;
exports.setFace = setFace;
exports.setUserFaces = setUserFaces;
exports.findUser = findUser;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _axiosAuth = require('../utils/axiosAuth.js');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authenticateUser(token) {
	return function (dispatch) {
		if (token) {
			(0, _axiosAuth.axiosAuth)(token, {
				url: 'user/auth',
				method: 'GET'
			}).then(function (res) {
				// Записываем пользователя в Store
				dispatch(setUser(res.data));
				// Возвращаем пользователя
				return res.data;
			});
		} else {
			// Записываем ошибку в Store
			dispatch({ type: 'LOGIN_FAILURE' });
			return false;
		}
	};
}

function signIn(data) {
	return function (dispatch) {
		return (0, _axiosAuth.axiosNoAuth)({
			url: _appConfig2.default.API + 'user/signin',
			method: 'POST',
			data: data
		}).then(function (res) {
			if (res.data.success) {
				// Записываем пользователя
				dispatch(setUser(res.data.user));
			}
			return res;
		}).then(function (res) {
			if (res.data.token && res.data.success) {
				// Записываем токен
				_jsCookie2.default.set('x-access-token', res.data.token, { expires: 7, path: '' });
				// Возвращаем пользователя и сообщение
				return {
					success: true,
					message: res.data.message,
					user: res.data.user
				};
			} else {
				// Возвращаем ошибку
				return {
					success: false,
					message: res.data.message
				};
			}
		});
	};
}

function signUp(data) {
	return function (dispatch) {
		return (0, _axiosAuth.axiosNoAuth)({
			url: _appConfig2.default.API + 'user/signup',
			method: 'POST',
			data: data
		}).then(function (res) {
			if (res.data.success) {
				return {
					success: true,
					message: res.data.message
				};
			} else {
				// Возвращаем ошибку
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

function getAllUsers() {
	return _axios2.default.get(_appConfig2.default.API + 'user/entries');
}

function getUserById(id) {
	return _axios2.default.get(_appConfig2.default.API + 'user/entries/id/' + id);
}

function updateUserById(id, data) {
	return _axios2.default.post(_appConfig2.default.API + 'user/entries/' + id + '/update', data);
}

function removeUserById(id) {
	return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + id + '/remove');
}

function subscribeToUser(token, id) {
	return (0, _axios2.default)({
		url: _appConfig2.default.API + 'user/' + id + '/subscribe/author',
		method: 'GET',
		headers: {
			'authorization': token
		}
	});
}

function getUserField(id, field) {
	return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + id + '/field/' + field);
}

function registerUser(data) {
	return (0, _axios2.default)({
		url: _appConfig2.default.API + 'user/add',
		method: 'POST',
		data: data
	});
}

function getUserSubscriptions(userID) {
	return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + userID + '/getsubscriptions');
}

function addSocialToUser(token, id, data) {
	return (0, _axios2.default)({
		url: _appConfig2.default.API + 'user/entries/' + id + '/addsocial',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
	});
}

function getUserLikesCount(userID) {
	return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + userID + '/getlikecount');
}

function getUserPostsCount(userID) {
	return _axios2.default.get(_appConfig2.default.API + 'user/entries/' + userID + '/getpostscount');
}

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

function uploadImage(token, userID, data) {
	return (0, _axiosAuth.axiosAuth)(token, {
		url: 'user/entries/' + userID + '/upload',
		method: 'POST',
		data: data
	});
}

function getUserStats(userID) {
	return (0, _axiosAuth.axiosNoAuth)({
		url: 'user/entries/' + userID + '/getstats',
		method: 'GET'
	});
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

function setUserFaces(user) {
	return function (dispatch) {
		return (0, _axiosAuth.axiosNoAuth)({
			url: 'user/entries/' + user._id + '/getfaces',
			method: 'GET'
		}).then(function (res) {
			dispatch(setFaces(res.data.concat(user)));
		});
	};
}

function findUser(query) {
	return (0, _axiosAuth.axiosNoAuth)({
		url: 'search/entries/users',
		method: 'GET',
		params: {
			query: query
		}
	});
}