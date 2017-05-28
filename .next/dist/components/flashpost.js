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

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

var _reactRedux = require('react-redux');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlashPost = function (_React$Component) {
  (0, _inherits3.default)(FlashPost, _React$Component);

  function FlashPost(props) {
    (0, _classCallCheck3.default)(this, FlashPost);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FlashPost.__proto__ || (0, _getPrototypeOf2.default)(FlashPost)).call(this, props));

    _this.state = {
      flashpost: {
        revealed: false
      }
    };
    return _this;
  }

  (0, _createClass3.default)(FlashPost, [{
    key: 'revealFlashPost',
    value: function revealFlashPost() {
      this.setState({
        flashpost: {
          revealed: true
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: this.state.flashpost.revealed ? 'revealed flashpost' : 'flashpost', onClick: function onClick() {
          _this2.revealFlashPost();
        } }, _react2.default.createElement('form', { className: 'ui form' }, _react2.default.createElement('div', { className: 'field' }, _react2.default.createElement('div', { className: 'user-image' }, _react2.default.createElement(_user2.default, { id: this.props.user.profile._id, size: 'dropdown' })), _react2.default.createElement('textarea', { rows: '2', placeholder: '\u041E \u0447\u0435\u043C \u0431\u044B \u0432\u044B \u0445\u043E\u0442\u0435\u043B\u0438 \u0441\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C?' }), _react2.default.createElement('div', { className: 'bar' }, _react2.default.createElement(_link2.default, { href: '/editor' }, _react2.default.createElement('a', { className: 'medium circular ui button primary' }, '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440'))))));
    }
  }]);

  return FlashPost;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(FlashPost);