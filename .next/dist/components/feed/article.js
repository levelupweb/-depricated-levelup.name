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

var _user = require('../user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\feed\\article.js';


var Article = function (_React$Component) {
	(0, _inherits3.default)(Article, _React$Component);

	function Article(props) {
		(0, _classCallCheck3.default)(this, Article);

		return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));
	}

	(0, _createClass3.default)(Article, [{
		key: 'render',
		value: function render() {
			var post = this.props.data;
			return _react2.default.createElement('article', { className: 'article preview grid-item w-' + post.size + ' ' + this.props.classNames, 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_user2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}), _react2.default.createElement('div', { className: 'image', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement('img', { src: post.image, className: 'rounded ui image fluid', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			})), _react2.default.createElement('div', { className: 'content', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { id: '1' } }, __source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement('h1', {
				'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, post.title))), _react2.default.createElement('p', { className: 'primary', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, post.description)), _react2.default.createElement('div', { className: 'meta', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, _react2.default.createElement('a', { className: 'item', href: '#', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, '\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement('i', { className: 'fa fa-comment-o', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}), ' ', post.meta.comments), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement('i', { className: 'fa fa-heart-o', 'data-jsx': 2213173453,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}), ' ', post.meta.likes)), _react2.default.createElement(_style2.default, {
				styleId: 2213173453,
				css: '.article.preview[data-jsx="2213173453"] .meta[data-jsx="2213173453"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJjLEFBQ2Esc0VBQ1AsZ0JBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdXNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgXHR2YXIgcG9zdCA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YGFydGljbGUgcHJldmlldyBncmlkLWl0ZW0gdy0ke3Bvc3Quc2l6ZX0gJHt0aGlzLnByb3BzLmNsYXNzTmFtZXN9YH0+XHJcblx0XHQ8VXNlciAvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHQ8aW1nIHNyYz17cG9zdC5pbWFnZX0gY2xhc3NOYW1lPVwicm91bmRlZCB1aSBpbWFnZSBmbHVpZFwiIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHQ8TGluayBocmVmPXt7IHBhdGhuYW1lOiAncG9zdCcsIHF1ZXJ5OiB7IGlkOiAnMScgfX19PlxyXG5cdFx0XHRcdDxhPjxoMT57cG9zdC50aXRsZX08L2gxPjwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmltYXJ5XCI+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cIml0ZW1cIiBocmVmPVwiI1wiPtCn0LjRgtCw0YLRjCDQtNCw0LvQtdC1PC9hPlxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudC1vXCI+PC9pPiB7cG9zdC5tZXRhLmNvbW1lbnRzfTwvYT5cclxuXHRcdCAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiPjwvaT4ge3Bvc3QubWV0YS5saWtlc308L2E+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdC5hcnRpY2xlLnByZXZpZXcgLm1ldGEge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6MjBweDtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdDwvYXJ0aWNsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\feed\\article.js */'
			}));
		}
	}]);

	return Article;
}(_react2.default.Component);

exports.default = Article;