'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

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
        return _react2.default.createElement('div', { className: this.props.size + ' user', 'data-jsx': 1437268932
        }, _react2.default.createElement('div', { className: 'image', 'data-jsx': 1437268932
        }, _react2.default.createElement('div', { className: 'ui inline dropdown', 'data-jsx': 1437268932
        }, _react2.default.createElement('div', { className: 'text', 'data-jsx': 1437268932
        }, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } } }, _react2.default.createElement('a', {
          'data-jsx': 1437268932
        }, _react2.default.createElement(_reactAvatar2.default, { color: '#46978c', round: true, size: 32, src: user.userImage, name: user.slug })))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1437268932
        }, _react2.default.createElement('div', { className: 'item', 'data-text': 'this week', 'data-jsx': 1437268932
        }, '\u041F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 1437268932
        }, '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 1437268932
        }, '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438'), _react2.default.createElement('div', { className: 'divider', 'data-jsx': 1437268932
        }), _react2.default.createElement('div', { className: 'item', 'data-text': 'this month', 'data-jsx': 1437268932
        }, '\u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 1437268932
        }, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } } }, _react2.default.createElement('a', {
          'data-jsx': 1437268932
        }, _react2.default.createElement('span', { className: 'name', 'data-jsx': 1437268932
        }, user.slug))), _react2.default.createElement('div', { className: this.props.size == 'small' ? 'hidden' : 'description', 'data-jsx': 1437268932
        }, user.userDescription)), _react2.default.createElement(_style2.default, {
          styleId: 1437268932,
          css: '.user[data-jsx="1437268932"] {display:-webkit-flex; display:flex;margin: 6px 0px;align-items: center;}.user[data-jsx="1437268932"] .image[data-jsx="1437268932"],.user[data-jsx="1437268932"] .content[data-jsx="1437268932"] {display:-webkit-flex; display:flex;align-items:center;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;}.user.small[data-jsx="1437268932"] {margin-bottom:6px;}.user.medium[data-jsx="1437268932"] {margin-bottom:4px;}.user.small[data-jsx="1437268932"] .image[data-jsx="1437268932"] {width:20px;height:20px;margin:0px;}.user.medium[data-jsx="1437268932"] .image[data-jsx="1437268932"] {width:30px;height:30px;}.user.dropdown[data-jsx="1437268932"] .content[data-jsx="1437268932"] {display:none;}.user[data-jsx="1437268932"] .image[data-jsx="1437268932"] a[data-jsx="1437268932"] {display:inline-block;}.user[data-jsx="1437268932"] .content[data-jsx="1437268932"] {padding-left:15px;}.user.small[data-jsx="1437268932"] .content[data-jsx="1437268932"] {padding-left:8px;margin:5px 0px;}.user[data-jsx="1437268932"] .content[data-jsx="1437268932"] .name[data-jsx="1437268932"] {display:block;font-size:17px;font-weight:bold;}.user.small[data-jsx="1437268932"] .content[data-jsx="1437268932"] .name[data-jsx="1437268932"] {font-size:14px;font-weight:100;}.user.medium[data-jsx="1437268932"] .content[data-jsx="1437268932"] .name[data-jsx="1437268932"] {font-size:14px;}.user[data-jsx="1437268932"] .content[data-jsx="1437268932"] .description[data-jsx="1437268932"] {font-size:13px;color:rgba(0,0,0,0.4);}.user.medium[data-jsx="1437268932"] .content[data-jsx="1437268932"] .description[data-jsx="1437268932"] {font-size:13px;margin-top:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQixBQUNOLDhCQUNRLG1DQUNNLGdCQUNJLG9CQUN4QixDQUdrQix5SEFDRCxtQ0FDTSxtQkFDRywrRUFDdkIsQ0FFWSxvQ0FDTyxrQkFDbkIsQ0FFYSxxQ0FDTSxrQkFDbkIsQ0FFbUIsa0VBQ1AsV0FDQyxZQUNELFdBQ1osQ0FFb0IsbUVBQ1IsV0FDQyxZQUNiLENBRXdCLHVFQUNWLGFBQ2QsQ0FFZSxxRkFDTyxxQkFDdEIsQ0FFWSw4REFDRyxrQkFDbEIsQ0FFd0Isb0VBQ0gsaUJBQ0YsZUFDaEIsQ0FFa0IsMkZBQ1AsY0FDQyxlQUNFLGlCQUNqQixDQUU4QixpR0FDWCxlQUNDLGdCQUNqQixDQUU0QixrR0FDWixlQUNoQixDQUV5QixrR0FDYixlQUNPLHNCQUN0QixDQUVzQyx5R0FDbkIsZUFDQSxlQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFx1c2VyLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2FwcC5jb25maWcuanMnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXInXHJcbmltcG9ydCB7IGdldFVzZXJCeUlkIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyLmpzJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcclxuXHJcbi8vIDEuINCg0LDQt9C00LXQu9C40YLRjCDQstC40LQg0LTQu9GPINCy0LvQsNC00LXQu9GM0YbQsCDQuCDQtNC70Y8g0YLRgNC10YLRjNC40YUg0LvQuNGGXHJcbi8vIDIuINCf0L7RhNC40LrRgdC40YLRjCDQsdCw0LMg0YEg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8IHNtYWxsLdGC0LXQvNC/0LvQtdC50YLQsFxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICB1c2VyOiB7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5pZCkge1xyXG4gICAgICB2YXIgdXNlciA9IGF3YWl0IGdldFVzZXJCeUlkKHRoaXMucHJvcHMuaWQpXHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgIHVzZXI6IHVzZXIuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNMb2FkZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIucHJvZmlsZVxyXG4gICAgICB9KVxyXG4gICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnNpemV9IHVzZXJgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbmxpbmUgZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICd1c2VyJywgcXVlcnk6IHsgc2x1ZzogdXNlci5zbHVnIH19fT48YT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBjb2xvcj17YCM0Njk3OGNgfSByb3VuZD17dHJ1ZX0gc2l6ZT17MzJ9IHNyYz17dXNlci51c2VySW1hZ2V9IG5hbWU9e3VzZXIuc2x1Z30gLz5cclxuICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXRleHQ9XCJ0aGlzIHdlZWtcIj7Qn9GA0L7RhNC40LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdGV4dD1cInRoaXMgbW9udGhcIj7QndCw0YHRgtGA0L7QudC60Lg8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS10ZXh0PVwidGhpcyBtb250aFwiPtCS0YvRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAndXNlcicsIHF1ZXJ5OiB7IHNsdWc6IHVzZXIuc2x1ZyB9fX0+PGE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLnNsdWd9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuc2l6ZSA9PSAnc21hbGwnKSA/IGBoaWRkZW5gIDogYGRlc2NyaXB0aW9uYH0+e3VzZXIudXNlckRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgIFx0XHQ8c3R5bGUganN4PntgXHJcbiAgICBcdFx0XHQudXNlciB7XHJcbiAgICBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAudXNlciAuaW1hZ2UsXHJcbiAgICAgICAgICAudXNlciAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIuc21hbGwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci5tZWRpdW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci5zbWFsbCAuaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci5tZWRpdW0gLmltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIuZHJvcGRvd24gLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIgLmltYWdlIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICBcdFx0XHQudXNlciAuY29udGVudCB7XHJcbiAgICBcdFx0XHRcdHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgXHRcdFx0fVxyXG5cclxuICAgICAgICAgIC51c2VyLnNtYWxsIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjhweDtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLm5hbWUge1xyXG4gICAgXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG4gICAgXHRcdFx0XHRmb250LXNpemU6MTdweDtcclxuICAgIFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAudXNlci5zbWFsbCAuY29udGVudCAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDoxMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXIubWVkaXVtIC5jb250ZW50IC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgXHRcdFx0LnVzZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICAgIFx0XHRcdFx0Zm9udC1zaXplOjEzcHg7XHJcbiAgICBcdFx0XHRcdGNvbG9yOnJnYmEoMCwwLDAsMC40KTtcclxuICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAudXNlci5tZWRpdW0gLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgXHRcdGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICg8ZGl2PtCX0LDQs9GA0YPQt9C60LAuLjwvZGl2PilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShVc2VyKSJdfQ== */\n/*@ sourceURL=components\\user.js */'
        }));
      } else {
        return _react2.default.createElement('div', null, '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..');
      }
    }
  }]);

  return User;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(User);