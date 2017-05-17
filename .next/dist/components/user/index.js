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

var _userbar = require('./userbar');

var _userbar2 = _interopRequireDefault(_userbar);

var _feed = require('../feed/');

var _feed2 = _interopRequireDefault(_feed);

var _reactRedux = require('react-redux');

var _index = require('../comments/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSingle = function (_React$Component) {
  (0, _inherits3.default)(UserSingle, _React$Component);

  function UserSingle(props) {
    (0, _classCallCheck3.default)(this, UserSingle);

    return (0, _possibleConstructorReturn3.default)(this, (UserSingle.__proto__ || (0, _getPrototypeOf2.default)(UserSingle)).call(this, props));
  }

  (0, _createClass3.default)(UserSingle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.data.user !== null) {
        console.log(this.props);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tabs = document.querySelectorAll('.tabs-menu a');
      tabs.forEach(function (item, i) {
        item.addEventListener('click', function (e) {
          document.dispatchEvent(createGrid);
        });
      });

      $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).addClass('hidden');
        $(tab).removeClass('hidden');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.data.user !== null) {
        return _react2.default.createElement('div', null, _react2.default.createElement(_userbar2.default, { data: this.props.data }), _react2.default.createElement('div', { className: 'profile-feed feed' }, _react2.default.createElement('div', { id: 'tabs-container' }, _react2.default.createElement('ul', { className: 'tabs-menu' }, _react2.default.createElement('li', { className: 'current' }, _react2.default.createElement('a', { href: '#publications' }, '\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 ', _react2.default.createElement('span', null, '3'))), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#bookmarks' }, '\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438 ', _react2.default.createElement('span', null, '23'))), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#comments' }, '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 ', _react2.default.createElement('span', null, '15')))), _react2.default.createElement('div', { className: 'ui divider' }), _react2.default.createElement('div', { className: 'tab' }, _react2.default.createElement('div', { id: 'publications', className: 'tab-content' }, _react2.default.createElement(_feed2.default, { author: this.props.data.user._id, template: 'article' })), _react2.default.createElement('div', { id: 'bookmarks', className: 'tab-content hidden' }, _react2.default.createElement(_feed2.default, { template: 'listarticle' })), _react2.default.createElement('div', { id: 'comments', className: 'tab-content hidden' }, _react2.default.createElement(_index2.default, null))))));
      } else {
        return _react2.default.createElement('div', null, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D');
      }
    }
  }]);

  return UserSingle;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state.usersingle;
})(UserSingle);