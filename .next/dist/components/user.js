'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blank = exports.User = undefined;

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

var _reactAvatar = require('react-avatar');

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. Разделить вид для владельца и для третьих лиц
// 2. Пофиксить баг с отображением small-темплейта


// Clever Component. Accepts UserID or accepts currentUser if UserID == null

var User = exports.User = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User(props) {
    (0, _classCallCheck3.default)(this, User);

    var _this = (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).call(this, props));

    _this.state = {
      isLoaded: false,
      user: null
    };
    return _this;
  }

  (0, _createClass3.default)(User, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getUser(this.props.id);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      //this.getUser(nextProps.id)
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({
        user: null
      });
    }
  }, {
    key: 'getUser',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
        var user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!id) {
                  _context.next = 10;
                  break;
                }

                _context.next = 3;
                return (0, _user.getUserById)(id);

              case 3:
                user = _context.sent;
                _context.next = 6;
                return this.setState({
                  user: (0, _extends3.default)({}, this.state.user, user.data)
                });

              case 6:
                _context.next = 8;
                return this.setState({
                  isLoaded: true
                });

              case 8:
                _context.next = 15;
                break;

              case 10:
                if (!this.props.user.isLogged) {
                  _context.next = 15;
                  break;
                }

                _context.next = 13;
                return this.setState((0, _extends3.default)({}, this.state, {
                  user: this.props.user.profile
                }));

              case 13:
                _context.next = 15;
                return this.setState({
                  isLoaded: true
                });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUser(_x) {
        return _ref.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'render',
    value: function render() {
      var user = this.state.user;
      if (this.state.isLoaded && this.state.user != null) {
        return _react2.default.createElement('div', { className: this.props.size + ' user', 'data-jsx': 3065736453
        }, _react2.default.createElement('div', { className: 'image', 'data-jsx': 3065736453
        }, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } } }, _react2.default.createElement('a', {
          'data-jsx': 3065736453
        }, _react2.default.createElement(_reactAvatar2.default, { color: '#46978c', round: true, size: 32, src: user.userImage, name: user.userName })))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3065736453
        }, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } } }, _react2.default.createElement('a', {
          'data-jsx': 3065736453
        }, _react2.default.createElement('span', { className: 'name', 'data-jsx': 3065736453
        }, user.userName))), _react2.default.createElement('div', { className: this.props.size == 'small' ? 'hidden' : 'description', 'data-jsx': 3065736453
        }, user.userDescription ? user.userDescription : '\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432: ' + user.userSubscribersCount)), _react2.default.createElement(_style2.default, {
          styleId: 3065736453,
          css: '.user[data-jsx="3065736453"] {display:-webkit-flex; display:flex;margin: 6px 0px;align-items: center;}.user[data-jsx="3065736453"] .image[data-jsx="3065736453"],.user[data-jsx="3065736453"] .content[data-jsx="3065736453"] {display:-webkit-flex; display:flex;align-items:flex-start;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;}.user.small[data-jsx="3065736453"] {margin-bottom:6px;}.user.medium[data-jsx="3065736453"] {margin-bottom:4px;}.user.small[data-jsx="3065736453"] .image[data-jsx="3065736453"] {width:20px;height:20px;margin:0px;}.user.medium[data-jsx="3065736453"] .image[data-jsx="3065736453"] {width:30px;height:30px;}.user.dropdown[data-jsx="3065736453"] .content[data-jsx="3065736453"] {display:none;}.user[data-jsx="3065736453"] .image[data-jsx="3065736453"] a[data-jsx="3065736453"] {display:-webkit-flex; display:flex;justify-content:center;align-items:center;}.user[data-jsx="3065736453"] .content[data-jsx="3065736453"] {padding-left:12px;}.user.small[data-jsx="3065736453"] .content[data-jsx="3065736453"] {padding-left:8px;margin:5px 0px;}.user[data-jsx="3065736453"] .content[data-jsx="3065736453"] .name[data-jsx="3065736453"] {display:block;font-size:16px;font-weight:bold;}.user.small[data-jsx="3065736453"] .content[data-jsx="3065736453"] .name[data-jsx="3065736453"] {font-size:14px;font-weight:100;}.user.medium[data-jsx="3065736453"] .content[data-jsx="3065736453"] .name[data-jsx="3065736453"] {font-size:14px;}.user[data-jsx="3065736453"] .content[data-jsx="3065736453"] .description[data-jsx="3065736453"] {font-size:13px;color:rgba(0,0,0,0.4);}.user.medium[data-jsx="3065736453"] .content[data-jsx="3065736453"] .description[data-jsx="3065736453"] {font-size:13px;margin-top:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZzQixBQUNOLDhCQUNRLG1DQUNNLGdCQUNJLG9CQUN4QixDQUVrQix5SEFDRCxtQ0FDVSx1QkFDRCwrRUFDdkIsQ0FDWSxvQ0FDTyxrQkFDbkIsQ0FDYSxxQ0FDTSxrQkFDbkIsQ0FDbUIsa0VBQ1AsV0FDQyxZQUNELFdBQ1osQ0FDb0IsbUVBQ1IsV0FDQyxZQUNiLENBQ3dCLHVFQUNWLGFBQ2QsQ0FDZSxxRkFDRCxtQ0FDVSx1QkFDSixtQkFDcEIsQ0FDWSw4REFDRyxrQkFDbEIsQ0FDd0Isb0VBQ0gsaUJBQ0YsZUFDaEIsQ0FDa0IsMkZBQ1AsY0FDQyxlQUNFLGlCQUNqQixDQUM4QixpR0FDWCxlQUNDLGdCQUNqQixDQUM0QixrR0FDWixlQUNoQixDQUN5QixrR0FDYixlQUNPLHNCQUN0QixDQUNzQyx5R0FDbkIsZUFDQSxlQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFx1c2VyLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2FwcC5jb25maWcuanMnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXInXHJcbmltcG9ydCB7IGdldFVzZXJCeUlkIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyLmpzJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vIDEuINCg0LDQt9C00LXQu9C40YLRjCDQstC40LQg0LTQu9GPINCy0LvQsNC00LXQu9GM0YbQsCDQuCDQtNC70Y8g0YLRgNC10YLRjNC40YUg0LvQuNGGXHJcbi8vIDIuINCf0L7RhNC40LrRgdC40YLRjCDQsdCw0LMg0YEg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8IHNtYWxsLdGC0LXQvNC/0LvQtdC50YLQsFxyXG5cclxuXHJcbi8vIENsZXZlciBDb21wb25lbnQuIEFjY2VwdHMgVXNlcklEIG9yIGFjY2VwdHMgY3VycmVudFVzZXIgaWYgVXNlcklEID09IG51bGxcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgdXNlcjogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRVc2VyKHRoaXMucHJvcHMuaWQpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIC8vdGhpcy5nZXRVc2VyKG5leHRQcm9wcy5pZClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXI6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRVc2VyKGlkKSB7XHJcbiAgICBpZihpZCkge1xyXG4gICAgICB2YXIgdXNlciA9IGF3YWl0IGdldFVzZXJCeUlkKGlkKVxyXG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAuLi51c2VyLmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzTG9hZGVkOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZih0aGlzLnByb3BzLnVzZXIuaXNMb2dnZWQpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIucHJvZmlsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgdXNlciA9IHRoaXMuc3RhdGUudXNlcjtcclxuICAgIGlmKHRoaXMuc3RhdGUuaXNMb2FkZWQgJiYgdGhpcy5zdGF0ZS51c2VyICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuc2l6ZX0gdXNlcmB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3VzZXInLCBxdWVyeTogeyBzbHVnOiB1c2VyLnNsdWcgfX19PjxhPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBjb2xvcj17YCM0Njk3OGNgfSByb3VuZD17dHJ1ZX0gc2l6ZT17MzJ9IHNyYz17dXNlci51c2VySW1hZ2V9IG5hbWU9e3VzZXIudXNlck5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICd1c2VyJywgcXVlcnk6IHsgc2x1ZzogdXNlci5zbHVnIH19fT48YT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci51c2VyTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBoaWRkZW5gIDogYGRlc2NyaXB0aW9uYH0+XHJcbiAgICAgICAgICAgICAgICB7KHVzZXIudXNlckRlc2NyaXB0aW9uKSA/IHVzZXIudXNlckRlc2NyaXB0aW9uIDogYNCf0L7QtNC/0LjRgdGH0LjQutC+0LI6ICR7dXNlci51c2VyU3Vic2NyaWJlcnNDb3VudH1gfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIFx0XHQ8c3R5bGUganN4PntgXHJcbiAgICAgIFx0XHRcdC51c2VyIHtcclxuICAgICAgXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcdFx0XHR9XHJcbiAgICAgICAgICAgIC51c2VyIC5pbWFnZSxcclxuICAgICAgICAgICAgLnVzZXIgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXIubWVkaXVtIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci5zbWFsbCAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci5tZWRpdW0gLmltYWdlIHtcclxuICAgICAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLmRyb3Bkb3duIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXIgLmltYWdlIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBcdFx0XHQudXNlciAuY29udGVudCB7XHJcbiAgICAgIFx0XHRcdFx0cGFkZGluZy1sZWZ0OjEycHg7XHJcbiAgICAgIFx0XHRcdH1cclxuICAgICAgICAgICAgLnVzZXIuc21hbGwgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLm5hbWUge1xyXG4gICAgICBcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgIFx0XHRcdFx0Zm9udC1zaXplOjE2cHg7XHJcbiAgICAgIFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgXHRcdFx0fVxyXG4gICAgICAgICAgICAudXNlci5zbWFsbCAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6MTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLm1lZGl1bSAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgXHRcdFx0XHRmb250LXNpemU6MTNweDtcclxuICAgICAgXHRcdFx0XHRjb2xvcjpyZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgIFx0XHRcdH1cclxuICAgICAgICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXHRcdGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKDxCbGFuayBzaXplPXt0aGlzLnByb3BzLnNpemV9IC8+KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCbGFuayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKHRoaXMucHJvcHMuc2l6ZSAhPSAnZHJvcGRvd24nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYW5rIHN0cmluZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBkZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBhdmF0YXJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShVc2VyKSJdfQ== */\n/*@ sourceURL=components\\user.js */'
        }));
      } else {
        return _react2.default.createElement(Blank, { size: this.props.size });
      }
    }
  }]);

  return User;
}(_react2.default.Component);

var Blank = exports.Blank = function (_React$Component2) {
  (0, _inherits3.default)(Blank, _React$Component2);

  function Blank(props) {
    (0, _classCallCheck3.default)(this, Blank);

    return (0, _possibleConstructorReturn3.default)(this, (Blank.__proto__ || (0, _getPrototypeOf2.default)(Blank)).call(this, props));
  }

  (0, _createClass3.default)(Blank, [{
    key: 'render',
    value: function render() {
      if (this.props.size != 'dropdown') {
        return _react2.default.createElement('div', { className: 'user' }, _react2.default.createElement('div', { className: 'blank string' }), _react2.default.createElement('div', { className: 'blank description' }));
      } else {
        return _react2.default.createElement('div', { className: 'user' }, _react2.default.createElement('div', { className: 'blank avatar' }));
      }
    }
  }]);

  return Blank;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(User);