'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

var _statistic = require('./statistic');

var _statistic2 = _interopRequireDefault(_statistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginContainer = function (_React$Component) {
		(0, _inherits3.default)(LoginContainer, _React$Component);

		function LoginContainer(props) {
				(0, _classCallCheck3.default)(this, LoginContainer);

				return (0, _possibleConstructorReturn3.default)(this, (LoginContainer.__proto__ || (0, _getPrototypeOf2.default)(LoginContainer)).call(this, props));
		}

		(0, _createClass3.default)(LoginContainer, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement('div', {
								'data-jsx': 2744215161
						}, _react2.default.createElement('div', { className: 'ui grid', 'data-jsx': 2744215161
						}, _react2.default.createElement('div', { className: 'six wide column', 'data-jsx': 2744215161
						}, _react2.default.createElement(_auth2.default, null)), _react2.default.createElement('div', { className: 'six wide column', 'data-jsx': 2744215161
						}, _react2.default.createElement(_register2.default, null)), _react2.default.createElement('div', { className: 'four wide column', 'data-jsx': 2744215161
						}, _react2.default.createElement('div', { className: 'ui secondary vertical pointing menu', 'data-jsx': 2744215161
						}, _react2.default.createElement('a', { className: 'item active', 'data-jsx': 2744215161
						}, '\u0412\u0445\u043E\u0434'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2744215161
						}, '\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2744215161
						}, '\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438')))), _react2.default.createElement(_style2.default, {
								styleId: 2744215161,
								css: '.segment[data-jsx="2744215161"] {margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGF1dGhcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DZSxBQUNELGlDQUNVLG1CQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxhdXRoXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dGggZnJvbSAnLi9hdXRoJ1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9yZWdpc3RlcidcclxuaW1wb3J0IFN0YXRpc3RpYyBmcm9tICcuL3N0YXRpc3RpYydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICBcdDxkaXY+XHJcblx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBncmlkXCI+XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJzaXggd2lkZSBjb2x1bW5cIj5cclxuXHRcdFx0ICBcdDxBdXRoIC8+XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJzaXggd2lkZSBjb2x1bW5cIj5cclxuXHRcdFx0ICBcdDxSZWdpc3RlciAvPlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiZm91ciB3aWRlIGNvbHVtblwiPlxyXG5cdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBzZWNvbmRhcnkgdmVydGljYWwgcG9pbnRpbmcgbWVudVwiPlxyXG5cdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbSBhY3RpdmVcIj5cclxuXHRcdFx0XHQgICAg0JLRhdC+0LRcclxuXHRcdFx0XHQgIDwvYT5cclxuXHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHQgICAg0J4g0L/RgNC+0LXQutGC0LVcclxuXHRcdFx0XHQgIDwvYT5cclxuXHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHQgICAg0JLQsNC60LDQvdGB0LjQuFxyXG5cdFx0XHRcdCAgPC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5zZWdtZW50IHtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\auth\\index.js */'
						}));
				}
		}]);

		return LoginContainer;
}(_react2.default.Component);

exports.default = LoginContainer;