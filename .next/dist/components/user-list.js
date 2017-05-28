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

var _reactAvatar = require('react-avatar');

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _user = require('../actions/user.js');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function (_React$Component) {
	(0, _inherits3.default)(UserList, _React$Component);

	function UserList(props) {
		(0, _classCallCheck3.default)(this, UserList);

		return (0, _possibleConstructorReturn3.default)(this, (UserList.__proto__ || (0, _getPrototypeOf2.default)(UserList)).call(this, props));
	}

	(0, _createClass3.default)(UserList, [{
		key: 'render',
		value: function render() {
			var users = this.props.users.map(function (user, i) {
				return _react2.default.createElement(User, { id: user, key: i });
			});
			if (this.props.users.length > 0) {
				return _react2.default.createElement('div', { className: 'ui user-list-items' }, users);
			} else {
				return _react2.default.createElement('div', { className: 'no-content' }, _react2.default.createElement('p', null, '\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442'));
			}
		}
	}]);

	return UserList;
}(_react2.default.Component);

exports.default = UserList;


var User = function (_React$Component2) {
	(0, _inherits3.default)(User, _React$Component2);

	function User(props) {
		(0, _classCallCheck3.default)(this, User);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).call(this, props));

		_this2.state = {
			user: null
		};
		return _this2;
	}

	(0, _createClass3.default)(User, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this3 = this;

			(0, _user.getUserById)(this.props.id).then(function (res) {
				_this3.setState({
					user: res.data
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var user = this.state.user;
			if (user) {
				return _react2.default.createElement('div', { className: 'item', 'data-jsx': 3559861906
				}, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } } }, _react2.default.createElement('a', {
					'data-jsx': 3559861906
				}, _react2.default.createElement(_reactAvatar2.default, { color: '#46978c', round: true, size: 32, src: user.userImage, name: user.userName }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3559861906
				}, _react2.default.createElement('h4', { className: 'ui header', 'data-jsx': 3559861906
				}, _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: user.slug } } }, _react2.default.createElement('a', {
					'data-jsx': 3559861906
				}, user.userName)), _react2.default.createElement('div', { className: 'sub header', 'data-jsx': 3559861906
				}, user.userDescription))), _react2.default.createElement('div', { className: 'updates', 'data-jsx': 3559861906
				}, '+1'), _react2.default.createElement(_style2.default, {
					styleId: 3559861906,
					css: '.item[data-jsx="3559861906"] {margin-top:10px}.item[data-jsx="3559861906"]:first-child {margin-top:0px;}.item[data-jsx="3559861906"] .content[data-jsx="3559861906"] {margin-left:10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXItbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWlCLEFBQ0osOEJBRU4sZ0JBRWtCLDBDQUNILGVBQ2YsQ0FFZSw4REFDRSxpQkFDakIiLCJmaWxlIjoiY29tcG9uZW50c1xcdXNlci1saXN0LmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcclxuaW1wb3J0IHsgZ2V0VXNlckJ5SWQgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXIuanMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gXHR2YXIgdXNlcnMgPSB0aGlzLnByb3BzLnVzZXJzLm1hcCgodXNlciwgaSkgPT4ge1xyXG4gXHRcdHJldHVybiA8VXNlciBpZD17dXNlcn0ga2V5PXtpfSAvPlxyXG4gXHR9KVxyXG4gXHRpZih0aGlzLnByb3BzLnVzZXJzLmxlbmd0aCA+IDApIHtcclxuXHQgICAgcmV0dXJuIChcclxuXHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHVzZXItbGlzdC1pdGVtc1wiPlxyXG5cdCAgICAgIFx0e3VzZXJzfVxyXG5cdCAgICAgIDwvZGl2PlxyXG5cdCAgICAgIClcclxuXHQgIH0gZWxzZSB7XHJcblx0ICBcdHJldHVybiAoXHJcblx0ICBcdFx0PGRpdiBjbGFzc05hbWU9XCJuby1jb250ZW50XCI+XHJcblx0ICAgICAgICAgIDxwPtCh0L/QuNGB0L7QuiDQv9GD0YHRgjwvcD5cclxuXHQgICAgICAgIDwvZGl2PlxyXG5cdCAgXHQpXHJcblx0ICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VyOiBudWxsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblx0XHRnZXRVc2VyQnlJZCh0aGlzLnByb3BzLmlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0dXNlcjogcmVzLmRhdGFcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR2YXIgdXNlciA9IHRoaXMuc3RhdGUudXNlclxyXG5cdFx0aWYodXNlcikge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3VzZXInLCBxdWVyeTogeyBzbHVnOiB1c2VyLnNsdWcgfX19PjxhPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxBdmF0YXIgY29sb3I9e2AjNDY5NzhjYH0gcm91bmQ9e3RydWV9IHNpemU9ezMyfSBzcmM9e3VzZXIudXNlckltYWdlfSBuYW1lPXt1c2VyLnVzZXJOYW1lfSAvPlxyXG5cdFx0ICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3VzZXInLCBxdWVyeTogeyBzbHVnOiB1c2VyLnNsdWcgfX19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+e3VzZXIudXNlck5hbWV9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1YiBoZWFkZXJcIj57dXNlci51c2VyRGVzY3JpcHRpb259PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXBkYXRlc1wiPlxyXG5cdFx0XHRcdFx0XHQrMVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRcdC5pdGVtIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOjEwcHhcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Lml0ZW06Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQuaXRlbSAuY29udGVudCB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICg8ZGl2PjwvZGl2PilcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\user-list.js */'
				}));
			} else {
				return _react2.default.createElement('div', null);
			}
		}
	}]);

	return User;
}(_react2.default.Component);