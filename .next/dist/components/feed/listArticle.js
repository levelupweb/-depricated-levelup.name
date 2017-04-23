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

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\feed\\listArticle.js';


var ListArticle = function (_React$Component) {
	(0, _inherits3.default)(ListArticle, _React$Component);

	function ListArticle(props) {
		(0, _classCallCheck3.default)(this, ListArticle);

		return (0, _possibleConstructorReturn3.default)(this, (ListArticle.__proto__ || (0, _getPrototypeOf2.default)(ListArticle)).call(this, props));
	}

	(0, _createClass3.default)(ListArticle, [{
		key: 'render',
		value: function render() {
			var post = this.props.data;
			return _react2.default.createElement('article', { className: 'article preview list grid-item ' + this.props.classNames, 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement('div', { className: 'ui grid', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, _react2.default.createElement('div', { className: 'four wide column', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement('div', { className: 'image', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement('img', { src: post.image, className: 'rounded ui image fluid', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}))), _react2.default.createElement('div', { className: 'twelve wide column', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement('div', { className: 'content', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, _react2.default.createElement(_user2.default, { size: 'small', __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}), _react2.default.createElement('div', { className: 'meta', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, _react2.default.createElement('a', { className: 'item', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, _react2.default.createElement('i', { className: 'fa fa-comment-o', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}), ' ', post.meta.comments), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, _react2.default.createElement('i', { className: 'fa fa-heart-o', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}), ' ', post.meta.likes)), _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { id: '1' } }, __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement('h1', {
				'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, post.title))), _react2.default.createElement('p', { className: 'primary', 'data-jsx': 2027215817,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, post.description)))), _react2.default.createElement(_style2.default, {
				styleId: 2027215817,
				css: '.article.list[data-jsx="2027215817"] {margin-right:20px;}.article.list[data-jsx="2027215817"] h1[data-jsx="2027215817"] {font-size:19px;}.article.list[data-jsx="2027215817"] p.primary[data-jsx="2027215817"] {font-size:16px;}.article.list[data-jsx="2027215817"] .image[data-jsx="2027215817"] img[data-jsx="2027215817"] {margin:0px;}.article.list[data-jsx="2027215817"] .meta[data-jsx="2027215817"] {display:inline-block;margin-left:15px;}.article.list[data-jsx="2027215817"] .meta[data-jsx="2027215817"] .item[data-jsx="2027215817"],.article.list[data-jsx="2027215817"] .meta[data-jsx="2027215817"] .item[data-jsx="2027215817"] .fa[data-jsx="2027215817"] {font-size:14px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGxpc3RBcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DYyxBQUNJLHNDQUNJLGtCQUNsQixDQUVpQixnRUFDRixlQUNmLENBRXdCLHVFQUNULGVBQ2YsQ0FFeUIsK0ZBQ2QsV0FDWCxDQUVvQixtRUFDQyxxQkFDSixpQkFDakIsQ0FHOEIsME5BQ2YsZUFDZiIsImZpbGUiOiJjb21wb25lbnRzXFxmZWVkXFxsaXN0QXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi91c2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgXHR2YXIgcG9zdCA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YGFydGljbGUgcHJldmlldyBsaXN0IGdyaWQtaXRlbSAke3RoaXMucHJvcHMuY2xhc3NOYW1lc31gfT5cclxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWRcIj5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiZm91ciB3aWRlIGNvbHVtblwiPlxyXG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17cG9zdC5pbWFnZX0gY2xhc3NOYW1lPVwicm91bmRlZCB1aSBpbWFnZSBmbHVpZFwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR3ZWx2ZSB3aWRlIGNvbHVtblwiPlxyXG4gIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0IFx0XHRcdFx0PFVzZXIgc2l6ZT1cInNtYWxsXCIgLz5cclxuXHQgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnQtb1wiPjwvaT4ge3Bvc3QubWV0YS5jb21tZW50c308L2E+XHJcblx0XHRcdFx0XHQgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIj48L2k+IHtwb3N0Lm1ldGEubGlrZXN9PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0IFx0XHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3Bvc3QnLCBxdWVyeTogeyBpZDogJzEnIH19fT5cclxuXHRcdFx0XHRcdFx0PGE+PGgxPntwb3N0LnRpdGxlfTwvaDE+PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpbWFyeVwiPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuXHRcdFxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHQuYXJ0aWNsZS5saXN0IHtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6MjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmFydGljbGUubGlzdCBoMSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOjE5cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hcnRpY2xlLmxpc3QgcC5wcmltYXJ5IHtcclxuXHRcdFx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmFydGljbGUubGlzdCAuaW1hZ2UgaW1nIHtcclxuXHRcdFx0XHRtYXJnaW46MHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYXJ0aWNsZS5saXN0IC5tZXRhIHtcclxuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYXJ0aWNsZS5saXN0IC5tZXRhIC5pdGVtLFxyXG5cdFx0XHQuYXJ0aWNsZS5saXN0IC5tZXRhIC5pdGVtIC5mYSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHQ8L2FydGljbGU+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\feed\\listArticle.js */'
			}));
		}
	}]);

	return ListArticle;
}(_react2.default.Component);

exports.default = ListArticle;