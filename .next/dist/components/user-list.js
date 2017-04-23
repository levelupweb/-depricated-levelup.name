"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\www\\Levelup.name\\components\\user-list.js";


var UserList = function (_React$Component) {
	(0, _inherits3.default)(UserList, _React$Component);

	function UserList(props) {
		(0, _classCallCheck3.default)(this, UserList);

		var _this = (0, _possibleConstructorReturn3.default)(this, (UserList.__proto__ || (0, _getPrototypeOf2.default)(UserList)).call(this, props));

		_this.state = {
			users: []
		};
		return _this;
	}

	(0, _createClass3.default)(UserList, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", { className: "ui items user-list-items", __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, this.props.users.map(function (item) {
				return _react2.default.createElement(User, { data: item, key: item.id, __source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				});
			}));
		}
	}]);

	return UserList;
}(_react2.default.Component);

exports.default = UserList;


var User = function (_React$Component2) {
	(0, _inherits3.default)(User, _React$Component2);

	function User() {
		(0, _classCallCheck3.default)(this, User);

		return (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).apply(this, arguments));
	}

	(0, _createClass3.default)(User, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", { className: "item", __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(Avatar, { data: this.props.data, __source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}), _react2.default.createElement("h4", { className: "ui header", __source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, this.props.data.name), _react2.default.createElement("div", { className: "sub header", __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, this.props.data.description)), _react2.default.createElement("div", { className: "updates", __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, this.props.data.updates ? "+" + this.props.data.updates : ""));
		}
	}]);

	return User;
}(_react2.default.Component);

var Avatar = function (_React$Component3) {
	(0, _inherits3.default)(Avatar, _React$Component3);

	function Avatar() {
		(0, _classCallCheck3.default)(this, Avatar);

		return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
	}

	(0, _createClass3.default)(Avatar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, this.props.data.hasOwnProperty('image') ? _react2.default.createElement("div", { className: "user-image", __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement("a", { href: "#", __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement("img", { src: this.props.data.image, __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}))) : _react2.default.createElement("div", { className: "user-image", __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement("a", { href: "#", __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement("div", { className: this.props.data.updates ? "red ui mini button" : "ui mini button", __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, this.props.data.name.charAt(0)))));
		}
	}]);

	return Avatar;
}(_react2.default.Component);