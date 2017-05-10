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
        css: '.user[data-jsx="2469350912"] {display:-webkit-flex; display:flex;margin: 6px 0px;align-items: center;}.user[data-jsx="2469350912"] .image[data-jsx="2469350912"],.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] {display:inline-block;vertical-align:middle;}.user.small[data-jsx="2469350912"] {margin-bottom:6px;}.user.medium[data-jsx="2469350912"] {margin-bottom:4px;}.user.small[data-jsx="2469350912"] .image[data-jsx="2469350912"] {width:20px;height:20px;margin:0px;}.user.medium[data-jsx="2469350912"] .image[data-jsx="2469350912"] {width:30px;height:30px;}.user.dropdown[data-jsx="2469350912"] .content[data-jsx="2469350912"] {display:none;}.user[data-jsx="2469350912"] .image[data-jsx="2469350912"] a[data-jsx="2469350912"] {display:inline-block;}.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] {padding-left:15px;}.user.small[data-jsx="2469350912"] .content[data-jsx="2469350912"] {padding-left:8px;margin:5px 0px;}.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] .name[data-jsx="2469350912"] {display:block;font-size:17px;font-weight:bold;}.user.small[data-jsx="2469350912"] .content[data-jsx="2469350912"] .name[data-jsx="2469350912"] {font-size:14px;font-weight:100;}.user.medium[data-jsx="2469350912"] .content[data-jsx="2469350912"] .name[data-jsx="2469350912"] {font-size:14px;}.user[data-jsx="2469350912"] .content[data-jsx="2469350912"] .description[data-jsx="2469350912"] {font-size:13px;color:rgba(0,0,0,0.4);margin-top:5px;}.user.medium[data-jsx="2469350912"] .content[data-jsx="2469350912"] .description[data-jsx="2469350912"] {font-size:13px;margin-top:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQixBQUNOLDhCQUNRLG1DQUNNLGdCQUNJLG9CQUN4QixDQUdrQix5SEFDTyxxQkFDQyxzQkFDdkIsQ0FFWSxvQ0FDTyxrQkFDbkIsQ0FFYSxxQ0FDTSxrQkFDbkIsQ0FFbUIsa0VBQ1AsV0FDQyxZQUNELFdBQ1osQ0FFb0IsbUVBQ1IsV0FDQyxZQUNiLENBRXdCLHVFQUNWLGFBQ2QsQ0FFZSxxRkFDTyxxQkFDdEIsQ0FFWSw4REFDRyxrQkFDbEIsQ0FFd0Isb0VBQ0gsaUJBQ0YsZUFDaEIsQ0FFa0IsMkZBQ1AsY0FDQyxlQUNFLGlCQUNqQixDQUU4QixpR0FDWCxlQUNDLGdCQUNqQixDQUU0QixrR0FDWixlQUNoQixDQUV5QixrR0FDYixlQUNPLHNCQUNQLGVBQ2YsQ0FFc0MseUdBQ25CLGVBQ0EsZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcdXNlci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHVzZXIgPSB0aGlzLnByb3BzLnVzZXIucHJvZmlsZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnNpemV9IHVzZXJgfT5cclxuICAgICAgICB7KHRoaXMucHJvcHMudXNlci5pc0xvZ2dlZCkgP1xyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaW5saW5lIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48QXZhdGFyIHNpemU9e3RoaXMucHJvcHMuc2l6ZX0gbGluaz17dGhpcy5wcm9wcy5hdmF0YXJVcmx9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyB3ZWVrXCI+0J/RgNC+0YTQuNC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCd0LDRgdGC0YDQvtC50LrQuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCS0YvRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+PHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPjxhIGhyZWY9XCIjXCI+e3VzZXIuc2x1Z308L2E+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBoaWRkZW5gIDogYGRlc2NyaXB0aW9uYH0+0J/RgNC+0LPRgNCw0LzQvNC40YHRgjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXY+PExpbmsgaHJlZj1cIi9hdXRoXCI+PGE+0JLQvtC50YLQuDwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0XHQ8c3R5bGUganN4PntgXHJcbiAgXHRcdFx0LnVzZXIge1xyXG4gIFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHRcdFx0fVxyXG5cclxuICAgICAgICAudXNlciAuaW1hZ2UsXHJcbiAgICAgICAgLnVzZXIgLmNvbnRlbnQge1xyXG4gICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5zbWFsbCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLm1lZGl1bSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLnNtYWxsIC5pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIubWVkaXVtIC5pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5kcm9wZG93biAuY29udGVudCB7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlciAuaW1hZ2UgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gIFx0XHRcdC51c2VyIC5jb250ZW50IHtcclxuICBcdFx0XHRcdHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIFx0XHRcdH1cclxuXHJcbiAgICAgICAgLnVzZXIuc21hbGwgLmNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjhweDtcclxuICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLm5hbWUge1xyXG4gIFx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuICBcdFx0XHRcdGZvbnQtc2l6ZToxN3B4O1xyXG4gIFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuICBcdFx0XHR9XHJcblxyXG4gICAgICAgIC51c2VyLnNtYWxsIC5jb250ZW50IC5uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6MTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICBcdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG4gIFx0XHRcdFx0Y29sb3I6cmdiYSgwLDAsMCwwLjQpO1xyXG4gIFx0XHRcdFx0bWFyZ2luLXRvcDo1cHg7XHJcbiAgXHRcdFx0fVxyXG5cclxuICAgICAgICAudXNlci5tZWRpdW0gLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0XHRgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnNpemUgPT0gJ3NtYWxsJykgPyBgY2lyY3VsYXIgaW1hZ2UgdWlgIDogYHJvdW5kZWQgaW1hZ2UgdWlgfSBzcmM9XCIuLi9zdGF0aWMvaW1nL2F2YXRhci5wbmdcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgIGBcclxuICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShVc2VyKSJdfQ== */\n/*@ sourceURL=components\\user.js */'
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
        css: '.avatar[data-jsx="3382318622"] {display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lVLEFBQ1csZ0NBQ2MscUJBQ0Msc0JBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHVzZXIuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB1c2VyID0gdGhpcy5wcm9wcy51c2VyLnByb2ZpbGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5zaXplfSB1c2VyYH0+XHJcbiAgICAgICAgeyh0aGlzLnByb3BzLnVzZXIuaXNMb2dnZWQpID9cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGlubGluZSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PEF2YXRhciBzaXplPXt0aGlzLnByb3BzLnNpemV9IGxpbms9e3RoaXMucHJvcHMuYXZhdGFyVXJsfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdGV4dD1cInRoaXMgd2Vla1wiPtCf0YDQvtGE0LjQu9GMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdGV4dD1cInRoaXMgbW9udGhcIj7QndCw0L/QuNGB0LDRgtGMINC/0L7RgdGCPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdGV4dD1cInRoaXMgbW9udGhcIj7QndCw0YHRgtGA0L7QudC60Lg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdGV4dD1cInRoaXMgbW9udGhcIj7QktGL0YXQvtC0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPjxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj48YSBocmVmPVwiI1wiPnt1c2VyLnNsdWd9PC9hPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnNpemUgPT0gJ3NtYWxsJykgPyBgaGlkZGVuYCA6IGBkZXNjcmlwdGlvbmB9PtCf0YDQvtCz0YDQsNC80LzQuNGB0YI8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PjxMaW5rIGhyZWY9XCIvYXV0aFwiPjxhPtCS0L7QudGC0Lg8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICBcdFx0PHN0eWxlIGpzeD57YFxyXG4gIFx0XHRcdC51c2VyIHtcclxuICBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IDZweCAwcHg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFx0XHRcdH1cclxuXHJcbiAgICAgICAgLnVzZXIgLmltYWdlLFxyXG4gICAgICAgIC51c2VyIC5jb250ZW50IHtcclxuICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIuc21hbGwge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5tZWRpdW0ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci5zbWFsbCAuaW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLm1lZGl1bSAuaW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIuZHJvcGRvd24gLmNvbnRlbnQge1xyXG4gICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXIgLmltYWdlIGEge1xyXG4gICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICBcdFx0XHQudXNlciAuY29udGVudCB7XHJcbiAgXHRcdFx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBcdFx0XHR9XHJcblxyXG4gICAgICAgIC51c2VyLnNtYWxsIC5jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDo4cHg7XHJcbiAgICAgICAgICBtYXJnaW46NXB4IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gIFx0XHRcdC51c2VyIC5jb250ZW50IC5uYW1lIHtcclxuICBcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcbiAgXHRcdFx0XHRmb250LXNpemU6MTdweDtcclxuICBcdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgXHRcdFx0fVxyXG5cclxuICAgICAgICAudXNlci5zbWFsbCAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLm1lZGl1bSAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICB9XHJcblxyXG4gIFx0XHRcdC51c2VyIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcbiAgXHRcdFx0XHRmb250LXNpemU6MTNweDtcclxuICBcdFx0XHRcdGNvbG9yOnJnYmEoMCwwLDAsMC40KTtcclxuICBcdFx0XHRcdG1hcmdpbi10b3A6NXB4O1xyXG4gIFx0XHRcdH1cclxuXHJcbiAgICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBcdFx0YH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5zaXplID09ICdzbWFsbCcpID8gYGNpcmN1bGFyIGltYWdlIHVpYCA6IGByb3VuZGVkIGltYWdlIHVpYH0gc3JjPVwiLi4vc3RhdGljL2ltZy9hdmF0YXIucG5nXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYFxyXG4gICAgICAgIH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0b3JlKSA9PiBzdG9yZSkoVXNlcikiXX0= */\n/*@ sourceURL=components\\user.js */'
      }));
    }
  }]);

  return Avatar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(User);