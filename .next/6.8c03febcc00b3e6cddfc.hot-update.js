webpackHotUpdate(6,{

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(570);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(563);

var _link2 = _interopRequireDefault(_link);

var _userList = __webpack_require__(683);

var _userList2 = _interopRequireDefault(_userList);

var _tagsList = __webpack_require__(682);

var _tagsList2 = _interopRequireDefault(_tagsList);

var _reactRedux = __webpack_require__(565);

var _user = __webpack_require__(577);

var _user2 = _interopRequireDefault(_user);

var _jsCookie = __webpack_require__(589);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

var _user3 = __webpack_require__(569);

var _initscripts = __webpack_require__(599);

var _loader = __webpack_require__(573);

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
				tags: [],
				popular: ['здоровье', 'веб-разработка', 'чтиво', 'блог', 'программирование']
			}
		};
		return _this;
	}

	(0, _createClass3.default)(Sidebar, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			if (this.currentUser) {
				(0, _user3.getUserField)(this.currentUser._id, 'userSubscriptions').then(function (res) {
					_this2.setState({
						subscriptions: (0, _extends3.default)({}, _this2.state.subscriptions, {
							users: res.data.userSubscriptions,
							blogs: [{ hello: 'world' }]
						})
					});
				});
			}
		}
	}, {
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
			var _this3 = this;

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
			}, this.state.subscriptions.popular ? _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.popular }) : _react2.default.createElement(_loader2.default, null)))) : _react2.default.createElement('div', {
				'data-jsx': 1573514056
			}, _react2.default.createElement('div', { className: 'profile block', 'data-jsx': 1573514056
			}, _react2.default.createElement(_user2.default, null), _react2.default.createElement('div', { className: 'button userbar', 'data-jsx': 1573514056
			}, _react2.default.createElement('div', { onClick: function onClick() {
					_this3.userBarSwitch();
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
					_this3.handleLogout();
				}, className: 'item', 'data-jsx': 1573514056
			}, _react2.default.createElement('i', { className: 'fa fa-sign-out', 'data-jsx': 1573514056
			}), ' \u0412\u044B\u0445\u043E\u0434')))), _react2.default.createElement('div', { className: 'block add', 'data-jsx': 1573514056
			}, _react2.default.createElement(_link2.default, { href: '/editor', prefetch: true }, _react2.default.createElement('button', { className: 'large basic fluid circular ui button inverted', 'data-jsx': 1573514056
			}, '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0441\u0442'))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'subscriptions', 'data-jsx': 1573514056
			}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1573514056
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1573514056
			}, '\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 ', _react2.default.createElement('small', {
				'data-jsx': 1573514056
			}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1573514056
			}, this.state.subscriptions.users ? _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.users }) : _react2.default.createElement(_loader2.default, null), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 1573514056
			}), this.state.subscriptions.blogs ? _react2.default.createElement(_userList2.default, { users: this.state.subscriptions.blogs }) : _react2.default.createElement(_loader2.default, null))), _react2.default.createElement('div', { className: 'block sidebar-block', id: 'tags', 'data-jsx': 1573514056
			}, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1573514056
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 1573514056
			}, '\u0422\u0435\u043C\u044B ', _react2.default.createElement('small', {
				'data-jsx': 1573514056
			}, '\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'block-content', 'data-jsx': 1573514056
			}, this.state.subscriptions.tags ? _react2.default.createElement(_tagsList2.default, { tags: this.state.subscriptions.tags }) : _react2.default.createElement(_loader2.default, null)))), _react2.default.createElement('div', { className: 'block footer', id: 'footer', 'data-jsx': 1573514056
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
				css: '.block.add[data-jsx="1573514056"] {padding-top:0px;}.sidebar[data-jsx="1573514056"] {position:relative;overflow-y:scroll;background:#101010;}.sidebar[data-jsx="1573514056"]::-webkit-scrollbar {display:none;}.sidebar[data-jsx="1573514056"]::-webkit-scrollbar-thumb {display:none;}.sidebar-block[data-jsx="1573514056"] .title[data-jsx="1573514056"] .ui.header[data-jsx="1573514056"] {color:#fff;}.footer[data-jsx="1573514056"] {background:transparent;;position:absolute;left:0px;}.footer[data-jsx="1573514056"] .menu[data-jsx="1573514056"] {display:-webkit-flex; display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}.footer[data-jsx="1573514056"] .switcher[data-jsx="1573514056"] .menu[data-jsx="1573514056"] {display:none;bottom:100%!important;margin-bottom:10px;top:auto!important;}.footer[data-jsx="1573514056"] .menu[data-jsx="1573514056"] a[data-jsx="1573514056"] {display:inline-block;margin-right:10px;margin-bottom:5px;color:#c0c0c0;}.footer[data-jsx="1573514056"] .switcher[data-jsx="1573514056"] {margin-bottom:5px;color:#fff;display:block;}.profile[data-jsx="1573514056"] {position:relative;text-align:left;}.profile.simple[data-jsx="1573514056"] {height:85px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;}.profile.simple[data-jsx="1573514056"] a[data-jsx="1573514056"] {font-size:15px;font-weight:bold;color:#fff;}.profile[data-jsx="1573514056"] .menu[data-jsx="1573514056"] .profile[data-jsx="1573514056"] .content[data-jsx="1573514056"] .description[data-jsx="1573514056"] {color:#c0c0c0!important;}.profile[data-jsx="1573514056"] .secondary.menu[data-jsx="1573514056"] {text-align:left;}.profile[data-jsx="1573514056"] .button[data-jsx="1573514056"] {position: absolute;right:0px;top:0px;bottom:0px;display:-webkit-flex; display:flex;justify-content:center;align-items:center;padding:10px;margin-right:18px;cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;background:none!important;height:auto;}.button[data-jsx="1573514056"]:focus {background:#c0c0c0!important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0tnQixBQUNBLG1DQUNLLGdCQUNoQixDQUNTLGlDQUNTLGtCQUNBLGtCQUNDLG1CQUNuQixDQUU0QixvREFDZixhQUNiLENBRWtDLDBEQUNyQixhQUNiLENBRWlDLHVHQUN0QixXQUNYLENBRVEsZ0NBQ2UsdUJBQUMsQ0FDTixrQkFDVCxTQUNULENBQ2dCLDZEQUNILG1DQUNFLDBEQUNJLHNFQUNqQixDQUN3Qiw4RkFDYixhQUNTLHNCQUNILG1CQUNBLG1CQUNqQixDQUNnQixzRkFDSyxxQkFDTCxrQkFDQSxrQkFDSixjQUNaLENBQ2tCLGlFQUNBLGtCQUNQLFdBQ0csY0FDZCxDQUNVLGlDQUNRLGtCQUNGLGdCQUNoQixDQUNnQix3Q0FDSCxZQUNDLG1DQUNVLHVCQUNKLG1CQUNwQixDQUNrQixpRUFDTCxlQUNFLGlCQUNOLFdBQ1QsQ0FDOEMsa0tBQ3RCLHdCQUN4QixDQUN5Qix3RUFDWCxnQkFDZCxDQUNlLGdFQUNFLG1CQUNULFVBQ0YsUUFDRyxXQUNFLG1DQUNVLHVCQUNKLG1CQUNOLGFBQ0ssa0JBQ0gsZUFDVSxxSEFDQywwQkFDZCxZQUNaLENBQ2Msc0NBQ2UsNkJBQzdCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4vdXNlci1saXN0J1xyXG5pbXBvcnQgVGFnc0xpc3QgZnJvbSAnLi90YWdzLWxpc3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGdldExvZ291dCwgZ2V0VXNlckZpZWxkIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJ1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL3V0aWxzL2luaXRzY3JpcHRzLmpzJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyLmpzJ1xyXG5cclxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnByb3BzLnVzZXIucHJvZmlsZTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdHN1YnNjcmlwdGlvbnM6IHtcclxuICAgIFx0XHR1c2VyczogbnVsbCxcclxuICAgIFx0XHRibG9nczogbnVsbCxcclxuICAgIFx0XHR0YWdzOiBbXSxcclxuICAgIFx0XHRwb3B1bGFyOiBbJ9C30LTQvtGA0L7QstGM0LUnLCAn0LLQtdCxLdGA0LDQt9GA0LDQsdC+0YLQutCwJywgJ9GH0YLQuNCy0L4nLCAn0LHQu9C+0LMnLCAn0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnXVxyXG4gICAgXHR9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gIFx0aWYodGhpcy5jdXJyZW50VXNlcikge1xyXG5cdFx0Z2V0VXNlckZpZWxkKHRoaXMuY3VycmVudFVzZXIuX2lkLCAndXNlclN1YnNjcmlwdGlvbnMnKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0c3Vic2NyaXB0aW9uczoge1xyXG5cdFx0XHRcdFx0Li4udGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLFxyXG5cdFx0XHRcdFx0dXNlcnM6IHJlcy5kYXRhLnVzZXJTdWJzY3JpcHRpb25zLFxyXG5cdFx0XHRcdFx0YmxvZ3M6IFt7aGVsbG86ICd3b3JsZCd9XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgXHR0aGlzLnNldEZvb3RlcigpXHJcbiAgXHRVSSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlTG9nb3V0KCkge1xyXG4gIFx0YXdhaXQgY29va2llcy5yZW1vdmUoJ3gtYWNjZXNzLXRva2VuJywgeyBwYXRoOiAnJyB9KTtcclxuICBcdGF3YWl0IHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdMT0dPVVQnfSk7XHJcbiAgXHRhd2FpdCByb3V0ZXIucHVzaCgnLycsICcvJywge30pXHJcbiAgfVxyXG5cclxuICAvLyDQo9C/0YDQvtGB0YLQuNGC0YxcclxuICBzZXRGb290ZXIoKSB7XHJcbiAgXHR2YXIgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG4gIFx0dmFyIGZvb3RlckhlaWdodCA9IGZvb3Rlci5zY3JvbGxIZWlnaHQ7XHJcbiAgXHR2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIFx0dmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyJylbMF07XHJcbiAgXHRzaWRlYmFyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBmb290ZXJIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgXHRmb290ZXIuc3R5bGUudG9wID0gMTAwICsgJyUnXHJcbiAgXHRmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gICh0aGlzLnN0YXRlLmF1dGgpID8gKGZvb3RlckhlaWdodC8yICsgJ3B4JykgOiAoLWZvb3RlckhlaWdodCArICdweCcpXHJcbiAgfVxyXG5cclxuICB1c2VyQmFyU3dpdGNoKCkge1xyXG4gIFx0JCgnLnNpZGViYXInKVxyXG4gIFx0LmRpbW1lcignYWRkIGNvbnRlbnQnLCAkKCcuc2lkZWJhciAubWVudS52ZXJ0aWNhbCcpKVxyXG4gIFx0LmRpbW1lcignc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIFx0eyF0aGlzLnByb3BzLnVzZXIuaXNMb2dnZWQgPyBcclxuICAgICAgXHRcdDxkaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZSBzaW1wbGVcIj5cclxuICAgICAgXHRcdFx0XHQ8TGluayBocmVmPVwiL2F1dGhcIj48YT48aSBjbGFzc05hbWU9XCJmYSBmYS1sb2NrXCI+PC9pPiDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9hPjwvTGluaz5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc2lkZWJhci1ibG9ja1wiPlxyXG5cdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICBcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTQotC10LzRiyA8c21hbGw+0L/QvtC/0YPQu9GP0YDQvdGL0LU8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0eyh0aGlzLnN0YXRlLnN1YnNjcmlwdGlvbnMucG9wdWxhcikgP1xyXG5cdFx0ICAgICAgXHRcdFx0XHQ8VGFnc0xpc3QgdGFncz17dGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLnBvcHVsYXJ9IC8+IDogPExvYWRlciAvPlxyXG5cdFx0ICAgICAgXHRcdFx0fVxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0OiBcclxuICAgICAgXHRcdDxkaXY+XHJcblx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZSBibG9ja1wiPlxyXG5cdFx0ICAgICAgXHRcdDxVc2VyIC8+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24gdXNlcmJhclwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiB7dGhpcy51c2VyQmFyU3dpdGNoKCl9fSBjbGFzc05hbWU9XCJ1aSBpY29uIHRvcCBsZWZ0IHBvaW50aW5nIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlY29uZGFyeSB2ZXJ0aWNhbCBtZW51IGJsb2NrLXNoYWRvd1wiPlxyXG5cdFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPiDQnNC+0Lkg0L/RgNC+0YTQuNC70Yw8L2E+XHJcblx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT4g0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRgjwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPiDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmxhc2hcIj48L2k+INCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxyXG5cdFx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgIDxhIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUxvZ291dCgpfX0gY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPiDQktGL0YXQvtC0PC9hPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYWRkXCI+XHJcblx0XHQgICAgICBcdFx0PExpbmsgaHJlZj1cIi9lZGl0b3JcIiBwcmVmZXRjaD48YnV0dG9uIGNsYXNzTmFtZT1cImxhcmdlIGJhc2ljIGZsdWlkIGNpcmN1bGFyIHVpIGJ1dHRvbiBpbnZlcnRlZFwiPlxyXG5cdFx0XHRcdFx0ICDQndCw0L/QuNGB0LDRgtGMINC/0L7RgdGCXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj48L0xpbms+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cclxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCIgaWQ9XCJzdWJzY3JpcHRpb25zXCI+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCf0L7QtNC/0LjRgdC60LggPHNtYWxsPtC40YHRgdC70LXQtNC+0LLQsNGC0Yw8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0eyh0aGlzLnN0YXRlLnN1YnNjcmlwdGlvbnMudXNlcnMpID9cclxuXHRcdCAgICAgIFx0XHRcdFx0PFVzZXJMaXN0IHVzZXJzPXt0aGlzLnN0YXRlLnN1YnNjcmlwdGlvbnMudXNlcnN9IC8+IDogPExvYWRlciAvPlxyXG5cdFx0ICAgICAgXHRcdFx0fVxyXG5cdFx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XHJcblx0XHQgICAgICBcdFx0XHR7KHRoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5ibG9ncykgP1xyXG5cdFx0ICAgICAgXHRcdFx0XHQ8VXNlckxpc3QgdXNlcnM9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5ibG9nc30gLz4gOiA8TG9hZGVyIC8+XHJcblx0XHQgICAgICBcdFx0XHR9XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cclxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCIgaWQ9XCJ0YWdzXCI+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCi0LXQvNGLIDxzbWFsbD7QuNGB0YHQu9C10LTQvtCy0LDRgtGMPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdCAgICAgIFx0XHRcdHsodGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLnRhZ3MpID9cclxuXHRcdCAgICAgIFx0XHRcdFx0PFRhZ3NMaXN0IHRhZ3M9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy50YWdzfSAvPiA6IDxMb2FkZXIgLz5cclxuXHRcdCAgICAgIFx0XHRcdH1cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0PC9kaXY+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHR9XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGZvb3RlclwiIGlkPVwiZm9vdGVyXCI+XHJcblx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgZHJvcGRvd24gc3dpdGNoZXJcIj5cclxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGI+TGV2ZWx1cC5uYW1lIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9iPjwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwbXVzaWM8L2Rpdj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwd29ybGRzPC9kaXY+XHJcblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGV2ZWx1cHBsYWNlPC9kaXY+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC/0L7QvNC+0YnRjDwvYT5cclxuXHQgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0LrQsNGA0YzQtdGA0LA8L2E+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtCx0LvQvtCzPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7Qv9GD0LHQu9C40YfQvdC+0YHRgtGMPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7QviDQv9GA0L7QtdC60YLQtTwvYT5cclxuXHQgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuXHRcdCAgPHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5ibG9jay5hZGQge1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuc2lkZWJhciB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojMTAxMDEwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5zaWRlYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuc2lkZWJhci1ibG9jayAudGl0bGUgLnVpLmhlYWRlciB7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmZvb3RlciB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OztcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICBcdFx0LmZvb3RlciAubWVudSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LXdyYXA6d3JhcDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLnN3aXRjaGVyIC5tZW51IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdGJvdHRvbToxMDAlIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0XHRcdHRvcDphdXRvIWltcG9ydGFudDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLm1lbnUgYSB7XHJcblx0XHQgIFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiNjMGMwYzA7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQuZm9vdGVyIC5zd2l0Y2hlciB7XHJcblx0XHQgIFx0XHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0ICBcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0ICBcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgIHtcclxuXHRcdCAgXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHQgIFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlLnNpbXBsZSB7XHJcblx0XHQgIFx0XHRcdCBoZWlnaHQ6ODVweDtcclxuXHRcdCAgXHRcdFx0IGRpc3BsYXk6ZmxleDtcclxuXHRcdCAgXHRcdFx0IGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHQgIFx0XHRcdCBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZS5zaW1wbGUgYSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MTVweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgLm1lbnUgLnByb2ZpbGUgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuXHRcdCAgXHRcdFx0Y29sb3I6I2MwYzBjMCFpbXBvcnRhbnQ7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZSAuc2Vjb25kYXJ5Lm1lbnUge1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0XHRcdC5wcm9maWxlIC5idXR0b24ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6MHB4O1xyXG5cdFx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRcdGJvdHRvbTowcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE4cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246MC4ycyBhbGwgZWFzZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmJ1dHRvbjpmb2N1cyB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNjMGMwYzAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdCAgICBgfTwvc3R5bGU+ICBcclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0b3JlKSA9PiBzdG9yZSkoU2lkZWJhcikiXX0= */\n/*@ sourceURL=components\\sidebar.js */'
			}));
		}
	}]);

	return Sidebar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
	return store;
})(Sidebar);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\www\\Levelup.name\\components\\sidebar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\www\\Levelup.name\\components\\sidebar.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(330)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIuanM/NzI2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNFOztBQUNGOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNhOztBQUNYOztBQUNGOzs7Ozs7SUFFRDtrQ0FDSjs7a0JBQVksT0FBTztzQ0FBQTs7c0lBRWpCOztRQUFLLGNBQWMsTUFBSyxNQUFNLEtBQzlCO1FBQUs7O1dBR0g7V0FDQTtVQUNBO2FBQVMsQ0FBQyxZQUFZLGtCQUFrQixTQUFTLFFBQVE7QUFIekQ7QUFERDtTQU9GOzs7Ozt1Q0FHb0I7Z0JBQ3BCOztPQUFHLEtBQUssYUFDVDs2QkFBYSxLQUFLLFlBQVksS0FBSyxxQkFBcUIsS0FBSyxVQUFDLEtBQzdEO1lBQUs7Z0RBRUEsT0FBSyxNQUFNO2NBQ1AsSUFBSSxLQUNYO2NBQU8sQ0FBQyxFQUFDLE9BR1g7QUFKRTtBQUZEO0FBT0Y7QUFDQzs7OztzQ0FHQTtRQUNBO0FBQ0E7Ozs7Ozs7Ozs7O2VBR00sbUJBQVEsT0FBTyxrQkFBa0IsRUFBRSxNQUFNOzs7O2VBQ3pDLEtBQUssTUFBTSxTQUFTLEVBQUMsTUFBTTs7OztlQUMzQixnQkFBTyxLQUFLLEtBQUssS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FBRzdCOzs7Ozs7OEJBRUM7T0FBSSxTQUFTLFNBQVMsZUFDdEI7T0FBSSxlQUFlLE9BQ25CO09BQUksZUFBZSxPQUNuQjtPQUFJLFVBQVUsU0FBUyx1QkFBdUIsV0FDOUM7V0FBUSxNQUFNLGdCQUFnQixlQUFlLEtBQzdDO1VBQU8sTUFBTSxNQUFNLE1BQ25CO1VBQU8sTUFBTSxZQUFjLEtBQUssTUFBTSxPQUFTLGVBQWEsSUFBSSxPQUFTLENBQUMsZUFDMUU7Ozs7a0NBR0E7S0FBRSxZQUNELE9BQU8sZUFBZSxFQUFFLDRCQUN4QixPQUNEOzs7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IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4vdXNlci1saXN0J1xyXG5pbXBvcnQgVGFnc0xpc3QgZnJvbSAnLi90YWdzLWxpc3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGdldExvZ291dCwgZ2V0VXNlckZpZWxkIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJ1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL3V0aWxzL2luaXRzY3JpcHRzLmpzJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyLmpzJ1xyXG5cclxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnByb3BzLnVzZXIucHJvZmlsZTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdHN1YnNjcmlwdGlvbnM6IHtcclxuICAgIFx0XHR1c2VyczogbnVsbCxcclxuICAgIFx0XHRibG9nczogbnVsbCxcclxuICAgIFx0XHR0YWdzOiBbXSxcclxuICAgIFx0XHRwb3B1bGFyOiBbJ9C30LTQvtGA0L7QstGM0LUnLCAn0LLQtdCxLdGA0LDQt9GA0LDQsdC+0YLQutCwJywgJ9GH0YLQuNCy0L4nLCAn0LHQu9C+0LMnLCAn0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnXVxyXG4gICAgXHR9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gIFx0aWYodGhpcy5jdXJyZW50VXNlcikge1xyXG5cdFx0Z2V0VXNlckZpZWxkKHRoaXMuY3VycmVudFVzZXIuX2lkLCAndXNlclN1YnNjcmlwdGlvbnMnKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0c3Vic2NyaXB0aW9uczoge1xyXG5cdFx0XHRcdFx0Li4udGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLFxyXG5cdFx0XHRcdFx0dXNlcnM6IHJlcy5kYXRhLnVzZXJTdWJzY3JpcHRpb25zLFxyXG5cdFx0XHRcdFx0YmxvZ3M6IFt7aGVsbG86ICd3b3JsZCd9XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgXHR0aGlzLnNldEZvb3RlcigpXHJcbiAgXHRVSSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlTG9nb3V0KCkge1xyXG4gIFx0YXdhaXQgY29va2llcy5yZW1vdmUoJ3gtYWNjZXNzLXRva2VuJywgeyBwYXRoOiAnJyB9KTtcclxuICBcdGF3YWl0IHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdMT0dPVVQnfSk7XHJcbiAgXHRhd2FpdCByb3V0ZXIucHVzaCgnLycsICcvJywge30pXHJcbiAgfVxyXG5cclxuICAvLyDQo9C/0YDQvtGB0YLQuNGC0YxcclxuICBzZXRGb290ZXIoKSB7XHJcbiAgXHR2YXIgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG4gIFx0dmFyIGZvb3RlckhlaWdodCA9IGZvb3Rlci5zY3JvbGxIZWlnaHQ7XHJcbiAgXHR2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIFx0dmFyIHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyJylbMF07XHJcbiAgXHRzaWRlYmFyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBmb290ZXJIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgXHRmb290ZXIuc3R5bGUudG9wID0gMTAwICsgJyUnXHJcbiAgXHRmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gICh0aGlzLnN0YXRlLmF1dGgpID8gKGZvb3RlckhlaWdodC8yICsgJ3B4JykgOiAoLWZvb3RlckhlaWdodCArICdweCcpXHJcbiAgfVxyXG5cclxuICB1c2VyQmFyU3dpdGNoKCkge1xyXG4gIFx0JCgnLnNpZGViYXInKVxyXG4gIFx0LmRpbW1lcignYWRkIGNvbnRlbnQnLCAkKCcuc2lkZWJhciAubWVudS52ZXJ0aWNhbCcpKVxyXG4gIFx0LmRpbW1lcignc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIFx0eyF0aGlzLnByb3BzLnVzZXIuaXNMb2dnZWQgPyBcclxuICAgICAgXHRcdDxkaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZSBzaW1wbGVcIj5cclxuICAgICAgXHRcdFx0XHQ8TGluayBocmVmPVwiL2F1dGhcIj48YT48aSBjbGFzc05hbWU9XCJmYSBmYS1sb2NrXCI+PC9pPiDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9hPjwvTGluaz5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc2lkZWJhci1ibG9ja1wiPlxyXG5cdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICBcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTQotC10LzRiyA8c21hbGw+0L/QvtC/0YPQu9GP0YDQvdGL0LU8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0eyh0aGlzLnN0YXRlLnN1YnNjcmlwdGlvbnMucG9wdWxhcikgP1xyXG5cdFx0ICAgICAgXHRcdFx0XHQ8VGFnc0xpc3QgdGFncz17dGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLnBvcHVsYXJ9IC8+IDogPExvYWRlciAvPlxyXG5cdFx0ICAgICAgXHRcdFx0fVxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0OiBcclxuICAgICAgXHRcdDxkaXY+XHJcblx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZSBibG9ja1wiPlxyXG5cdFx0ICAgICAgXHRcdDxVc2VyIC8+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24gdXNlcmJhclwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiB7dGhpcy51c2VyQmFyU3dpdGNoKCl9fSBjbGFzc05hbWU9XCJ1aSBpY29uIHRvcCBsZWZ0IHBvaW50aW5nIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlY29uZGFyeSB2ZXJ0aWNhbCBtZW51IGJsb2NrLXNoYWRvd1wiPlxyXG5cdFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPiDQnNC+0Lkg0L/RgNC+0YTQuNC70Yw8L2E+XHJcblx0XHRcdFx0XHRcdCAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT4g0J3QsNC/0LjRgdCw0YLRjCDQv9C+0YHRgjwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPiDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvYT5cclxuXHRcdFx0XHRcdFx0ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmxhc2hcIj48L2k+INCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxyXG5cdFx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgIDxhIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUxvZ291dCgpfX0gY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPiDQktGL0YXQvtC0PC9hPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHQ8L2Rpdj5cclxuXHJcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYWRkXCI+XHJcblx0XHQgICAgICBcdFx0PExpbmsgaHJlZj1cIi9lZGl0b3JcIiBwcmVmZXRjaD48YnV0dG9uIGNsYXNzTmFtZT1cImxhcmdlIGJhc2ljIGZsdWlkIGNpcmN1bGFyIHVpIGJ1dHRvbiBpbnZlcnRlZFwiPlxyXG5cdFx0XHRcdFx0ICDQndCw0L/QuNGB0LDRgtGMINC/0L7RgdGCXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj48L0xpbms+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cclxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCIgaWQ9XCJzdWJzY3JpcHRpb25zXCI+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCf0L7QtNC/0LjRgdC60LggPHNtYWxsPtC40YHRgdC70LXQtNC+0LLQsNGC0Yw8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0ICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdFx0ICAgICAgXHRcdFx0eyh0aGlzLnN0YXRlLnN1YnNjcmlwdGlvbnMudXNlcnMpID9cclxuXHRcdCAgICAgIFx0XHRcdFx0PFVzZXJMaXN0IHVzZXJzPXt0aGlzLnN0YXRlLnN1YnNjcmlwdGlvbnMudXNlcnN9IC8+IDogPExvYWRlciAvPlxyXG5cdFx0ICAgICAgXHRcdFx0fVxyXG5cdFx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XHJcblx0XHQgICAgICBcdFx0XHR7KHRoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5ibG9ncykgP1xyXG5cdFx0ICAgICAgXHRcdFx0XHQ8VXNlckxpc3QgdXNlcnM9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy5ibG9nc30gLz4gOiA8TG9hZGVyIC8+XHJcblx0XHQgICAgICBcdFx0XHR9XHJcblx0XHQgICAgICBcdFx0PC9kaXY+XHJcblx0XHQgICAgICBcdDwvZGl2PlxyXG5cclxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBzaWRlYmFyLWJsb2NrXCIgaWQ9XCJ0YWdzXCI+XHJcblx0XHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHQgICAgICBcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdNCi0LXQvNGLIDxzbWFsbD7QuNGB0YHQu9C10LTQvtCy0LDRgtGMPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdCAgICAgIFx0XHRcdHsodGhpcy5zdGF0ZS5zdWJzY3JpcHRpb25zLnRhZ3MpID9cclxuXHRcdCAgICAgIFx0XHRcdFx0PFRhZ3NMaXN0IHRhZ3M9e3RoaXMuc3RhdGUuc3Vic2NyaXB0aW9ucy50YWdzfSAvPiA6IDxMb2FkZXIgLz5cclxuXHRcdCAgICAgIFx0XHRcdH1cclxuXHRcdCAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdCAgICAgIFx0PC9kaXY+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHR9XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGZvb3RlclwiIGlkPVwiZm9vdGVyXCI+XHJcblx0ICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG5cdCAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgZHJvcGRvd24gc3dpdGNoZXJcIj5cclxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGI+TGV2ZWx1cC5uYW1lIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9iPjwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwbXVzaWM8L2Rpdj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MZXZlbHVwd29ybGRzPC9kaXY+XHJcblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGV2ZWx1cHBsYWNlPC9kaXY+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0ICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtC/0L7QvNC+0YnRjDwvYT5cclxuXHQgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+0LrQsNGA0YzQtdGA0LA8L2E+XHJcblx0ICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPtCx0LvQvtCzPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7Qv9GD0LHQu9C40YfQvdC+0YHRgtGMPC9hPlxyXG5cdCAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj7QviDQv9GA0L7QtdC60YLQtTwvYT5cclxuXHQgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuXHRcdCAgPHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5ibG9jay5hZGQge1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuc2lkZWJhciB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojMTAxMDEwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5zaWRlYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuc2lkZWJhci1ibG9jayAudGl0bGUgLnVpLmhlYWRlciB7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmZvb3RlciB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OztcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICBcdFx0LmZvb3RlciAubWVudSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LXdyYXA6d3JhcDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLnN3aXRjaGVyIC5tZW51IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdGJvdHRvbToxMDAlIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0XHRcdHRvcDphdXRvIWltcG9ydGFudDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5mb290ZXIgLm1lbnUgYSB7XHJcblx0XHQgIFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiNjMGMwYzA7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQuZm9vdGVyIC5zd2l0Y2hlciB7XHJcblx0XHQgIFx0XHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0ICBcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0ICBcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgIHtcclxuXHRcdCAgXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHQgIFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdCAgXHRcdH1cclxuXHRcdCAgXHRcdC5wcm9maWxlLnNpbXBsZSB7XHJcblx0XHQgIFx0XHRcdCBoZWlnaHQ6ODVweDtcclxuXHRcdCAgXHRcdFx0IGRpc3BsYXk6ZmxleDtcclxuXHRcdCAgXHRcdFx0IGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHQgIFx0XHRcdCBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZS5zaW1wbGUgYSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MTVweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0ICBcdFx0LnByb2ZpbGUgLm1lbnUgLnByb2ZpbGUgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcclxuXHRcdCAgXHRcdFx0Y29sb3I6I2MwYzBjMCFpbXBvcnRhbnQ7XHJcblx0XHQgIFx0XHR9XHJcblx0XHQgIFx0XHQucHJvZmlsZSAuc2Vjb25kYXJ5Lm1lbnUge1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0XHRcdC5wcm9maWxlIC5idXR0b24ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6MHB4O1xyXG5cdFx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRcdGJvdHRvbTowcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE4cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246MC4ycyBhbGwgZWFzZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmJ1dHRvbjpmb2N1cyB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNjMGMwYzAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdCAgICBgfTwvc3R5bGU+ICBcclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0b3JlKSA9PiBzdG9yZSkoU2lkZWJhcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NpZGViYXIuanMiXSwic291cmNlUm9vdCI6IiJ9