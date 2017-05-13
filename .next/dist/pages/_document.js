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

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _isnode = require('../utils/isnode');

var _isnode2 = _interopRequireDefault(_isnode);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&subset=cyrillic', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/css/fa/css/font-awesome.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/css/ui/semantic.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/css/ui/components/dropdown.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/css/global.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/css/normalize.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/css/loader.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/libs/quill/quill.snow.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/libs/quill/quill.bubble.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/libs/quill/quill.core.css' })), _react2.default.createElement('body', null, this.props.customValue, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head;

      var styles = (0, _server2.default)();
      return { html: html, head: head, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;