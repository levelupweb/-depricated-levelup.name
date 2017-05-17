'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = exports.User = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

var _user = require('../actions/user.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. Разделить вид для владельца и для третьих лиц
// 2. Пофиксить баг с отображением small-темплейта


var User = exports.User = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User(props) {
    (0, _classCallCheck3.default)(this, User);

    var _this = (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).call(this, props));

    _this.state = {
      isLoaded: false,
      user: {}
    };
    return _this;
  }

  (0, _createClass3.default)(User, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.props.id) {
                  _context.next = 10;
                  break;
                }

                _context.next = 3;
                return (0, _user.getUserById)(this.props.id);

              case 3:
                user = _context.sent;
                _context.next = 6;
                return this.setState((0, _extends3.default)({}, this.state, {
                  user: user.data
                }));

              case 6:
                _context.next = 8;
                return this.setState({
                  isLoaded: true
                });

              case 8:
                _context.next = 14;
                break;

              case 10:
                _context.next = 12;
                return this.setState((0, _extends3.default)({}, this.state, {
                  user: this.props.user.profile
                }));

              case 12:
                _context.next = 14;
                return this.setState({
                  isLoaded: true
                });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var user = this.state.user;
      if (this.state.isLoaded) {
        return _react2.default.createElement('div', { className: this.props.size + ' user', 'data-jsx': 3754441800
        }, _react2.default.createElement('div', { className: 'image', 'data-jsx': 3754441800
        }, _react2.default.createElement('div', { className: 'ui inline dropdown', 'data-jsx': 3754441800
        }, _react2.default.createElement('div', { className: 'text', 'data-jsx': 3754441800
        }, _react2.default.createElement(Avatar, { size: this.props.size, url: user.userImage })), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 3754441800
        }, _react2.default.createElement('div', { className: 'item', 'data-text': 'this week', 'data-jsx': 3754441800
        }, '\u041F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 3754441800
        }, '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 3754441800
        }, '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438'), _react2.default.createElement('div', { className: 'divider', 'data-jsx': 3754441800
        }), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 3754441800
        }, '\u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3754441800
        }, _react2.default.createElement(_link2.default, { href: '/user' }, _react2.default.createElement('span', { className: 'name', 'data-jsx': 3754441800
        }, _react2.default.createElement('a', { href: '#', 'data-jsx': 3754441800
        }, user.slug))), _react2.default.createElement('div', { className: this.props.size == 'small' ? 'hidden' : 'description', 'data-jsx': 3754441800
        }, user.userDescription)), _react2.default.createElement(_style2.default, {
          styleId: 3754441800,
          css: '.user[data-jsx="3754441800"] {display:-webkit-flex; display:flex;margin: 6px 0px;align-items: center;}.user[data-jsx="3754441800"] .image[data-jsx="3754441800"],.user[data-jsx="3754441800"] .content[data-jsx="3754441800"] {display:-webkit-flex; display:flex;align-items:center;}.user.small[data-jsx="3754441800"] {margin-bottom:6px;}.user.medium[data-jsx="3754441800"] {margin-bottom:4px;}.user.small[data-jsx="3754441800"] .image[data-jsx="3754441800"] {width:20px;height:20px;margin:0px;}.user.medium[data-jsx="3754441800"] .image[data-jsx="3754441800"] {width:30px;height:30px;}.user.dropdown[data-jsx="3754441800"] .content[data-jsx="3754441800"] {display:none;}.user[data-jsx="3754441800"] .image[data-jsx="3754441800"] a[data-jsx="3754441800"] {display:inline-block;}.user[data-jsx="3754441800"] .content[data-jsx="3754441800"] {padding-left:15px;}.user.small[data-jsx="3754441800"] .content[data-jsx="3754441800"] {padding-left:8px;margin:5px 0px;}.user[data-jsx="3754441800"] .content[data-jsx="3754441800"] .name[data-jsx="3754441800"] {display:block;font-size:17px;font-weight:bold;}.user.small[data-jsx="3754441800"] .content[data-jsx="3754441800"] .name[data-jsx="3754441800"] {font-size:14px;font-weight:100;}.user.medium[data-jsx="3754441800"] .content[data-jsx="3754441800"] .name[data-jsx="3754441800"] {font-size:14px;}.user[data-jsx="3754441800"] .content[data-jsx="3754441800"] .description[data-jsx="3754441800"] {font-size:13px;color:rgba(0,0,0,0.4);margin-top:5px;}.user.medium[data-jsx="3754441800"] .content[data-jsx="3754441800"] .description[data-jsx="3754441800"] {font-size:13px;margin-top:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVvQixBQUNOLDhCQUNRLG1DQUNNLGdCQUNJLG9CQUN4QixDQUdrQix5SEFDRCxtQ0FDTSxtQkFDcEIsQ0FFWSxvQ0FDTyxrQkFDbkIsQ0FFYSxxQ0FDTSxrQkFDbkIsQ0FFbUIsa0VBQ1AsV0FDQyxZQUNELFdBQ1osQ0FFb0IsbUVBQ1IsV0FDQyxZQUNiLENBRXdCLHVFQUNWLGFBQ2QsQ0FFZSxxRkFDTyxxQkFDdEIsQ0FFWSw4REFDRyxrQkFDbEIsQ0FFd0Isb0VBQ0gsaUJBQ0YsZUFDaEIsQ0FFa0IsMkZBQ1AsY0FDQyxlQUNFLGlCQUNqQixDQUU4QixpR0FDWCxlQUNDLGdCQUNqQixDQUU0QixrR0FDWixlQUNoQixDQUV5QixrR0FDYixlQUNPLHNCQUNQLGVBQ2YsQ0FFc0MseUdBQ25CLGVBQ0EsZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcdXNlci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9hcHAuY29uZmlnLmpzJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJ1xyXG5pbXBvcnQgeyBnZXRVc2VyQnlJZCB9IGZyb20gJy4uL2FjdGlvbnMvdXNlci5qcydcclxuXHJcbi8vIDEuINCg0LDQt9C00LXQu9C40YLRjCDQstC40LQg0LTQu9GPINCy0LvQsNC00LXQu9GM0YbQsCDQuCDQtNC70Y8g0YLRgNC10YLRjNC40YUg0LvQuNGGXHJcbi8vIDIuINCf0L7RhNC40LrRgdC40YLRjCDQsdCw0LMg0YEg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8IHNtYWxsLdGC0LXQvNC/0LvQtdC50YLQsFxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgdXNlcjogeyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmKHRoaXMucHJvcHMuaWQpIHtcclxuICAgICAgdmFyIHVzZXIgPSBhd2FpdCBnZXRVc2VyQnlJZCh0aGlzLnByb3BzLmlkKVxyXG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICB1c2VyOiB1c2VyLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgdXNlcjogdGhpcy5wcm9wcy51c2VyLnByb2ZpbGVcclxuICAgICAgfSlcclxuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgdXNlciA9IHRoaXMuc3RhdGUudXNlcjtcclxuICAgIGlmKHRoaXMuc3RhdGUuaXNMb2FkZWQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5zaXplfSB1c2VyYH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaW5saW5lIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PEF2YXRhciBzaXplPXt0aGlzLnByb3BzLnNpemV9IHVybD17dXNlci51c2VySW1hZ2V9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIHdlZWtcIj7Qn9GA0L7RhNC40LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdGV4dD1cInRoaXMgbW9udGhcIj7QndCw0YHRgtGA0L7QudC60Lg8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCS0YvRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj48c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+PGEgaHJlZj1cIiNcIj57dXNlci5zbHVnfTwvYT48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBoaWRkZW5gIDogYGRlc2NyaXB0aW9uYH0+e3VzZXIudXNlckRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgIFx0XHQ8c3R5bGUganN4PntgXHJcbiAgICBcdFx0XHQudXNlciB7XHJcbiAgICBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAudXNlciAuaW1hZ2UsXHJcbiAgICAgICAgICAudXNlciAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLnNtYWxsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIubWVkaXVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIuc21hbGwgLmltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIubWVkaXVtIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLmRyb3Bkb3duIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyIC5pbWFnZSBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgXHRcdFx0LnVzZXIgLmNvbnRlbnQge1xyXG4gICAgXHRcdFx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAudXNlci5zbWFsbCAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDo4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIFx0XHRcdC51c2VyIC5jb250ZW50IC5uYW1lIHtcclxuICAgIFx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuICAgIFx0XHRcdFx0Zm9udC1zaXplOjE3cHg7XHJcbiAgICBcdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBcdFx0XHR9XHJcblxyXG4gICAgICAgICAgLnVzZXIuc21hbGwgLmNvbnRlbnQgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6MTAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLm1lZGl1bSAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIFx0XHRcdC51c2VyIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcbiAgICBcdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgXHRcdFx0XHRjb2xvcjpyZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBcdFx0XHRcdG1hcmdpbi10b3A6NXB4O1xyXG4gICAgXHRcdFx0fVxyXG5cclxuICAgICAgICAgIC51c2VyLm1lZGl1bSAuY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICBcdFx0YH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uPC9kaXY+KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdmF0YXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBjaXJjdWxhciBpbWFnZSB1aWAgOiBgY2lyY3VsYXIgaW1hZ2UgdWlgfSBcclxuICAgICAgICAgICAgc3JjPXsodGhpcy5wcm9wcy51cmwpID8gdGhpcy5wcm9wcy51cmwgOiBgLi4vc3RhdGljL2ltZy9uby1hdmF0YXIucG5nYH1cclxuICAgICAgICAgICAgd2lkdGg9XCIzMnB4XCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0b3JlKSA9PiBzdG9yZSkoVXNlcikiXX0= */\n/*@ sourceURL=components\\user.js */'
        }));
      } else {
        return _react2.default.createElement('div', null, '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..');
      }
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
      return _react2.default.createElement('div', { className: 'avatar', 'data-jsx': 3198557086
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 3198557086
      }, _react2.default.createElement('img', {
        className: this.props.size == 'small' ? 'circular image ui' : 'circular image ui',
        src: this.props.url ? this.props.url : '../static/img/no-avatar.png',
        width: '32px', 'data-jsx': 3198557086
      })), _react2.default.createElement(_style2.default, {
        styleId: 3198557086,
        css: '.avatar[data-jsx="3198557086"] {display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0tvQixBQUNELGdDQUNjLHFCQUNDLHNCQUN2QiIsImZpbGUiOiJjb21wb25lbnRzXFx1c2VyLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2FwcC5jb25maWcuanMnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXInXHJcbmltcG9ydCB7IGdldFVzZXJCeUlkIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyLmpzJ1xyXG5cclxuLy8gMS4g0KDQsNC30LTQtdC70LjRgtGMINCy0LjQtCDQtNC70Y8g0LLQu9Cw0LTQtdC70YzRhtCwINC4INC00LvRjyDRgtGA0LXRgtGM0LjRhSDQu9C40YZcclxuLy8gMi4g0J/QvtGE0LjQutGB0LjRgtGMINCx0LDQsyDRgSDQvtGC0L7QsdGA0LDQttC10L3QuNC10Lwgc21hbGwt0YLQtdC80L/Qu9C10LnRgtCwXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICB1c2VyOiB7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5pZCkge1xyXG4gICAgICB2YXIgdXNlciA9IGF3YWl0IGdldFVzZXJCeUlkKHRoaXMucHJvcHMuaWQpXHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgIHVzZXI6IHVzZXIuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNMb2FkZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIucHJvZmlsZVxyXG4gICAgICB9KVxyXG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnNpemV9IHVzZXJgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbmxpbmUgZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48QXZhdGFyIHNpemU9e3RoaXMucHJvcHMuc2l6ZX0gdXJsPXt1c2VyLnVzZXJJbWFnZX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdGV4dD1cInRoaXMgd2Vla1wiPtCf0YDQvtGE0LjQu9GMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIG1vbnRoXCI+0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRgjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCd0LDRgdGC0YDQvtC50LrQuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIG1vbnRoXCI+0JLRi9GF0L7QtDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPjxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj48YSBocmVmPVwiI1wiPnt1c2VyLnNsdWd9PC9hPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5zaXplID09ICdzbWFsbCcpID8gYGhpZGRlbmAgOiBgZGVzY3JpcHRpb25gfT57dXNlci51c2VyRGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgXHRcdDxzdHlsZSBqc3g+e2BcclxuICAgIFx0XHRcdC51c2VyIHtcclxuICAgIFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHRcdFx0fVxyXG5cclxuICAgICAgICAgIC51c2VyIC5pbWFnZSxcclxuICAgICAgICAgIC51c2VyIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIuc21hbGwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci5tZWRpdW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci5zbWFsbCAuaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci5tZWRpdW0gLmltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIuZHJvcGRvd24gLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIgLmltYWdlIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICBcdFx0XHQudXNlciAuY29udGVudCB7XHJcbiAgICBcdFx0XHRcdHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgXHRcdFx0fVxyXG5cclxuICAgICAgICAgIC51c2VyLnNtYWxsIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjhweDtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLm5hbWUge1xyXG4gICAgXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG4gICAgXHRcdFx0XHRmb250LXNpemU6MTdweDtcclxuICAgIFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAudXNlci5zbWFsbCAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDoxMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICAgIFx0XHRcdFx0Zm9udC1zaXplOjEzcHg7XHJcbiAgICBcdFx0XHRcdGNvbG9yOnJnYmEoMCwwLDAsMC40KTtcclxuICAgIFx0XHRcdFx0bWFyZ2luLXRvcDo1cHg7XHJcbiAgICBcdFx0XHR9XHJcblxyXG4gICAgICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIFx0XHRgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoPGRpdj7Ql9Cw0LPRgNGD0LfQutCwLi48L2Rpdj4pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5zaXplID09ICdzbWFsbCcpID8gYGNpcmN1bGFyIGltYWdlIHVpYCA6IGBjaXJjdWxhciBpbWFnZSB1aWB9IFxyXG4gICAgICAgICAgICBzcmM9eyh0aGlzLnByb3BzLnVybCkgPyB0aGlzLnByb3BzLnVybCA6IGAuLi9zdGF0aWMvaW1nL25vLWF2YXRhci5wbmdgfVxyXG4gICAgICAgICAgICB3aWR0aD1cIjMycHhcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShVc2VyKSJdfQ== */\n/*@ sourceURL=components\\user.js */'
      }));
    }
  }]);

  return Avatar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(User);