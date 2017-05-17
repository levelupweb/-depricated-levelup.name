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

var _reactRedux = require('react-redux');

var _pages = require('./pages');

var _users = require('./users');

var _posts = require('./posts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function (_React$Component) {
  (0, _inherits3.default)(Panel, _React$Component);

  function Panel(props) {
    (0, _classCallCheck3.default)(this, Panel);

    return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).call(this, props));
  }

  (0, _createClass3.default)(Panel, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', { className: 'panel-wrapper' }, _react2.default.createElement('div', { className: 'ui grid' }, _react2.default.createElement('div', { className: 'sixteen wide column' }, _react2.default.createElement('div', { className: 'ui grid' }, _react2.default.createElement('div', { className: 'twelve wide column' }, _react2.default.createElement(_posts.Posts, null)), _react2.default.createElement('div', { className: 'four wide column' }, _react2.default.createElement('p', null, '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430')))), _react2.default.createElement('div', { className: 'six wide column' }, _react2.default.createElement(_pages.Pages, null)), _react2.default.createElement('div', { className: 'six wide column' }, _react2.default.createElement(_users.Users, null))));
    }
  }]);

  return Panel;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(Panel);