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

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _editingPost = require('./editingPost');

var _editingPost2 = _interopRequireDefault(_editingPost);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
	app: _app2.default,
	header: _header2.default,
	usersingle: _usersingle2.default,
	user: _user2.default,
	postState: _post2.default,
	editingPost: _editingPost2.default
};

exports.default = (0, _redux.combineReducers)(reducers);