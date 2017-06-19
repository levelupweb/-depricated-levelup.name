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

var _reactAvatar = require('react-avatar');

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _tagsList = require('../tagsList.js');

var _tagsList2 = _interopRequireDefault(_tagsList);

var _userList = require('../userList.js');

var _userList2 = _interopRequireDefault(_userList);

var _postList = require('../postList.js');

var _postList2 = _interopRequireDefault(_postList);

var _blogList = require('../blogList.js');

var _blogList2 = _interopRequireDefault(_blogList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
	(0, _inherits3.default)(Header, _React$Component);

	function Header(props) {
		(0, _classCallCheck3.default)(this, Header);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

		_this.state = {
			results: {
				users: [],
				posts: [],
				tags: [],
				blogs: []
			}
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
			if (query.length > 0) {
				(0, _app.makeSearch)(query).then(function (res) {
					_this2.setState({
						results: res.data
					});
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var results = this.state.results;
			return _react2.default.createElement('div', { className: 'header-wrapper', 'data-jsx': 2780928104
			}, this.props.header.search ? _react2.default.createElement('div', { className: 'ui secondary menu search', 'data-jsx': 2780928104
			}, _react2.default.createElement('div', { className: 'menu left', 'data-jsx': 2780928104
			}, _react2.default.createElement('div', { className: 'search-inner', 'data-jsx': 2780928104
			}, _react2.default.createElement('div', { className: 'search', 'data-jsx': 2780928104
			}, _react2.default.createElement('input', { onChange: function onChange(e) {
					_this3.handleTyping(e);
				}, type: 'text', ref: function ref(input) {
					return input && input.focus();
				}, className: 'search-input', placeholder: '\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u043C \u0438\u0441\u043A\u0430\u0442\u044C?', 'data-jsx': 2780928104
			}), _react2.default.createElement('div', { className: 'results', 'data-jsx': 2780928104
			}, results.posts.length > 0 && _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 2780928104
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2780928104
			}, '\u041F\u043E\u0441\u0442\u044B'), _react2.default.createElement('div', { className: 'grid', 'data-jsx': 2780928104
			}, _react2.default.createElement(_postList2.default, { size: 'block', posts: results.posts }))), results.users.length > 0 && _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 2780928104
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2780928104
			}, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438'), _react2.default.createElement('div', { className: 'grid', 'data-jsx': 2780928104
			}, _react2.default.createElement(_userList2.default, { size: 'block', users: results.users }))), results.blogs.length > 0 && _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 2780928104
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2780928104
			}, '\u0411\u043B\u043E\u0433\u0438'), _react2.default.createElement('div', { className: 'grid', 'data-jsx': 2780928104
			}, _react2.default.createElement(_blogList2.default, { size: 'block', blogs: results.blogs }))), results.tags.length > 0 && _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 2780928104
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2780928104
			}, '\u0422\u0435\u043C\u044B'), _react2.default.createElement('div', { className: 'grid', 'data-jsx': 2780928104
			}, _react2.default.createElement(_tagsList2.default, { size: 'block', tags: results.tags }))))), _react2.default.createElement('a', { className: 'ui item', onClick: function onClick() {
					_this3.getSearch(true);
				}, 'data-jsx': 2780928104
			}, _react2.default.createElement('i', { className: 'fa fa-times', 'data-jsx': 2780928104
			}))))) : _react2.default.createElement('div', { className: 'block menu primary', 'data-jsx': 2780928104
			}, _react2.default.createElement('div', { className: 'left', 'data-jsx': 2780928104
			}, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 2780928104
			}, _react2.default.createElement('b', {
				'data-jsx': 2780928104
			}, '\u041B\u0435\u043D\u0442\u0430'))), _react2.default.createElement(_link2.default, { href: '/authors' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 2780928104
			}, '\u0410\u0432\u0442\u043E\u0440\u044B')), _react2.default.createElement(_link2.default, { href: '/blogs' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 2780928104
			}, '\u0411\u043B\u043E\u0433\u0438')), _react2.default.createElement(_link2.default, { href: '/tags' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 2780928104
			}, '\u0422\u0435\u043C\u044B')), _react2.default.createElement(_link2.default, { href: '/adv' }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 2780928104
			}, '\u0420\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C'))), _react2.default.createElement('div', { className: 'right', 'data-jsx': 2780928104
			}, _react2.default.createElement('a', { className: 'ui item', onClick: function onClick() {
					_this3.getSearch(true);
				}, 'data-jsx': 2780928104
			}, _react2.default.createElement('i', { className: 'fa fa-search', 'data-jsx': 2780928104
			})))), _react2.default.createElement(_style2.default, {
				styleId: 2780928104,
				css: '.menu.primary[data-jsx="2780928104"] {display:-webkit-flex; display:flex;justify-content:space-between;align-items:center;height:80px;}.menu.primary[data-jsx="2780928104"] .item[data-jsx="2780928104"] {margin-right:17px;font-size:16px;display:inline-block;color:#000;margin-top:5px;}.menu.primary[data-jsx="2780928104"] .right[data-jsx="2780928104"] .item[data-jsx="2780928104"] {margin-right:0px;}.menu.primary[data-jsx="2780928104"] .item[data-jsx="2780928104"]:hover {color:#333;}.search[data-jsx="2780928104"] {width:100%;position:relative;}.search[data-jsx="2780928104"] .results[data-jsx="2780928104"] {position:absolute;left:0px;top:100%;width:668px;background:transparent;z-index:9999;}.header-wrapper[data-jsx="2780928104"] {background: #fff;border-bottom:1px solid #eee;}.header-wrapper[data-jsx="2780928104"] .search[data-jsx="2780928104"] {background:#fafafa!important;padding:0px!important;padding-right:30px!important;}.header-wrapper[data-jsx="2780928104"] .search-inner[data-jsx="2780928104"] {display:-webkit-flex; display:flex;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;justify-content:center;width:100%;}.header-wrapper[data-jsx="2780928104"] .search-input[data-jsx="2780928104"] {background:none;border:0px;font-size:25px;outline:0px;padding:10px 40px;width:100%;height:85px;}.header-wrapper[data-jsx="2780928104"] .secondary.menu[data-jsx="2780928104"] {margin:0px!important;height:85px!important;}.header-wrapper[data-jsx="2780928104"] .secondary.menu[data-jsx="2780928104"] .item[data-jsx="2780928104"] {font-size:16px;}.block-vertical[data-jsx="2780928104"] {background:#fff;padding:23px 30px;border-bottom:1px solid #eee;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdjLEFBQ00sc0NBQ0YsbUNBQ2lCLDhCQUNYLG1CQUNQLFlBQ1gsQ0FDb0IsbUVBQ0Ysa0JBQ0gsZUFDTSxxQkFDVixXQUNJLGVBQ2YsQ0FDMkIsaUdBQ1YsaUJBQ2pCLENBQzBCLHlFQUNmLFdBQ1gsQ0FDTyxnQ0FDRyxXQUNPLGtCQUNsQixDQUNpQixnRUFDQyxrQkFDVCxTQUNBLFNBQ0csWUFDVyx1QkFDVixhQUNiLENBQ2dCLHdDQUNDLGlCQUNZLDZCQUM3QixDQUN3Qix1RUFDSyw2QkFDUCxzQkFDTyw2QkFDN0IsQ0FDOEIsNkVBQ2pCLG1DQUNNLHNFQUNJLHVCQUNaLFdBQ1gsQ0FDOEIsNkVBQ2QsZ0JBQ0wsV0FDSSxlQUNILFlBQ00sa0JBQ1AsV0FDQyxZQUNaLENBQ2dDLCtFQUNYLHFCQUNDLHNCQUN0QixDQUNzQyw0R0FDdkIsZUFDZixDQUNnQix3Q0FDQSxnQkFDRSxrQkFDVyw2QkFDN0IiLCJmaWxlIjoiY29tcG9uZW50c1xcaGVhZGVyXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IG1ha2VTZWFyY2ggfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FwcC5qcydcclxuaW1wb3J0IEF2YXRhciBmcm9tICdyZWFjdC1hdmF0YXInXHJcbmltcG9ydCBUYWdzTGlzdCBmcm9tICcuLi90YWdzTGlzdC5qcydcclxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4uL3VzZXJMaXN0LmpzJ1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vcG9zdExpc3QuanMnXHJcbmltcG9ydCBCbG9nTGlzdCBmcm9tICcuLi9ibG9nTGlzdC5qcydcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRyZXN1bHRzOiB7XHJcblx0XHRcdFx0dXNlcnM6IFtdLFxyXG5cdFx0XHRcdHBvc3RzOiBbXSxcclxuXHRcdFx0XHR0YWdzIDogW10sXHJcblx0XHRcdFx0YmxvZ3M6IFtdXHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgfVxyXG5cclxuICAgZ2V0U2VhcmNoKCkge1xyXG5cdCAgXHR2YXIgcmVzdWx0cyA9ICQoJy5yZXN1bHRzJylcclxuXHQgIFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9TV0lUQ0gnfSlcclxuXHQgIFx0dmFyIGRpbW1lciA9IHJlcXVpcmUoJ3NlbWFudGljLXVpLWRpbW1lcicpO1xyXG5cdCAgXHQkKCcuYWZ0ZXItaGVhZGVyJykuZGltbWVyKHsgY2xvc2FibGU6ZmFsc2UgfSlcclxuXHQgIFx0LmRpbW1lcigndG9nZ2xlJyk7ICBcclxuICAgfVxyXG5cclxuICAgaGFuZGxlVHlwaW5nKGUpIHtcclxuXHRcdHZhciBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0aWYocXVlcnkubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRtYWtlU2VhcmNoKHF1ZXJ5KS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdHJlc3VsdHM6IHJlcy5kYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICBcdHZhciByZXN1bHRzID0gdGhpcy5zdGF0ZS5yZXN1bHRzO1xyXG4gICAgXHRyZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcbiAgXHRcdHt0aGlzLnByb3BzLmhlYWRlci5zZWFyY2ggP1xyXG5cdFx0ICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWNvbmRhcnkgbWVudSBzZWFyY2hcIj5cclxuXHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwibWVudSBsZWZ0XCI+XHJcblx0XHQgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWlubmVyXCI+XHJcblx0XHQgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB7dGhpcy5oYW5kbGVUeXBpbmcoZSl9fSB0eXBlPVwidGV4dFwiIHJlZj17aW5wdXQgPT4gaW5wdXQgJiYgaW5wdXQuZm9jdXMoKX0gY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCLQp9GC0L4g0LHRg9C00LXQvCDQuNGB0LrQsNGC0Yw/XCIgLz5cclxuXHRcdFx0XHQgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxyXG5cdFx0XHRcdFx0ICAgIFx0XHR7cmVzdWx0cy5wb3N0cy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stdmVydGljYWxcIj5cclxuXHRcdFx0XHRcdFx0XHQgICAgXHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj7Qn9C+0YHRgtGLPC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxQb3N0TGlzdCBzaXplPVwiYmxvY2tcIiBwb3N0cz17cmVzdWx0cy5wb3N0c30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7cmVzdWx0cy51c2Vycy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stdmVydGljYWxcIj5cclxuXHRcdFx0XHRcdFx0XHQgICAgXHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Lg8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFVzZXJMaXN0IHNpemU9XCJibG9ja1wiIHVzZXJzPXtyZXN1bHRzLnVzZXJzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXN1bHRzLmJsb2dzLmxlbmd0aCA+IDAgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay12ZXJ0aWNhbFwiPlxyXG5cdFx0XHRcdFx0XHRcdCAgICBcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPtCR0LvQvtCz0Lg8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJsb2dMaXN0IHNpemU9XCJibG9ja1wiIGJsb2dzPXtyZXN1bHRzLmJsb2dzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXN1bHRzLnRhZ3MubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXZlcnRpY2FsXCI+XHJcblx0XHRcdFx0XHRcdFx0ICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+0KLQtdC80Ys8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhZ3NMaXN0IHNpemU9XCJibG9ja1wiIHRhZ3M9e3Jlc3VsdHMudGFnc30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQgXHRcdDwvZGl2PlxyXG5cdFx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0ICAgIFx0XHRcdDxhIGNsYXNzTmFtZT1cInVpIGl0ZW1cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5nZXRTZWFyY2godHJ1ZSl9fT5cclxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0ICAgPC9kaXY+XHJcblx0XHRcdCAgIDpcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBtZW51IHByaW1hcnlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuXHRcdFx0XHQgICA8TGluayBocmVmPScvJz48YSBjbGFzc05hbWU9XCJpdGVtXCI+PGI+0JvQtdC90YLQsDwvYj48L2E+PC9MaW5rPlxyXG5cdFx0XHQgICAgICA8TGluayBocmVmPScvYXV0aG9ycyc+PGEgY2xhc3NOYW1lPVwiaXRlbVwiPtCQ0LLRgtC+0YDRizwvYT48L0xpbms+XHJcblx0XHRcdFx0ICAgPExpbmsgaHJlZj0nL2Jsb2dzJz48YSBjbGFzc05hbWU9XCJpdGVtXCI+0JHQu9C+0LPQuDwvYT48L0xpbms+XHJcblx0XHRcdFx0ICAgPExpbmsgaHJlZj0nL3RhZ3MnPjxhIGNsYXNzTmFtZT1cIml0ZW1cIj7QotC10LzRizwvYT48L0xpbms+XHJcblx0XHRcdFx0ICAgPExpbmsgaHJlZj0nL2Fkdic+PGEgY2xhc3NOYW1lPVwiaXRlbVwiPtCg0LXQutC70LDQvNC+0LTQsNGC0LXQu9GP0Lw8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuXHRcdFx0ICAgXHQ8YSBjbGFzc05hbWU9XCJ1aSBpdGVtXCIgb25DbGljaz17KCkgPT4ge3RoaXMuZ2V0U2VhcmNoKHRydWUpfX0+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuXHRcdFx0ICAgXHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0fVx0XHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgXHRcdC5tZW51LnByaW1hcnkge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ODBweDtcclxuXHRcdCBcdFx0fVxyXG5cdFx0IFx0XHQubWVudS5wcmltYXJ5IC5pdGVtIHtcclxuXHRcdCBcdFx0XHRtYXJnaW4tcmlnaHQ6MTdweDtcclxuXHRcdCBcdFx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdCBcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdCBcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0IFx0XHRcdG1hcmdpbi10b3A6NXB4O1xyXG5cdFx0IFx0XHR9XHJcblx0XHQgXHRcdC5tZW51LnByaW1hcnkgLnJpZ2h0IC5pdGVtIHtcclxuXHRcdCBcdFx0XHRtYXJnaW4tcmlnaHQ6MHB4O1xyXG5cdFx0IFx0XHR9XHJcblx0XHQgXHRcdC5tZW51LnByaW1hcnkgLml0ZW06aG92ZXIge1xyXG5cdFx0IFx0XHRcdGNvbG9yOiMzMzM7XHJcblx0XHQgXHRcdH1cclxuXHRcdFx0XHQuc2VhcmNoIHtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnNlYXJjaCAucmVzdWx0cyB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdFx0dG9wOjEwMCU7XHJcblx0XHRcdFx0XHR3aWR0aDo2NjhweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHR6LWluZGV4Ojk5OTk7XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmhlYWRlci13cmFwcGVyIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuaGVhZGVyLXdyYXBwZXIgLnNlYXJjaCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmYWZhZmEhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0cGFkZGluZzowcHghaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0cGFkZGluZy1yaWdodDozMHB4IWltcG9ydGFudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmhlYWRlci13cmFwcGVyIC5zZWFyY2gtaW5uZXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5oZWFkZXItd3JhcHBlciAuc2VhcmNoLWlucHV0IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0XHRcdGJvcmRlcjowcHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MjVweDtcclxuXHRcdFx0XHRcdG91dGxpbmU6MHB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4IDQwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0Ojg1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5oZWFkZXItd3JhcHBlciAuc2Vjb25kYXJ5Lm1lbnUge1xyXG5cdFx0XHRcdFx0bWFyZ2luOjBweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ODVweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5oZWFkZXItd3JhcHBlciAuc2Vjb25kYXJ5Lm1lbnUgLml0ZW0ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOjE2cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5ibG9jay12ZXJ0aWNhbCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjIzcHggMzBweDtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7XHJcblx0XHRcdFx0fVxyXG5cdCBcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShIZWFkZXIpIl19 */\n/*@ sourceURL=components\\header\\index.js */'
			}));
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return state;
})(Header);