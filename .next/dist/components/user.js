'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = exports.User = undefined;

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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. Разделить вид для владельца и для третьих лиц
// 2. Пофиксить баг с отображением small-темплейта

var User = exports.User = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User(props) {
    (0, _classCallCheck3.default)(this, User);

    return (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).call(this, props));
  }

  (0, _createClass3.default)(User, [{
    key: 'render',
    value: function render() {
      var user = this.props.user.profile;
      return _react2.default.createElement('div', { className: this.props.size + ' user', 'data-jsx': 2469350912
      }, this.props.user.isLogged ? _react2.default.createElement('div', {
        'data-jsx': 2469350912
      }, _react2.default.createElement('div', { className: 'image', 'data-jsx': 2469350912
      }, _react2.default.createElement('div', { className: 'ui inline dropdown', 'data-jsx': 2469350912
      }, _react2.default.createElement('div', { className: 'text', 'data-jsx': 2469350912
      }, _react2.default.createElement(Avatar, { size: this.props.size, link: this.props.avatarUrl })), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 2469350912
      }, _react2.default.createElement('div', { className: 'item', 'data-text': 'this week', 'data-jsx': 2469350912
      }, '\u041F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 2469350912
      }, '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 2469350912
      }, '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438'), _react2.default.createElement('div', { className: 'divider', 'data-jsx': 2469350912
      }), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 2469350912
      }, '\u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 2469350912
      }, _react2.default.createElement(_link2.default, { href: '/user' }, _react2.default.createElement('span', { className: 'name', 'data-jsx': 2469350912
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 2469350912
      }, user.slug))), _react2.default.createElement('div', { className: this.props.size == 'small' ? 'hidden' : 'description', 'data-jsx': 2469350912
      }, '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442'))) : _react2.default.createElement('div', {
        'data-jsx': 2469350912
      }, _react2.default.createElement(_link2.default, { href: '/auth' }, _react2.default.createElement('a', {
        'data-jsx': 2469350912
      }, '\u0412\u043E\u0439\u0442\u0438'))), _react2.default.createElement(_style2.default, {
        styleId: 2469350912,
        css: '.user[data-jsx="2469350912"] {display:-webkit-flex; display:flex;margin: 6px 0px;align-items: center;}.user[data-jsx="2469350912"] .image[data-jsx="2469350912"],.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] {display:inline-block;vertical-align:middle;}.user.small[data-jsx="2469350912"] {margin-bottom:6px;}.user.medium[data-jsx="2469350912"] {margin-bottom:4px;}.user.small[data-jsx="2469350912"] .image[data-jsx="2469350912"] {width:20px;height:20px;margin:0px;}.user.medium[data-jsx="2469350912"] .image[data-jsx="2469350912"] {width:30px;height:30px;}.user.dropdown[data-jsx="2469350912"] .content[data-jsx="2469350912"] {display:none;}.user[data-jsx="2469350912"] .image[data-jsx="2469350912"] a[data-jsx="2469350912"] {display:inline-block;}.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] {padding-left:15px;}.user.small[data-jsx="2469350912"] .content[data-jsx="2469350912"] {padding-left:8px;margin:5px 0px;}.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] .name[data-jsx="2469350912"] {display:block;font-size:17px;font-weight:bold;}.user.small[data-jsx="2469350912"] .content[data-jsx="2469350912"] .name[data-jsx="2469350912"] {font-size:14px;font-weight:100;}.user.medium[data-jsx="2469350912"] .content[data-jsx="2469350912"] .name[data-jsx="2469350912"] {font-size:14px;}.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] .description[data-jsx="2469350912"] {font-size:13px;color:rgba(0,0,0,0.4);margin-top:5px;}.user.medium[data-jsx="2469350912"] .content[data-jsx="2469350912"] .description[data-jsx="2469350912"] {font-size:13px;margin-top:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUNOLDhCQUNRLG1DQUNNLGdCQUNJLG9CQUN4QixDQUdrQix5SEFDTyxxQkFDQyxzQkFDdkIsQ0FFWSxvQ0FDTyxrQkFDbkIsQ0FFYSxxQ0FDTSxrQkFDbkIsQ0FFbUIsa0VBQ1AsV0FDQyxZQUNELFdBQ1osQ0FFb0IsbUVBQ1IsV0FDQyxZQUNiLENBRXdCLHVFQUNWLGFBQ2QsQ0FFZSxxRkFDTyxxQkFDdEIsQ0FFWSw4REFDRyxrQkFDbEIsQ0FFd0Isb0VBQ0gsaUJBQ0YsZUFDaEIsQ0FFa0IsMkZBQ1AsY0FDQyxlQUNFLGlCQUNqQixDQUU4QixpR0FDWCxlQUNDLGdCQUNqQixDQUU0QixrR0FDWixlQUNoQixDQUV5QixrR0FDYixlQUNPLHNCQUNQLGVBQ2YsQ0FFc0MseUdBQ25CLGVBQ0EsZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcdXNlci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuLy8gMS4g0KDQsNC30LTQtdC70LjRgtGMINCy0LjQtCDQtNC70Y8g0LLQu9Cw0LTQtdC70YzRhtCwINC4INC00LvRjyDRgtGA0LXRgtGM0LjRhSDQu9C40YZcclxuLy8gMi4g0J/QvtGE0LjQutGB0LjRgtGMINCx0LDQsyDRgSDQvtGC0L7QsdGA0LDQttC10L3QuNC10Lwgc21hbGwt0YLQtdC80L/Qu9C10LnRgtCwXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgdXNlciA9IHRoaXMucHJvcHMudXNlci5wcm9maWxlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuc2l6ZX0gdXNlcmB9PlxyXG4gICAgICAgIHsodGhpcy5wcm9wcy51c2VyLmlzTG9nZ2VkKSA/XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbmxpbmUgZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPjxBdmF0YXIgc2l6ZT17dGhpcy5wcm9wcy5zaXplfSBsaW5rPXt0aGlzLnByb3BzLmF2YXRhclVybH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIHdlZWtcIj7Qn9GA0L7RhNC40LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIG1vbnRoXCI+0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRgjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIG1vbnRoXCI+0J3QsNGB0YLRgNC+0LnQutC4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIG1vbnRoXCI+0JLRi9GF0L7QtDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj48c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+PGEgaHJlZj1cIiNcIj57dXNlci5zbHVnfTwvYT48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5zaXplID09ICdzbWFsbCcpID8gYGhpZGRlbmAgOiBgZGVzY3JpcHRpb25gfT7Qn9GA0L7Qs9GA0LDQvNC80LjRgdGCPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdj48TGluayBocmVmPVwiL2F1dGhcIj48YT7QktC+0LnRgtC4PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgXHRcdDxzdHlsZSBqc3g+e2BcclxuICBcdFx0XHQudXNlciB7XHJcbiAgXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcdFx0XHR9XHJcblxyXG4gICAgICAgIC51c2VyIC5pbWFnZSxcclxuICAgICAgICAudXNlciAuY29udGVudCB7XHJcbiAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLnNtYWxsIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIubWVkaXVtIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIuc21hbGwgLmltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5tZWRpdW0gLmltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLmRyb3Bkb3duIC5jb250ZW50IHtcclxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyIC5pbWFnZSBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgXHRcdFx0LnVzZXIgLmNvbnRlbnQge1xyXG4gIFx0XHRcdFx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgXHRcdFx0fVxyXG5cclxuICAgICAgICAudXNlci5zbWFsbCAuY29udGVudCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6OHB4O1xyXG4gICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICBcdFx0XHQudXNlciAuY29udGVudCAubmFtZSB7XHJcbiAgXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG4gIFx0XHRcdFx0Zm9udC1zaXplOjE3cHg7XHJcbiAgXHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG4gIFx0XHRcdH1cclxuXHJcbiAgICAgICAgLnVzZXIuc21hbGwgLmNvbnRlbnQgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDoxMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5tZWRpdW0gLmNvbnRlbnQgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICBcdFx0XHQudXNlciAuY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG4gIFx0XHRcdFx0Zm9udC1zaXplOjEzcHg7XHJcbiAgXHRcdFx0XHRjb2xvcjpyZ2JhKDAsMCwwLDAuNCk7XHJcbiAgXHRcdFx0XHRtYXJnaW4tdG9wOjVweDtcclxuICBcdFx0XHR9XHJcblxyXG4gICAgICAgIC51c2VyLm1lZGl1bSAuY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgXHRcdGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdmF0YXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBjaXJjdWxhciBpbWFnZSB1aWAgOiBgcm91bmRlZCBpbWFnZSB1aWB9IHNyYz1cIi4uL3N0YXRpYy9pbWcvYXZhdGFyLnBuZ1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgYFxyXG4gICAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdG9yZSkgPT4gc3RvcmUpKFVzZXIpIl19 */\n/*@ sourceURL=components\\user.js */'
      }));
    }
  }]);

  return User;
}(_react2.default.Component);

var Avatar = exports.Avatar = function (_React$Component2) {
  (0, _inherits3.default)(Avatar, _React$Component2);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);

    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'avatar', 'data-jsx': 3382318622
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 3382318622
      }, _react2.default.createElement('img', { className: this.props.size == 'small' ? 'circular image ui' : 'rounded image ui', src: '../static/img/avatar.png', 'data-jsx': 3382318622
      })), _react2.default.createElement(_style2.default, {
        styleId: 3382318622,
        css: '.avatar[data-jsx="3382318622"] {display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlVLEFBQ1csZ0NBQ2MscUJBQ0Msc0JBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHVzZXIuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbi8vIDEuINCg0LDQt9C00LXQu9C40YLRjCDQstC40LQg0LTQu9GPINCy0LvQsNC00LXQu9GM0YbQsCDQuCDQtNC70Y8g0YLRgNC10YLRjNC40YUg0LvQuNGGXHJcbi8vIDIuINCf0L7RhNC40LrRgdC40YLRjCDQsdCw0LMg0YEg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8IHNtYWxsLdGC0LXQvNC/0LvQtdC50YLQsFxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHVzZXIgPSB0aGlzLnByb3BzLnVzZXIucHJvZmlsZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnNpemV9IHVzZXJgfT5cclxuICAgICAgICB7KHRoaXMucHJvcHMudXNlci5pc0xvZ2dlZCkgP1xyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaW5saW5lIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48QXZhdGFyIHNpemU9e3RoaXMucHJvcHMuc2l6ZX0gbGluaz17dGhpcy5wcm9wcy5hdmF0YXJVcmx9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyB3ZWVrXCI+0J/RgNC+0YTQuNC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCd0LDRgdGC0YDQvtC50LrQuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCS0YvRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+PHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPjxhIGhyZWY9XCIjXCI+e3VzZXIuc2x1Z308L2E+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBoaWRkZW5gIDogYGRlc2NyaXB0aW9uYH0+0J/RgNC+0LPRgNCw0LzQvNC40YHRgjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXY+PExpbmsgaHJlZj1cIi9hdXRoXCI+PGE+0JLQvtC50YLQuDwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0XHQ8c3R5bGUganN4PntgXHJcbiAgXHRcdFx0LnVzZXIge1xyXG4gIFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHRcdFx0fVxyXG5cclxuICAgICAgICAudXNlciAuaW1hZ2UsXHJcbiAgICAgICAgLnVzZXIgLmNvbnRlbnQge1xyXG4gICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5zbWFsbCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLm1lZGl1bSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLnNtYWxsIC5pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIubWVkaXVtIC5pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5kcm9wZG93biAuY29udGVudCB7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlciAuaW1hZ2UgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gIFx0XHRcdC51c2VyIC5jb250ZW50IHtcclxuICBcdFx0XHRcdHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIFx0XHRcdH1cclxuXHJcbiAgICAgICAgLnVzZXIuc21hbGwgLmNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjhweDtcclxuICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLm5hbWUge1xyXG4gIFx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuICBcdFx0XHRcdGZvbnQtc2l6ZToxN3B4O1xyXG4gIFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuICBcdFx0XHR9XHJcblxyXG4gICAgICAgIC51c2VyLnNtYWxsIC5jb250ZW50IC5uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6MTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICBcdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG4gIFx0XHRcdFx0Y29sb3I6cmdiYSgwLDAsMCwwLjQpO1xyXG4gIFx0XHRcdFx0bWFyZ2luLXRvcDo1cHg7XHJcbiAgXHRcdFx0fVxyXG5cclxuICAgICAgICAudXNlci5tZWRpdW0gLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0XHRgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnNpemUgPT0gJ3NtYWxsJykgPyBgY2lyY3VsYXIgaW1hZ2UgdWlgIDogYHJvdW5kZWQgaW1hZ2UgdWlgfSBzcmM9XCIuLi9zdGF0aWMvaW1nL2F2YXRhci5wbmdcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgIGBcclxuICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShVc2VyKSJdfQ== */\n/*@ sourceURL=components\\user.js */'
      }));
    }
  }]);

  return Avatar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(User);