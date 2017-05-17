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

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleHeader = function (_React$Component) {
	(0, _inherits3.default)(SimpleHeader, _React$Component);

	function SimpleHeader(props) {
		(0, _classCallCheck3.default)(this, SimpleHeader);

		return (0, _possibleConstructorReturn3.default)(this, (SimpleHeader.__proto__ || (0, _getPrototypeOf2.default)(SimpleHeader)).call(this, props));
	}

	(0, _createClass3.default)(SimpleHeader, [{
		key: 'handleBack',
		value: function handleBack() {
			window.history.back();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			console.log(this.props);
			var user = this.props.user.isLogged ? _react2.default.createElement(_user2.default, { size: 'dropdown', id: this.props.user.profile._id }) : _react2.default.createElement(_link2.default, { href: '/auth' }, _react2.default.createElement('a', null, '\u0412\u043E\u0439\u0442\u0438'));
			return _react2.default.createElement('div', { className: 'header-wrapper', 'data-jsx': 3650485795
			}, _react2.default.createElement('div', { className: 'ui secondary menu block', 'data-jsx': 3650485795
			}, _react2.default.createElement('div', { className: 'left menu', 'data-jsx': 3650485795
			}, user, _react2.default.createElement('a', { className: 'ui item transparent', onClick: function onClick() {
					_this2.handleBack();
				}, 'data-jsx': 3650485795
			}, _react2.default.createElement('i', { className: 'fa fa-angle-left', 'data-jsx': 3650485795
			}), _react2.default.createElement('span', {
				'data-jsx': 3650485795
			}, '\u043D\u0430\u0437\u0430\u0434'))), _react2.default.createElement('div', { className: 'right menu', 'data-jsx': 3650485795
			})), _react2.default.createElement(_style2.default, {
				styleId: 3650485795,
				css: '.header-wrapper[data-jsx="3650485795"] .menu[data-jsx="3650485795"] .fa[data-jsx="3650485795"] {font-size:15px;color:#000;}.header-wrapper[data-jsx="3650485795"] .menu.left[data-jsx="3650485795"] {align-items:center;}.header-wrapper[data-jsx="3650485795"] .menu[data-jsx="3650485795"] .item[data-jsx="3650485795"] {margin-left:20px;}.header-wrapper[data-jsx="3650485795"] .menu[data-jsx="3650485795"] .item[data-jsx="3650485795"] span[data-jsx="3650485795"] {margin-left:10px;font-size:13px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpbXBsZWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2UsQUFDZ0IsZ0dBQ1gsZUFDSixXQUNYLENBRTJCLDBFQUNSLG1CQUNuQixDQUU0QixrR0FDWCxpQkFDakIsQ0FFaUMsOEhBQ2hCLGlCQUNGLGVBQ0UsaUJBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNpbXBsZWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNsYXNzIFNpbXBsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCYWNrKCkge1xyXG4gIFx0d2luZG93Lmhpc3RvcnkuYmFjaygpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgXHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxyXG4gIFx0dmFyIHVzZXIgPSAodGhpcy5wcm9wcy51c2VyLmlzTG9nZ2VkKSA/IFxyXG4gIFx0XHQ8VXNlciBzaXplPVwiZHJvcGRvd25cIiBpZD17dGhpcy5wcm9wcy51c2VyLnByb2ZpbGUuX2lkfSAvPlxyXG4gIFx0XHQ6XHJcblx0XHQ8TGluayBocmVmPVwiL2F1dGhcIj48YT7QktC+0LnRgtC4PC9hPjwvTGluaz5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBzZWNvbmRhcnkgbWVudSBibG9ja1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVmdCBtZW51XCI+XHJcblx0XHRcdFx0XHR7dXNlcn1cclxuXHRcdFx0XHQgICBcdDxhIGNsYXNzTmFtZT1cInVpIGl0ZW0gdHJhbnNwYXJlbnRcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVCYWNrKCl9fT48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPjxzcGFuPtC90LDQt9Cw0LQ8L3NwYW4+PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IG1lbnVcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQuaGVhZGVyLXdyYXBwZXIgLm1lbnUgLmZhIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5oZWFkZXItd3JhcHBlciAubWVudS5sZWZ0IHtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5oZWFkZXItd3JhcHBlciAubWVudSAuaXRlbSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmhlYWRlci13cmFwcGVyIC5tZW51IC5pdGVtIHNwYW4ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdG9yZSkgPT4gc3RvcmUpKFNpbXBsZUhlYWRlcikiXX0= */\n/*@ sourceURL=components\\simpleheader.js */'
			}));
		}
	}]);

	return SimpleHeader;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
	return store;
})(SimpleHeader);