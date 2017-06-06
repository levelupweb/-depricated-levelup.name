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

						return _react2.default.createElement('div', { className: 'sidebar', 'data-jsx': 1573514056
						}, !this.props.user.isLogged ? _react2.default.createElement('div', {
								'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'block profile simple', 'data-jsx': 1573514056
						}, _react2.default.createElement(_link2.default, { href: '/auth' }, _react2.default.createElement('a', {
								'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-lock', 'data-jsx': 1573514056
						}), ' \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F'))), _react2.default.createElement('div', { className: 'block sidebar-block', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1573514056
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1573514056
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 1573514056
						}, '\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1573514056
						}, _react2.default.createElement(_tagsList2.default, null)))) : _react2.default.createElement('div', {
								'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'profile block', 'data-jsx': 1573514056
						}, _react2.default.createElement(_user2.default, null), _react2.default.createElement('div', { className: 'button userbar', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { onClick: function onClick() {
										_this2.userBarSwitch();
								}, className: 'ui icon top left pointing button', 'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 1573514056
						}))), _react2.default.createElement('div', { className: 'ui secondary vertical menu block-shadow', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'block profile', 'data-jsx': 1573514056
						}, _react2.default.createElement('a', { className: 'item', 'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-user', 'data-jsx': 1573514056
						}), ' \u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-pencil', 'data-jsx': 1573514056
						}), ' \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-cog', 'data-jsx': 1573514056
						}), ' \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-flash', 'data-jsx': 1573514056
						}), ' \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430'), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 1573514056
						}), _react2.default.createElement('a', { onClick: function onClick() {
										_this2.handleLogout();
								}, className: 'item', 'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-sign-out', 'data-jsx': 1573514056
						}), ' \u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'block add', 'data-jsx': 1573514056
						}, _react2.default.createElement(_link2.default, { href: '/editor', prefetch: true }, _react2.default.createElement('button', { className: 'large labeled icon fluid ui button primary', 'data-jsx': 1573514056
						}, _react2.default.createElement('i', { className: 'fa fa-pencil icon', 'data-jsx': 1573514056
						}), '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'subscriptions', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1573514056
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1573514056
						}, '\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 ', _react2.default.createElement('small', {
								'data-jsx': 1573514056
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1573514056
						}, _react2.default.createElement(_userList2.default, { subscriber: this.currentUser._id }), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 1573514056
						}))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'tags', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1573514056
						}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1573514056
						}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
								'data-jsx': 1573514056
						}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1573514056
						}, _react2.default.createElement(_tagsList2.default, { subscriber: this.props.user.profile._id })))), _react2.default.createElement('div', { className: 'block footer', id: 'footer', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'ui dropdown switcher', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'text', 'data-jsx': 1573514056
						}, _react2.default.createElement('b', {
								'data-jsx': 1573514056
						}, 'Levelup.name ', _react2.default.createElement('i', { className: 'fa fa-angle-down', 'data-jsx': 1573514056
						}))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1573514056
						}, _react2.default.createElement('div', { className: 'item', 'data-jsx': 1573514056
						}, 'Levelupmusic'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 1573514056
						}, 'Levelupworlds'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 1573514056
						}, 'Levelupplace'))), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1573514056
						}, _react2.default.createElement('a', { href: '#', 'data-jsx': 1573514056
						}, '\u043F\u043E\u043C\u043E\u0449\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1573514056
						}, '\u043A\u0430\u0440\u044C\u0435\u0440\u0430'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1573514056
						}, '\u0431\u043B\u043E\u0433'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1573514056
						}, '\u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C'), _react2.default.createElement('a', { href: '#', 'data-jsx': 1573514056
						}, '\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435')))), _react2.default.createElement(_style2.default, {
								styleId: 1573514056,
								css: '.block.add[data-jsx="1573514056"] {padding-top:0px;}.sidebar[data-jsx="1573514056"] {position:relative;overflow-y:scroll;background:#101010;}.sidebar[data-jsx="1573514056"]::-webkit-scrollbar {display:none;}.sidebar[data-jsx="1573514056"]::-webkit-scrollbar-thumb {display:none;}.sidebar-block[data-jsx="1573514056"] .title[data-jsx="1573514056"] .ui.header[data-jsx="1573514056"] {color:#fff;}.footer[data-jsx="1573514056"] {background:transparent;;position:absolute;left:0px;}.footer[data-jsx="1573514056"] .menu[data-jsx="1573514056"] {display:-webkit-flex; display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}.footer[data-jsx="1573514056"] .switcher[data-jsx="1573514056"] .menu[data-jsx="1573514056"] {display:none;bottom:100%!important;margin-bottom:10px;top:auto!important;}.footer[data-jsx="1573514056"] .menu[data-jsx="1573514056"] a[data-jsx="1573514056"] {display:inline-block;margin-right:10px;margin-bottom:5px;color:#c0c0c0;}.footer[data-jsx="1573514056"] .switcher[data-jsx="1573514056"] {margin-bottom:5px;color:#fff;display:block;}.profile[data-jsx="1573514056"] {position:relative;text-align:left;}.profile.simple[data-jsx="1573514056"] {height:85px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;}.profile.simple[data-jsx="1573514056"] a[data-jsx="1573514056"] {font-size:15px;font-weight:bold;color:#fff;}.profile[data-jsx="1573514056"] .menu[data-jsx="1573514056"] .profile[data-jsx="1573514056"] .content[data-jsx="1573514056"] .description[data-jsx="1573514056"] {color:#c0c0c0!important;}.profile[data-jsx="1573514056"] .secondary.menu[data-jsx="1573514056"] {text-align:left;}.profile[data-jsx="1573514056"] .button[data-jsx="1573514056"] {position: absolute;right:0px;top:0px;bottom:0px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;padding:10px;margin-right:18px;cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;background:none!important;height:auto;}.button[data-jsx="1573514056"]:focus {background:#c0c0c0!important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0pnQixBQUNBLG1DQUNLLGdCQUNoQixDQUNTLGlDQUNTLGtCQUNBLGtCQUNDLG1CQUNuQixDQUU0QixvREFDZixhQUNiLENBRWtDLDBEQUNyQixhQUNiLENBRWlDLHVHQUN0QixXQUNYLENBRVEsZ0NBQ2UsdUJBQUMsQ0FDTixrQkFDVCxTQUNULENBQ2dCLDZEQUNILG1DQUNFLDBEQUNJLHNFQUNqQixDQUN3Qiw4RkFDYixhQUNTLHNCQUNILG1CQUNBLG1CQUNqQixDQUNnQixzRkFDSyxxQkFDTCxrQkFDQSxrQkFDSixjQUNaLENBQ2tCLGlFQUNBLGtCQUNQLFdBQ0csY0FDZCxDQUNVLGlDQUNRLGtCQUNGLGdCQUNoQixDQUNnQix3Q0FDSCxZQUNDLG1DQUNVLHVCQUNKLG1CQUNwQixDQUNrQixpRUFDTCxlQUNFLGlCQUNOLFdBQ1QsQ0FDOEMsa0tBQ3RCLHdCQUN4QixDQUN5Qix3RUFDWCxnQkFDZCxDQUNlLGdFQUNFLG1CQUNULFVBQ0YsUUFDRyxXQUNFLG1DQUNVLHVCQUNKLG1CQUNOLGFBQ0ssa0JBQ0gsZUFDVSxxSEFDQywwQkFDZCxZQUNaLENBQ2Msc0NBQ2UsNkJBQzdCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4vdXNlci1saXN0J1xyXG5pbXBvcnQgVGFnc0xpc3QgZnJvbSAnLi90YWdzLWxpc3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGdldExvZ291dCwgZ2V0VXNlckZpZWxkIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJ1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL3V0aWxzL2luaXRzY3JpcHRzLmpzJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyLmpzJ1xyXG5cclxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnByb3BzLnVzZXIucHJvZmlsZTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdHN1YnNjcmlwdGlvbnM6IHtcclxuICAgIFx0XHR1c2VyczogbnVsbCxcclxuICAgIFx0XHRibG9nczogbnVsbCxcclxuICAgIFx0XHR0YWdzOiBudWxsLFxyXG4gICAgXHRcdHBvcHVsYXI6IG51bGxcclxuICAgIFx0fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgXHR0aGlzLnNldEZvb3RlcigpXHJcbiAgXHRVSSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlTG9nb3V0KCkge1xyXG4gIFx0YXdhaXQgY29va2llcy5yZW1vdmUoJ3gtYWNjZXNzLXRva2VuJywgeyBwYXRoOiAnJyB9KTtcclxuICBcdGF3YWl0IHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdMT0dPVVQnfSk7XHJcbiAgXHRhd2FpdCByb3V0ZXIucHVzaCgnLycsICcvJywge30pXHJcbiAgfVxyXG5cclxuICAvLyDQo9C/0YDQvtGB0YLQuNGC0YxcclxuICBzZXRGb290ZXIoKSB7XHJcbiAgXHR2YXIgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG4gIFx0dmFyIGZvb3RlckhlaWdodCA9IGZvb3Rlci5zY3JvbGxIZWlnaHQ7XHJcbiAgXHR2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIFx0dmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyJylbMF07XHJcbiAgXHRzaWRlYmFyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBmb290ZXJIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgXHRmb290ZXIuc3R5bGUudG9wID0gMTAwICsgJyUnXHJcbiAgXHRmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gICh0aGlzLnN0YXRlLmF1dGgpID8gKGZvb3RlckhlaWdodC8yICsgJ3B4JykgOiAoLWZvb3RlckhlaWdodCArICdweCcpXHJcbiAgfVxyXG5cclxuICB1c2VyQmFyU3dpdGNoKCkge1xyXG4gIFx0JCgnLnNpZGViYXInKVxyXG4gIFx0LmRpbW1lcignYWRkIGNvbnRlbnQnLCAkKCcuc2lkZWJhciAubWVudS52ZXJ0aWNhbCcpKVxyXG4gIFx0LmRpbW1lcignc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIFx0eyF0aGlzLnByb3BzLnVzZXIuaXNMb2dnZWQgPyBcclxuICAgICAgXHRcdDxkaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZSBzaW1wbGVcIj5cclxuICAgICAgXHRcdFx0XHQ8TGluayBocmVmPVwiL2F1dGhcIj48YT48aSBjbGFzc05hbWU9XCJmYSBmYS1sb2NrXCI+PC9pPiDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9hPjwvTGluaz5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc2lkZWJhci1ibG9ja1wiPlxyXG5cdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICBcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTQotC10LzRiyA8c21hbGw+0L/QvtC/0YPQu9GP0YDQvdGL0LU8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdCAgICAgIFx0XHRcdDxUYWdzTGlzdCAvPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0OiBcclxuICAgICAgXHRcdDxkaXY+XHJcblx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZSBibG9ja1wiPlxyXG5cdFx0ICAgICAgXHRcdDxVc2VyIC8+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24gdXNlcmJhclwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiB7dGhpcy51c2VyQmFyU3dpdGNoKCl9fSBjbGFzc05hbWU9XCJ1aSBpY29uIHRvcCBsZWZ0IHBvaW50aW5nIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlY29uZGFyeSB2ZXJ0aWNhbCBtZW51IGJsb2NrLXNoYWRvd1wiPlxyXG5cdFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPiDQnNC+0Lkg0L/RgNC+0YTQuNC70Yw8L2E+XHJcblx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT4g0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRgjwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPiDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmxhc2hcIj48L2k+INCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxyXG5cdFx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgIDxhIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUxvZ291dCgpfX0gY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPiDQktGL0YXQvtC0PC9hPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYWRkXCI+XHJcblx0XHQgICAgICBcdFx0PExpbmsgaHJlZj1cIi9lZGl0b3JcIiBwcmVmZXRjaD48YnV0dG9uIGNsYXNzTmFtZT1cImxhcmdlIGxhYmVsZWQgaWNvbiBmbHVpZCB1aSBidXR0b24gcHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWwgaWNvblwiPjwvaT5cclxuXHRcdFx0XHRcdCAg0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRglxyXG5cdFx0XHRcdFx0PC9idXR0b24+PC9MaW5rPlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc2lkZWJhci1ibG9ja1wiIGlkPVwic3Vic2NyaXB0aW9uc1wiPlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0ICAgICAgXHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTQn9C+0LTQv9C40YHQutC4IDxzbWFsbD7QuNGB0YHQu9C10LTQvtCy0LDRgtGMPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdCAgICAgIFx0XHRcdDxVc2VyTGlzdCBzdWJzY3JpYmVyPXt0aGlzLmN1cnJlbnRVc2VyLl9pZH0gLz5cclxuXHRcdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG5cdFx0ICAgICAgXHRcdFx0ey8qIHsodGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLmJsb2dzKSA/XHJcblx0XHQgICAgICBcdFx0XHRcdDxVc2VyTGlzdCB1c2Vycz17dGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLmJsb2dzfSAvPiA6IDxMb2FkZXIgLz5cclxuXHRcdCAgICAgIFx0XHRcdH0gKi99XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cclxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCIgaWQ9XCJ0YWdzXCI+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCi0LXQvNGLIDxzbWFsbD7QuNGB0YHQu9C10LTQvtCy0LDRgtGMPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdCAgICAgIFx0XHRcdDxUYWdzTGlzdCBzdWJzY3JpYmVyPXt0aGlzLnByb3BzLnVzZXIucHJvZmlsZS5faWR9IC8+XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0fVxyXG5cdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBmb290ZXJcIiBpZD1cImZvb3RlclwiPlxyXG5cdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHQgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVpIGRyb3Bkb3duIHN3aXRjaGVyXCI+XHJcblx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPjxiPkxldmVsdXAubmFtZSA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPjwvYj48L2Rpdj5cclxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGV2ZWx1cG11c2ljPC9kaXY+XHJcblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGV2ZWx1cHdvcmxkczwvZGl2PlxyXG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkxldmVsdXBwbGFjZTwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7Qv9C+0LzQvtGJ0Yw8L2E+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC60LDRgNGM0LXRgNCwPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7QsdC70L7QszwvYT5cclxuXHQgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0L/Rg9Cx0LvQuNGH0L3QvtGB0YLRjDwvYT5cclxuXHQgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0L4g0L/RgNC+0LXQutGC0LU8L2E+XHJcblx0ICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcblx0XHQgIDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQuYmxvY2suYWRkIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnNpZGViYXIge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRvdmVyZmxvdy15OnNjcm9sbDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IzEwMTAxMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5zaWRlYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcblx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnNpZGViYXItYmxvY2sgLnRpdGxlIC51aS5oZWFkZXIge1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5mb290ZXIge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDs7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLm1lbnUge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC13cmFwOndyYXA7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQuZm9vdGVyIC5zd2l0Y2hlciAubWVudSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRib3R0b206MTAwJSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHRcdFx0XHR0b3A6YXV0byFpbXBvcnRhbnQ7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQuZm9vdGVyIC5tZW51IGEge1xyXG5cdFx0ICBcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDoxMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHRcdFx0XHRjb2xvcjojYzBjMGMwO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LmZvb3RlciAuc3dpdGNoZXIge1xyXG5cdFx0ICBcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdCAgXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdCAgXHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlICB7XHJcblx0XHQgIFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0ICBcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZS5zaW1wbGUge1xyXG5cdFx0ICBcdFx0XHQgaGVpZ2h0Ojg1cHg7XHJcblx0XHQgIFx0XHRcdCBkaXNwbGF5OmZsZXg7XHJcblx0XHQgIFx0XHRcdCBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0ICBcdFx0XHQgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUuc2ltcGxlIGEge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOjE1cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlIC5tZW51IC5wcm9maWxlIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XHJcblx0XHQgIFx0XHRcdGNvbG9yOiNjMGMwYzAhaW1wb3J0YW50O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgLnNlY29uZGFyeS5tZW51IHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdFx0XHQucHJvZmlsZSAuYnV0dG9uIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHJpZ2h0OjBweDtcclxuXHRcdFx0XHRcdHRvcDowcHg7XHJcblx0XHRcdFx0XHRib3R0b206MHB4O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MTBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDoxOHB4O1xyXG5cdFx0XHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOjAuMnMgYWxsIGVhc2U7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OmF1dG87XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5idXR0b246Zm9jdXMge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojYzBjMGMwIWltcG9ydGFudDtcclxuXHRcdFx0XHR9XHJcblx0XHQgICAgYH08L3N0eWxlPiAgXHJcblx0XHQ8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdG9yZSkgPT4gc3RvcmUpKFNpZGViYXIpIl19 */\n/*@ sourceURL=components\\sidebar.js */'
						}));
				}
		}]);

		return Sidebar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
		return store;
})(Sidebar);