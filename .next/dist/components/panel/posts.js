'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Posts = undefined;

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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = exports.Posts = function (_React$Component) {
  (0, _inherits3.default)(Posts, _React$Component);

  function Posts(props) {
    (0, _classCallCheck3.default)(this, Posts);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || (0, _getPrototypeOf2.default)(Posts)).call(this, props));

    _this.state = {
      entries: []
    };
    return _this;
  }

  (0, _createClass3.default)(Posts, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _axios2.default.get(_appConfig2.default.API + 'post/entries').then(function (res) {
        _this2.setState({
          entries: res.data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'ui segments' }, _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement('h3', { className: 'ui header' }, '\u041F\u043E\u0441\u0442\u044B', _react2.default.createElement('div', { className: 'sub header' }, '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435'))), _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement(Entries, { data: this.state.entries })), _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement(AddPost, null)));
    }
  }]);

  return Posts;
}(_react2.default.Component);

var AddPost = function (_React$Component2) {
  (0, _inherits3.default)(AddPost, _React$Component2);

  function AddPost(props) {
    (0, _classCallCheck3.default)(this, AddPost);

    return (0, _possibleConstructorReturn3.default)(this, (AddPost.__proto__ || (0, _getPrototypeOf2.default)(AddPost)).call(this, props));
  }

  (0, _createClass3.default)(AddPost, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_link2.default, { href: '/editor' }, _react2.default.createElement('a', { className: 'large circular ui button primary' }, '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442'));
    }
  }]);

  return AddPost;
}(_react2.default.Component);

/* 
*** Список всех итемов
*/

var Entries = function (_React$Component3) {
  (0, _inherits3.default)(Entries, _React$Component3);

  function Entries(props) {
    (0, _classCallCheck3.default)(this, Entries);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (Entries.__proto__ || (0, _getPrototypeOf2.default)(Entries)).call(this, props));

    _this4.state = {
      entries: [],
      loaded: false
    };
    return _this4;
  }

  (0, _createClass3.default)(Entries, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var entries = [];
      this.props.data.map(function (item, i) {
        entries.push(_react2.default.createElement(Entry, { data: item, key: i }));
      });
      return _react2.default.createElement('div', { className: 'ui middle aligned selection list transition' }, !this.state.loaded ? _react2.default.createElement(_loader2.default, null) : entries);
    }
  }]);

  return Entries;
}(_react2.default.Component);

/* 
*** Одиночный итем (для списка)
*/

var Entry = function (_React$Component4) {
  (0, _inherits3.default)(Entry, _React$Component4);

  function Entry(props) {
    (0, _classCallCheck3.default)(this, Entry);

    return (0, _possibleConstructorReturn3.default)(this, (Entry.__proto__ || (0, _getPrototypeOf2.default)(Entry)).call(this, props));
  }

  /* 
  *** Удаление итема
  */

  (0, _createClass3.default)(Entry, [{
    key: 'handleRemove',
    value: function handleRemove() {
      var _this6 = this;

      _axios2.default.get(_appConfig2.default.API + 'post/entries/' + this.props.data._id + '/remove').then(function (res) {
        _this6.item.classList.add('hidden');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var entry = this.props.data;
      return _react2.default.createElement('div', { ref: function ref(item) {
          _this7.item = item;
        }, className: 'item', id: 'page-' + entry._id }, _react2.default.createElement('div', { className: 'right floated middle aligned' }, _react2.default.createElement(_link2.default, { href: { pathname: '/editor', query: { slug: entry.slug } } }, _react2.default.createElement('div', { className: 'ui button tiny' }, _react2.default.createElement('i', { className: 'fa fa-cog' }))), _react2.default.createElement('div', { onClick: function onClick() {
          _this7.handleRemove();
        }, className: 'ui button red tiny' }, _react2.default.createElement('i', { className: 'fa fa-close' }))), _react2.default.createElement('div', { className: 'content middle aligned' }, _react2.default.createElement('div', { className: 'header' }, entry.postTitle), _react2.default.createElement('div', { className: 'description' }, entry.slug)));
    }
  }]);

  return Entry;
}(_react2.default.Component);