'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getCommentById = exports.getPostCommentsByPostId = undefined;
exports.postComment = postComment;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPostCommentsByPostId = exports.getPostCommentsByPostId = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'comment/entries/' + id);

					case 2:
						return _context.abrupt('return', _context.sent);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function getPostCommentsByPostId(_x) {
		return _ref.apply(this, arguments);
	};
}();

var getCommentById = exports.getCommentById = function () {
	var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'comment/entries/' + id);

					case 2:
						return _context2.abrupt('return', _context2.sent);

					case 3:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function getCommentById(_x2) {
		return _ref2.apply(this, arguments);
	};
}();

function postComment(token, data) {
	return (0, _axios2.default)({
		url: _appConfig2.default.API + 'comment/entries/add',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
	});
}