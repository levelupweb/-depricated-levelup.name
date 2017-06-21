'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _userList = require('./userList');

var _userList2 = _interopRequireDefault(_userList);

var _tagsList = require('./tagsList');

var _tagsList2 = _interopRequireDefault(_tagsList);

var _blogList = require('./blogList');

var _blogList2 = _interopRequireDefault(_blogList);

var _reactRedux = require('react-redux');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _user3 = require('../actions/user');

var _initscripts = require('../utils/initscripts.js');

var _loader = require('./loader.js');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function (_React$Component) {
		(0, _inherits3.default)(Sidebar, _React$Component);

		function Sidebar(props) {
				(0, _classCallCheck3.default)(this, Sidebar);

				var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

				_this.currentUser = _this.props.user.profile;
				_this.state = {
						subscriptions: {
								users: null,
								blogs: null,
								tags: null,
								popular: null
						}
				};
				return _this;
		}

		(0, _createClass3.default)(Sidebar, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
						this.setFooter();
						(0, _initscripts.UI)();
				}
		}, {
				key: 'handleLogout',
				value: function () {
						var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
								return _regenerator2.default.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																_context.next = 2;
																return _jsCookie2.default.remove('x-access-token', { path: '' });

														case 2:
																_context.next = 4;
																return this.props.dispatch({ type: 'LOGOUT' });

														case 4:
																_context.next = 6;
																return _index2.default.push('/', '/', {});

														case 6:
														case 'end':
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						function handleLogout() {
								return _ref.apply(this, arguments);
						}

						return handleLogout;
				}()

				// Упростить

		}, {
				key: 'setFooter',
				value: function setFooter() {
						var footer = document.getElementById('footer');
						var footerHeight = footer.scrollHeight;
						var windowHeight = window.innerHeight;
						var sidebar = document.getElementsByClassName('sidebar')[0];
						sidebar.style.paddingBottom = footerHeight + 10 + 'px';
						footer.style.top = 100 + '%';
						footer.style.marginTop = this.state.auth ? footerHeight / 2 + 'px' : -footerHeight + 'px';
				}
		}, {
				key: 'userBarSwitch',
				value: function userBarSwitch() {
						$('.sidebar').dimmer('add content', $('.sidebar .menu.vertical')).dimmer('show');
				}
		}, {
				key: 'render',
				value: function render() {
						var _this2 = this;

						return _react2.default.createElement('div', { className: 'sidebar', 'data-jsx': 2353757399
						}, !this.props.user.isLogged ? _react2.default.createElement('div', {
								'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'block profile simple', 'data-jsx': 2353757399
						}, _react2.default.createElement(_link2.default, { href: '/auth' }, _react2.default.createElement('a', {
								'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-lock', 'data-jsx': 2353757399
						}), ' \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F'))), _react2.default.createElement('div', { className: 'block sidebar-block', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 2353757399
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2353757399
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 2353757399
						}, '\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 2353757399
						}, _react2.default.createElement(_tagsList2.default, null)))) : // Если залогинен пользователь 
						_react2.default.createElement('div', {
								'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'profile block', 'data-jsx': 2353757399
						}, _react2.default.createElement(_user2.default, null), _react2.default.createElement('div', { className: 'button userbar', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { onClick: function onClick() {
										_this2.userBarSwitch();
								}, className: 'ui icon top left pointing button', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 2353757399
						}))), _react2.default.createElement('div', { className: 'ui secondary vertical menu block-shadow', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'block profile', 'data-jsx': 2353757399
						}, _react2.default.createElement('a', { className: 'item', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-user', 'data-jsx': 2353757399
						}), ' \u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-pencil', 'data-jsx': 2353757399
						}), ' \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-cog', 'data-jsx': 2353757399
						}), ' \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-flash', 'data-jsx': 2353757399
						}), ' \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430'), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 2353757399
						}), _react2.default.createElement('a', { onClick: function onClick() {
										_this2.handleLogout();
								}, className: 'item', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-sign-out', 'data-jsx': 2353757399
						}), ' \u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'block-horizontal add', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'ui vertical labeled icon buttons small fluid', 'data-jsx': 2353757399
						}, _react2.default.createElement(_link2.default, { href: '/editor', prefetch: true }, _react2.default.createElement('a', { className: 'large labeled icon fluid ui button black', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-pencil icon', 'data-jsx': 2353757399
						}), '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442')), _react2.default.createElement(_link2.default, { href: '/editor', prefetch: true }, _react2.default.createElement('a', { className: 'large labeled icon fluid ui button black', 'data-jsx': 2353757399
						}, _react2.default.createElement('i', { className: 'fa fa-camera icon', 'data-jsx': 2353757399
						}), 'Live')))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'subscriptions', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 2353757399
						}, _react2.default.createElement('h3', { className: 'ui header inverted', 'data-jsx': 2353757399
						}, '\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 ', _react2.default.createElement('small', {
								'data-jsx': 2353757399
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 2353757399
						}, _react2.default.createElement(_userList2.default, { subscriber: this.currentUser._id }), _react2.default.createElement('h4', { className: 'ui header inverted', 'data-jsx': 2353757399
						}, '\u0411\u043B\u043E\u0433\u0438'), _react2.default.createElement(_blogList2.default, { subscriber: this.props.user.profile._id }), _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 2353757399
						}, _react2.default.createElement('h4', { className: 'ui header inverted', 'data-jsx': 2353757399
						}, '\u0422\u0435\u043C\u044B'), _react2.default.createElement(_tagsList2.default, { subscriber: this.props.user.profile._id }))))), _react2.default.createElement('div', { className: 'block footer', id: 'footer', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'ui dropdown switcher', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'text', 'data-jsx': 2353757399
						}, _react2.default.createElement('b', {
								'data-jsx': 2353757399
						}, 'Levelup.name ', _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 2353757399
						}))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 2353757399
						}, _react2.default.createElement('div', { className: 'item', 'data-jsx': 2353757399
						}, 'Levelupmusic'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2353757399
						}, 'Levelupworlds'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2353757399
						}, 'Levelupplace'))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 2353757399
						}, _react2.default.createElement('a', { href: '#', 'data-jsx': 2353757399
						}, '\u043F\u043E\u043C\u043E\u0449\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 2353757399
						}, '\u043A\u0430\u0440\u044C\u0435\u0440\u0430'), _react2.default.createElement('a', { href: '#', 'data-jsx': 2353757399
						}, '\u0431\u043B\u043E\u0433'), _react2.default.createElement('a', { href: '#', 'data-jsx': 2353757399
						}, '\u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 2353757399
						}, '\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435')))), _react2.default.createElement(_style2.default, {
								styleId: 2353757399,
								css: '.block.add[data-jsx="2353757399"] {margin-top:0px;padding-top:0px;}.sidebar[data-jsx="2353757399"] {position:relative;overflow-y:scroll;background:#101010;}.sidebar[data-jsx="2353757399"]::-webkit-scrollbar {display:none;}.sidebar[data-jsx="2353757399"]::-webkit-scrollbar-thumb {display:none;}.sidebar-block[data-jsx="2353757399"] .title[data-jsx="2353757399"] .ui.header[data-jsx="2353757399"] {color:#fff;}.footer[data-jsx="2353757399"] {background:transparent;;position:absolute;left:0px;}.footer[data-jsx="2353757399"] .menu[data-jsx="2353757399"] {display:-webkit-flex; display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}.footer[data-jsx="2353757399"] .switcher[data-jsx="2353757399"] .menu[data-jsx="2353757399"] {display:none;bottom:100%!important;margin-bottom:10px;top:auto!important;}.footer[data-jsx="2353757399"] .menu[data-jsx="2353757399"] a[data-jsx="2353757399"] {display:inline-block;margin-right:10px;margin-bottom:5px;color:#c0c0c0;}.footer[data-jsx="2353757399"] .switcher[data-jsx="2353757399"] {margin-bottom:5px;color:#fff;display:block;}.profile[data-jsx="2353757399"] {position:relative;text-align:left;}.profile.simple[data-jsx="2353757399"] {height:85px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;}.profile.simple[data-jsx="2353757399"] a[data-jsx="2353757399"] {font-size:15px;font-weight:bold;color:#fff;}.profile[data-jsx="2353757399"] .menu[data-jsx="2353757399"] .profile[data-jsx="2353757399"] .content[data-jsx="2353757399"] .description[data-jsx="2353757399"] {color:#c0c0c0!important;}.profile[data-jsx="2353757399"] .secondary.menu[data-jsx="2353757399"] {text-align:left;}.profile[data-jsx="2353757399"] .button[data-jsx="2353757399"] {position: absolute;right:0px;top:0px;bottom:0px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;padding:10px;margin-right:18px;cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;background:none!important;height:auto;color:#fff!important;}.button[data-jsx="2353757399"]:focus {background:#c0c0c0!important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0lpQixBQUNDLG1DQUNJLGVBQ0MsZ0JBQ2hCLENBQ08saUNBQ1Msa0JBQ0Esa0JBQ0MsbUJBQ25CLENBQzRCLG9EQUNmLGFBQ2IsQ0FDa0MsMERBQ3JCLGFBQ2IsQ0FDaUMsdUdBQ3RCLFdBQ1gsQ0FDUSxnQ0FDZSx1QkFBQyxDQUNOLGtCQUNULFNBQ1QsQ0FDZ0IsNkRBQ0gsbUNBQ0UsMERBQ0ksc0VBQ2pCLENBQ3dCLDhGQUNiLGFBQ1Msc0JBQ0gsbUJBQ0EsbUJBQ2pCLENBQ2dCLHNGQUNLLHFCQUNMLGtCQUNBLGtCQUNKLGNBQ1osQ0FDa0IsaUVBQ0Esa0JBQ1AsV0FDRyxjQUNkLENBQ1UsaUNBQ1Esa0JBQ0YsZ0JBQ2hCLENBQ2dCLHdDQUNILFlBQ0MsbUNBQ1UsdUJBQ0osbUJBQ3BCLENBQ2tCLGlFQUNMLGVBQ0UsaUJBQ04sV0FDVCxDQUM4QyxrS0FDdEIsd0JBQ3hCLENBQ3lCLHdFQUNYLGdCQUNkLENBQ2UsZ0VBQ0UsbUJBQ1QsVUFDRixRQUNHLFdBQ0UsbUNBQ1UsdUJBQ0osbUJBQ04sYUFDSyxrQkFDSCxlQUNVLHFIQUNDLDBCQUNkLFlBQ1MscUJBQ3JCLENBQ2Msc0NBQ2UsNkJBQzdCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4vdXNlckxpc3QnXHJcbmltcG9ydCBUYWdzTGlzdCBmcm9tICcuL3RhZ3NMaXN0J1xyXG5pbXBvcnQgQmxvZ0xpc3QgZnJvbSAnLi9ibG9nTGlzdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZ2V0TG9nb3V0LCBnZXRVc2VyRmllbGQgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXInXHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vdXRpbHMvaW5pdHNjcmlwdHMuanMnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXIuanMnXHJcblxyXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMucHJvcHMudXNlci5wcm9maWxlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIFx0c3Vic2NyaXB0aW9uczoge1xyXG4gICAgXHRcdHVzZXJzOiBudWxsLFxyXG4gICAgXHRcdGJsb2dzOiBudWxsLFxyXG4gICAgXHRcdHRhZ3M6IG51bGwsXHJcbiAgICBcdFx0cG9wdWxhcjogbnVsbFxyXG4gICAgXHR9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICBcdHRoaXMuc2V0Rm9vdGVyKClcclxuICBcdFVJKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVMb2dvdXQoKSB7XHJcbiAgXHRhd2FpdCBjb29raWVzLnJlbW92ZSgneC1hY2Nlc3MtdG9rZW4nLCB7IHBhdGg6ICcnIH0pO1xyXG4gIFx0YXdhaXQgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0xPR09VVCd9KTtcclxuICBcdGF3YWl0IHJvdXRlci5wdXNoKCcvJywgJy8nLCB7fSlcclxuICB9XHJcblxyXG4gIC8vINCj0L/RgNC+0YHRgtC40YLRjFxyXG4gIHNldEZvb3RlcigpIHtcclxuICBcdHZhciBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XHJcbiAgXHR2YXIgZm9vdGVySGVpZ2h0ID0gZm9vdGVyLnNjcm9sbEhlaWdodDtcclxuICBcdHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgXHR2YXIgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXInKVswXTtcclxuICBcdHNpZGViYXIuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGZvb3RlckhlaWdodCArIDEwICsgJ3B4JztcclxuICBcdGZvb3Rlci5zdHlsZS50b3AgPSAxMDAgKyAnJSdcclxuICBcdGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSAgKHRoaXMuc3RhdGUuYXV0aCkgPyAoZm9vdGVySGVpZ2h0LzIgKyAncHgnKSA6ICgtZm9vdGVySGVpZ2h0ICsgJ3B4JylcclxuICB9XHJcblxyXG4gIHVzZXJCYXJTd2l0Y2goKSB7XHJcbiAgXHQkKCcuc2lkZWJhcicpXHJcbiAgXHQuZGltbWVyKCdhZGQgY29udGVudCcsICQoJy5zaWRlYmFyIC5tZW51LnZlcnRpY2FsJykpXHJcbiAgXHQuZGltbWVyKCdzaG93Jyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgXHR7IXRoaXMucHJvcHMudXNlci5pc0xvZ2dlZCA/IFxyXG4gICAgICBcdFx0PGRpdj5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBwcm9maWxlIHNpbXBsZVwiPlxyXG4gICAgICBcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYXV0aFwiPjxhPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIj48L2k+INCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2E+PC9MaW5rPlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCI+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgIFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCi0LXQvNGLIDxzbWFsbD7Qv9C+0L/Rg9C70Y/RgNC90YvQtTwvc21hbGw+XHJcblx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0PFRhZ3NMaXN0IC8+XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ6IC8vINCV0YHQu9C4INC30LDQu9C+0LPQuNC90LXQvSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YwgXHJcbiAgICAgIFx0XHQ8ZGl2PlxyXG5cdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUgYmxvY2tcIj5cclxuXHRcdCAgICAgIFx0XHQ8VXNlciAvPlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHVzZXJiYXJcIj5cclxuXHRcdFx0ICAgICAgXHRcdDxkaXYgb25DbGljaz17KCkgPT4ge3RoaXMudXNlckJhclN3aXRjaCgpfX0gY2xhc3NOYW1lPVwidWkgaWNvbiB0b3AgbGVmdCBwb2ludGluZyBidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0ICBcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBzZWNvbmRhcnkgdmVydGljYWwgbWVudSBibG9jay1zaGFkb3dcIj5cclxuXHRcdFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIj48L2k+INCc0L7QuSDQv9GA0L7RhNC40LvRjDwvYT5cclxuXHRcdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+INCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YI8L2E+XHJcblx0XHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPiDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvYT5cclxuXHRcdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mbGFzaFwiPjwvaT4g0KHRgtCw0YLQuNGB0YLQuNC60LA8L2E+XHJcblx0XHRcdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQgIDxhIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUxvZ291dCgpfX0gY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPiDQktGL0YXQvtC0PC9hPlxyXG5cdFx0XHRcdFx0XHQgIFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1ob3Jpem9udGFsIGFkZFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVpIHZlcnRpY2FsIGxhYmVsZWQgaWNvbiBidXR0b25zIHNtYWxsIGZsdWlkXCI+XHJcblx0XHRcdFx0XHRcdCAgPExpbmsgaHJlZj1cIi9lZGl0b3JcIiBwcmVmZXRjaD48YSBjbGFzc05hbWU9XCJsYXJnZSBsYWJlbGVkIGljb24gZmx1aWQgdWkgYnV0dG9uIGJsYWNrXCI+XHJcblx0XHRcdFx0XHRcdCAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWwgaWNvblwiPjwvaT5cclxuXHRcdFx0XHRcdFx0ICAgINCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YJcclxuXHRcdFx0XHRcdFx0ICA8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQgIDxMaW5rIGhyZWY9XCIvZWRpdG9yXCIgcHJlZmV0Y2g+PGEgY2xhc3NOYW1lPVwibGFyZ2UgbGFiZWxlZCBpY29uIGZsdWlkIHVpIGJ1dHRvbiBibGFja1wiPlxyXG5cdFx0XHRcdFx0XHQgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FtZXJhIGljb25cIj48L2k+XHJcblx0XHRcdFx0XHRcdCAgICBMaXZlXHJcblx0XHRcdFx0XHRcdCAgPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHNpZGViYXItYmxvY2tcIiBpZD1cInN1YnNjcmlwdGlvbnNcIj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdCAgICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyIGludmVydGVkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHTQn9C+0LTQv9C40YHQutC4IDxzbWFsbD7QuNGB0YHQu9C10LTQvtCy0LDRgtGMPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0PFVzZXJMaXN0IHN1YnNjcmliZXI9e3RoaXMuY3VycmVudFVzZXIuX2lkfSAvPlxyXG5cdFx0ICAgICAgXHRcdFx0PGg0IGNsYXNzTmFtZT1cInVpIGhlYWRlciBpbnZlcnRlZFwiPtCR0LvQvtCz0Lg8L2g0PlxyXG5cdFx0ICAgICAgXHRcdFx0PEJsb2dMaXN0IHN1YnNjcmliZXI9e3RoaXMucHJvcHMudXNlci5wcm9maWxlLl9pZH0gLz5cclxuXHRcdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stdmVydGljYWxcIj5cclxuXHRcdFx0ICAgICAgXHRcdFx0PGg0IGNsYXNzTmFtZT1cInVpIGhlYWRlciBpbnZlcnRlZFwiPtCi0LXQvNGLPC9oND5cclxuXHRcdFx0ICAgICAgXHRcdFx0PFRhZ3NMaXN0IHN1YnNjcmliZXI9e3RoaXMucHJvcHMudXNlci5wcm9maWxlLl9pZH0gLz5cclxuXHRcdCAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHRcdCAgICA8L2Rpdj5cclxuICAgICAgXHR9XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBmb290ZXJcIiBpZD1cImZvb3RlclwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgZHJvcGRvd24gc3dpdGNoZXJcIj5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPjxiPkxldmVsdXAubmFtZSA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPjwvYj48L2Rpdj5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwbXVzaWM8L2Rpdj5cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGV2ZWx1cHdvcmxkczwvZGl2PlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwcGxhY2U8L2Rpdj5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC/0L7QvNC+0YnRjDwvYT5cclxuICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC60LDRgNGM0LXRgNCwPC9hPlxyXG4gICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0LHQu9C+0LM8L2E+XHJcbiAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7Qv9GD0LHQu9C40YfQvdC+0YHRgtGMPC9hPlxyXG4gICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0L4g0L/RgNC+0LXQutGC0LU8L2E+XHJcbiAgICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcblx0XHQgIFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0ICBcdFx0LmJsb2NrLmFkZCB7XHJcblx0XHQgIFx0XHRcdG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0ICBcdFx0XHRwYWRkaW5nLXRvcDowcHg7XHJcblx0XHQgIFx0XHR9XHJcblx0XHRcdFx0LnNpZGViYXIge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRvdmVyZmxvdy15OnNjcm9sbDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IzEwMTAxMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnNpZGViYXItYmxvY2sgLnRpdGxlIC51aS5oZWFkZXIge1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmZvb3RlciB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OztcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICBcdFx0LmZvb3RlciAubWVudSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LXdyYXA6d3JhcDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLnN3aXRjaGVyIC5tZW51IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdGJvdHRvbToxMDAlIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0XHRcdHRvcDphdXRvIWltcG9ydGFudDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLm1lbnUgYSB7XHJcblx0XHQgIFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiNjMGMwYzA7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQuZm9vdGVyIC5zd2l0Y2hlciB7XHJcblx0XHQgIFx0XHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0ICBcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0ICBcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgIHtcclxuXHRcdCAgXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHQgIFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlLnNpbXBsZSB7XHJcblx0XHQgIFx0XHRcdCBoZWlnaHQ6ODVweDtcclxuXHRcdCAgXHRcdFx0IGRpc3BsYXk6ZmxleDtcclxuXHRcdCAgXHRcdFx0IGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHQgIFx0XHRcdCBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZS5zaW1wbGUgYSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MTVweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgLm1lbnUgLnByb2ZpbGUgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuXHRcdCAgXHRcdFx0Y29sb3I6I2MwYzBjMCFpbXBvcnRhbnQ7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZSAuc2Vjb25kYXJ5Lm1lbnUge1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0XHRcdC5wcm9maWxlIC5idXR0b24ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6MHB4O1xyXG5cdFx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRcdGJvdHRvbTowcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE4cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246MC4ycyBhbGwgZWFzZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHRcdGNvbG9yOiNmZmYhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYnV0dG9uOmZvY3VzIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2MwYzBjMCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICAgIGB9PC9zdHlsZT4gIFxyXG5cdFx0PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShTaWRlYmFyKSJdfQ== */\n/*@ sourceURL=components\\sidebar.js */'
						}));
				}
		}]);

		return Sidebar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
		return store;
})(Sidebar);