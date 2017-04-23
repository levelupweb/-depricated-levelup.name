'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _usersingle = require('./usersingle');

var _usersingle2 = _interopRequireDefault(_usersingle);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
	header: _header2.default,
	usersingle: _usersingle2.default,
	user: _user2.default
};

exports.default = (0, _redux.combineReducers)(reducers);