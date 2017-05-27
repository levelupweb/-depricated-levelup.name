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

var _user = require('../../actions/user');

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function (_React$Component) {
  (0, _inherits3.default)(Auth, _React$Component);

  function Auth(props) {
    (0, _classCallCheck3.default)(this, Auth);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call(this, props));

    _this2.interval = null;
    _this2.state = {
      formID: 'loginForm',
      formElement: null,
      secondsToRelocate: 3
    };
    return _this2;
  }

  (0, _createClass3.default)(Auth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindEvents();
      this.setState({
        formElement: document.getElementById(this.state.formID)
      });
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var button = document.querySelector('.loginButton');
      var _this = this;
      button.addEventListener('click', function () {
        _this.handleAuth();
      });
    }
  }, {
    key: 'handleAuth',
    value: function handleAuth() {
      var _this3 = this;

      var user = this.formToObject();
      (0, _axios2.default)({
        url: _appConfig2.default.API + 'user/auth',
        method: 'POST',
        data: {
          slug: user.userLogin,
          userPassword: user.userPassword
        }
      }).then(function (result) {
        var response = result.data;
        console.log(response);
        if (response.success) {
          _this3.handleSuccess(response);
        } else {
          _this3.handleError(response);
        }
      });
    }
  }, {
    key: 'handleError',
    value: function handleError(response) {
      this.setState({
        error: response
      });
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      var _this4 = this;

      this.interval = setInterval(function () {
        if (_this4.state.secondsToRelocate > 0) {
          _this4.setState({
            secondsToRelocate: _this4.state.secondsToRelocate - 1
          });
        } else {
          _this4.handleRelocate();
        }
      }, 900);
    }
  }, {
    key: 'handleRelocate',
    value: function handleRelocate(timer) {
      clearInterval(this.interval);
      _index2.default.push('/', '/', { shallow: true });
    }
  }, {
    key: 'formToObject',
    value: function formToObject() {
      var elements = this.state.formElement.elements;
      var user = {};
      for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        user[item.name] = item.value;
      }
      return user;
    }
  }, {
    key: 'handleSuccess',
    value: function handleSuccess(response) {
      $('.form .dimmer').dimmer('show');
      _jsCookie2.default.set('x-access-token', response.user.token, { expires: 7, path: '' });
      console.log(this.props);
      console.log(response.user);
      this.props.dispatch({ type: 'LOGIN_SUCCESS', payload: response.user });
      this.startTimer();
    }
  }, {
    key: 'hasError',
    value: function hasError() {
      if (this.props.error) {
        return true;
      }
    }
  }, {
    key: 'getError',
    value: function getError() {
      return this.props.error;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.hasError()) {
        this.state.formElement.reset();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(window.relocateTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var error = this.hasError() ? this.getError() : null;
      return _react2.default.createElement('form', { className: 'ui form', id: 'loginForm', 'data-jsx': 3709635176
      }, this.hasError() ? _react2.default.createElement('div', { className: 'ui negative message', 'data-jsx': 3709635176
      }, _react2.default.createElement('div', { className: 'header', 'data-jsx': 3709635176
      }, error.title), _react2.default.createElement('p', {
        'data-jsx': 3709635176
      }, error.message)) : null, _react2.default.createElement('h2', { className: 'ui header', 'data-jsx': 3709635176
      }, '\u0412\u0445\u043E\u0434 ', _react2.default.createElement('small', {
        'data-jsx': 3709635176
      }, '\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F')), _react2.default.createElement('p', {
        'data-jsx': 3709635176
      }, '\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0432\u0430\u0448 \u043B\u043E\u0433\u0438\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C'), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3709635176
      }, _react2.default.createElement('input', { type: 'text', name: 'userLogin', placeholder: 'E-mail \u0438\u043B\u0438 \u043B\u043E\u0433\u0438\u043D', 'data-jsx': 3709635176
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3709635176
      }, _react2.default.createElement('input', { type: 'password', name: 'userPassword', placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C', 'data-jsx': 3709635176
      })), _react2.default.createElement('a', { className: 'ui button circular loginButton primary', 'data-jsx': 3709635176
      }, '\u0412\u043E\u0439\u0442\u0438'), _react2.default.createElement('span', { className: 'registerButton', 'data-jsx': 3709635176
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 3709635176
      }, '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F')), _react2.default.createElement('div', { className: 'ui dimmer', 'data-jsx': 3709635176
      }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 3709635176
      }, _react2.default.createElement('div', { className: 'center', 'data-jsx': 3709635176
      }, _react2.default.createElement('h2', { className: 'ui inverted icon header', 'data-jsx': 3709635176
      }, '\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!'), _react2.default.createElement('p', {
        'data-jsx': 3709635176
      }, '\u0427\u0435\u0440\u0435\u0437 ', this.state.secondsToRelocate, ' \u0441\u0435\u043A\u0443\u043D\u0434 \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B')))), _react2.default.createElement(_style2.default, {
        styleId: 3709635176,
        css: '.form[data-jsx="3709635176"] .registerButton[data-jsx="3709635176"] {margin-left:10px;}.dimmer[data-jsx="3709635176"] {padding:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGF1dGhcXGF1dGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0pzQixBQUNhLHFFQUNKLGlCQUNsQixDQUNRLGdDQUNPLGFBQ2YiLCJmaWxlIjoiY29tcG9uZW50c1xcYXV0aFxcYXV0aC5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHthdXRofSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXInXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vYXBwLmNvbmZpZy5qcydcclxuXHJcbmNsYXNzIEF1dGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmb3JtSUQ6ICdsb2dpbkZvcm0nLFxyXG4gICAgICBmb3JtRWxlbWVudDogbnVsbCxcclxuICAgICAgc2Vjb25kc1RvUmVsb2NhdGU6IDNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZm9ybUVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhdGUuZm9ybUlEKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGJpbmRFdmVudHMoKSB7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luQnV0dG9uJyk7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBfdGhpcy5oYW5kbGVBdXRoKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXV0aCgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmZvcm1Ub09iamVjdCgpO1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICB1cmw6IGNvbmZpZy5BUEkgKyAndXNlci9hdXRoJyxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzbHVnOiB1c2VyLnVzZXJMb2dpbiwgXHJcbiAgICAgICAgdXNlclBhc3N3b3JkOiB1c2VyLnVzZXJQYXNzd29yZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICB2YXIgcmVzcG9uc2UgPSByZXN1bHQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3IocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3IocmVzcG9uc2UpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlcnJvcjogcmVzcG9uc2VcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGFydFRpbWVyKCkge1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5zdGF0ZS5zZWNvbmRzVG9SZWxvY2F0ZSA+IDApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHNlY29uZHNUb1JlbG9jYXRlOiB0aGlzLnN0YXRlLnNlY29uZHNUb1JlbG9jYXRlIC0gMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZWxvY2F0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0sIDkwMClcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbG9jYXRlKHRpbWVyKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXHJcbiAgICBSb3V0ZXIucHVzaCgnLycsICcvJywgeyBzaGFsbG93OiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBmb3JtVG9PYmplY3QoKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLnN0YXRlLmZvcm1FbGVtZW50LmVsZW1lbnRzO1xyXG4gICAgbGV0IHVzZXIgPSB7fTtcclxuICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgZWxlbWVudHMubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICB2YXIgaXRlbSA9IGVsZW1lbnRzLml0ZW0oaSk7XHJcbiAgICAgICAgdXNlcltpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2VyXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcbiAgICAkKCcuZm9ybSAuZGltbWVyJykuZGltbWVyKCdzaG93JylcclxuICAgIGNvb2tpZS5zZXQoJ3gtYWNjZXNzLXRva2VuJywgcmVzcG9uc2UudXNlci50b2tlbiwgeyBleHBpcmVzOiA3LCBwYXRoOiAnJyB9KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UudXNlcilcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdMT0dJTl9TVUNDRVNTJywgcGF5bG9hZDogcmVzcG9uc2UudXNlcn0pO1xyXG4gICAgdGhpcy5zdGFydFRpbWVyKClcclxuICB9XHJcblxyXG4gIGhhc0Vycm9yKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEVycm9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZXJyb3JcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgaWYoIXRoaXMuaGFzRXJyb3IoKSkge1xyXG4gICAgICB0aGlzLnN0YXRlLmZvcm1FbGVtZW50LnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHdpbmRvdy5yZWxvY2F0ZVRpbWVyKVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHsgXHJcbiAgICBsZXQgZXJyb3IgPSAodGhpcy5oYXNFcnJvcigpKSA/IHRoaXMuZ2V0RXJyb3IoKSA6IG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVpIGZvcm1cIiBpZD1cImxvZ2luRm9ybVwiPlxyXG5cclxuICAgICAgICAgIHt0aGlzLmhhc0Vycm9yKCkgPyBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBuZWdhdGl2ZSBtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge2Vycm9yLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6IG51bGwgfVxyXG5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuICAgICAgICAgICAgINCS0YXQvtC0IDxzbWFsbD7QsNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9zbWFsbD5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cD7QkNCy0YLQvtGA0LjQt9GD0LnRgtC10YHRjCDQv9C+0LQg0YHQstC+0LjQvCDQuNC80LXQvdC10Lwg0LjRgdC/0L7Qu9GM0LfRg9GPINCy0LDRiCDQu9C+0LPQuNC9INC4INC/0LDRgNC+0LvRjDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJMb2dpblwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsINC40LvQuCDQu9C+0LPQuNC9XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInVzZXJQYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWkgYnV0dG9uIGNpcmN1bGFyIGxvZ2luQnV0dG9uIHByaW1hcnlcIj7QktC+0LnRgtC4PC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVnaXN0ZXJCdXR0b25cIj48YSBocmVmPVwiI1wiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2E+PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGltbWVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaWNvbiBoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAg0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD7Qp9C10YDQtdC3IHt0aGlzLnN0YXRlLnNlY29uZHNUb1JlbG9jYXRlfSDRgdC10LrRg9C90LQg0LLRiyDQsdGD0LTQtdGC0LUg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3RizwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZm9ybSAucmVnaXN0ZXJCdXR0b24ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRpbW1lciB7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHN0b3JlLnVzZXIpKEF1dGgpIl19 */\n/*@ sourceURL=components\\auth\\auth.js */'
      }));
    }
  }]);

  return Auth;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.user;
})(Auth);