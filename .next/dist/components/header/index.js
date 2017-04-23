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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchbar = require('../searchbar');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\header\\index.js';


var Header = function (_React$Component) {
		(0, _inherits3.default)(Header, _React$Component);

		function Header(props) {
				(0, _classCallCheck3.default)(this, Header);

				return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
		}

		(0, _createClass3.default)(Header, [{
				key: 'getSearch',
				value: function getSearch() {
						this.props.dispatch({ type: 'SEARCH_SWITCH' });

						var dimmer = require('semantic-ui-dimmer');
						$('.after-header').dimmer({ closable: false }).dimmer('toggle');
				}
		}, {
				key: 'render',
				value: function render() {
						var _this2 = this;

						return _react2.default.createElement('div', { className: 'header-wrapper', __source: {
										fileName: _jsxFileName,
										lineNumber: 21
								}
						}, this.props.header.search ? _react2.default.createElement('div', { className: 'ui secondary menu block search', __source: {
										fileName: _jsxFileName,
										lineNumber: 24
								}
						}, _react2.default.createElement('div', { className: 'menu left', __source: {
										fileName: _jsxFileName,
										lineNumber: 25
								}
						}, _react2.default.createElement('div', { className: 'search-inner', __source: {
										fileName: _jsxFileName,
										lineNumber: 26
								}
						}, _react2.default.createElement(_searchbar2.default, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 27
								}
						}), _react2.default.createElement('a', { className: 'ui item', onClick: function onClick() {
										_this2.getSearch(true);
								}, __source: {
										fileName: _jsxFileName,
										lineNumber: 28
								}
						}, _react2.default.createElement('i', { className: 'fa fa-times', __source: {
										fileName: _jsxFileName,
										lineNumber: 29
								}
						}))))) : _react2.default.createElement('div', { className: 'ui secondary menu block', __source: {
										fileName: _jsxFileName,
										lineNumber: 37
								}
						}, _react2.default.createElement(_menu2.default, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 38
								}
						}), _react2.default.createElement('div', { className: 'right menu', __source: {
										fileName: _jsxFileName,
										lineNumber: 40
								}
						}, _react2.default.createElement('a', { className: 'ui item', onClick: function onClick() {
										_this2.getSearch(true);
								}, __source: {
										fileName: _jsxFileName,
										lineNumber: 41
								}
						}, _react2.default.createElement('i', { className: 'fa fa-search', __source: {
										fileName: _jsxFileName,
										lineNumber: 42
								}
						})))));
				}
		}]);

		return Header;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
		return state;
})(Header);