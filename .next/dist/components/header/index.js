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
				query: null,
				users: [],
				posts: [],
				blogs: [],
				isRevealed: false
			}
		};
		return _this;
	}

	(0, _createClass3.default)(Header, [{
		key: 'getSearch',
		value: function getSearch() {
			var results = $('.results');
			this.setState({ isRevealed: !this.state.isRevealed });
			var dimmer = require('semantic-ui-dimmer');
			$('.after-header').dimmer({ closable: false }).dimmer('toggle');
		}
	}, {
		key: 'handleTyping',
		value: function handleTyping(e) {
			var _this2 = this;

			var query = e.target.value;
			this.setState({
				query: e.target.value
			});
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
			return _react2.default.createElement('div', { className: 'header-wrapper', 'data-jsx': 925261754
			}, this.state.isRevealed ? _react2.default.createElement('div', { className: 'ui secondary menu search', 'data-jsx': 925261754
			}, _react2.default.createElement('div', { className: 'menu left', 'data-jsx': 925261754
			}, _react2.default.createElement('div', { className: 'search-inner', 'data-jsx': 925261754
			}, _react2.default.createElement('div', { className: 'search', 'data-jsx': 925261754
			}, _react2.default.createElement('input', { onChange: function onChange(e) {
					_this3.handleTyping(e);
				}, type: 'text', ref: function ref(input) {
					return input && input.focus();
				}, className: 'search-input', placeholder: '\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u043C \u0438\u0441\u043A\u0430\u0442\u044C?', 'data-jsx': 925261754
			}), _react2.default.createElement('div', { className: 'results block', 'data-jsx': 925261754
			}, results.posts.length > 0 && _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 925261754
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 925261754
			}, '\u041F\u043E\u0441\u0442\u044B'), _react2.default.createElement('div', { className: 'grid', 'data-jsx': 925261754
			}, _react2.default.createElement(_postList2.default, { size: 'block', posts: results.posts }))), results.users.length > 0 && _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 925261754
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 925261754
			}, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438'), _react2.default.createElement('div', { className: 'grid', 'data-jsx': 925261754
			}, _react2.default.createElement(_userList2.default, { size: 'block', users: results.users }))), results.blogs.length > 0 && _react2.default.createElement('div', { className: 'block-vertical', 'data-jsx': 925261754
			}, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 925261754
			}, '\u0411\u043B\u043E\u0433\u0438'), _react2.default.createElement('div', { className: 'grid', 'data-jsx': 925261754
			}, _react2.default.createElement(_blogList2.default, { size: 'block', blogs: results.blogs }))), (results.blogs.length > 0 || results.posts.length > 0 || results.users.length > 0) && _react2.default.createElement('div', { className: 'results-all block-vertical', 'data-jsx': 925261754
			}, _react2.default.createElement(_link2.default, { href: { pathname: 'search', query: { query: this.state.query } } }, _react2.default.createElement('a', {
				'data-jsx': 925261754
			}, '\u0412\u0441\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B'))))), _react2.default.createElement('a', { className: 'ui item', onClick: function onClick() {
					_this3.getSearch(true);
				}, 'data-jsx': 925261754
			}, _react2.default.createElement('i', { className: 'fa fa-times', 'data-jsx': 925261754
			}))))) : _react2.default.createElement('div', { className: 'block menu primary', 'data-jsx': 925261754
			}, _react2.default.createElement('div', { className: 'left', 'data-jsx': 925261754
			}, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: 'item ui button default small', 'data-jsx': 925261754
			}, _react2.default.createElement('b', {
				'data-jsx': 925261754
			}, '\u041B\u0435\u043D\u0442\u0430'))), _react2.default.createElement(_link2.default, { href: '/authors' }, _react2.default.createElement('a', { className: 'item ui button default small', 'data-jsx': 925261754
			}, '\u0410\u0432\u0442\u043E\u0440\u044B')), _react2.default.createElement(_link2.default, { href: '/blogs' }, _react2.default.createElement('a', { className: 'item ui button default small', 'data-jsx': 925261754
			}, '\u0411\u043B\u043E\u0433\u0438')), _react2.default.createElement(_link2.default, { href: '/tags' }, _react2.default.createElement('a', { className: 'item ui button default small', 'data-jsx': 925261754
			}, '\u0422\u0435\u043C\u044B')), _react2.default.createElement(_link2.default, { href: '/adv' }, _react2.default.createElement('a', { className: 'item ui button default small', 'data-jsx': 925261754
			}, '\u0420\u0435\u043A\u043B\u0430\u043C\u0430'))), _react2.default.createElement('div', { className: 'right', 'data-jsx': 925261754
			}, _react2.default.createElement('a', { className: 'ui item button default small', onClick: function onClick() {
					_this3.getSearch(true);
				}, 'data-jsx': 925261754
			}, _react2.default.createElement('i', { className: 'fa fa-search', 'data-jsx': 925261754
			})))), _react2.default.createElement(_style2.default, {
				styleId: 925261754,
				css: '.menu.primary[data-jsx="925261754"] {display:-webkit-flex; display:flex;justify-content:space-between;align-items:center;height:80px;}.menu.primary[data-jsx="925261754"] .item[data-jsx="925261754"] {margin-right:8px;font-size:13px;display:inline-block;color:#000;margin-top:5px;}.menu.primary[data-jsx="925261754"] .right[data-jsx="925261754"] .item[data-jsx="925261754"] {margin-right:0px;}.menu.primary[data-jsx="925261754"] .item[data-jsx="925261754"]:hover {color:#333;}.search[data-jsx="925261754"] {width:100%;position:relative;}.search[data-jsx="925261754"] .results[data-jsx="925261754"] {position:absolute;left:0px;top:100%;width:668px;background:transparent;z-index:9999;}.header-wrapper[data-jsx="925261754"] {background: #fff;border-bottom:1px solid #eee;}.header-wrapper[data-jsx="925261754"] .search[data-jsx="925261754"] {background:#fafafa!important;padding:0px!important;padding-right:30px!important;}.header-wrapper[data-jsx="925261754"] .search-inner[data-jsx="925261754"] {display:-webkit-flex; display:flex;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;justify-content:center;width:100%;}.header-wrapper[data-jsx="925261754"] .search-input[data-jsx="925261754"] {background:none;border:0px;font-size:25px;outline:0px;padding:10px 40px;width:100%;height:85px;}.header-wrapper[data-jsx="925261754"] .secondary.menu[data-jsx="925261754"] {margin:0px!important;height:85px!important;}.header-wrapper[data-jsx="925261754"] .secondary.menu[data-jsx="925261754"] .item[data-jsx="925261754"] {font-size:16px;}.block-vertical[data-jsx="925261754"] {background:#fff;padding:23px 30px;border-bottom:1px solid #eee;}.results-all[data-jsx="925261754"] {width:100%;text-align:center;padding:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhjLEFBQ00scUNBQ0YsbUNBQ2lCLDhCQUNYLG1CQUNQLFlBQ1gsQ0FDb0IsaUVBQ0gsaUJBQ0YsZUFDTSxxQkFDVixXQUNJLGVBQ2YsQ0FDMkIsOEZBQ1YsaUJBQ2pCLENBQzBCLHVFQUNmLFdBQ1gsQ0FDTywrQkFDRyxXQUNPLGtCQUNsQixDQUNpQiw4REFDQyxrQkFDVCxTQUNBLFNBQ0csWUFDVyx1QkFDVixhQUNiLENBQ2dCLHVDQUNDLGlCQUNZLDZCQUM3QixDQUN3QixxRUFDSyw2QkFDUCxzQkFDTyw2QkFDN0IsQ0FDOEIsMkVBQ2pCLG1DQUNNLHNFQUNJLHVCQUNaLFdBQ1gsQ0FDOEIsMkVBQ2QsZ0JBQ0wsV0FDSSxlQUNILFlBQ00sa0JBQ1AsV0FDQyxZQUNaLENBQ2dDLDZFQUNYLHFCQUNDLHNCQUN0QixDQUNzQyx5R0FDdkIsZUFDZixDQUNnQix1Q0FDQSxnQkFDRSxrQkFDVyw2QkFDN0IsQ0FDYSxvQ0FDRixXQUNPLGtCQUNMLGFBRWIiLCJmaWxlIjoiY29tcG9uZW50c1xcaGVhZGVyXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IG1ha2VTZWFyY2ggfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FwcC5qcydcclxuaW1wb3J0IEF2YXRhciBmcm9tICdyZWFjdC1hdmF0YXInXHJcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuLi91c2VyTGlzdC5qcydcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL3Bvc3RMaXN0LmpzJ1xyXG5pbXBvcnQgQmxvZ0xpc3QgZnJvbSAnLi4vYmxvZ0xpc3QuanMnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0cmVzdWx0czoge1xyXG5cdFx0XHRcdHF1ZXJ5OiBudWxsLFxyXG5cdFx0XHRcdHVzZXJzOiBbXSxcclxuXHRcdFx0XHRwb3N0czogW10sXHJcblx0XHRcdFx0YmxvZ3M6IFtdLFxyXG5cdFx0XHRcdGlzUmV2ZWFsZWQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgfVxyXG5cclxuICAgZ2V0U2VhcmNoKCkge1xyXG5cdCAgXHR2YXIgcmVzdWx0cyA9ICQoJy5yZXN1bHRzJylcclxuXHQgIFx0dGhpcy5zZXRTdGF0ZSh7IGlzUmV2ZWFsZWQ6ICF0aGlzLnN0YXRlLmlzUmV2ZWFsZWQgfSlcclxuXHQgIFx0dmFyIGRpbW1lciA9IHJlcXVpcmUoJ3NlbWFudGljLXVpLWRpbW1lcicpO1xyXG5cdCAgXHQkKCcuYWZ0ZXItaGVhZGVyJykuZGltbWVyKHsgY2xvc2FibGU6ZmFsc2UgfSlcclxuXHQgIFx0LmRpbW1lcigndG9nZ2xlJyk7ICBcclxuICAgfVxyXG5cclxuICAgaGFuZGxlVHlwaW5nKGUpIHtcclxuXHRcdHZhciBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHF1ZXJ5OiBlLnRhcmdldC52YWx1ZVxyXG5cdFx0fSlcclxuXHRcdGlmKHF1ZXJ5Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0bWFrZVNlYXJjaChxdWVyeSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRyZXN1bHRzOiByZXMuZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgXHR2YXIgcmVzdWx0cyA9IHRoaXMuc3RhdGUucmVzdWx0cztcclxuICAgIFx0cmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gIFx0XHR7dGhpcy5zdGF0ZS5pc1JldmVhbGVkID9cclxuXHRcdCAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2Vjb25kYXJ5IG1lbnUgc2VhcmNoXCI+XHJcblx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgbGVmdFwiPlxyXG5cdFx0ICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbm5lclwiPlxyXG5cdFx0ICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuaGFuZGxlVHlwaW5nKGUpfX0gdHlwZT1cInRleHRcIiByZWY9e2lucHV0ID0+IGlucHV0ICYmIGlucHV0LmZvY3VzKCl9IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwi0KfRgtC+INCx0YPQtNC10Lwg0LjRgdC60LDRgtGMP1wiIC8+XHJcblx0XHRcdFx0ICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHMgYmxvY2tcIj5cclxuXHRcdFx0XHRcdCAgICBcdFx0e3Jlc3VsdHMucG9zdHMubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXZlcnRpY2FsXCI+XHJcblx0XHRcdFx0XHRcdFx0ICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+0J/QvtGB0YLRizwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UG9zdExpc3Qgc2l6ZT1cImJsb2NrXCIgcG9zdHM9e3Jlc3VsdHMucG9zdHN9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e3Jlc3VsdHMudXNlcnMubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXZlcnRpY2FsXCI+XHJcblx0XHRcdFx0XHRcdFx0ICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxVc2VyTGlzdCBzaXplPVwiYmxvY2tcIiB1c2Vycz17cmVzdWx0cy51c2Vyc30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7cmVzdWx0cy5ibG9ncy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stdmVydGljYWxcIj5cclxuXHRcdFx0XHRcdFx0XHQgICAgXHRcdDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj7QkdC70L7Qs9C4PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCbG9nTGlzdCBzaXplPVwiYmxvY2tcIiBibG9ncz17cmVzdWx0cy5ibG9nc30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7KHJlc3VsdHMuYmxvZ3MubGVuZ3RoID4gMFxyXG5cdFx0XHRcdFx0XHRcdFx0IHx8IHJlc3VsdHMucG9zdHMubGVuZ3RoID4gMFxyXG5cdFx0XHRcdFx0XHRcdFx0IHx8IHJlc3VsdHMudXNlcnMubGVuZ3RoID4gMCkgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzLWFsbCBibG9jay12ZXJ0aWNhbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdzZWFyY2gnLCBxdWVyeTogeyBxdWVyeTogdGhpcy5zdGF0ZS5xdWVyeSB9fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT7QktGB0LUg0YDQtdC30YPQu9GM0YLQsNGC0Ys8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCBcdFx0PC9kaXY+XHJcblx0XHRcdFx0ICAgIFx0PC9kaXY+XHJcblx0XHQgICAgXHRcdFx0PGEgY2xhc3NOYW1lPVwidWkgaXRlbVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmdldFNlYXJjaCh0cnVlKX19PlxyXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHQgICA8L2Rpdj5cclxuXHRcdFx0ICAgOlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG1lbnUgcHJpbWFyeVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cdFx0XHRcdCAgIDxMaW5rIGhyZWY9Jy8nPjxhIGNsYXNzTmFtZT1cIml0ZW0gdWkgYnV0dG9uIGRlZmF1bHQgc21hbGxcIj48Yj7Qm9C10L3RgtCwPC9iPjwvYT48L0xpbms+XHJcblx0XHRcdCAgICAgIDxMaW5rIGhyZWY9Jy9hdXRob3JzJz48YSBjbGFzc05hbWU9XCJpdGVtIHVpIGJ1dHRvbiBkZWZhdWx0IHNtYWxsXCI+0JDQstGC0L7RgNGLPC9hPjwvTGluaz5cclxuXHRcdFx0XHQgICA8TGluayBocmVmPScvYmxvZ3MnPjxhIGNsYXNzTmFtZT1cIml0ZW0gdWkgYnV0dG9uIGRlZmF1bHQgc21hbGxcIj7QkdC70L7Qs9C4PC9hPjwvTGluaz5cclxuXHRcdFx0XHQgICA8TGluayBocmVmPScvdGFncyc+PGEgY2xhc3NOYW1lPVwiaXRlbSB1aSBidXR0b24gZGVmYXVsdCBzbWFsbFwiPtCi0LXQvNGLPC9hPjwvTGluaz5cclxuXHRcdFx0XHQgICA8TGluayBocmVmPScvYWR2Jz48YSBjbGFzc05hbWU9XCJpdGVtIHVpIGJ1dHRvbiBkZWZhdWx0IHNtYWxsXCI+0KDQtdC60LvQsNC80LA8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuXHRcdFx0ICAgXHQ8YSBjbGFzc05hbWU9XCJ1aSBpdGVtIGJ1dHRvbiBkZWZhdWx0IHNtYWxsXCIgb25DbGljaz17KCkgPT4ge3RoaXMuZ2V0U2VhcmNoKHRydWUpfX0+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuXHRcdFx0ICAgXHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0fVx0XHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgXHRcdC5tZW51LnByaW1hcnkge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ODBweDtcclxuXHRcdCBcdFx0fVxyXG5cdFx0IFx0XHQubWVudS5wcmltYXJ5IC5pdGVtIHtcclxuXHRcdCBcdFx0XHRtYXJnaW4tcmlnaHQ6OHB4O1xyXG5cdFx0IFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0IFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0IFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHQgXHRcdFx0bWFyZ2luLXRvcDo1cHg7XHJcblx0XHQgXHRcdH1cclxuXHRcdCBcdFx0Lm1lbnUucHJpbWFyeSAucmlnaHQgLml0ZW0ge1xyXG5cdFx0IFx0XHRcdG1hcmdpbi1yaWdodDowcHg7XHJcblx0XHQgXHRcdH1cclxuXHRcdCBcdFx0Lm1lbnUucHJpbWFyeSAuaXRlbTpob3ZlciB7XHJcblx0XHQgXHRcdFx0Y29sb3I6IzMzMztcclxuXHRcdCBcdFx0fVxyXG5cdFx0XHRcdC5zZWFyY2gge1xyXG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuc2VhcmNoIC5yZXN1bHRzIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0XHR0b3A6MTAwJTtcclxuXHRcdFx0XHRcdHdpZHRoOjY2OHB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdHotaW5kZXg6OTk5OTtcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuaGVhZGVyLXdyYXBwZXIge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5oZWFkZXItd3JhcHBlciAuc2VhcmNoIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2ZhZmFmYSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjBweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OjMwcHghaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuaGVhZGVyLXdyYXBwZXIgLnNlYXJjaC1pbm5lciB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmhlYWRlci13cmFwcGVyIC5zZWFyY2gtaW5wdXQge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdFx0Ym9yZGVyOjBweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZToyNXB4O1xyXG5cdFx0XHRcdFx0b3V0bGluZTowcHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjEwcHggNDBweDtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ODVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmhlYWRlci13cmFwcGVyIC5zZWNvbmRhcnkubWVudSB7XHJcblx0XHRcdFx0XHRtYXJnaW46MHB4IWltcG9ydGFudDtcclxuXHRcdFx0XHRcdGhlaWdodDo4NXB4IWltcG9ydGFudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmhlYWRlci13cmFwcGVyIC5zZWNvbmRhcnkubWVudSAuaXRlbSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmJsb2NrLXZlcnRpY2FsIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MjNweCAzMHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnJlc3VsdHMtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MjBweDtcclxuXHJcblx0XHRcdFx0fVxyXG5cdCBcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShIZWFkZXIpIl19 */\n/*@ sourceURL=components\\header\\index.js */'
			}));
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return state;
})(Header);