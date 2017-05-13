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

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _post = require('../components/post/');

var _post2 = _interopRequireDefault(_post);

var _body = require('../components/body');

var _body2 = _interopRequireDefault(_body);

var _sidebar = require('../components/sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _postafter = require('../components/post/postafter');

var _postafter2 = _interopRequireDefault(_postafter);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

require('isomorphic-fetch');

var _user = require('../actions/user.js');

var _initscripts = require('../utils/initscripts');

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _createPage = require('../utils/createPage.js');

var _createPage2 = _interopRequireDefault(_createPage);

var _page = require('../components/HOC/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.onRouteChangeStart = function (url) {
  _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var PostPage = function (_React$Component) {
  (0, _inherits3.default)(PostPage, _React$Component);

  function PostPage(props) {
    (0, _classCallCheck3.default)(this, PostPage);

    return (0, _possibleConstructorReturn3.default)(this, (PostPage.__proto__ || (0, _getPrototypeOf2.default)(PostPage)).call(this, props));
  }

  (0, _createClass3.default)(PostPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var page = (0, _createPage2.default)(this.props.page, _react2.default.createElement(_post2.default, null), null, _react2.default.createElement(_postafter2.default, null));
      this.state = { page: page };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _initscripts.UI)();
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      return _react2.default.createElement('div', null, _react2.default.createElement(_sidebar2.default, null), _react2.default.createElement(_body2.default, { page: page }, page.child));
    }
  }]);

  return PostPage;
}(_react2.default.Component);

var PostContainer = (0, _page2.default)(PostPage, 'post');
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, function (state) {
  return state;
})(PostContainer);