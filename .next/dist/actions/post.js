'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPostsByUserId = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPostsByUserId = exports.getPostsByUserId = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return _axios2.default.get(_appConfig2.default.API + 'user/' + id + '/posts');

					case 2:
						return _context.abrupt('return', _context.sent);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function getPostsByUserId(_x) {
		return _ref.apply(this, arguments);
	};
}();