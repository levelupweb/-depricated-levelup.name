'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _sidebar = require('../components/sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _post = require('../components/post/');

var _post2 = _interopRequireDefault(_post);

var _body = require('../components/body');

var _body2 = _interopRequireDefault(_body);

var _postafter = require('../components/post/postafter');

var _postafter2 = _interopRequireDefault(_postafter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\pages\\post.js?entry';


var PostContainer = function (_React$Component) {
  (0, _inherits3.default)(PostContainer, _React$Component);

  (0, _createClass3.default)(PostContainer, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      return {};
    }
  }]);

  function PostContainer(props) {
    (0, _classCallCheck3.default)(this, PostContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PostContainer.__proto__ || (0, _getPrototypeOf2.default)(PostContainer)).call(this, props));

    _this.state = {
      page: {
        classnames: 'post',
        title: 'Пост',
        description: 'Публикация от пользователя',
        showTitle: false,
        children: _react2.default.createElement(_post2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        beforeChildren: null,
        afterChildren: _react2.default.createElement(_postafter2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }),
        displayHeader: true
      }
    };
    return _this;
  }

  (0, _createClass3.default)(PostContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.$ = require('jquery');
      require('../static/css/ui/semantic.min.js');
      var dropdown = require('semantic-ui-dropdown');
      $('.ui.dropdown').dropdown();
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_sidebar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_body2.default, { page: page, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, page.children));
    }
  }]);

  return PostContainer;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, function (state) {
  return state;
})(PostContainer);