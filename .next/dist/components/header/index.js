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

var _reactRedux = require('react-redux');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _app = require('../../actions/app.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
		(0, _inherits3.default)(Header, _React$Component);

		function Header(props) {
				(0, _classCallCheck3.default)(this, Header);

				var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

				_this.state = {
						results: null
				};
				return _this;
		}

		(0, _createClass3.default)(Header, [{
				key: 'getSearch',
				value: function getSearch() {
						var results = $('.results');
						this.props.dispatch({ type: 'SEARCH_SWITCH' });

						var dimmer = require('semantic-ui-dimmer');
						$('.after-header').dimmer({ closable: false }).dimmer('toggle');
				}
		}, {
				key: 'handleTyping',
				value: function handleTyping(e) {
						var _this2 = this;

						var query = e.target.value;
						(0, _app.makeSearch)(query).then(function (res) {
								_this2.setState({
										results: res.data
								});
						});
				}
		}, {
				key: 'render',
				value: function render() {
						var _this3 = this;

						console.log(this.state);
						var results = function results() {
								if (_this3.state.results) {
										return _this3.state.results.users.map(function (item, i) {
												return _react2.default.createElement(User, { user: item });
										});
								} else {
										return _react2.default.createElement('div', null);
								}
						};
						return _react2.default.createElement('div', { className: 'header-wrapper', 'data-jsx': 4267263816
						}, this.props.header.search ? _react2.default.createElement('div', { className: 'ui secondary menu block search', 'data-jsx': 4267263816
						}, _react2.default.createElement('div', { className: 'menu left', 'data-jsx': 4267263816
						}, _react2.default.createElement('div', { className: 'search-inner', 'data-jsx': 4267263816
						}, _react2.default.createElement('div', { className: 'search', 'data-jsx': 4267263816
						}, _react2.default.createElement('input', { onChange: function onChange(e) {
										_this3.handleTyping(e);
								}, type: 'text', ref: function ref(input) {
										return input && input.focus();
								}, className: 'search-input', placeholder: '\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u043C \u0438\u0441\u043A\u0430\u0442\u044C?', 'data-jsx': 4267263816
						}), _react2.default.createElement('div', { className: 'results', 'data-jsx': 4267263816
						}, results)), _react2.default.createElement('a', { className: 'ui item', onClick: function onClick() {
										_this3.getSearch(true);
								}, 'data-jsx': 4267263816
						}, _react2.default.createElement('i', { className: 'fa fa-times', 'data-jsx': 4267263816
						}))))) : _react2.default.createElement('div', { className: 'ui secondary menu block', 'data-jsx': 4267263816
						}, _react2.default.createElement('div', { className: 'menu', 'data-jsx': 4267263816
						}, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 4267263816
						}, _react2.default.createElement('b', {
								'data-jsx': 4267263816
						}, '\u041B\u0435\u043D\u0442\u0430'))), _react2.default.createElement(_link2.default, { href: '/authors' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 4267263816
						}, '\u0410\u0432\u0442\u043E\u0440\u044B')), _react2.default.createElement(_link2.default, { href: '/blogs' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 4267263816
						}, '\u0411\u043B\u043E\u0433\u0438')), _react2.default.createElement(_link2.default, { href: '/adv' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 4267263816
						}, '\u0420\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C'))), _react2.default.createElement('div', { className: 'right menu', 'data-jsx': 4267263816
						}, _react2.default.createElement('a', { className: 'ui item', onClick: function onClick() {
										_this3.getSearch(true);
								}, 'data-jsx': 4267263816
						}, _react2.default.createElement('i', { className: 'fa fa-search', 'data-jsx': 4267263816
						})))), _react2.default.createElement(_style2.default, {
								styleId: 4267263816,
								css: '.search[data-jsx="4267263816"] {width:100%;position:relative;}.search[data-jsx="4267263816"] .results[data-jsx="4267263816"] {position:absolute;left:0px;top:100%;width:668px;background:#fff;z-index:9999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVnQixBQUNGLGdDQUNHLFdBQ08sa0JBQ2xCLENBRWlCLGdFQUNDLGtCQUNULFNBQ0EsU0FDRyxZQUNJLGdCQUNILGFBQ2IiLCJmaWxlIjoiY29tcG9uZW50c1xcaGVhZGVyXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IG1ha2VTZWFyY2ggfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FwcC5qcydcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHJlc3VsdHM6IG51bGxcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGdldFNlYXJjaCgpIHtcclxuXHQgIFx0dmFyIHJlc3VsdHMgPSAkKCcucmVzdWx0cycpXHJcblx0ICBcdHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfU1dJVENIJ30pXHJcblxyXG5cdCAgXHR2YXIgZGltbWVyID0gcmVxdWlyZSgnc2VtYW50aWMtdWktZGltbWVyJyk7XHJcblx0ICBcdCQoJy5hZnRlci1oZWFkZXInKS5kaW1tZXIoe2Nsb3NhYmxlOmZhbHNlfSlcclxuXHQgIFx0LmRpbW1lcigndG9nZ2xlJyk7ICBcclxuICB9XHJcblxyXG4gIGhhbmRsZVR5cGluZyhlKSB7XHJcblx0XHR2YXIgcXVlcnkgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdG1ha2VTZWFyY2gocXVlcnkpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRyZXN1bHRzOnJlcy5kYXRhXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICBcdHZhciByZXN1bHRzID0gKCkgPT4ge1xyXG4gIFx0XHRpZih0aGlzLnN0YXRlLnJlc3VsdHMpIHsgXHJcblx0ICBcdFx0cmV0dXJuIHRoaXMuc3RhdGUucmVzdWx0cy51c2Vycy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKDxVc2VyIHVzZXI9e2l0ZW19IC8+KVxyXG5cdFx0XHR9KVxyXG5cdCAgXHR9IGVsc2Uge1xyXG5cdCAgXHRcdHJldHVybiAoPGRpdj48L2Rpdj4pXHJcblx0ICBcdH1cclxuICBcdH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuXHJcbiAgXHRcdHt0aGlzLnByb3BzLmhlYWRlci5zZWFyY2ggP1xyXG5cdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2Vjb25kYXJ5IG1lbnUgYmxvY2sgc2VhcmNoXCI+XHJcblx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgbGVmdFwiPlxyXG5cdFx0ICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbm5lclwiPlxyXG5cdFx0ICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuaGFuZGxlVHlwaW5nKGUpfX0gdHlwZT1cInRleHRcIiByZWY9e2lucHV0ID0+IGlucHV0ICYmIGlucHV0LmZvY3VzKCl9IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwi0KfRgtC+INCx0YPQtNC10Lwg0LjRgdC60LDRgtGMP1wiIC8+XHJcblx0XHRcdFx0ICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cclxuXHRcdFx0XHQgICAgXHRcdFx0e3Jlc3VsdHN9XHJcblx0XHRcdFx0XHQgXHRcdDwvZGl2PlxyXG5cdFx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0ICAgIFx0XHRcdDxhIGNsYXNzTmFtZT1cInVpIGl0ZW1cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5nZXRTZWFyY2godHJ1ZSl9fT5cclxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgOlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVpIHNlY29uZGFyeSBtZW51IGJsb2NrXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPScvJz48YSBjbGFzc05hbWU9XCJpdGVtXCI+PGI+0JvQtdC90YLQsDwvYj48L2E+PC9MaW5rPlxyXG5cdFx0XHQgICAgICA8TGluayBocmVmPScvYXV0aG9ycyc+PGEgY2xhc3NOYW1lPVwiaXRlbVwiPtCQ0LLRgtC+0YDRizwvYT48L0xpbms+XHJcblx0XHRcdFx0ICAgPExpbmsgaHJlZj0nL2Jsb2dzJz48YSBjbGFzc05hbWU9XCJpdGVtXCI+0JHQu9C+0LPQuDwvYT48L0xpbms+XHJcblx0XHRcdFx0ICAgPExpbmsgaHJlZj0nL2Fkdic+PGEgY2xhc3NOYW1lPVwiaXRlbVwiPtCg0LXQutC70LDQvNC+0LTQsNGC0LXQu9GP0Lw8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudVwiPlxyXG5cdFx0XHRcdCAgIFx0PGEgY2xhc3NOYW1lPVwidWkgaXRlbVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmdldFNlYXJjaCh0cnVlKX19PlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcblx0XHRcdFx0ICAgXHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0fVx0XHJcblxyXG5cdFx0XHQgPHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0LnNlYXJjaCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5zZWFyY2ggLnJlc3VsdHMge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0XHRcdHRvcDoxMDAlO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDo2NjhweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHRcdFx0XHR6LWluZGV4Ojk5OTk7XHRcclxuXHRcdFx0XHRcdH1cclxuXHQgICAgXHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIFx0dmFyIHVzZXIgPSB0aGlzLnN0YXRlLnVzZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2Pnt1c2VyLnVzZXJOYW1lfSBIZWxsb1dvcmxkPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShIZWFkZXIpIl19 */\n/*@ sourceURL=components\\header\\index.js */'
						}));
				}
		}]);

		return Header;
}(_react2.default.Component);

var User = function (_React$Component2) {
		(0, _inherits3.default)(User, _React$Component2);

		function User(props) {
				(0, _classCallCheck3.default)(this, User);

				return (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).call(this, props));
		}

		(0, _createClass3.default)(User, [{
				key: 'render',
				value: function render() {
						var user = this.state.user;
						return _react2.default.createElement('div', null, user.userName, ' HelloWorld');
				}
		}]);

		return User;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
		return state;
})(Header);