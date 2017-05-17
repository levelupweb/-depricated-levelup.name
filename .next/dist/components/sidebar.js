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

var _userList = require('./user-list');

var _userList2 = _interopRequireDefault(_userList);

var _tagsList = require('./tags-list');

var _tagsList2 = _interopRequireDefault(_tagsList);

var _reactRedux = require('react-redux');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _user3 = require('../actions/user');

var _initscripts = require('../utils/initscripts.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function (_React$Component) {
		(0, _inherits3.default)(Sidebar, _React$Component);

		function Sidebar(props) {
				(0, _classCallCheck3.default)(this, Sidebar);

				var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

				_this.state = {
						auth: _this.props.user.isLogged,
						subscriptions: {
								users: [{ name: 'Алексей Ашанов', description: 'Программист', updates: 1, id: 0 }, { name: 'Иван Коряковцев', description: 'Веб-разработчик', updates: 0, id: 1 }, { name: 'Алексей Навальный', description: 'Политик, юрист', updates: 1, id: 2 }, { name: 'Стив Джобс', description: 'Предприниматель', updates: 0, id: 3 }, { name: 'Анна Ахматова', description: 'Писательница', updates: 0, id: 4 }],

								blogs: [{ name: 'Spark', description: 'Веб-сайт', image: '../static/img/sidebar/subscriptions/spark.png', updates: 1, id: 0 }, { name: 'Wylsacom', image: '../static/img/sidebar/subscriptions/apple.png', description: 'Блоггер', updates: 0, id: 1 }, { name: 'Habrahabr', image: '../static/img/sidebar/subscriptions/habr.png', description: 'Веб-сайт', updates: 1, id: 2 }],

								tags: [{ title: 'природа', id: 1 }, { title: 'программирование', id: 2 }, { title: 'seo', id: 3 }, { title: 'машинное обучение', id: 4 }, { title: 'игры', id: 5 }, { title: 'javascript', id: 6 }, { title: 'arduino', id: 7 }, { title: 'веб-разработка', id: 8 }],

								popular: [{ title: 'живопись', id: 1 }, { title: 'программирование', id: 2 }, { title: 'игры', id: 3 }, { title: 'музыка', id: 4 }, { title: 'социальные сети', id: 5 }, { title: 'личная эффективность', id: 6 }, { title: 'технологии', id: 7 }, { title: 'веб-разработка', id: 8 }]
						}
				};
				return _this;
		}

		(0, _createClass3.default)(Sidebar, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
						this.setFooter();
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
						(0, _initscripts.UI)();
						$('.sidebar').dimmer('add content', $('.sidebar .menu.vertical')).dimmer('show');
				}
		}, {
				key: 'componentDidUpdate',
				value: function componentDidUpdate() {
						this.setFooter();
				}
		}, {
				key: 'render',
				value: function render() {
						var _this2 = this;

						return _react2.default.createElement('div', { className: 'sidebar', 'data-jsx': 1755582788
						}, !this.props.user.isLogged ? _react2.default.createElement('div', {
								'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'block profile simple', 'data-jsx': 1755582788
						}, _react2.default.createElement(_link2.default, { href: '/auth' }, _react2.default.createElement('a', {
								'data-jsx': 1755582788
						}, _react2.default.createElement('i', { className: 'fa fa-lock', 'data-jsx': 1755582788
						}), ' \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F'))), _react2.default.createElement('div', { className: 'block sidebar-block', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1755582788
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1755582788
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 1755582788
						}, '\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1755582788
						}, _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.popular })))) : _react2.default.createElement('div', {
								'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'profile block', 'data-jsx': 1755582788
						}, _react2.default.createElement(_user2.default, { id: this.props.user.profile._id }), _react2.default.createElement('div', { className: 'button userbar', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { onClick: function onClick() {
										_this2.userBarSwitch();
								}, className: 'ui icon top left pointing button', 'data-jsx': 1755582788
						}, _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 1755582788
						}))), _react2.default.createElement('div', { className: 'ui secondary vertical menu block-shadow', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'block profile', 'data-jsx': 1755582788
						}, _react2.default.createElement('a', { className: 'item', 'data-jsx': 1755582788
						}, _react2.default.createElement('i', { className: 'fa fa-user', 'data-jsx': 1755582788
						}), ' \u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1755582788
						}, _react2.default.createElement('i', { className: 'fa fa-pencil', 'data-jsx': 1755582788
						}), ' \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1755582788
						}, _react2.default.createElement('i', { className: 'fa fa-cog', 'data-jsx': 1755582788
						}), ' \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1755582788
						}, _react2.default.createElement('i', { className: 'fa fa-flash', 'data-jsx': 1755582788
						}), ' \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430'), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 1755582788
						}), _react2.default.createElement('a', { onClick: function onClick() {
										_this2.handleLogout();
								}, className: 'item', 'data-jsx': 1755582788
						}, _react2.default.createElement('i', { className: 'fa fa-sign-out', 'data-jsx': 1755582788
						}), ' \u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'block add', 'data-jsx': 1755582788
						}, _react2.default.createElement(_link2.default, { href: '/editor', prefetch: true }, _react2.default.createElement('button', { className: 'large fluid circular ui button primary', 'data-jsx': 1755582788
						}, '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'subscriptions', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1755582788
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1755582788
						}, '\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 ', _react2.default.createElement('small', {
								'data-jsx': 1755582788
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1755582788
						}, _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.users }), _react2.default.createElement('div', { className: 'ui section divider', 'data-jsx': 1755582788
						}), _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.blogs }))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'tags', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1755582788
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1755582788
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 1755582788
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1755582788
						}, _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.tags })))), _react2.default.createElement('div', { className: 'block footer', id: 'footer', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'ui dropdown switcher', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'text', 'data-jsx': 1755582788
						}, _react2.default.createElement('b', {
								'data-jsx': 1755582788
						}, 'Levelup.name ', _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 1755582788
						}))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1755582788
						}, _react2.default.createElement('div', { className: 'item', 'data-jsx': 1755582788
						}, 'Levelupmusic'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 1755582788
						}, 'Levelupworlds'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 1755582788
						}, 'Levelupplace'))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1755582788
						}, _react2.default.createElement('a', { href: '#', 'data-jsx': 1755582788
						}, '\u043F\u043E\u043C\u043E\u0449\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1755582788
						}, '\u043A\u0430\u0440\u044C\u0435\u0440\u0430'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1755582788
						}, '\u0431\u043B\u043E\u0433'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1755582788
						}, '\u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1755582788
						}, '\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435')))), _react2.default.createElement(_style2.default, {
								styleId: 1755582788,
								css: '.block.add[data-jsx="1755582788"] {padding-top:0px;}.sidebar[data-jsx="1755582788"] {position:relative;overflow-y:scroll;}.footer[data-jsx="1755582788"] {background:#f5f5f5;position:absolute;left:0px;}.footer[data-jsx="1755582788"] .menu[data-jsx="1755582788"] {display:-webkit-flex; display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}.footer[data-jsx="1755582788"] .switcher[data-jsx="1755582788"] .menu[data-jsx="1755582788"] {display:none;bottom:100%!important;margin-bottom:10px;top:auto!important;}.footer[data-jsx="1755582788"] .menu[data-jsx="1755582788"] a[data-jsx="1755582788"] {display:inline-block;margin-right:10px;margin-bottom:5px;color:#000;}.footer[data-jsx="1755582788"] .switcher[data-jsx="1755582788"] {margin-bottom:5px;color:#000;display:block;}.profile[data-jsx="1755582788"] {position:relative;text-align:left;}.profile.simple[data-jsx="1755582788"] {height:85px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;background:#f5f5f5;}.profile.simple[data-jsx="1755582788"] a[data-jsx="1755582788"] {font-size:15px;font-weight:bold;color:#000;}.profile[data-jsx="1755582788"] .menu[data-jsx="1755582788"] .profile[data-jsx="1755582788"] .content[data-jsx="1755582788"] .description[data-jsx="1755582788"] {color:#c0c0c0!important;}.profile[data-jsx="1755582788"] .secondary.menu[data-jsx="1755582788"] {text-align:left;}.profile[data-jsx="1755582788"] .button[data-jsx="1755582788"] {position: absolute;right:0px;top:0px;bottom:0px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;padding:10px;margin-right:18px;cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;background:none!important;height:auto;}.button[data-jsx="1755582788"]:focus {background:#c0c0c0!important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxnQixBQUNBLG1DQUNLLGdCQUNoQixDQUNTLGlDQUNTLGtCQUNBLGtCQUNsQixDQUNRLGdDQUNXLG1CQUNELGtCQUNULFNBQ1QsQ0FDZ0IsNkRBQ0gsbUNBQ0UsMERBQ0ksc0VBQ2pCLENBQ3dCLDhGQUNiLGFBQ1Msc0JBQ0gsbUJBQ0EsbUJBQ2pCLENBQ2dCLHNGQUNLLHFCQUNMLGtCQUNBLGtCQUNQLFdBQ1QsQ0FDa0IsaUVBQ0Esa0JBQ1AsV0FDRyxjQUNkLENBQ1UsaUNBQ1Esa0JBQ0YsZ0JBQ2hCLENBQ2dCLHdDQUNILFlBQ0MsbUNBQ1UsdUJBQ0osbUJBQ0EsbUJBQ3BCLENBQ2tCLGlFQUNMLGVBQ0UsaUJBQ04sV0FDVCxDQUM4QyxrS0FDdEIsd0JBQ3hCLENBQ3lCLHdFQUNYLGdCQUNkLENBRWUsZ0VBQ0UsbUJBQ1QsVUFDRixRQUNHLFdBQ0UsbUNBQ1UsdUJBQ0osbUJBQ04sYUFDSyxrQkFDSCxlQUNVLHFIQUNDLDBCQUNkLFlBQ1osQ0FDYyxzQ0FDZSw2QkFDN0IiLCJmaWxlIjoiY29tcG9uZW50c1xcc2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgVXNlckxpc3QgZnJvbSAnLi91c2VyLWxpc3QnXHJcbmltcG9ydCBUYWdzTGlzdCBmcm9tICcuL3RhZ3MtbGlzdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZ2V0TG9nb3V0IH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJ1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL3V0aWxzL2luaXRzY3JpcHRzLmpzJ1xyXG5cclxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdGF1dGg6IHRoaXMucHJvcHMudXNlci5pc0xvZ2dlZCxcclxuICAgIFx0c3Vic2NyaXB0aW9uczoge1xyXG4gICAgXHRcdHVzZXJzOiBbXHJcbiAgICBcdFx0XHR7bmFtZTogJ9CQ0LvQtdC60YHQtdC5INCQ0YjQsNC90L7QsicsIGRlc2NyaXB0aW9uOiAn0J/RgNC+0LPRgNCw0LzQvNC40YHRgicsIHVwZGF0ZXM6IDEsIGlkOiAwfSxcclxuICAgIFx0XHRcdHtuYW1lOiAn0JjQstCw0L0g0JrQvtGA0Y/QutC+0LLRhtC10LInLCBkZXNjcmlwdGlvbjogJ9CS0LXQsS3RgNCw0LfRgNCw0LHQvtGC0YfQuNC6JywgdXBkYXRlczogMCwgaWQ6IDF9LFxyXG4gICAgXHRcdFx0e25hbWU6ICfQkNC70LXQutGB0LXQuSDQndCw0LLQsNC70YzQvdGL0LknLCBkZXNjcmlwdGlvbjogJ9Cf0L7Qu9C40YLQuNC6LCDRjtGA0LjRgdGCJywgdXBkYXRlczogMSwgaWQ6IDJ9LFxyXG4gICAgXHRcdFx0e25hbWU6ICfQodGC0LjQsiDQlNC20L7QsdGBJywgZGVzY3JpcHRpb246ICfQn9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YwnLCB1cGRhdGVzOiAwLCBpZDogM30sXHJcbiAgICBcdFx0XHR7bmFtZTogJ9CQ0L3QvdCwINCQ0YXQvNCw0YLQvtCy0LAnLCBkZXNjcmlwdGlvbjogJ9Cf0LjRgdCw0YLQtdC70YzQvdC40YbQsCcsIHVwZGF0ZXM6IDAsIGlkOiA0fVxyXG4gICAgXHRcdF0sXHJcblxyXG4gICAgXHRcdGJsb2dzOiBbXHJcbiAgICBcdFx0XHR7bmFtZTogJ1NwYXJrJywgZGVzY3JpcHRpb246ICfQktC10LEt0YHQsNC50YInLCBpbWFnZTogJy4uL3N0YXRpYy9pbWcvc2lkZWJhci9zdWJzY3JpcHRpb25zL3NwYXJrLnBuZycsIHVwZGF0ZXM6IDEsIGlkOiAwfSxcclxuICAgIFx0XHRcdHtuYW1lOiAnV3lsc2Fjb20nLCBpbWFnZTogJy4uL3N0YXRpYy9pbWcvc2lkZWJhci9zdWJzY3JpcHRpb25zL2FwcGxlLnBuZycsIGRlc2NyaXB0aW9uOiAn0JHQu9C+0LPQs9C10YAnLCB1cGRhdGVzOiAwLCBpZDogMX0sXHJcbiAgICBcdFx0XHR7bmFtZTogJ0hhYnJhaGFicicsIGltYWdlOiAnLi4vc3RhdGljL2ltZy9zaWRlYmFyL3N1YnNjcmlwdGlvbnMvaGFici5wbmcnLCBkZXNjcmlwdGlvbjogJ9CS0LXQsS3RgdCw0LnRgicsIHVwZGF0ZXM6IDEsIGlkOiAyfVxyXG4gICAgXHRcdF0sXHJcblxyXG4gICAgXHRcdHRhZ3M6IFtcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C/0YDQuNGA0L7QtNCwJywgaWQ6IDF9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnLCBpZDogMn0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICdzZW8nLCBpZDogM30sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQvNCw0YjQuNC90L3QvtC1INC+0LHRg9GH0LXQvdC40LUnLCBpZDogNH0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQuNCz0YDRiycsIGlkOiA1fSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ2phdmFzY3JpcHQnLCBpZDogNn0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICdhcmR1aW5vJywgaWQ6IDd9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0LLQtdCxLdGA0LDQt9GA0LDQsdC+0YLQutCwJywgaWQ6IDh9LFxyXG4gICAgXHRcdF0sXHJcblxyXG4gICAgXHRcdHBvcHVsYXI6IFtcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C20LjQstC+0L/QuNGB0YwnLCBpZDogMX0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQv9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtScsIGlkOiAyfSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C40LPRgNGLJywgaWQ6IDN9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0LzRg9C30YvQutCwJywgaWQ6IDR9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0YHQvtGG0LjQsNC70YzQvdGL0LUg0YHQtdGC0LgnLCBpZDogNX0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQu9C40YfQvdCw0Y8g0Y3RhNGE0LXQutGC0LjQstC90L7RgdGC0YwnLCBpZDogNn0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfRgtC10YXQvdC+0LvQvtCz0LjQuCcsIGlkOiA3fSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9Cy0LXQsS3RgNCw0LfRgNCw0LHQvtGC0LrQsCcsIGlkOiA4fSxcclxuICAgIFx0XHRdXHJcbiAgICBcdH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIFx0dGhpcy5zZXRGb290ZXIoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlTG9nb3V0KCkge1xyXG4gIFx0YXdhaXQgY29va2llcy5yZW1vdmUoJ3gtYWNjZXNzLXRva2VuJywgeyBwYXRoOiAnJyB9KTtcclxuICBcdGF3YWl0IHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdMT0dPVVQnfSk7XHJcbiAgXHRhd2FpdCByb3V0ZXIucHVzaCgnLycsICcvJywge30pXHJcbiAgfVxyXG5cclxuICAvLyDQo9C/0YDQvtGB0YLQuNGC0YxcclxuICBzZXRGb290ZXIoKSB7XHJcbiAgXHR2YXIgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG4gIFx0dmFyIGZvb3RlckhlaWdodCA9IGZvb3Rlci5zY3JvbGxIZWlnaHQ7XHJcbiAgXHR2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIFx0dmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyJylbMF07XHJcbiAgXHRzaWRlYmFyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBmb290ZXJIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgXHRmb290ZXIuc3R5bGUudG9wID0gMTAwICsgJyUnXHJcbiAgXHRmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gICh0aGlzLnN0YXRlLmF1dGgpID8gKGZvb3RlckhlaWdodC8yICsgJ3B4JykgOiAoLWZvb3RlckhlaWdodCArICdweCcpXHJcbiAgfVxyXG5cclxuICB1c2VyQmFyU3dpdGNoKCkge1xyXG4gIFx0VUkoKTtcclxuICBcdCQoJy5zaWRlYmFyJylcclxuICBcdC5kaW1tZXIoJ2FkZCBjb250ZW50JywgJCgnLnNpZGViYXIgLm1lbnUudmVydGljYWwnKSlcclxuICBcdC5kaW1tZXIoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICBcdHRoaXMuc2V0Rm9vdGVyKClcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgXHR7IXRoaXMucHJvcHMudXNlci5pc0xvZ2dlZCA/IFxyXG4gICAgICBcdFx0PGRpdj5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBwcm9maWxlIHNpbXBsZVwiPlxyXG4gICAgICBcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYXV0aFwiPjxhPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIj48L2k+INCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2E+PC9MaW5rPlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCI+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgIFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCi0LXQvNGLIDxzbWFsbD7Qv9C+0L/Rg9C70Y/RgNC90YvQtTwvc21hbGw+XHJcblx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0PFRhZ3NMaXN0IHRhZ3M9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5wb3B1bGFyfSAvPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0OiBcclxuICAgICAgXHRcdDxkaXY+XHJcblx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZSBibG9ja1wiPlxyXG5cdFx0ICAgICAgXHRcdDxVc2VyIGlkPXt0aGlzLnByb3BzLnVzZXIucHJvZmlsZS5faWR9IC8+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24gdXNlcmJhclwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiB7dGhpcy51c2VyQmFyU3dpdGNoKCl9fSBjbGFzc05hbWU9XCJ1aSBpY29uIHRvcCBsZWZ0IHBvaW50aW5nIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlY29uZGFyeSB2ZXJ0aWNhbCBtZW51IGJsb2NrLXNoYWRvd1wiPlxyXG5cdFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPiDQnNC+0Lkg0L/RgNC+0YTQuNC70Yw8L2E+XHJcblx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT4g0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRgjwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPiDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmxhc2hcIj48L2k+INCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxyXG5cdFx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgIDxhIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUxvZ291dCgpfX0gY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPiDQktGL0YXQvtC0PC9hPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYWRkXCI+XHJcblx0XHQgICAgICBcdFx0PExpbmsgaHJlZj1cIi9lZGl0b3JcIiBwcmVmZXRjaD48YnV0dG9uIGNsYXNzTmFtZT1cImxhcmdlIGZsdWlkIGNpcmN1bGFyIHVpIGJ1dHRvbiBwcmltYXJ5XCI+XHJcblx0XHRcdFx0XHQgINCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YJcclxuXHRcdFx0XHRcdDwvYnV0dG9uPjwvTGluaz5cclxuXHRcdCAgICAgIFx0PC9kaXY+XHJcblxyXG5cdFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHNpZGViYXItYmxvY2tcIiBpZD1cInN1YnNjcmlwdGlvbnNcIj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdCAgICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx00J/QvtC00L/QuNGB0LrQuCA8c21hbGw+0LjRgdGB0LvQtdC00L7QstCw0YLRjDwvc21hbGw+XHJcblx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcblx0XHQgICAgICBcdFx0XHQ8VXNlckxpc3QgdXNlcnM9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy51c2Vyc30gLz5cclxuXHRcdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgc2VjdGlvbiBkaXZpZGVyXCI+PC9kaXY+XHJcblx0XHQgICAgICBcdFx0XHQ8VXNlckxpc3QgdXNlcnM9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5ibG9nc30gLz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0PC9kaXY+XHJcblxyXG5cdFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHNpZGViYXItYmxvY2tcIiBpZD1cInRhZ3NcIj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdCAgICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx00KLQtdC80YsgPHNtYWxsPtC40YHRgdC70LXQtNC+0LLQsNGC0Yw8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0PFRhZ3NMaXN0IHRhZ3M9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy50YWdzfSAvPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICBcdH1cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgZm9vdGVyXCIgaWQ9XCJmb290ZXJcIj5cclxuXHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBkcm9wZG93biBzd2l0Y2hlclwiPlxyXG5cdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGI+TGV2ZWx1cC5uYW1lIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9iPjwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwbXVzaWM8L2Rpdj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwd29ybGRzPC9kaXY+XHJcblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGV2ZWx1cHBsYWNlPC9kaXY+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC/0L7QvNC+0YnRjDwvYT5cclxuXHQgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0LrQsNGA0YzQtdGA0LA8L2E+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtCx0LvQvtCzPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7Qv9GD0LHQu9C40YfQvdC+0YHRgtGMPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7QviDQv9GA0L7QtdC60YLQtTwvYT5cclxuXHQgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuXHRcdCAgPHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5ibG9jay5hZGQge1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuc2lkZWJhciB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuZm9vdGVyIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2Y1ZjVmNTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICBcdFx0LmZvb3RlciAubWVudSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LXdyYXA6d3JhcDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLnN3aXRjaGVyIC5tZW51IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdGJvdHRvbToxMDAlIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0XHRcdHRvcDphdXRvIWltcG9ydGFudDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLm1lbnUgYSB7XHJcblx0XHQgIFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQuZm9vdGVyIC5zd2l0Y2hlciB7XHJcblx0XHQgIFx0XHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0ICBcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0ICBcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgIHtcclxuXHRcdCAgXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHQgIFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlLnNpbXBsZSB7XHJcblx0XHQgIFx0XHRcdCBoZWlnaHQ6ODVweDtcclxuXHRcdCAgXHRcdFx0IGRpc3BsYXk6ZmxleDtcclxuXHRcdCAgXHRcdFx0IGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHQgIFx0XHRcdCBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHQgIFx0XHRcdCBiYWNrZ3JvdW5kOiNmNWY1ZjU7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZS5zaW1wbGUgYSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MTVweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgLm1lbnUgLnByb2ZpbGUgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuXHRcdCAgXHRcdFx0Y29sb3I6I2MwYzBjMCFpbXBvcnRhbnQ7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZSAuc2Vjb25kYXJ5Lm1lbnUge1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC5wcm9maWxlIC5idXR0b24ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6MHB4O1xyXG5cdFx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRcdGJvdHRvbTowcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE4cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246MC4ycyBhbGwgZWFzZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmJ1dHRvbjpmb2N1cyB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNjMGMwYzAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdCAgICBgfTwvc3R5bGU+ICBcclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0b3JlKSA9PiBzdG9yZSkoU2lkZWJhcikiXX0= */\n/*@ sourceURL=components\\sidebar.js */'
						}));
				}
		}]);

		return Sidebar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
		return store;
})(Sidebar);