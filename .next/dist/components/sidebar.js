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

						return _react2.default.createElement('div', { className: 'sidebar', 'data-jsx': 91362884
						}, !this.props.user.isLogged ? _react2.default.createElement('div', {
								'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'block profile simple', 'data-jsx': 91362884
						}, _react2.default.createElement(_link2.default, { href: '/auth' }, _react2.default.createElement('a', {
								'data-jsx': 91362884
						}, _react2.default.createElement('i', { className: 'fa fa-lock', 'data-jsx': 91362884
						}), ' \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F'))), _react2.default.createElement('div', { className: 'block sidebar-block', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 91362884
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 91362884
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 91362884
						}, '\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 91362884
						}, _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.popular })))) : _react2.default.createElement('div', {
								'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'profile block', 'data-jsx': 91362884
						}, _react2.default.createElement(_user2.default, null), _react2.default.createElement('div', { className: 'button userbar', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { onClick: function onClick() {
										_this2.userBarSwitch();
								}, className: 'ui icon top left pointing button', 'data-jsx': 91362884
						}, _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 91362884
						}))), _react2.default.createElement('div', { className: 'ui secondary vertical menu block-shadow', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'block profile', 'data-jsx': 91362884
						}, _react2.default.createElement('a', { className: 'item', 'data-jsx': 91362884
						}, _react2.default.createElement('i', { className: 'fa fa-user', 'data-jsx': 91362884
						}), ' \u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 91362884
						}, _react2.default.createElement('i', { className: 'fa fa-pencil', 'data-jsx': 91362884
						}), ' \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 91362884
						}, _react2.default.createElement('i', { className: 'fa fa-cog', 'data-jsx': 91362884
						}), ' \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 91362884
						}, _react2.default.createElement('i', { className: 'fa fa-flash', 'data-jsx': 91362884
						}), ' \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430'), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 91362884
						}), _react2.default.createElement('a', { onClick: function onClick() {
										_this2.handleLogout();
								}, className: 'item', 'data-jsx': 91362884
						}, _react2.default.createElement('i', { className: 'fa fa-sign-out', 'data-jsx': 91362884
						}), ' \u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'block', 'data-jsx': 91362884
						}, _react2.default.createElement(_link2.default, { href: '/editor', prefetch: true }, _react2.default.createElement('button', { className: 'large fluid circular ui button primary', 'data-jsx': 91362884
						}, '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'subscriptions', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 91362884
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 91362884
						}, '\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 ', _react2.default.createElement('small', {
								'data-jsx': 91362884
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 91362884
						}, _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.users }), _react2.default.createElement('div', { className: 'ui section divider', 'data-jsx': 91362884
						}), _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.blogs }))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'tags', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 91362884
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 91362884
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 91362884
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 91362884
						}, _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.tags })))), _react2.default.createElement('div', { className: 'block footer', id: 'footer', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'ui dropdown switcher', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'text', 'data-jsx': 91362884
						}, _react2.default.createElement('b', {
								'data-jsx': 91362884
						}, 'Levelup.name ', _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 91362884
						}))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 91362884
						}, _react2.default.createElement('div', { className: 'item', 'data-jsx': 91362884
						}, 'Levelupmusic'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 91362884
						}, 'Levelupworlds'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 91362884
						}, 'Levelupplace'))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 91362884
						}, _react2.default.createElement('a', { href: '#', 'data-jsx': 91362884
						}, '\u043F\u043E\u043C\u043E\u0449\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 91362884
						}, '\u043A\u0430\u0440\u044C\u0435\u0440\u0430'), _react2.default.createElement('a', { href: '#', 'data-jsx': 91362884
						}, '\u0431\u043B\u043E\u0433'), _react2.default.createElement('a', { href: '#', 'data-jsx': 91362884
						}, '\u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 91362884
						}, '\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435')))), _react2.default.createElement(_style2.default, {
								styleId: 91362884,
								css: '.sidebar[data-jsx="91362884"] {position:relative;overflow-y:scroll;}.footer[data-jsx="91362884"] {background:#f5f5f5;position:absolute;left:0px;}.footer[data-jsx="91362884"] .menu[data-jsx="91362884"] {display:-webkit-flex; display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}.footer[data-jsx="91362884"] .switcher[data-jsx="91362884"] .menu[data-jsx="91362884"] {display:none;bottom:100%!important;margin-bottom:10px;top:auto!important;}.footer[data-jsx="91362884"] .menu[data-jsx="91362884"] a[data-jsx="91362884"] {display:inline-block;margin-right:10px;margin-bottom:5px;color:#000;}.footer[data-jsx="91362884"] .switcher[data-jsx="91362884"] {margin-bottom:5px;color:#000;display:block;}.profile[data-jsx="91362884"] {position:relative;text-align:left;}.profile.simple[data-jsx="91362884"] {height:85px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;background:#f5f5f5;}.profile.simple[data-jsx="91362884"] a[data-jsx="91362884"] {font-size:15px;font-weight:bold;color:#000;}.profile[data-jsx="91362884"] .menu[data-jsx="91362884"] .profile[data-jsx="91362884"] .content[data-jsx="91362884"] .description[data-jsx="91362884"] {color:#c0c0c0!important;}.profile[data-jsx="91362884"] .secondary.menu[data-jsx="91362884"] {text-align:left;}.profile[data-jsx="91362884"] .button[data-jsx="91362884"] {position: absolute;right:0px;top:0px;bottom:0px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;padding:10px;margin-right:18px;cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;background:none!important;height:auto;}.button[data-jsx="91362884"]:focus {background:#c0c0c0!important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xnQixBQUVGLCtCQUNTLGtCQUNBLGtCQUNsQixDQUNRLDhCQUNXLG1CQUNELGtCQUNULFNBQ1QsQ0FDZ0IseURBQ0gsbUNBQ0UsMERBQ0ksc0VBQ2pCLENBQ3dCLHdGQUNiLGFBQ1Msc0JBQ0gsbUJBQ0EsbUJBQ2pCLENBQ2dCLGdGQUNLLHFCQUNMLGtCQUNBLGtCQUNQLFdBQ1QsQ0FDa0IsNkRBQ0Esa0JBQ1AsV0FDRyxjQUNkLENBQ1UsK0JBQ1Esa0JBQ0YsZ0JBQ2hCLENBQ2dCLHNDQUNILFlBQ0MsbUNBQ1UsdUJBQ0osbUJBQ0EsbUJBQ3BCLENBQ2tCLDZEQUNMLGVBQ0UsaUJBQ04sV0FDVCxDQUM4Qyx3SkFDdEIsd0JBQ3hCLENBQ3lCLG9FQUNYLGdCQUNkLENBRWUsNERBQ0UsbUJBQ1QsVUFDRixRQUNHLFdBQ0UsbUNBQ1UsdUJBQ0osbUJBQ04sYUFDSyxrQkFDSCxlQUNVLHFIQUNDLDBCQUNkLFlBQ1osQ0FDYyxvQ0FDZSw2QkFDN0IiLCJmaWxlIjoiY29tcG9uZW50c1xcc2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgVXNlckxpc3QgZnJvbSAnLi91c2VyLWxpc3QnXHJcbmltcG9ydCBUYWdzTGlzdCBmcm9tICcuL3RhZ3MtbGlzdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZ2V0TG9nb3V0IH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJ1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL3V0aWxzL2luaXRzY3JpcHRzLmpzJ1xyXG5cclxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdGF1dGg6IHRoaXMucHJvcHMudXNlci5pc0xvZ2dlZCxcclxuICAgIFx0c3Vic2NyaXB0aW9uczoge1xyXG4gICAgXHRcdHVzZXJzOiBbXHJcbiAgICBcdFx0XHR7bmFtZTogJ9CQ0LvQtdC60YHQtdC5INCQ0YjQsNC90L7QsicsIGRlc2NyaXB0aW9uOiAn0J/RgNC+0LPRgNCw0LzQvNC40YHRgicsIHVwZGF0ZXM6IDEsIGlkOiAwfSxcclxuICAgIFx0XHRcdHtuYW1lOiAn0JjQstCw0L0g0JrQvtGA0Y/QutC+0LLRhtC10LInLCBkZXNjcmlwdGlvbjogJ9CS0LXQsS3RgNCw0LfRgNCw0LHQvtGC0YfQuNC6JywgdXBkYXRlczogMCwgaWQ6IDF9LFxyXG4gICAgXHRcdFx0e25hbWU6ICfQkNC70LXQutGB0LXQuSDQndCw0LLQsNC70YzQvdGL0LknLCBkZXNjcmlwdGlvbjogJ9Cf0L7Qu9C40YLQuNC6LCDRjtGA0LjRgdGCJywgdXBkYXRlczogMSwgaWQ6IDJ9LFxyXG4gICAgXHRcdFx0e25hbWU6ICfQodGC0LjQsiDQlNC20L7QsdGBJywgZGVzY3JpcHRpb246ICfQn9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YwnLCB1cGRhdGVzOiAwLCBpZDogM30sXHJcbiAgICBcdFx0XHR7bmFtZTogJ9CQ0L3QvdCwINCQ0YXQvNCw0YLQvtCy0LAnLCBkZXNjcmlwdGlvbjogJ9Cf0LjRgdCw0YLQtdC70YzQvdC40YbQsCcsIHVwZGF0ZXM6IDAsIGlkOiA0fVxyXG4gICAgXHRcdF0sXHJcblxyXG4gICAgXHRcdGJsb2dzOiBbXHJcbiAgICBcdFx0XHR7bmFtZTogJ1NwYXJrJywgZGVzY3JpcHRpb246ICfQktC10LEt0YHQsNC50YInLCBpbWFnZTogJy4uL3N0YXRpYy9pbWcvc2lkZWJhci9zdWJzY3JpcHRpb25zL3NwYXJrLnBuZycsIHVwZGF0ZXM6IDEsIGlkOiAwfSxcclxuICAgIFx0XHRcdHtuYW1lOiAnV3lsc2Fjb20nLCBpbWFnZTogJy4uL3N0YXRpYy9pbWcvc2lkZWJhci9zdWJzY3JpcHRpb25zL2FwcGxlLnBuZycsIGRlc2NyaXB0aW9uOiAn0JHQu9C+0LPQs9C10YAnLCB1cGRhdGVzOiAwLCBpZDogMX0sXHJcbiAgICBcdFx0XHR7bmFtZTogJ0hhYnJhaGFicicsIGltYWdlOiAnLi4vc3RhdGljL2ltZy9zaWRlYmFyL3N1YnNjcmlwdGlvbnMvaGFici5wbmcnLCBkZXNjcmlwdGlvbjogJ9CS0LXQsS3RgdCw0LnRgicsIHVwZGF0ZXM6IDEsIGlkOiAyfVxyXG4gICAgXHRcdF0sXHJcblxyXG4gICAgXHRcdHRhZ3M6IFtcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C/0YDQuNGA0L7QtNCwJywgaWQ6IDF9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnLCBpZDogMn0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICdzZW8nLCBpZDogM30sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQvNCw0YjQuNC90L3QvtC1INC+0LHRg9GH0LXQvdC40LUnLCBpZDogNH0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQuNCz0YDRiycsIGlkOiA1fSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ2phdmFzY3JpcHQnLCBpZDogNn0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICdhcmR1aW5vJywgaWQ6IDd9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0LLQtdCxLdGA0LDQt9GA0LDQsdC+0YLQutCwJywgaWQ6IDh9LFxyXG4gICAgXHRcdF0sXHJcblxyXG4gICAgXHRcdHBvcHVsYXI6IFtcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C20LjQstC+0L/QuNGB0YwnLCBpZDogMX0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQv9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtScsIGlkOiAyfSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C40LPRgNGLJywgaWQ6IDN9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0LzRg9C30YvQutCwJywgaWQ6IDR9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0YHQvtGG0LjQsNC70YzQvdGL0LUg0YHQtdGC0LgnLCBpZDogNX0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQu9C40YfQvdCw0Y8g0Y3RhNGE0LXQutGC0LjQstC90L7RgdGC0YwnLCBpZDogNn0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfRgtC10YXQvdC+0LvQvtCz0LjQuCcsIGlkOiA3fSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9Cy0LXQsS3RgNCw0LfRgNCw0LHQvtGC0LrQsCcsIGlkOiA4fSxcclxuICAgIFx0XHRdXHJcbiAgICBcdH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIFx0dGhpcy5zZXRGb290ZXIoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlTG9nb3V0KCkge1xyXG4gIFx0YXdhaXQgY29va2llcy5yZW1vdmUoJ3gtYWNjZXNzLXRva2VuJywgeyBwYXRoOiAnJyB9KTtcclxuICBcdGF3YWl0IHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdMT0dPVVQnfSk7XHJcbiAgXHRhd2FpdCByb3V0ZXIucHVzaCgnLycsICcvJywge30pXHJcbiAgfVxyXG5cclxuICAvLyDQo9C/0YDQvtGB0YLQuNGC0YxcclxuICBzZXRGb290ZXIoKSB7XHJcbiAgXHR2YXIgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG4gIFx0dmFyIGZvb3RlckhlaWdodCA9IGZvb3Rlci5zY3JvbGxIZWlnaHQ7XHJcbiAgXHR2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIFx0dmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyJylbMF07XHJcbiAgXHRzaWRlYmFyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBmb290ZXJIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgXHRmb290ZXIuc3R5bGUudG9wID0gMTAwICsgJyUnXHJcbiAgXHRmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gICh0aGlzLnN0YXRlLmF1dGgpID8gKGZvb3RlckhlaWdodC8yICsgJ3B4JykgOiAoLWZvb3RlckhlaWdodCArICdweCcpXHJcbiAgfVxyXG5cclxuICB1c2VyQmFyU3dpdGNoKCkge1xyXG4gIFx0VUkoKTtcclxuICBcdCQoJy5zaWRlYmFyJylcclxuICBcdC5kaW1tZXIoJ2FkZCBjb250ZW50JywgJCgnLnNpZGViYXIgLm1lbnUudmVydGljYWwnKSlcclxuICBcdC5kaW1tZXIoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICBcdHRoaXMuc2V0Rm9vdGVyKClcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgXHR7IXRoaXMucHJvcHMudXNlci5pc0xvZ2dlZCA/IFxyXG4gICAgICBcdFx0PGRpdj5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBwcm9maWxlIHNpbXBsZVwiPlxyXG4gICAgICBcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYXV0aFwiPjxhPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIj48L2k+INCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2E+PC9MaW5rPlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCI+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgIFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCi0LXQvNGLIDxzbWFsbD7Qv9C+0L/Rg9C70Y/RgNC90YvQtTwvc21hbGw+XHJcblx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0PFRhZ3NMaXN0IHRhZ3M9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5wb3B1bGFyfSAvPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0OiBcclxuICAgICAgXHRcdDxkaXY+XHJcblx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZSBibG9ja1wiPlxyXG5cdFx0ICAgICAgXHRcdDxVc2VyIC8+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24gdXNlcmJhclwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiB7dGhpcy51c2VyQmFyU3dpdGNoKCl9fSBjbGFzc05hbWU9XCJ1aSBpY29uIHRvcCBsZWZ0IHBvaW50aW5nIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlY29uZGFyeSB2ZXJ0aWNhbCBtZW51IGJsb2NrLXNoYWRvd1wiPlxyXG5cdFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPiDQnNC+0Lkg0L/RgNC+0YTQuNC70Yw8L2E+XHJcblx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT4g0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRgjwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPiDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmxhc2hcIj48L2k+INCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxyXG5cdFx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgIDxhIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUxvZ291dCgpfX0gY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPiDQktGL0YXQvtC0PC9hPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuXHRcdCAgICAgIFx0XHQ8TGluayBocmVmPVwiL2VkaXRvclwiIHByZWZldGNoPjxidXR0b24gY2xhc3NOYW1lPVwibGFyZ2UgZmx1aWQgY2lyY3VsYXIgdWkgYnV0dG9uIHByaW1hcnlcIj5cclxuXHRcdFx0XHRcdCAg0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRglxyXG5cdFx0XHRcdFx0PC9idXR0b24+PC9MaW5rPlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc2lkZWJhci1ibG9ja1wiIGlkPVwic3Vic2NyaXB0aW9uc1wiPlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0ICAgICAgXHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTQn9C+0LTQv9C40YHQutC4IDxzbWFsbD7QuNGB0YHQu9C10LTQvtCy0LDRgtGMPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdCAgICAgIFx0XHRcdDxVc2VyTGlzdCB1c2Vycz17dGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLnVzZXJzfSAvPlxyXG5cdFx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBzZWN0aW9uIGRpdmlkZXJcIj48L2Rpdj5cclxuXHRcdCAgICAgIFx0XHRcdDxVc2VyTGlzdCB1c2Vycz17dGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLmJsb2dzfSAvPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc2lkZWJhci1ibG9ja1wiIGlkPVwidGFnc1wiPlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0ICAgICAgXHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTQotC10LzRiyA8c21hbGw+0LjRgdGB0LvQtdC00L7QstCw0YLRjDwvc21hbGw+XHJcblx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcblx0XHQgICAgICBcdFx0XHQ8VGFnc0xpc3QgdGFncz17dGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLnRhZ3N9IC8+XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0fVxyXG5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgZm9vdGVyXCIgaWQ9XCJmb290ZXJcIj5cclxuXHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBkcm9wZG93biBzd2l0Y2hlclwiPlxyXG5cdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGI+TGV2ZWx1cC5uYW1lIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9iPjwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwbXVzaWM8L2Rpdj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwd29ybGRzPC9kaXY+XHJcblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGV2ZWx1cHBsYWNlPC9kaXY+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC/0L7QvNC+0YnRjDwvYT5cclxuXHQgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0LrQsNGA0YzQtdGA0LA8L2E+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtCx0LvQvtCzPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7Qv9GD0LHQu9C40YfQvdC+0YHRgtGMPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7QviDQv9GA0L7QtdC60YLQtTwvYT5cclxuXHQgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuXHRcdCAgPHN0eWxlIGpzeD57YFxyXG5cdFxyXG5cdFx0XHRcdC5zaWRlYmFyIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3cteTpzY3JvbGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5mb290ZXIge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojZjVmNWY1O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHQgIFx0XHQuZm9vdGVyIC5tZW51IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtd3JhcDp3cmFwO1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LmZvb3RlciAuc3dpdGNoZXIgLm1lbnUge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0Ym90dG9tOjEwMCUhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdFx0XHRcdFx0dG9wOmF1dG8haW1wb3J0YW50O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LmZvb3RlciAubWVudSBhIHtcclxuXHRcdCAgXHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLnN3aXRjaGVyIHtcclxuXHRcdCAgXHRcdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHQgIFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHQgIFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZSAge1xyXG5cdFx0ICBcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdCAgXHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUuc2ltcGxlIHtcclxuXHRcdCAgXHRcdFx0IGhlaWdodDo4NXB4O1xyXG5cdFx0ICBcdFx0XHQgZGlzcGxheTpmbGV4O1xyXG5cdFx0ICBcdFx0XHQganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdCAgXHRcdFx0IGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdCAgXHRcdFx0IGJhY2tncm91bmQ6I2Y1ZjVmNTtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlLnNpbXBsZSBhIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZSAubWVudSAucHJvZmlsZSAuY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG5cdFx0ICBcdFx0XHRjb2xvcjojYzBjMGMwIWltcG9ydGFudDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlIC5zZWNvbmRhcnkubWVudSB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHQgIFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0LnByb2ZpbGUgLmJ1dHRvbiB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRyaWdodDowcHg7XHJcblx0XHRcdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRcdFx0Ym90dG9tOjBweDtcclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjEwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MThweDtcclxuXHRcdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjowLjJzIGFsbCBlYXNlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDpub25lIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdGhlaWdodDphdXRvO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYnV0dG9uOmZvY3VzIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2MwYzBjMCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICAgIGB9PC9zdHlsZT4gIFxyXG5cdFx0PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShTaWRlYmFyKSJdfQ== */\n/*@ sourceURL=components\\sidebar.js */'
						}));
				}
		}]);

		return Sidebar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
		return store;
})(Sidebar);