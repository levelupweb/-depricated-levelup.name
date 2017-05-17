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

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('../user');

var _user2 = _interopRequireDefault(_user);

var _statistic = require('./statistic');

var _statistic2 = _interopRequireDefault(_statistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserBar = function (_React$Component) {
  (0, _inherits3.default)(UserBar, _React$Component);

  function UserBar(props) {
    (0, _classCallCheck3.default)(this, UserBar);

    return (0, _possibleConstructorReturn3.default)(this, (UserBar.__proto__ || (0, _getPrototypeOf2.default)(UserBar)).call(this, props));
  }

  (0, _createClass3.default)(UserBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'userbar', 'data-jsx': 489088734
      }, _react2.default.createElement(_user2.default, null), _react2.default.createElement(_statistic2.default, null), _react2.default.createElement(_style2.default, {
        styleId: 489088734,
        css: '.userbar[data-jsx="489088734"] {display:-webkit-flex; display:flex;justify-content:space-between;align-items:center;padding-bottom:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXJcXHVzZXJiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JtQixBQUNELGdDQUNJLG1DQUNpQiw4QkFDWCxtQkFDQyxvQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50c1xcdXNlclxcdXNlcmJhci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdXNlcidcclxuaW1wb3J0IFN0YXRpc3RpYyBmcm9tICcuL3N0YXRpc3RpYydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyYmFyXCI+XHJcbiAgICAgIFx0PFVzZXIgLz5cclxuICAgICAgXHQ8U3RhdGlzdGljIC8+XHJcblxyXG4gICAgICBcdDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHRcdC51c2VyYmFyIHtcclxuICAgICAgXHRcdFx0ZGlzcGxheTpmbGV4O1xyXG4gICAgICBcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgXHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICBcdFx0XHRwYWRkaW5nLWJvdHRvbToyMHB4O1xyXG4gICAgICBcdFx0fVxyXG4gICAgICBcdGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\user\\userbar.js */'
      }));
    }
  }]);

  return UserBar;
}(_react2.default.Component);

exports.default = UserBar;