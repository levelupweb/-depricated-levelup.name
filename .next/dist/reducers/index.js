'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _currentUser = require('./currentUser.js');

var _currentUser2 = _interopRequireDefault(_currentUser);

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

var _postState = require('./postState.js');

var _postState2 = _interopRequireDefault(_postState);

var _userFaces = require('./userFaces.js');

var _userFaces2 = _interopRequireDefault(_userFaces);

var _postsStorage = require('./postsStorage.js');

var _postsStorage2 = _interopRequireDefault(_postsStorage);

var _message = require('./message.js');

var _message2 = _interopRequireDefault(_message);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
	app: _app2.default,
	currentUser: _currentUser2.default,
	postState: _postState2.default,
	userFaces: _userFaces2.default,
	postsStorage: _postsStorage2.default,
	message: _message2.default
};

exports.default = (0, _redux.combineReducers)(reducers);