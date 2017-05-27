'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _user = require('../../actions/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Register = function (_React$Component) {
  (0, _inherits3.default)(Register, _React$Component);

  function Register(props) {
    (0, _classCallCheck3.default)(this, Register);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).call(this, props));

    _this.state = {
      user: null
    };
    return _this;
  }

  (0, _createClass3.default)(Register, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindChangeEvents();
    }
  }, {
    key: 'bindChangeEvents',
    value: function bindChangeEvents() {
      var self = this;
      var inputs = document.querySelectorAll('.register input');
      inputs.forEach(function (input) {
        input.addEventListener('change', function (e) {
          var property = e.target.name;
          var value = e.target.value;
          self.setState((0, _extends3.default)({}, self.state, {
            user: (0, _extends3.default)({}, self.state.user, (0, _defineProperty3.default)({}, property, value))
          }));
        });
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var user = this.state.user;
      (0, _user.registerUser)(user).then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('form', { className: 'ui form register', 'data-jsx': 112980613
      }, _react2.default.createElement('h2', { className: 'ui header', 'data-jsx': 112980613
      }, '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ', _react2.default.createElement('small', {
        'data-jsx': 112980613
      }, '\u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F')), _react2.default.createElement('p', {
        'data-jsx': 112980613
      }, '\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u0430\u0448\u0435\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0436\u0443\u0440\u043D\u0430\u043B\u0430 \u0432\u0430\u043C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E \u043D\u0435 \u043F\u043E\u043C\u0435\u0448\u0430\u0435\u0442!'), _react2.default.createElement('p', {
        'data-jsx': 112980613
      }, '\u041F\u043E\u043C\u0438\u043C\u043E \u0437\u0432\u0430\u043D\u0438\u044F \u0447\u043B\u0435\u043D\u0441\u0442\u0432\u0430 \u0432 \u043D\u0430\u0448\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435, \u0432\u044B \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430 \u043C\u043D\u043E\u0433\u043E\u0442\u044B\u0441\u044F\u0447\u043D\u0443\u044E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B'), _react2.default.createElement('div', { className: 'field', 'data-jsx': 112980613
      }, _react2.default.createElement('input', { type: 'text', name: 'userName', placeholder: '\u041F\u043E\u043B\u043D\u043E\u0435 \u0418\u043C\u044F', 'data-jsx': 112980613
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 112980613
      }, _react2.default.createElement('input', { type: 'text', name: 'userEmail', placeholder: 'E-mail', 'data-jsx': 112980613
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 112980613
      }, _react2.default.createElement('input', { type: 'password', name: 'userPassword', placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C', 'data-jsx': 112980613
      })), _react2.default.createElement('a', { className: 'ui button circular primary', onClick: function onClick() {
          _this2.handleSubmit();
        }, 'data-jsx': 112980613
      }, '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F'), _react2.default.createElement(_style2.default, {
        styleId: 112980613,
        css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGF1dGhcXHJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEc0IiLCJmaWxlIjoiY29tcG9uZW50c1xcYXV0aFxccmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdXNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcjogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmJpbmRDaGFuZ2VFdmVudHMoKVxyXG4gIH1cclxuXHJcbiAgYmluZENoYW5nZUV2ZW50cygpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXIgaW5wdXQnKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5zZWxmLnN0YXRlLFxyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAuLi5zZWxmLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgIFtwcm9wZXJ0eV06IHZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgdmFyIHVzZXIgPSB0aGlzLnN0YXRlLnVzZXI7XHJcbiAgICByZWdpc3RlclVzZXIodXNlcikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHQ8Zm9ybSBjbGFzc05hbWU9XCJ1aSBmb3JtIHJlZ2lzdGVyXCI+XHJcbiAgICAgIFx0ICA8aDIgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcbiAgICAgIFx0ICBcdCDQoNC10LPQuNGB0YLRgNCw0YbQuNGPIDxzbWFsbD7QvNC+0LzQtdC90YLQsNC70YzQvdCw0Y88L3NtYWxsPlxyXG4gICAgICBcdCAgPC9oMj5cclxuICAgICAgICAgIDxwPtCjINCy0LDRgSDQtdGJ0LUg0L3QtdGCINCw0LrQutCw0YPQvdGC0LA/INCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L3QsCDRgdCw0LnRgtC1INC90LDRiNC10LPQviDQuNC90YLQtdGA0L3QtdGCLdC20YPRgNC90LDQu9CwINCy0LDQvCDQvtC/0YDQtdC00LXQu9C10L3QvdC+INC90LUg0L/QvtC80LXRiNCw0LXRgiE8L3A+XHJcbiAgICAgICAgICA8cD7Qn9C+0LzQuNC80L4g0LfQstCw0L3QuNGPINGH0LvQtdC90YHRgtCy0LAg0LIg0L3QsNGI0LXQvCDRgdC+0L7QsdGJ0LXRgdGC0LLQtSwg0LLRiyDRgtCw0LrQttC1INC/0L7Qu9GD0YfQuNGC0LUg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDRgdCy0L7QsdC+0LTQvdC+0Lkg0L/Rg9Cx0LvQuNC60LDRhtC40Lgg0L3QsCDQvNC90L7Qs9C+0YLRi9GB0Y/Rh9C90YPRjiDQsNGD0LTQuNGC0L7RgNC40Y4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0L3QsNGI0LXQuSDQv9C70LDRgtGE0L7RgNC80Ys8L3A+ICAgIFx0XHQgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlck5hbWVcIiBwbGFjZWhvbGRlcj1cItCf0L7Qu9C90L7QtSDQmNC80Y9cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICBcdFx0ICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyRW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiIC8+XHJcbiAgICBcdFx0ICA8L2Rpdj5cclxuICAgIFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgIFx0XHQgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIC8+XHJcbiAgICBcdFx0ICA8L2Rpdj5cclxuICAgIFx0XHQgIDxhIGNsYXNzTmFtZT1cInVpIGJ1dHRvbiBjaXJjdWxhciBwcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlU3VibWl0KCl9fT7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9hPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgXHRcdDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\auth\\register.js */'
      }));
    }
  }]);

  return Register;
}(_react2.default.Component);

exports.default = Register;