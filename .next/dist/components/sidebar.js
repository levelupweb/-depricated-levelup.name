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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\sidebar.js';


var Sidebar = function (_React$Component) {
		(0, _inherits3.default)(Sidebar, _React$Component);

		function Sidebar(props) {
				(0, _classCallCheck3.default)(this, Sidebar);

				var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

				_this.state = {
						auth: false,
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
				key: 'componentWillMount',
				value: function componentWillMount() {
						this.isLogged();
				}
		}, {
				key: 'handleLogout',
				value: function handleLogout() {
						_jsCookie2.default.remove('user', { path: '' });
						_index2.default.replace('/', '/', {});
				}
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
						var transition = require('semantic-ui-transition');
						var dimmer = require('semantic-ui-dimmer');
						$('.sidebar').dimmer('add content', $('.sidebar .menu.vertical')).dimmer('show');
				}
		}, {
				key: 'isLogged',
				value: function isLogged() {
						if (this.props.user.auth || _jsCookie2.default.get('user')) {
								this.setState({
										auth: true
								});
						}
				}
		}, {
				key: 'componentDidUpdate',
				value: function componentDidUpdate(prevProps, prevState) {
						this.setFooter();
				}
		}, {
				key: 'render',
				value: function render() {
						var _this2 = this;

						return _react2.default.createElement('div', { className: 'sidebar', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 99
								}
						}, !this.state.auth ? _react2.default.createElement('div', {
								'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 102
								}
						}, _react2.default.createElement('div', { className: 'block profile simple', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 103
								}
						}, _react2.default.createElement(_link2.default, { href: '/auth', __source: {
										fileName: _jsxFileName,
										lineNumber: 104
								}
						}, _react2.default.createElement('a', {
								'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 104
								}
						}, _react2.default.createElement('i', { className: 'fa fa-lock', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 104
								}
						}), ' \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F'))), _react2.default.createElement('div', { className: 'block sidebar-block', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 106
								}
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 107
								}
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 108
								}
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 109
								}
						}, '\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 112
								}
						}, _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.popular, __source: {
										fileName: _jsxFileName,
										lineNumber: 113
								}
						})))) : _react2.default.createElement('div', {
								'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 118
								}
						}, _react2.default.createElement('div', { className: 'profile block', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 119
								}
						}, _react2.default.createElement(_user2.default, {
								__source: {
										fileName: _jsxFileName,
										lineNumber: 120
								}
						}), _react2.default.createElement('div', { className: 'button userbar', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 121
								}
						}, _react2.default.createElement('div', { onClick: function onClick() {
										_this2.userBarSwitch();
								}, className: 'ui icon top left pointing button', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 122
								}
						}, _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 123
								}
						}))), _react2.default.createElement('div', { className: 'ui secondary vertical menu block-shadow', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 127
								}
						}, _react2.default.createElement('div', { className: 'block profile', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 128
								}
						}, _react2.default.createElement('a', { className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 129
								}
						}, _react2.default.createElement('i', { className: 'fa fa-user', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 129
								}
						}), ' \u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 130
								}
						}, _react2.default.createElement('i', { className: 'fa fa-pencil', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 130
								}
						}), ' \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 131
								}
						}, _react2.default.createElement('i', { className: 'fa fa-cog', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 131
								}
						}), ' \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 132
								}
						}, _react2.default.createElement('i', { className: 'fa fa-flash', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 132
								}
						}), ' \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430'), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 133
								}
						}), _react2.default.createElement('a', { onClick: function onClick() {
										_this2.handleLogout();
								}, className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 134
								}
						}, _react2.default.createElement('i', { className: 'fa fa-sign-out', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 134
								}
						}), ' \u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'block', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 139
								}
						}, _react2.default.createElement(_link2.default, { href: '/editor', prefetch: true, __source: {
										fileName: _jsxFileName,
										lineNumber: 140
								}
						}, _react2.default.createElement('button', { className: 'large fluid circular ui button primary', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 140
								}
						}, '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'subscriptions', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 145
								}
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 146
								}
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 147
								}
						}, '\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 ', _react2.default.createElement('small', {
								'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 148
								}
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 151
								}
						}, _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.users, __source: {
										fileName: _jsxFileName,
										lineNumber: 152
								}
						}), _react2.default.createElement('div', { className: 'ui section divider', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 153
								}
						}), _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.blogs, __source: {
										fileName: _jsxFileName,
										lineNumber: 154
								}
						}))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'tags', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 158
								}
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 159
								}
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 160
								}
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 161
								}
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 164
								}
						}, _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.tags, __source: {
										fileName: _jsxFileName,
										lineNumber: 165
								}
						})))), _react2.default.createElement('div', { className: 'block footer', id: 'footer', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 171
								}
						}, _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 172
								}
						}, _react2.default.createElement('div', { className: 'ui dropdown switcher', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 173
								}
						}, _react2.default.createElement('div', { className: 'text', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 175
								}
						}, _react2.default.createElement('b', {
								'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 175
								}
						}, 'Levelup.name ', _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 175
								}
						}))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 176
								}
						}, _react2.default.createElement('div', { className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 177
								}
						}, 'Levelupmusic'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 178
								}
						}, 'Levelupworlds'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 179
								}
						}, 'Levelupplace'))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 182
								}
						}, _react2.default.createElement('a', { href: '#', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 183
								}
						}, '\u043F\u043E\u043C\u043E\u0449\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 184
								}
						}, '\u043A\u0430\u0440\u044C\u0435\u0440\u0430'), _react2.default.createElement('a', { href: '#', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 185
								}
						}, '\u0431\u043B\u043E\u0433'), _react2.default.createElement('a', { href: '#', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 186
								}
						}, '\u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 3692755460,
								__source: {
										fileName: _jsxFileName,
										lineNumber: 187
								}
						}, '\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435')))), _react2.default.createElement(_style2.default, {
								styleId: 3692755460,
								css: '.sidebar[data-jsx="3692755460"] {position:relative;overflow-y:scroll;}.footer[data-jsx="3692755460"] {background:#f5f5f5;position:absolute;left:0px;}.footer[data-jsx="3692755460"] .menu[data-jsx="3692755460"] {display:-webkit-flex; display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}.footer[data-jsx="3692755460"] .switcher[data-jsx="3692755460"] .menu[data-jsx="3692755460"] {display:none;bottom:100%!important;margin-bottom:10px;top:auto!important;}.footer[data-jsx="3692755460"] .menu[data-jsx="3692755460"] a[data-jsx="3692755460"] {display:inline-block;margin-right:10px;margin-bottom:5px;color:#000;}.footer[data-jsx="3692755460"] .switcher[data-jsx="3692755460"] {margin-bottom:5px;color:#000;display:block;}.profile[data-jsx="3692755460"] {position:relative;text-align:left;}.profile.simple[data-jsx="3692755460"] {height:85px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;background:#f5f5f5;}.profile.simple[data-jsx="3692755460"] a[data-jsx="3692755460"] {font-size:15px;font-weight:bold;color:#000;}.profile[data-jsx="3692755460"] .menu[data-jsx="3692755460"] .profile[data-jsx="3692755460"] .content[data-jsx="3692755460"] .description[data-jsx="3692755460"] {color:#c0c0c0!important;}.profile[data-jsx="3692755460"] .secondary.menu[data-jsx="3692755460"] {text-align:left;}.profile[data-jsx="3692755460"] .button[data-jsx="3692755460"] {position: absolute;right:0px;top:0px;bottom:0px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;padding:10px;margin-right:18px;cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;background:none!important;height:auto;}.button[data-jsx="3692755460"]:focus {background:#c0c0c0!important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOExnQixBQUVGLGlDQUNTLGtCQUNBLGtCQUNsQixDQUVRLGdDQUNXLG1CQUNELGtCQUNULFNBQ1QsQ0FFZ0IsNkRBQ0gsbUNBQ0UsMERBQ0ksc0VBQ2pCLENBRXdCLDhGQUNiLGFBQ1Msc0JBQ0gsbUJBQ0EsbUJBQ2pCLENBRWdCLHNGQUNLLHFCQUNMLGtCQUNBLGtCQUNQLFdBQ1QsQ0FFa0IsaUVBQ0Esa0JBQ1AsV0FDRyxjQUNkLENBRVUsaUNBQ1Esa0JBQ0YsZ0JBQ2hCLENBRWdCLHdDQUNILFlBQ0MsbUNBQ1UsdUJBQ0osbUJBQ0EsbUJBQ3BCLENBRWtCLGlFQUNMLGVBQ0UsaUJBQ04sV0FDVCxDQUU4QyxrS0FDdEIsd0JBQ3hCLENBRXlCLHdFQUNYLGdCQUNkLENBRWUsZ0VBQ0UsbUJBQ1QsVUFDRixRQUNHLFdBQ0UsbUNBQ1UsdUJBQ0osbUJBQ04sYUFDSyxrQkFDSCxlQUNVLHFIQUNDLDBCQUNkLFlBQ1osQ0FFYyxzQ0FDZSw2QkFDN0IiLCJmaWxlIjoiY29tcG9uZW50c1xcc2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgVXNlckxpc3QgZnJvbSAnLi91c2VyLWxpc3QnXHJcbmltcG9ydCBUYWdzTGlzdCBmcm9tICcuL3RhZ3MtbGlzdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIFx0YXV0aDogZmFsc2UsXHJcbiAgICBcdHN1YnNjcmlwdGlvbnM6IHtcclxuICAgIFx0XHR1c2VyczogW1xyXG4gICAgXHRcdFx0e25hbWU6ICfQkNC70LXQutGB0LXQuSDQkNGI0LDQvdC+0LInLCBkZXNjcmlwdGlvbjogJ9Cf0YDQvtCz0YDQsNC80LzQuNGB0YInLCB1cGRhdGVzOiAxLCBpZDogMH0sXHJcbiAgICBcdFx0XHR7bmFtZTogJ9CY0LLQsNC9INCa0L7RgNGP0LrQvtCy0YbQtdCyJywgZGVzY3JpcHRpb246ICfQktC10LEt0YDQsNC30YDQsNCx0L7RgtGH0LjQuicsIHVwZGF0ZXM6IDAsIGlkOiAxfSxcclxuICAgIFx0XHRcdHtuYW1lOiAn0JDQu9C10LrRgdC10Lkg0J3QsNCy0LDQu9GM0L3Ri9C5JywgZGVzY3JpcHRpb246ICfQn9C+0LvQuNGC0LjQuiwg0Y7RgNC40YHRgicsIHVwZGF0ZXM6IDEsIGlkOiAyfSxcclxuICAgIFx0XHRcdHtuYW1lOiAn0KHRgtC40LIg0JTQttC+0LHRgScsIGRlc2NyaXB0aW9uOiAn0J/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GMJywgdXBkYXRlczogMCwgaWQ6IDN9LFxyXG4gICAgXHRcdFx0e25hbWU6ICfQkNC90L3QsCDQkNGF0LzQsNGC0L7QstCwJywgZGVzY3JpcHRpb246ICfQn9C40YHQsNGC0LXQu9GM0L3QuNGG0LAnLCB1cGRhdGVzOiAwLCBpZDogNH1cclxuICAgIFx0XHRdLFxyXG5cclxuICAgIFx0XHRibG9nczogW1xyXG4gICAgXHRcdFx0e25hbWU6ICdTcGFyaycsIGRlc2NyaXB0aW9uOiAn0JLQtdCxLdGB0LDQudGCJywgaW1hZ2U6ICcuLi9zdGF0aWMvaW1nL3NpZGViYXIvc3Vic2NyaXB0aW9ucy9zcGFyay5wbmcnLCB1cGRhdGVzOiAxLCBpZDogMH0sXHJcbiAgICBcdFx0XHR7bmFtZTogJ1d5bHNhY29tJywgaW1hZ2U6ICcuLi9zdGF0aWMvaW1nL3NpZGViYXIvc3Vic2NyaXB0aW9ucy9hcHBsZS5wbmcnLCBkZXNjcmlwdGlvbjogJ9CR0LvQvtCz0LPQtdGAJywgdXBkYXRlczogMCwgaWQ6IDF9LFxyXG4gICAgXHRcdFx0e25hbWU6ICdIYWJyYWhhYnInLCBpbWFnZTogJy4uL3N0YXRpYy9pbWcvc2lkZWJhci9zdWJzY3JpcHRpb25zL2hhYnIucG5nJywgZGVzY3JpcHRpb246ICfQktC10LEt0YHQsNC50YInLCB1cGRhdGVzOiAxLCBpZDogMn1cclxuICAgIFx0XHRdLFxyXG5cclxuICAgIFx0XHR0YWdzOiBbXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQv9GA0LjRgNC+0LTQsCcsIGlkOiAxfSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC1JywgaWQ6IDJ9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAnc2VvJywgaWQ6IDN9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0LzQsNGI0LjQvdC90L7QtSDQvtCx0YPRh9C10L3QuNC1JywgaWQ6IDR9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0LjQs9GA0YsnLCBpZDogNX0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICdqYXZhc2NyaXB0JywgaWQ6IDZ9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAnYXJkdWlubycsIGlkOiA3fSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9Cy0LXQsS3RgNCw0LfRgNCw0LHQvtGC0LrQsCcsIGlkOiA4fSxcclxuICAgIFx0XHRdLFxyXG5cclxuICAgIFx0XHRwb3B1bGFyOiBbXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQttC40LLQvtC/0LjRgdGMJywgaWQ6IDF9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnLCBpZDogMn0sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQuNCz0YDRiycsIGlkOiAzfSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9C80YPQt9GL0LrQsCcsIGlkOiA0fSxcclxuICAgIFx0XHRcdHt0aXRsZTogJ9GB0L7RhtC40LDQu9GM0L3Ri9C1INGB0LXRgtC4JywgaWQ6IDV9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0LvQuNGH0L3QsNGPINGN0YTRhNC10LrRgtC40LLQvdC+0YHRgtGMJywgaWQ6IDZ9LFxyXG4gICAgXHRcdFx0e3RpdGxlOiAn0YLQtdGF0L3QvtC70L7Qs9C40LgnLCBpZDogN30sXHJcbiAgICBcdFx0XHR7dGl0bGU6ICfQstC10LEt0YDQsNC30YDQsNCx0L7RgtC60LAnLCBpZDogOH0sXHJcbiAgICBcdFx0XVxyXG4gICAgXHR9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICBcdHRoaXMuc2V0Rm9vdGVyKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICBcdHRoaXMuaXNMb2dnZWQoKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gIFx0Q29va2llcy5yZW1vdmUoJ3VzZXInLCB7IHBhdGg6ICcnIH0pO1xyXG4gIFx0Um91dGVyLnJlcGxhY2UoJy8nLCAnLycsIHt9KVxyXG4gIH1cclxuXHJcblxyXG4gIHNldEZvb3RlcigpIHtcclxuICBcdHZhciBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XHJcbiAgXHR2YXIgZm9vdGVySGVpZ2h0ID0gZm9vdGVyLnNjcm9sbEhlaWdodDtcclxuICBcdHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgXHR2YXIgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXInKVswXTtcclxuICBcdHNpZGViYXIuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGZvb3RlckhlaWdodCArIDEwICsgJ3B4JztcclxuICBcdGZvb3Rlci5zdHlsZS50b3AgPSAxMDAgKyAnJSdcclxuICBcdGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSAgKHRoaXMuc3RhdGUuYXV0aCkgPyAoZm9vdGVySGVpZ2h0LzIgKyAncHgnKSA6ICgtZm9vdGVySGVpZ2h0ICsgJ3B4JylcclxuICB9XHJcblxyXG4gIHVzZXJCYXJTd2l0Y2goKSB7XHJcbiAgXHR2YXIgdHJhbnNpdGlvbiA9IHJlcXVpcmUoJ3NlbWFudGljLXVpLXRyYW5zaXRpb24nKTtcclxuICBcdHZhciBkaW1tZXIgPSByZXF1aXJlKCdzZW1hbnRpYy11aS1kaW1tZXInKTtcclxuICBcdCQoJy5zaWRlYmFyJykuZGltbWVyKCdhZGQgY29udGVudCcsICQoJy5zaWRlYmFyIC5tZW51LnZlcnRpY2FsJykpLmRpbW1lcignc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWQoKSB7XHJcbiAgXHRpZih0aGlzLnByb3BzLnVzZXIuYXV0aCB8fCBDb29raWVzLmdldCgndXNlcicpICkge1xyXG4gIFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0XHRhdXRoOiB0cnVlXHJcbiAgXHRcdH0pXHJcbiAgXHR9IFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgXHR0aGlzLnNldEZvb3RlcigpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuXHJcbiAgICAgIFx0eyF0aGlzLnN0YXRlLmF1dGggPyBcclxuICAgICAgXHRcdDxkaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZSBzaW1wbGVcIj5cclxuICAgICAgXHRcdFx0XHQ8TGluayBocmVmPVwiL2F1dGhcIj48YT48aSBjbGFzc05hbWU9XCJmYSBmYS1sb2NrXCI+PC9pPiDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9hPjwvTGluaz5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc2lkZWJhci1ibG9ja1wiPlxyXG5cdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICBcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTQotC10LzRiyA8c21hbGw+0L/QvtC/0YPQu9GP0YDQvdGL0LU8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdCAgICAgIFx0XHRcdDxUYWdzTGlzdCB0YWdzPXt0aGlzLnN0YXRlLnN1YnNjcmlwdGlvbnMucG9wdWxhcn0gLz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDogXHJcbiAgICAgIFx0XHQ8ZGl2PlxyXG5cdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUgYmxvY2tcIj5cclxuXHRcdCAgICAgIFx0XHQ8VXNlciAvPlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHVzZXJiYXJcIj5cclxuXHRcdFx0ICAgICAgXHRcdDxkaXYgb25DbGljaz17KCkgPT4ge3RoaXMudXNlckJhclN3aXRjaCgpfX0gY2xhc3NOYW1lPVwidWkgaWNvbiB0b3AgbGVmdCBwb2ludGluZyBidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWNvbmRhcnkgdmVydGljYWwgbWVudSBibG9jay1zaGFkb3dcIj5cclxuXHRcdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHByb2ZpbGVcIj5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT4g0JzQvtC5INC/0YDQvtGE0LjQu9GMPC9hPlxyXG5cdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+INCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YI8L2E+XHJcblx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT4g0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Yw8L2E+XHJcblx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZsYXNoXCI+PC9pPiDQodGC0LDRgtC40YHRgtC40LrQsDwvYT5cclxuXHRcdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICA8YSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVMb2dvdXQoKX19IGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLW91dFwiPjwvaT4g0JLRi9GF0L7QtDwvYT5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0PC9kaXY+XHJcblxyXG5cdFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcblx0XHQgICAgICBcdFx0PExpbmsgaHJlZj1cIi9lZGl0b3JcIiBwcmVmZXRjaD48YnV0dG9uIGNsYXNzTmFtZT1cImxhcmdlIGZsdWlkIGNpcmN1bGFyIHVpIGJ1dHRvbiBwcmltYXJ5XCI+XHJcblx0XHRcdFx0XHQgINCd0LDQv9C40YHQsNGC0Ywg0L/QvtGB0YJcclxuXHRcdFx0XHRcdDwvYnV0dG9uPjwvTGluaz5cclxuXHRcdCAgICAgIFx0PC9kaXY+XHJcblxyXG5cdFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHNpZGViYXItYmxvY2tcIiBpZD1cInN1YnNjcmlwdGlvbnNcIj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdCAgICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx00J/QvtC00L/QuNGB0LrQuCA8c21hbGw+0LjRgdGB0LvQtdC00L7QstCw0YLRjDwvc21hbGw+XHJcblx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcblx0XHQgICAgICBcdFx0XHQ8VXNlckxpc3QgdXNlcnM9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy51c2Vyc30gLz5cclxuXHRcdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgc2VjdGlvbiBkaXZpZGVyXCI+PC9kaXY+XHJcblx0XHQgICAgICBcdFx0XHQ8VXNlckxpc3QgdXNlcnM9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5ibG9nc30gLz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0PC9kaXY+XHJcblxyXG5cdFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHNpZGViYXItYmxvY2tcIiBpZD1cInRhZ3NcIj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdCAgICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx00KLQtdC80YsgPHNtYWxsPtC40YHRgdC70LXQtNC+0LLQsNGC0Yw8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0PFRhZ3NMaXN0IHRhZ3M9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy50YWdzfSAvPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICBcdH1cclxuXHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBmb290ZXJcIiBpZD1cImZvb3RlclwiPlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgZHJvcGRvd24gc3dpdGNoZXJcIj5cclxuXHRcdFx0XHQgIFxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGI+TGV2ZWx1cC5uYW1lIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9iPjwvZGl2PlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkxldmVsdXBtdXNpYzwvZGl2PlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwd29ybGRzPC9kaXY+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkxldmVsdXBwbGFjZTwvZGl2PlxyXG5cdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0L/QvtC80L7RidGMPC9hPlxyXG4gICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0LrQsNGA0YzQtdGA0LA8L2E+XHJcbiAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7QsdC70L7QszwvYT5cclxuICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC/0YPQsdC70LjRh9C90L7RgdGC0Yw8L2E+XHJcbiAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7QviDQv9GA0L7QtdC60YLQtTwvYT5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuXHRcdCAgPHN0eWxlIGpzeD57YFxyXG5cdFxyXG5cdFx0XHRcdC5zaWRlYmFyIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3cteTpzY3JvbGw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZm9vdGVyIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2Y1ZjVmNTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdCAgXHRcdC5mb290ZXIgLm1lbnUge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC13cmFwOndyYXA7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcblx0XHQgIFx0XHR9XHJcblxyXG5cdFx0ICBcdFx0LmZvb3RlciAuc3dpdGNoZXIgLm1lbnUge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0Ym90dG9tOjEwMCUhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdFx0XHRcdFx0dG9wOmF1dG8haW1wb3J0YW50O1xyXG5cdFx0ICBcdFx0fVxyXG5cclxuXHRcdCAgXHRcdC5mb290ZXIgLm1lbnUgYSB7XHJcblx0XHQgIFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHQgIFx0XHR9XHJcblxyXG5cdFx0ICBcdFx0LmZvb3RlciAuc3dpdGNoZXIge1xyXG5cdFx0ICBcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdCAgXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdCAgXHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdCAgXHRcdH1cclxuXHJcblx0XHQgIFx0XHQucHJvZmlsZSAge1xyXG5cdFx0ICBcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdCAgXHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0ICBcdFx0fVxyXG5cclxuXHRcdCAgXHRcdC5wcm9maWxlLnNpbXBsZSB7XHJcblx0XHQgIFx0XHRcdCBoZWlnaHQ6ODVweDtcclxuXHRcdCAgXHRcdFx0IGRpc3BsYXk6ZmxleDtcclxuXHRcdCAgXHRcdFx0IGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHQgIFx0XHRcdCBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHQgIFx0XHRcdCBiYWNrZ3JvdW5kOiNmNWY1ZjU7XHJcblx0XHQgIFx0XHR9XHJcblxyXG5cdFx0ICBcdFx0LnByb2ZpbGUuc2ltcGxlIGEge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOjE1cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdCAgXHRcdH1cclxuXHJcblx0XHQgIFx0XHQucHJvZmlsZSAubWVudSAucHJvZmlsZSAuY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG5cdFx0ICBcdFx0XHRjb2xvcjojYzBjMGMwIWltcG9ydGFudDtcclxuXHRcdCAgXHRcdH1cclxuXHJcblx0XHQgIFx0XHQucHJvZmlsZSAuc2Vjb25kYXJ5Lm1lbnUge1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC5wcm9maWxlIC5idXR0b24ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6MHB4O1xyXG5cdFx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRcdGJvdHRvbTowcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE4cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246MC4ycyBhbGwgZWFzZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5idXR0b246Zm9jdXMge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojYzBjMGMwIWltcG9ydGFudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0ICAgIGB9PC9zdHlsZT4gIFxyXG5cdFx0PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlKShTaWRlYmFyKSJdfQ== */\n/*@ sourceURL=components\\sidebar.js */'
						}));
				}
		}]);

		return Sidebar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
		return store;
})(Sidebar);