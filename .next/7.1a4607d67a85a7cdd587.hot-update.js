webpackHotUpdate(7,{

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(41);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(544);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(545);

var _jsCookie = __webpack_require__(548);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _comment = __webpack_require__(718);

var _timeagoReact = __webpack_require__(679);

var _timeagoReact2 = _interopRequireDefault(_timeagoReact);

var _reactAvatar = __webpack_require__(550);

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\isomorphic\\comments\\comment.js';
// Important


// Actions


// Components


var Comment = function (_React$Component) {
		(0, _inherits3.default)(Comment, _React$Component);

		function Comment(props) {
				(0, _classCallCheck3.default)(this, Comment);

				var _this = (0, _possibleConstructorReturn3.default)(this, (Comment.__proto__ || (0, _getPrototypeOf2.default)(Comment)).call(this, props));

				_this.currentUser = _this.props.currentUser;
				_this.token = _jsCookie2.default.get('x-access-token');
				_this.state = {
						comment: (0, _extends3.default)({}, _this.props.comment),
						isEditing: false
				};
				return _this;
		}

		(0, _createClass3.default)(Comment, [{
				key: 'removeComment',
				value: function removeComment(id) {
						(0, _comment.removeComment)(this.token, id).then(function (res) {
								if (res.data.success) {
										$('.comment-' + id).hide(500);
								} else {
										console.log(res.data);
								}
						});
				}
		}, {
				key: 'editComment',
				value: function editComment(comment) {
						this.setState({
								isEditing: true
						});
				}
		}, {
				key: 'cancelEditing',
				value: function cancelEditing() {
						this.setState({
								isEditing: false,
								comment: this.props.comment
						});
				}
		}, {
				key: 'handleChange',
				value: function handleChange(value) {
						this.setState({
								comment: (0, _extends3.default)({}, this.state.comment, {
										commentContent: value
								})
						});
				}
		}, {
				key: 'saveComment',
				value: function saveComment(comment) {
						var _this2 = this;

						(0, _comment.updateComment)(this.token, comment).then(function (res) {
								if (res.data.success) {
										_this2.setState({
												isEditing: false
										});
								} else {
										console.log(res.data);
								}
						});
				}
		}, {
				key: 'render',
				value: function render() {
						var _this3 = this;

						var comment = this.state.comment;
						var user = comment.commentAuthor;
						if (comment) {
								if (!this.state.isEditing) {
										return _react2.default.createElement('div', { className: 'comment comment-' + comment._id, __source: {
														fileName: _jsxFileName,
														lineNumber: 75
												}
										}, _react2.default.createElement('span', { className: 'avatar', __source: {
														fileName: _jsxFileName,
														lineNumber: 76
												}
										}, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } }, __source: {
														fileName: _jsxFileName,
														lineNumber: 77
												}
										}, _react2.default.createElement('a', {
												__source: {
														fileName: _jsxFileName,
														lineNumber: 77
												}
										}, _react2.default.createElement(_reactAvatar2.default, { color: '#46978c', round: true, size: 32, src: user.userImage, name: user.userName, __source: {
														fileName: _jsxFileName,
														lineNumber: 78
												}
										})))), _react2.default.createElement('div', { className: 'content', __source: {
														fileName: _jsxFileName,
														lineNumber: 81
												}
										}, _react2.default.createElement('a', { className: 'author', __source: {
														fileName: _jsxFileName,
														lineNumber: 82
												}
										}, user.userName), _react2.default.createElement('div', { className: 'metadata', __source: {
														fileName: _jsxFileName,
														lineNumber: 83
												}
										}, _react2.default.createElement('span', { className: 'date', __source: {
														fileName: _jsxFileName,
														lineNumber: 84
												}
										}, _react2.default.createElement(_timeagoReact2.default, { datetime: comment.commentDate, locale: 'ru', __source: {
														fileName: _jsxFileName,
														lineNumber: 84
												}
										}))), _react2.default.createElement('div', { className: 'text', __source: {
														fileName: _jsxFileName,
														lineNumber: 86
												}
										}, comment.commentContent), _react2.default.createElement('div', { className: 'actions', __source: {
														fileName: _jsxFileName,
														lineNumber: 89
												}
										}, _react2.default.createElement('a', { className: 'reply', __source: {
														fileName: _jsxFileName,
														lineNumber: 90
												}
										}, '\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C'), user._id == this.currentUser._id && _react2.default.createElement('span', {
												__source: {
														fileName: _jsxFileName,
														lineNumber: 92
												}
										}, _react2.default.createElement('a', { className: 'reply', onClick: function onClick() {
														_this3.removeComment(comment._id);
												}, __source: {
														fileName: _jsxFileName,
														lineNumber: 93
												}
										}, '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'), _react2.default.createElement('a', { className: 'reply', onClick: function onClick() {
														_this3.editComment(comment);
												}, __source: {
														fileName: _jsxFileName,
														lineNumber: 94
												}
										}, '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C')))));
								} else {
										return _react2.default.createElement('div', { className: 'comment comment-' + comment._id, 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 103
												}
										}, _react2.default.createElement('span', { className: 'avatar', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 104
												}
										}, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } }, __source: {
														fileName: _jsxFileName,
														lineNumber: 105
												}
										}, _react2.default.createElement('a', {
												'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 105
												}
										}, _react2.default.createElement(_reactAvatar2.default, { color: '#46978c', round: true, size: 32, src: user.userImage, name: user.userName, __source: {
														fileName: _jsxFileName,
														lineNumber: 106
												}
										})))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 109
												}
										}, _react2.default.createElement('a', { className: 'author', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 110
												}
										}, user.userName), _react2.default.createElement('div', { className: 'metadata', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 111
												}
										}, _react2.default.createElement('span', { className: 'date', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 112
												}
										}, _react2.default.createElement(_timeagoReact2.default, { datetime: comment.commentDate, locale: 'ru', __source: {
														fileName: _jsxFileName,
														lineNumber: 112
												}
										}))), _react2.default.createElement('div', { className: 'text', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 114
												}
										}, _react2.default.createElement('textarea', {
												onInput: function onInput(e) {
														_this3.handleChange(e.target.value);
												},
												defaultValue: comment.commentContent,
												cols: '2', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 115
												}
										})), _react2.default.createElement('div', { className: 'actions', 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 121
												}
										}, user._id == this.currentUser._id && _react2.default.createElement('span', {
												'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 123
												}
										}, _react2.default.createElement('a', { className: 'reply', onClick: function onClick() {
														_this3.saveComment(_this3.state.comment);
												}, 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 124
												}
										}, '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'), _react2.default.createElement('a', { className: 'reply', onClick: function onClick() {
														_this3.cancelEditing();
												}, 'data-jsx': 520253189,
												__source: {
														fileName: _jsxFileName,
														lineNumber: 125
												}
										}, '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C')))), _react2.default.createElement(_style2.default, {
												styleId: 520253189,
												css: 'textarea[data-jsx="520253189"]{border:0px;height:40px;min-height:40px;border-bottom:1px solid #eee;border-radius:0px;padding:0px;width:100%;outline:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGlzb21vcnBoaWNcXGNvbW1lbnRzXFxjb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJbUIsQUFHa0IsV0FBbUIsWUFBdUIsZ0JBQW9DLDZCQUF5QixrQkFBbUIsWUFBa0IsV0FBb0IsYUFBTyIsImZpbGUiOiJjb21wb25lbnRzXFxpc29tb3JwaGljXFxjb21tZW50c1xcY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0YW50XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuLy8gQWN0aW9uc1xyXG5pbXBvcnQgeyByZW1vdmVDb21tZW50LCB1cGRhdGVDb21tZW50IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9jb21tZW50LmpzJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgVGltZUFnbyBmcm9tICd0aW1lYWdvLXJlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdyZWFjdC1hdmF0YXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNsYXNzIENvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIFx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHQgICBzdXBlcihwcm9wcyk7XHJcblx0ICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMucHJvcHMuY3VycmVudFVzZXI7XHJcblx0ICAgdGhpcy50b2tlbiA9IGNvb2tpZXMuZ2V0KCd4LWFjY2Vzcy10b2tlbicpO1xyXG5cdCAgIHRoaXMuc3RhdGUgPSB7XHJcblx0ICAgXHRjb21tZW50OiB7IC4uLnRoaXMucHJvcHMuY29tbWVudCB9LFxyXG5cdCAgIFx0aXNFZGl0aW5nOiBmYWxzZVxyXG5cdCAgIH1cclxuICBcdH1cclxuXHJcbiAgXHRyZW1vdmVDb21tZW50KGlkKSB7XHJcbiAgXHRcdHJlbW92ZUNvbW1lbnQodGhpcy50b2tlbiwgaWQpLnRoZW4oKHJlcykgPT4ge1xyXG4gIFx0XHRcdGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICBcdFx0XHRcdCQoJy5jb21tZW50LScgKyBpZCkuaGlkZSg1MDApO1xyXG4gIFx0XHRcdH0gZWxzZSB7XHJcbiAgXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICBcdFx0XHR9XHJcbiAgXHRcdH0pXHJcbiAgXHR9XHJcblxyXG4gIFx0ZWRpdENvbW1lbnQoY29tbWVudCkge1xyXG4gIFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0XHRpc0VkaXRpbmc6IHRydWVcclxuICBcdFx0fSlcclxuICBcdH1cclxuXHJcbiAgXHRjYW5jZWxFZGl0aW5nKCkge1xyXG4gIFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0XHRpc0VkaXRpbmc6IGZhbHNlLFxyXG4gIFx0XHRcdGNvbW1lbnQ6IHRoaXMucHJvcHMuY29tbWVudFxyXG4gIFx0XHR9KVxyXG4gIFx0fVxyXG5cclxuICBcdGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gIFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0XHRjb21tZW50OiB7XHJcbiAgXHRcdFx0XHQuLi50aGlzLnN0YXRlLmNvbW1lbnQsXHJcbiAgXHRcdFx0XHRjb21tZW50Q29udGVudDogdmFsdWVcclxuICBcdFx0XHR9XHJcbiAgXHRcdH0pXHJcbiAgXHR9XHJcblxyXG4gIFx0c2F2ZUNvbW1lbnQoY29tbWVudCkge1xyXG4gIFx0XHR1cGRhdGVDb21tZW50KHRoaXMudG9rZW4sIGNvbW1lbnQpLnRoZW4oKHJlcykgPT4ge1xyXG4gIFx0XHRcdGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICBcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRcdFx0XHRpc0VkaXRpbmc6IGZhbHNlXHJcbiAgXHRcdFx0XHR9KVxyXG4gIFx0XHRcdH0gZWxzZSB7XHJcbiAgXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICBcdFx0XHR9XHJcbiAgXHRcdH0pXHJcbiAgXHR9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICBcdHZhciBjb21tZW50ID0gdGhpcy5zdGF0ZS5jb21tZW50O1xyXG4gIFx0dmFyIHVzZXIgPSBjb21tZW50LmNvbW1lbnRBdXRob3I7XHJcbiAgXHRpZiAoY29tbWVudCkge1xyXG4gIFx0XHRpZighdGhpcy5zdGF0ZS5pc0VkaXRpbmcpIHtcclxuXHRcdCAgICByZXR1cm4gKFxyXG5cdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb21tZW50IGNvbW1lbnQtJHtjb21tZW50Ll9pZH1gfT5cclxuXHRcdFx0ICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcblx0XHRcdFx0ICAgICBcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICd1c2VyJywgcXVlcnk6IHsgc2x1ZzogdXNlci5zbHVnIH19fT48YT5cclxuXHRcdCAgICAgICAgICAgICAgIDxBdmF0YXIgY29sb3I9e2AjNDY5NzhjYH0gcm91bmQ9e3RydWV9IHNpemU9ezMyfSBzcmM9e3VzZXIudXNlckltYWdlfSBuYW1lPXt1c2VyLnVzZXJOYW1lfSAvPlxyXG5cdFx0ICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuXHRcdFx0ICAgIFx0PC9zcGFuPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0ICAgICAgXHQ8YSBjbGFzc05hbWU9XCJhdXRob3JcIj57dXNlci51c2VyTmFtZX08L2E+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YWRhdGFcIj5cclxuXHRcdFx0ICAgICAgICBcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj48VGltZUFnbyBkYXRldGltZT17Y29tbWVudC5jb21tZW50RGF0ZX0gbG9jYWxlPSdydScgLz48L3NwYW4+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0ICAgICAgICBcdHtjb21tZW50LmNvbW1lbnRDb250ZW50fVxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcblx0XHRcdCAgICAgICAgXHQ8YSBjbGFzc05hbWU9XCJyZXBseVwiPtCe0YLQstC10YLQuNGC0Yw8L2E+XHJcblx0XHRcdCAgICAgICAgXHR7dXNlci5faWQgPT0gdGhpcy5jdXJyZW50VXNlci5faWQgJiYgXHJcblx0XHRcdCAgICAgICAgXHRcdDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgXHRcdDxhIGNsYXNzTmFtZT1cInJlcGx5XCIgb25DbGljaz17KCkgPT4ge3RoaXMucmVtb3ZlQ29tbWVudChjb21tZW50Ll9pZCl9fT7Qo9C00LDQu9C40YLRjDwvYT5cclxuXHRcdFx0XHQgICAgICAgIFx0XHQ8YSBjbGFzc05hbWU9XCJyZXBseVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmVkaXRDb21tZW50KGNvbW1lbnQpfX0+0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Yw8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdH1cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHRcdCAgICApO1xyXG5cdFx0IH0gZWxzZSB7XHJcblx0XHQgXHRyZXR1cm4gKFxyXG5cdFx0IFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbW1lbnQgY29tbWVudC0ke2NvbW1lbnQuX2lkfWB9PlxyXG5cdFx0XHQgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuXHRcdFx0XHQgICAgIFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3VzZXInLCBxdWVyeTogeyBzbHVnOiB1c2VyLnNsdWcgfX19PjxhPlxyXG5cdFx0ICAgICAgICAgICAgICAgPEF2YXRhciBjb2xvcj17YCM0Njk3OGNgfSByb3VuZD17dHJ1ZX0gc2l6ZT17MzJ9IHNyYz17dXNlci51c2VySW1hZ2V9IG5hbWU9e3VzZXIudXNlck5hbWV9IC8+XHJcblx0XHQgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG5cdFx0XHQgICAgXHQ8L3NwYW4+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHQgICAgICBcdDxhIGNsYXNzTmFtZT1cImF1dGhvclwiPnt1c2VyLnVzZXJOYW1lfTwvYT5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YVwiPlxyXG5cdFx0XHQgICAgICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPjxUaW1lQWdvIGRhdGV0aW1lPXtjb21tZW50LmNvbW1lbnREYXRlfSBsb2NhbGU9J3J1JyAvPjwvc3Bhbj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgXHJcblx0XHRcdFx0XHRcdFx0b25JbnB1dD17KGUpID0+IHt0aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9fVxyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17Y29tbWVudC5jb21tZW50Q29udGVudH0gXHJcblx0XHRcdFx0XHRcdFx0Y29scz1cIjJcIj5cclxuXHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG5cdFx0XHQgICAgICAgIFx0e3VzZXIuX2lkID09IHRoaXMuY3VycmVudFVzZXIuX2lkICYmIFxyXG5cdFx0XHQgICAgICAgIFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHQgICAgICAgIFx0XHQ8YSBjbGFzc05hbWU9XCJyZXBseVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnNhdmVDb21tZW50KHRoaXMuc3RhdGUuY29tbWVudCl9fT7QodC+0YXRgNCw0L3QuNGC0Yw8L2E+XHJcblx0XHRcdFx0XHQgICAgICAgIFx0PGEgY2xhc3NOYW1lPVwicmVwbHlcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5jYW5jZWxFZGl0aW5nKCl9fT7QntGC0LzQtdC90LjRgtGMPC9hPlxyXG5cdFx0XHRcdFx0ICAgICAgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0fVxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0XHR0ZXh0YXJlYSB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOjBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6NDBweDtcclxuXHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OjQwcHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjBweDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdG91dGxpbmU6bm9uZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHQgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0IFx0KVxyXG5cdFx0IH1cclxuXHQgfSBlbHNlIHtcclxuXHQgXHRyZXR1cm4gbnVsbFxyXG5cdCB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgXHJcbiAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tZW50KSJdfQ== */\n/*@ sourceURL=components\\isomorphic\\comments\\comment.js */'
										}));
								}
						} else {
								return null;
						}
				}
		}]);

		return Comment;
}(_react2.default.Component);

function mapStateToProps(state) {
		return {
				currentUser: state.currentUser
		};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Comment);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\www\\Levelup.name\\components\\isomorphic\\comments\\comment.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\www\\Levelup.name\\components\\isomorphic\\comments\\comment.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(538)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4xYTQ2MDdkNjdhODVhN2NkZDU4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pc29tb3JwaGljL2NvbW1lbnRzL2NvbW1lbnQuanM/OTE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRhbnRcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXHJcblxyXG4vLyBBY3Rpb25zXHJcbmltcG9ydCB7IHJlbW92ZUNvbW1lbnQsIHVwZGF0ZUNvbW1lbnQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2NvbW1lbnQuanMnXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBUaW1lQWdvIGZyb20gJ3RpbWVhZ28tcmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY2xhc3MgQ29tbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdCAgIHN1cGVyKHByb3BzKTtcclxuXHQgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wcm9wcy5jdXJyZW50VXNlcjtcclxuXHQgICB0aGlzLnRva2VuID0gY29va2llcy5nZXQoJ3gtYWNjZXNzLXRva2VuJyk7XHJcblx0ICAgdGhpcy5zdGF0ZSA9IHtcclxuXHQgICBcdGNvbW1lbnQ6IHsgLi4udGhpcy5wcm9wcy5jb21tZW50IH0sXHJcblx0ICAgXHRpc0VkaXRpbmc6IGZhbHNlXHJcblx0ICAgfVxyXG4gIFx0fVxyXG5cclxuICBcdHJlbW92ZUNvbW1lbnQoaWQpIHtcclxuICBcdFx0cmVtb3ZlQ29tbWVudCh0aGlzLnRva2VuLCBpZCkudGhlbigocmVzKSA9PiB7XHJcbiAgXHRcdFx0aWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gIFx0XHRcdFx0JCgnLmNvbW1lbnQtJyArIGlkKS5oaWRlKDUwMCk7XHJcbiAgXHRcdFx0fSBlbHNlIHtcclxuICBcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gIFx0XHRcdH1cclxuICBcdFx0fSlcclxuICBcdH1cclxuXHJcbiAgXHRlZGl0Q29tbWVudChjb21tZW50KSB7XHJcbiAgXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRcdGlzRWRpdGluZzogdHJ1ZVxyXG4gIFx0XHR9KVxyXG4gIFx0fVxyXG5cclxuICBcdGNhbmNlbEVkaXRpbmcoKSB7XHJcbiAgXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRcdGlzRWRpdGluZzogZmFsc2UsXHJcbiAgXHRcdFx0Y29tbWVudDogdGhpcy5wcm9wcy5jb21tZW50XHJcbiAgXHRcdH0pXHJcbiAgXHR9XHJcblxyXG4gIFx0aGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRcdGNvbW1lbnQ6IHtcclxuICBcdFx0XHRcdC4uLnRoaXMuc3RhdGUuY29tbWVudCxcclxuICBcdFx0XHRcdGNvbW1lbnRDb250ZW50OiB2YWx1ZVxyXG4gIFx0XHRcdH1cclxuICBcdFx0fSlcclxuICBcdH1cclxuXHJcbiAgXHRzYXZlQ29tbWVudChjb21tZW50KSB7XHJcbiAgXHRcdHVwZGF0ZUNvbW1lbnQodGhpcy50b2tlbiwgY29tbWVudCkudGhlbigocmVzKSA9PiB7XHJcbiAgXHRcdFx0aWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gIFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgXHRcdFx0XHRcdGlzRWRpdGluZzogZmFsc2VcclxuICBcdFx0XHRcdH0pXHJcbiAgXHRcdFx0fSBlbHNlIHtcclxuICBcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gIFx0XHRcdH1cclxuICBcdFx0fSlcclxuICBcdH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIFx0dmFyIGNvbW1lbnQgPSB0aGlzLnN0YXRlLmNvbW1lbnQ7XHJcbiAgXHR2YXIgdXNlciA9IGNvbW1lbnQuY29tbWVudEF1dGhvcjtcclxuICBcdGlmIChjb21tZW50KSB7XHJcbiAgXHRcdGlmKCF0aGlzLnN0YXRlLmlzRWRpdGluZykge1xyXG5cdFx0ICAgIHJldHVybiAoXHJcblx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbW1lbnQgY29tbWVudC0ke2NvbW1lbnQuX2lkfWB9PlxyXG5cdFx0XHQgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuXHRcdFx0XHQgICAgIFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3VzZXInLCBxdWVyeTogeyBzbHVnOiB1c2VyLnNsdWcgfX19PjxhPlxyXG5cdFx0ICAgICAgICAgICAgICAgPEF2YXRhciBjb2xvcj17YCM0Njk3OGNgfSByb3VuZD17dHJ1ZX0gc2l6ZT17MzJ9IHNyYz17dXNlci51c2VySW1hZ2V9IG5hbWU9e3VzZXIudXNlck5hbWV9IC8+XHJcblx0XHQgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG5cdFx0XHQgICAgXHQ8L3NwYW4+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHQgICAgICBcdDxhIGNsYXNzTmFtZT1cImF1dGhvclwiPnt1c2VyLnVzZXJOYW1lfTwvYT5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YVwiPlxyXG5cdFx0XHQgICAgICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPjxUaW1lQWdvIGRhdGV0aW1lPXtjb21tZW50LmNvbW1lbnREYXRlfSBsb2NhbGU9J3J1JyAvPjwvc3Bhbj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHQgICAgICAgIFx0e2NvbW1lbnQuY29tbWVudENvbnRlbnR9XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuXHRcdFx0ICAgICAgICBcdDxhIGNsYXNzTmFtZT1cInJlcGx5XCI+0J7RgtCy0LXRgtC40YLRjDwvYT5cclxuXHRcdFx0ICAgICAgICBcdHt1c2VyLl9pZCA9PSB0aGlzLmN1cnJlbnRVc2VyLl9pZCAmJiBcclxuXHRcdFx0ICAgICAgICBcdFx0PHNwYW4+XHJcblx0XHRcdFx0ICAgICAgICBcdFx0PGEgY2xhc3NOYW1lPVwicmVwbHlcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5yZW1vdmVDb21tZW50KGNvbW1lbnQuX2lkKX19PtCj0LTQsNC70LjRgtGMPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgXHRcdDxhIGNsYXNzTmFtZT1cInJlcGx5XCIgb25DbGljaz17KCkgPT4ge3RoaXMuZWRpdENvbW1lbnQoY29tbWVudCl9fT7QoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0fVxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0ICAgICk7XHJcblx0XHQgfSBlbHNlIHtcclxuXHRcdCBcdHJldHVybiAoXHJcblx0XHQgXHRcdDxkaXYgY2xhc3NOYW1lPXtgY29tbWVudCBjb21tZW50LSR7Y29tbWVudC5faWR9YH0+XHJcblx0XHRcdCAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG5cdFx0XHRcdCAgICAgXHQ8TGluayBocmVmPXt7IHBhdGhuYW1lOiAndXNlcicsIHF1ZXJ5OiB7IHNsdWc6IHVzZXIuc2x1ZyB9fX0+PGE+XHJcblx0XHQgICAgICAgICAgICAgICA8QXZhdGFyIGNvbG9yPXtgIzQ2OTc4Y2B9IHJvdW5kPXt0cnVlfSBzaXplPXszMn0gc3JjPXt1c2VyLnVzZXJJbWFnZX0gbmFtZT17dXNlci51c2VyTmFtZX0gLz5cclxuXHRcdCAgICAgICAgICAgIDwvYT48L0xpbms+XHJcblx0XHRcdCAgICBcdDwvc3Bhbj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdCAgICAgIFx0PGEgY2xhc3NOYW1lPVwiYXV0aG9yXCI+e3VzZXIudXNlck5hbWV9PC9hPlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFkYXRhXCI+XHJcblx0XHRcdCAgICAgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+PFRpbWVBZ28gZGF0ZXRpbWU9e2NvbW1lbnQuY29tbWVudERhdGV9IGxvY2FsZT0ncnUnIC8+PC9zcGFuPlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBcclxuXHRcdFx0XHRcdFx0XHRvbklucHV0PXsoZSkgPT4ge3RoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX19XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtjb21tZW50LmNvbW1lbnRDb250ZW50fSBcclxuXHRcdFx0XHRcdFx0XHRjb2xzPVwiMlwiPlxyXG5cdFx0XHRcdFx0XHQ8L3RleHRhcmVhPlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcblx0XHRcdCAgICAgICAgXHR7dXNlci5faWQgPT0gdGhpcy5jdXJyZW50VXNlci5faWQgJiYgXHJcblx0XHRcdCAgICAgICAgXHRcdDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgXHRcdDxhIGNsYXNzTmFtZT1cInJlcGx5XCIgb25DbGljaz17KCkgPT4ge3RoaXMuc2F2ZUNvbW1lbnQodGhpcy5zdGF0ZS5jb21tZW50KX19PtCh0L7RhdGA0LDQvdC40YLRjDwvYT5cclxuXHRcdFx0XHRcdCAgICAgICAgXHQ8YSBjbGFzc05hbWU9XCJyZXBseVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmNhbmNlbEVkaXRpbmcoKX19PtCe0YLQvNC10L3QuNGC0Yw8L2E+XHJcblx0XHRcdFx0XHQgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHR9XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRcdHRleHRhcmVhIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo0MHB4O1xyXG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6NDBweDtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MHB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRcdFx0b3V0bGluZTpub25lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdCAgICBgfTwvc3R5bGU+XHJcblx0XHRcdCAgPC9kaXY+XHJcblx0XHQgXHQpXHJcblx0XHQgfVxyXG5cdCB9IGVsc2Uge1xyXG5cdCBcdHJldHVybiBudWxsXHJcblx0IH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICByZXR1cm4geyBcclxuICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1lbnQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pc29tb3JwaGljL2NvbW1lbnRzL2NvbW1lbnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQVpBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUdBO0FBRkE7Ozs7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQURBOzs7O0FBS0E7QUFDQTtBQUVBO0FBSUE7QUFIQTtBQUZBOzs7O0FBT0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFGQTtBQUZBO0FBS0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQTVCQTtBQThCQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXRCQTtBQXlDQTtBQXpDQTtBQTBDQTtBQXpFQTtBQTJFQTtBQUNBOzs7OztBQXRJQTtBQUNBO0FBeUlBOztBQUVBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=