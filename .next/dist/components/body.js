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

var _header = require('./header/');

var _header2 = _interopRequireDefault(_header);

var _simpleheader = require('./simpleheader.js');

var _simpleheader2 = _interopRequireDefault(_simpleheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body(props) {
    (0, _classCallCheck3.default)(this, Body);

    return (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).call(this, props));
  }

  (0, _createClass3.default)(Body, [{
    key: 'render',
    value: function render() {
      if (this.props.app.accessable) {
        return _react2.default.createElement(Content, {
          page: this.props.page,
          children: this.props.children
        });
      } else {
        return _react2.default.createElement(Error, null);
      }
    }
  }]);

  return Body;
}(_react2.default.Component);

var Banner = function Banner(props) {
  return _react2.default.createElement('div', { className: 'advert' }, _react2.default.createElement('div', { className: 'title' }, 'BANNER'));
};

var Error = function Error(props) {
  return _react2.default.createElement('div', null, '\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430');
};

var Content = function (_React$Component2) {
  (0, _inherits3.default)(Content, _React$Component2);

  function Content(props) {
    (0, _classCallCheck3.default)(this, Content);

    return (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).call(this, props));
  }

  (0, _createClass3.default)(Content, [{
    key: 'render',
    value: function render() {
      var data = this.props.page,
          children = this.props.children,
          before = data.beforeChildren,
          after = data.afterChildren,
          content,
          title,
          header;

      // title
      if (data.pageShowTitle) {
        title = function title() {
          return _react2.default.createElement('h1', { className: 'ui header' }, data.pageTitle, _react2.default.createElement('div', { className: 'sub header' }, data.pageDescription));
        };
      }

      // header
      if (data.pageShowHeader) {
        header = _react2.default.createElement(_header2.default, null);
      }

      // content
      switch (data.slug) {
        case 'user':case 'post':case 'blog':
          content = _react2.default.createElement('div', null, title, children);
          break;
        default:
          content = _react2.default.createElement('div', { className: 'block' }, title, children);
          break;
      }

      return _react2.default.createElement('div', { className: data.pageShowSidebar ? data.pageClassnames + ' main' : data.pageClassnames + ' full main' }, _react2.default.createElement('div', { className: 'inner' }, header, _react2.default.createElement('div', { className: 'after-header' }, before, content, after)), _react2.default.createElement(Banner, null));
    }
  }]);

  return Content;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Body);