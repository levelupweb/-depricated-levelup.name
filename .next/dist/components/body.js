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

var _menu = require('./header/menu');

var _menu2 = _interopRequireDefault(_menu);

var _reactRedux = require('react-redux');

var _searchbar = require('./searchbar');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _feed = require('./feed/');

var _feed2 = _interopRequireDefault(_feed);

var _header = require('./header/');

var _header2 = _interopRequireDefault(_header);

var _flashpost = require('./flashpost');

var _flashpost2 = _interopRequireDefault(_flashpost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body(props) {
    (0, _classCallCheck3.default)(this, Body);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).call(this, props));

    _this.state = {
      flashpost: {
        revealed: false
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Body, [{
    key: 'render',
    value: function render() {
      var data = this.props.app.pageSettings,
          children = this.props.children;

      if (data.pageShowTitle) {
        var title = _react2.default.createElement('h1', { className: 'ui header' }, data.pageTitle, _react2.default.createElement('div', { className: 'sub header' }, data.pageDescription));
      }
      return _react2.default.createElement('div', { className: data.pageShowSidebar ? data.pageClassnames + ' main' : data.pageClassnames + ' full main' }, _react2.default.createElement('div', { className: 'inner' }, data.pageShowHeader ? _react2.default.createElement(_header2.default, null) : '', _react2.default.createElement('div', { className: 'after-header' }, _react2.default.createElement('div', null, data.beforeChildren), _react2.default.createElement('div', { className: 'block' }, title, children), data.afterChildren)), _react2.default.createElement('div', { className: 'advert' }, _react2.default.createElement('div', { className: 'title' }, 'BANNER')));
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Body);