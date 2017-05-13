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

			return _react2.default.createElement('div', { className: 'header-wrapper', 'data-jsx': 728554631
			}, _react2.default.createElement('div', { className: 'ui secondary menu block', 'data-jsx': 728554631
			}, _react2.default.createElement('div', { className: 'left menu', 'data-jsx': 728554631
			}, _react2.default.createElement(_user2.default, { size: 'dropdown' }), _react2.default.createElement('a', { className: 'ui item transparent', onClick: function onClick() {
					_this2.handleBack();
				}, 'data-jsx': 728554631
			}, _react2.default.createElement('i', { className: 'fa fa-angle-left', 'data-jsx': 728554631
			}), _react2.default.createElement('span', {
				'data-jsx': 728554631
			}, '\u043D\u0430\u0437\u0430\u0434'))), _react2.default.createElement('div', { className: 'right menu', 'data-jsx': 728554631
			})), _react2.default.createElement(_style2.default, {
				styleId: 728554631,
				css: '.header-wrapper[data-jsx="728554631"] .menu[data-jsx="728554631"] .fa[data-jsx="728554631"] {font-size:15px;color:#000;}.header-wrapper[data-jsx="728554631"] .menu[data-jsx="728554631"] .item[data-jsx="728554631"] {margin-left:20px;}.header-wrapper[data-jsx="728554631"] .menu[data-jsx="728554631"] .item[data-jsx="728554631"] span[data-jsx="728554631"] {margin-left:10px;font-size:13px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNpbXBsZWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmUsQUFDZ0IsNkZBQ1gsZUFDSixXQUNYLENBRTRCLCtGQUNYLGlCQUNqQixDQUVpQywwSEFDaEIsaUJBQ0YsZUFDRSxpQkFDakIiLCJmaWxlIjoiY29tcG9uZW50c1xcc2ltcGxlaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCYWNrKCkge1xyXG4gIFx0d2luZG93Lmhpc3RvcnkuYmFjaygpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgc2Vjb25kYXJ5IG1lbnUgYmxvY2tcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnQgbWVudVwiPlxyXG5cdFx0XHRcdFx0PFVzZXIgc2l6ZT1cImRyb3Bkb3duXCIgLz5cclxuXHRcdFx0XHQgICBcdDxhIGNsYXNzTmFtZT1cInVpIGl0ZW0gdHJhbnNwYXJlbnRcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVCYWNrKCl9fT48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPjxzcGFuPtC90LDQt9Cw0LQ8L3NwYW4+PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IG1lbnVcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQuaGVhZGVyLXdyYXBwZXIgLm1lbnUgLmZhIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5oZWFkZXItd3JhcHBlciAubWVudSAuaXRlbSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmhlYWRlci13cmFwcGVyIC5tZW51IC5pdGVtIHNwYW4ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\simpleheader.js */'
			}));
		}
	}]);

	return SimpleHeader;
}(_react2.default.Component);

exports.default = SimpleHeader;