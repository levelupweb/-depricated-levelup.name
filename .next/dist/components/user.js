'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\user.js';


var User = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User(props) {
    (0, _classCallCheck3.default)(this, User);

    return (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).call(this, props));
  }

  (0, _createClass3.default)(User, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.size + ' user', 'data-jsx': 3977966214,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('div', { className: 'image', 'data-jsx': 3977966214,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(Avatar, { size: this.props.size, link: this.props.avatarUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3977966214,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_link2.default, { href: '/user', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('span', { className: 'name', 'data-jsx': 3977966214,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 3977966214,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, '\u0418\u0432\u0430\u043D \u041A'))), _react2.default.createElement('div', { className: this.props.size == 'small' ? 'hidden' : 'description', 'data-jsx': 3977966214,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442')), _react2.default.createElement(_style2.default, {
        styleId: 3977966214,
        css: '.user[data-jsx="3977966214"] {display:inline-block;margin:6px 0px;}.user[data-jsx="3977966214"] .image[data-jsx="3977966214"],.user[data-jsx="3977966214"] .content[data-jsx="3977966214"] {display:inline-block;vertical-align:middle;}.user.small[data-jsx="3977966214"] {margin-bottom:6px;}.user.medium[data-jsx="3977966214"] {margin-bottom:4px;}.user.small[data-jsx="3977966214"] .image[data-jsx="3977966214"] {width:20px;height:20px;margin:0px;}.user.medium[data-jsx="3977966214"] .image[data-jsx="3977966214"] {width:30px;height:30px;}.user[data-jsx="3977966214"] .image[data-jsx="3977966214"] a[data-jsx="3977966214"] {display:inline-block;}.user[data-jsx="3977966214"] .content[data-jsx="3977966214"] {padding-left:15px;}.user.small[data-jsx="3977966214"] .content[data-jsx="3977966214"] {padding-left:8px;margin:5px 0px;}.user[data-jsx="3977966214"] .content[data-jsx="3977966214"] .name[data-jsx="3977966214"] {display:block;font-size:17px;font-weight:bold;}.user.small[data-jsx="3977966214"] .content[data-jsx="3977966214"] .name[data-jsx="3977966214"] {font-size:14px;font-weight:100;}.user.medium[data-jsx="3977966214"] .content[data-jsx="3977966214"] .name[data-jsx="3977966214"] {font-size:14px;}.user[data-jsx="3977966214"] .content[data-jsx="3977966214"] .description[data-jsx="3977966214"] {font-size:13px;color:rgba(0,0,0,0.4);margin-top:5px;}.user.medium[data-jsx="3977966214"] .content[data-jsx="3977966214"] .description[data-jsx="3977966214"] {font-size:13px;margin-top:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUNOLDhCQUNlLHFCQUNGLGVBQ25CLENBR2tCLHlIQUNPLHFCQUNDLHNCQUN2QixDQUVZLG9DQUNPLGtCQUNuQixDQUVhLHFDQUNNLGtCQUNuQixDQUVtQixrRUFDUCxXQUNDLFlBQ0QsV0FDWixDQUVvQixtRUFDUixXQUNDLFlBQ2IsQ0FFZSxxRkFDTyxxQkFDdEIsQ0FFWSw4REFDRyxrQkFDbEIsQ0FFd0Isb0VBQ0gsaUJBQ0YsZUFDaEIsQ0FFa0IsMkZBQ1AsY0FDQyxlQUNFLGlCQUNqQixDQUU4QixpR0FDWCxlQUNDLGdCQUNqQixDQUU0QixrR0FDWixlQUNoQixDQUV5QixrR0FDYixlQUNPLHNCQUNQLGVBQ2YsQ0FFc0MseUdBQ25CLGVBQ0EsZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcdXNlci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5zaXplfSB1c2VyYH0+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgXHRcdFx0PEF2YXRhciBzaXplPXt0aGlzLnByb3BzLnNpemV9IGxpbms9e3RoaXMucHJvcHMuYXZhdGFyVXJsfSAvPlxyXG4gICAgXHRcdDwvZGl2PlxyXG4gICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgXHRcdFx0PExpbmsgaHJlZj1cIi91c2VyXCI+PHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPjxhIGhyZWY9XCIjXCI+0JjQstCw0L0g0Jo8L2E+PC9zcGFuPjwvTGluaz5cclxuICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5zaXplID09ICdzbWFsbCcpID8gYGhpZGRlbmAgOiBgZGVzY3JpcHRpb25gfT7Qn9GA0L7Qs9GA0LDQvNC80LjRgdGCPC9kaXY+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG4gIFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdC51c2VyIHtcclxuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46NnB4IDBweDtcclxuXHRcdFx0fVxyXG5cclxuICAgICAgLnVzZXIgLmltYWdlLFxyXG4gICAgICAudXNlciAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci5zbWFsbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyLm1lZGl1bSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyLnNtYWxsIC5pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci5tZWRpdW0gLmltYWdlIHtcclxuICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlciAuaW1hZ2UgYSB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcblx0XHRcdC51c2VyIC5jb250ZW50IHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRcdFx0fVxyXG5cclxuICAgICAgLnVzZXIuc21hbGwgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDo4cHg7XHJcbiAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgIH1cclxuXHJcblx0XHRcdC51c2VyIC5jb250ZW50IC5uYW1lIHtcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZToxN3B4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdH1cclxuXHJcbiAgICAgIC51c2VyLnNtYWxsIC5jb250ZW50IC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDoxMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyLm1lZGl1bSAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIH1cclxuXHJcblx0XHRcdC51c2VyIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0Zm9udC1zaXplOjEzcHg7XHJcblx0XHRcdFx0Y29sb3I6cmdiYSgwLDAsMCwwLjQpO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6NXB4O1xyXG5cdFx0XHR9XHJcblxyXG4gICAgICAudXNlci5tZWRpdW0gLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gIFx0XHRgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnNpemUgPT0gJ3NtYWxsJykgPyBgY2lyY3VsYXIgaW1hZ2UgdWlgIDogYHJvdW5kZWQgaW1hZ2UgdWlgfSBzcmM9XCIuLi9zdGF0aWMvaW1nL2F2YXRhci5wbmdcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgIGBcclxuICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\user.js */'
      }));
    }
  }]);

  return User;
}(_react2.default.Component);

exports.default = User;
var Avatar = exports.Avatar = function (_React$Component2) {
  (0, _inherits3.default)(Avatar, _React$Component2);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);

    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'avatar', 'data-jsx': 3382318622,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 3382318622,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('img', { className: this.props.size == 'small' ? 'circular image ui' : 'rounded image ui', src: '../static/img/avatar.png', 'data-jsx': 3382318622,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: 3382318622,
        css: '.avatar[data-jsx="3382318622"] {display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEdVLEFBQ1csZ0NBQ2MscUJBQ0Msc0JBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHVzZXIuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuc2l6ZX0gdXNlcmB9PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgIFx0XHRcdDxBdmF0YXIgc2l6ZT17dGhpcy5wcm9wcy5zaXplfSBsaW5rPXt0aGlzLnByb3BzLmF2YXRhclVybH0gLz5cclxuICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgIFx0XHRcdDxMaW5rIGhyZWY9XCIvdXNlclwiPjxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj48YSBocmVmPVwiI1wiPtCY0LLQsNC9INCaPC9hPjwvc3Bhbj48L0xpbms+XHJcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBoaWRkZW5gIDogYGRlc2NyaXB0aW9uYH0+0J/RgNC+0LPRgNCw0LzQvNC40YHRgjwvZGl2PlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cclxuICBcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHQudXNlciB7XHJcblx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOjZweCAwcHg7XHJcblx0XHRcdH1cclxuXHJcbiAgICAgIC51c2VyIC5pbWFnZSxcclxuICAgICAgLnVzZXIgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXIuc21hbGwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci5tZWRpdW0ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci5zbWFsbCAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXIubWVkaXVtIC5pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXIgLmltYWdlIGEge1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcblxyXG5cdFx0XHQudXNlciAuY29udGVudCB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0XHRcdH1cclxuXHJcbiAgICAgIC51c2VyLnNtYWxsIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6OHB4O1xyXG4gICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICB9XHJcblxyXG5cdFx0XHQudXNlciAuY29udGVudCAubmFtZSB7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHRmb250LXNpemU6MTdweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHR9XHJcblxyXG4gICAgICAudXNlci5zbWFsbCAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6MTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci5tZWRpdW0gLmNvbnRlbnQgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICB9XHJcblxyXG5cdFx0XHQudXNlciAuY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHRcdGNvbG9yOnJnYmEoMCwwLDAsMC40KTtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOjVweDtcclxuXHRcdFx0fVxyXG5cclxuICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICBcdFx0YH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5zaXplID09ICdzbWFsbCcpID8gYGNpcmN1bGFyIGltYWdlIHVpYCA6IGByb3VuZGVkIGltYWdlIHVpYH0gc3JjPVwiLi4vc3RhdGljL2ltZy9hdmF0YXIucG5nXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYFxyXG4gICAgICAgIH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\user.js */'
      }));
    }
  }]);

  return Avatar;
}(_react2.default.Component);