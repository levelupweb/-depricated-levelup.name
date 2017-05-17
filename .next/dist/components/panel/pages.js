'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagesContainer = exports.Pages = undefined;

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

var _initscripts = require('../../utils/initscripts.js');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _serializeForm = require('../../utils/serializeForm');

var _serializeForm2 = _interopRequireDefault(_serializeForm);

var _app = require('../../app.config');

var _app2 = _interopRequireDefault(_app);

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
1. Доделать обработку ошибок в AddPage
2. Разбить на несколько функций AddPage.handleSubmit
3. Упростить компоненты 
*/

/* 
*** Компонент списка страниц (универсальный)
*/

var Pages = exports.Pages = function (_React$Component) {
  (0, _inherits3.default)(Pages, _React$Component);

  function Pages(props) {
    (0, _classCallCheck3.default)(this, Pages);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Pages.__proto__ || (0, _getPrototypeOf2.default)(Pages)).call(this, props));

    _this2.state = {
      entries: []
    };
    return _this2;
  }

  (0, _createClass3.default)(Pages, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      _axios2.default.get(_app2.default.API + 'page/entries').then(function (res) {
        _this3.setState({
          entries: res.data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'ui segments' }, _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement('h3', { className: 'ui header' }, '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0430\u0439\u0442\u0430', _react2.default.createElement('div', { className: 'sub header' }, '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435'))), _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement(Entries, { data: this.state.entries })), _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement(AddPage, null)));
    }
  }]);

  return Pages;
}(_react2.default.Component);

/* 
*** Компонент добавления страницы (универсальный)
*/

var AddPage = function (_React$Component2) {
  (0, _inherits3.default)(AddPage, _React$Component2);

  function AddPage(props) {
    (0, _classCallCheck3.default)(this, AddPage);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (AddPage.__proto__ || (0, _getPrototypeOf2.default)(AddPage)).call(this, props));

    _this4.state = {
      isAddFormActive: false,
      errors: null,
      message: null
    };
    return _this4;
  }

  (0, _createClass3.default)(AddPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _initscripts.UI)();
      $('.ui.checkbox').checkbox();
    }
  }, {
    key: 'handleButton',
    value: function handleButton() {
      this.setState({
        isAddFormActive: !this.state.isAddFormActive
      });
    }

    /* 
    *** Парсинг формы и отправка данных (можно разбить на 2 функции)
    */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var form = document.getElementById('pageSubmitForm');
      var inputs = form.querySelectorAll('input');
      var _this = this;
      _axios2.default.post(_app2.default.API + 'page/add', (0, _serializeForm2.default)(inputs)).then(function (response) {
        if (response.data.success) {
          _this.handleSuccess(response.data);
        } else {
          _this.setState({
            errors: response.data.errors
          });
        }
      }).catch(function (error) {
        // Handle Error
      });
    }

    /* 
    *** Вызывается в случае успешной отправки данных на сервер
    */

  }, {
    key: 'handleSuccess',
    value: function handleSuccess(page) {
      this.setState({
        message: page.message
      });
    }

    /* 
    *** Рендер формы добавления (доделать обработку ошибок)
    */

  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var errors = [];
      if (this.state.errors) {
        this.state.errors.forEach(function (item, i) {
          errors.push(_react2.default.createElement('div', { key: i }, item));
        });
      }
      var message = this.state.message;
      return _react2.default.createElement('div', {
        'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: !this.state.isAddFormActive ? 'large fluid circular ui button primary' : 'large fluid circular ui button', onClick: function onClick() {
          _this5.handleButton();
        }, 'data-jsx': 3768511810
      }, !this.state.isAddFormActive ? '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443' : '\u041E\u0442\u043C\u0435\u043D\u0430'), _react2.default.createElement('div', { id: 'pageSubmitForm', className: !this.state.isAddFormActive ? 'ui form hidden' : 'ui form', ref: function ref(form) {
          _this5.form = form;
        }, 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: !this.state.errors ? 'ui message hidden' : 'ui message visible warning', 'data-jsx': 3768511810
      }, errors), _react2.default.createElement('div', { className: !this.state.message ? 'ui message hidden' : 'ui message visible success', 'data-jsx': 3768511810
      }, message), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { 'data-type': 'text', 'data-label': '\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0439 \u0438\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', type: 'text', name: 'slug', placeholder: '\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0439 \u0438\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { 'data-type': 'text', 'data-label': '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', type: 'text', name: 'pageTitle', placeholder: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { 'data-type': 'text', 'data-label': '\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', type: 'text', name: 'pageDescription', placeholder: '\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { 'data-type': 'text', 'data-label': 'CSS-\u043A\u043B\u0430\u0441\u0441\u044B', type: 'text', name: 'pageClassnames', placeholder: 'CSS-\u043A\u043B\u0430\u0441\u0441\u044B', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'inline field', 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: 'ui checkbox', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { 'data-type': 'checkbox', 'data-label': '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0448\u0430\u043F\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', name: 'pageShowHeader', type: 'checkbox', className: 'hidden', 'data-jsx': 3768511810
      }), _react2.default.createElement('label', {
        'data-jsx': 3768511810
      }, '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0448\u0430\u043F\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B'))), _react2.default.createElement('div', { className: 'inline field', 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: 'ui checkbox', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { 'data-type': 'checkbox', 'data-label': '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', name: 'pageShowTitle', type: 'checkbox', className: 'hidden', 'data-jsx': 3768511810
      }), _react2.default.createElement('label', {
        'data-jsx': 3768511810
      }, '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B'))), _react2.default.createElement('div', { className: 'inline field', 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: 'ui checkbox', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { 'data-type': 'checkbox', 'data-label': '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0430\u0439\u0434\u0431\u0430\u0440', name: 'pageShowSidebar', type: 'checkbox', className: 'hidden', 'data-jsx': 3768511810
      }), _react2.default.createElement('label', {
        'data-jsx': 3768511810
      }, '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0430\u0439\u0434\u0431\u0430\u0440'))), _react2.default.createElement('div', { className: 'fluid ui button', onClick: function onClick() {
          _this5.handleSubmit();
        }, 'data-jsx': 3768511810
      }, '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C')), _react2.default.createElement(_style2.default, {
        styleId: 3768511810,
        css: '#pageSubmitForm[data-jsx="3768511810"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBhbmVsXFxwYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3S21CLEFBQ0ssd0NBQ0ksZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHBhbmVsXFxwYWdlcy5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuLi8uLi91dGlscy9pbml0c2NyaXB0cy5qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzZXJpYWxpemVGb3JtIGZyb20gJy4uLy4uL3V0aWxzL3NlcmlhbGl6ZUZvcm0nXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vYXBwLmNvbmZpZydcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXInXHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG4vKiBcclxuMS4g0JTQvtC00LXQu9Cw0YLRjCDQvtCx0YDQsNCx0L7RgtC60YMg0L7RiNC40LHQvtC6INCyIEFkZFBhZ2VcclxuMi4g0KDQsNC30LHQuNGC0Ywg0L3QsCDQvdC10YHQutC+0LvRjNC60L4g0YTRg9C90LrRhtC40LkgQWRkUGFnZS5oYW5kbGVTdWJtaXRcclxuMy4g0KPQv9GA0L7RgdGC0LjRgtGMINC60L7QvNC/0L7QvdC10L3RgtGLIFxyXG4qL1xyXG5cclxuLyogXHJcbioqKiDQmtC+0LzQv9C+0L3QtdC90YIg0YHQv9C40YHQutCwINGB0YLRgNCw0L3QuNGGICjRg9C90LjQstC10YDRgdCw0LvRjNC90YvQuSlcclxuKi9cclxuIFxyXG5leHBvcnQgY2xhc3MgUGFnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbnRyaWVzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgYXhpb3MuZ2V0KGNvbmZpZy5BUEkgKyBgcGFnZS9lbnRyaWVzYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGVudHJpZXM6IHJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWdtZW50c1wiPlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj7QodGC0YDQsNC90LjRhtGLINGB0LDQudGC0LBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViIGhlYWRlclwiPlxyXG4gICAgICAgICAg0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQuCDQtNC+0LHQsNCy0LvQtdC90LjQtVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlZ21lbnRcIj5cclxuICAgICAgICAgIDxFbnRyaWVzIGRhdGE9e3RoaXMuc3RhdGUuZW50cmllc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlZ21lbnRcIj5cclxuICAgICAgICAgIDxBZGRQYWdlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFxyXG4qKiog0JrQvtC80L/QvtC90LXQvdGCINC00L7QsdCw0LLQu9C10L3QuNGPINGB0YLRgNCw0L3QuNGG0YsgKNGD0L3QuNCy0LXRgNGB0LDQu9GM0L3Ri9C5KVxyXG4qL1xyXG5jbGFzcyBBZGRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIFx0aXNBZGRGb3JtQWN0aXZlOiBmYWxzZSxcclxuICAgICAgZXJyb3JzOiBudWxsLFxyXG4gICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICBcdFVJKClcclxuICBcdCQoJy51aS5jaGVja2JveCcpLmNoZWNrYm94KCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCdXR0b24oKSB7XHJcbiAgXHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0aXNBZGRGb3JtQWN0aXZlOiAhdGhpcy5zdGF0ZS5pc0FkZEZvcm1BY3RpdmVcclxuICBcdH0pXHJcbiAgfVxyXG5cclxuICAvKiBcclxuICAqKiog0J/QsNGA0YHQuNC90LMg0YTQvtGA0LzRiyDQuCDQvtGC0L/RgNCw0LLQutCwINC00LDQvdC90YvRhSAo0LzQvtC20L3QviDRgNCw0LfQsdC40YLRjCDQvdCwIDIg0YTRg9C90LrRhtC40LgpXHJcbiAgKi9cclxuICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlU3VibWl0Rm9ybScpO1xyXG4gICAgdmFyIGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBheGlvcy5wb3N0KGNvbmZpZy5BUEkgKyBgcGFnZS9hZGRgLCBzZXJpYWxpemVGb3JtKGlucHV0cykpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBlcnJvcnM6IHJlc3BvbnNlLmRhdGEuZXJyb3JzXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9yXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qIFxyXG4gICoqKiDQktGL0LfRi9Cy0LDQtdGC0YHRjyDQsiDRgdC70YPRh9Cw0LUg0YPRgdC/0LXRiNC90L7QuSDQvtGC0L/RgNCw0LLQutC4INC00LDQvdC90YvRhSDQvdCwINGB0LXRgNCy0LXRgFxyXG4gICovXHJcbiAgaGFuZGxlU3VjY2VzcyhwYWdlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogcGFnZS5tZXNzYWdlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyogXHJcbiAgKioqINCg0LXQvdC00LXRgCDRhNC+0YDQvNGLINC00L7QsdCw0LLQu9C10L3QuNGPICjQtNC+0LTQtdC70LDRgtGMINC+0LHRgNCw0LHQvtGC0LrRgyDQvtGI0LjQsdC+0LopXHJcbiAgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgZXJyb3JzID0gW11cclxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9ycykge1xyXG4gICAgICB0aGlzLnN0YXRlLmVycm9ycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7IFxyXG4gICAgICAgIGVycm9ycy5wdXNoKDxkaXYga2V5PXtpfSA+e2l0ZW19PC9kaXY+KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5zdGF0ZS5tZXNzYWdlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17KCF0aGlzLnN0YXRlLmlzQWRkRm9ybUFjdGl2ZSkgPyBgbGFyZ2UgZmx1aWQgY2lyY3VsYXIgdWkgYnV0dG9uIHByaW1hcnlgIDogYGxhcmdlIGZsdWlkIGNpcmN1bGFyIHVpIGJ1dHRvbmB9IG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUJ1dHRvbigpfX0+XHJcbiAgICAgIFx0XHR7KCF0aGlzLnN0YXRlLmlzQWRkRm9ybUFjdGl2ZSkgP1xyXG4gICAgICBcdFx0XHRg0JTQvtCx0LDQstC40YLRjCDRgdGC0YDQsNC90LjRhtGDYCA6IGDQntGC0LzQtdC90LBgXHJcbiAgICAgIFx0XHR9XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PGRpdiBpZD1cInBhZ2VTdWJtaXRGb3JtXCIgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUuaXNBZGRGb3JtQWN0aXZlKSA/IGB1aSBmb3JtIGhpZGRlbmAgOiBgdWkgZm9ybWB9IHJlZj17KGZvcm0pID0+IHt0aGlzLmZvcm0gPSBmb3JtfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KCF0aGlzLnN0YXRlLmVycm9ycykgPyBgdWkgbWVzc2FnZSBoaWRkZW5gIDogYHVpIG1lc3NhZ2UgdmlzaWJsZSB3YXJuaW5nYH0+XHJcbiAgICAgICAgICAgIHtlcnJvcnN9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUubWVzc2FnZSkgPyBgdWkgbWVzc2FnZSBoaWRkZW5gIDogYHVpIG1lc3NhZ2UgdmlzaWJsZSBzdWNjZXNzYH0+XHJcbiAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgXHRcdCAgICAgIDxpbnB1dCBkYXRhLXR5cGU9XCJ0ZXh0XCIgZGF0YS1sYWJlbD1cItCh0LjRgdGC0LXQvNC90L7QuSDQuNC80Y8g0YHRgtGA0LDQvdC40YbRi1wiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNsdWdcIiBwbGFjZWhvbGRlcj1cItCh0LjRgdGC0LXQvNC90L7QuSDQuNC80Y8g0YHRgtGA0LDQvdC40YbRi1wiIC8+XHJcbiAgXHRcdCAgICA8L2Rpdj5cclxuICBcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICBcdFx0ICAgICAgPGlucHV0IGRhdGEtdHlwZT1cInRleHRcIiBkYXRhLWxhYmVsPVwi0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGFnZVRpdGxlXCIgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YtcIiAvPlxyXG4gIFx0XHQgICAgPC9kaXY+XHJcbiAgXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgXHRcdCAgICAgIDxpbnB1dCBkYXRhLXR5cGU9XCJ0ZXh0XCIgZGF0YS1sYWJlbD1cItCd0LXQsdC+0LvRjNGI0L7QtSDQvtC/0LjRgdCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YtcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYWdlRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cItCd0LXQsdC+0LvRjNGI0L7QtSDQvtC/0LjRgdCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YtcIiAvPlxyXG4gIFx0XHQgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLXR5cGU9XCJ0ZXh0XCIgZGF0YS1sYWJlbD1cIkNTUy3QutC70LDRgdGB0YtcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYWdlQ2xhc3NuYW1lc1wiIHBsYWNlaG9sZGVyPVwiQ1NTLdC60LvQsNGB0YHRi1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lIGZpZWxkXCI+XHJcbiAgXHRcdFx0ICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjaGVja2JveFwiPlxyXG4gIFx0XHRcdCAgICA8aW5wdXQgZGF0YS10eXBlPVwiY2hlY2tib3hcIiBkYXRhLWxhYmVsPVwi0JLQutC70Y7Rh9C40YLRjCDRiNCw0L/QutGDINGB0YLRgNCw0L3QuNGG0YtcIiBuYW1lPVwicGFnZVNob3dIZWFkZXJcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJoaWRkZW5cIiAvPlxyXG4gIFx0XHRcdCAgICA8bGFiZWw+0JLQutC70Y7Rh9C40YLRjCDRiNCw0L/QutGDINGB0YLRgNCw0L3QuNGG0Ys8L2xhYmVsPlxyXG4gIFx0XHRcdCAgIDwvZGl2PlxyXG4gIFx0XHRcdCAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZSBmaWVsZFwiPlxyXG4gICAgXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNoZWNrYm94XCI+XHJcbiAgICBcdFx0XHQgICAgPGlucHV0IGRhdGEtdHlwZT1cImNoZWNrYm94XCIgZGF0YS1sYWJlbD1cItCS0LrQu9GO0YfQuNGC0Ywg0LfQsNCz0L7Qu9C+0LLQvtC6INGB0YLRgNCw0L3QuNGG0YtcIiBuYW1lPVwicGFnZVNob3dUaXRsZVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XHJcbiAgICBcdFx0XHQgICAgPGxhYmVsPtCS0LrQu9GO0YfQuNGC0Ywg0LfQsNCz0L7Qu9C+0LLQvtC6INGB0YLRgNCw0L3QuNGG0Ys8L2xhYmVsPlxyXG4gICAgXHRcdFx0ICA8L2Rpdj5cclxuICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUgZmllbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBkYXRhLXR5cGU9XCJjaGVja2JveFwiIGRhdGEtbGFiZWw9XCLQktC60LvRjtGH0LjRgtGMINGB0LDQudC00LHQsNGAXCIgbmFtZT1cInBhZ2VTaG93U2lkZWJhclwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPtCS0LrQu9GO0YfQuNGC0Ywg0YHQsNC50LTQsdCw0YA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHVpZCB1aSBidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTdWJtaXQoKX19PtCe0YLQv9GA0LDQstC40YLRjDwvZGl2PlxyXG5cdFx0ICAgIDwvZGl2PlxyXG4gICAgICBcdDxzdHlsZSBqc3g+e2BcclxuICAgIFx0XHRcdCNwYWdlU3VibWl0Rm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHRgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBcclxuKioqINCh0L/QuNGB0L7QuiDQstGB0LXRhSDQuNGC0LXQvNC+0LJcclxuKi9cclxuY2xhc3MgRW50cmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVudHJpZXM6IFtdLFxyXG4gICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkZWQ6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgZW50cmllcyA9IFtdO1xyXG4gICAgdGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBlbnRyaWVzLnB1c2goPEVudHJ5IGRhdGE9e2l0ZW19IGtleT17aX0gLz4pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBtaWRkbGUgYWxpZ25lZCBzZWxlY3Rpb24gbGlzdCB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgeyghdGhpcy5zdGF0ZS5sb2FkZWQpID8gPExvYWRlciAvPiA6IGVudHJpZXMgfSBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIFxyXG4qKiog0J7QtNC40L3QvtGH0L3Ri9C5INC40YLQtdC8ICjQtNC70Y8g0YHQv9C40YHQutCwKVxyXG4qL1xyXG5jbGFzcyBFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIC8qIFxyXG4gICoqKiDQo9C00LDQu9C10L3QuNC1INC40YLQtdC80LBcclxuICAqL1xyXG4gIGhhbmRsZVJlbW92ZSgpIHtcclxuICAgIGF4aW9zLmdldChjb25maWcuQVBJICsgYHBhZ2UvZW50cmllcy9gICsgdGhpcy5wcm9wcy5kYXRhLl9pZCArIGAvcmVtb3ZlYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgZW50cnkgPSB0aGlzLnByb3BzLmRhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHJlZj17KGl0ZW0pID0+IHt0aGlzLml0ZW0gPSBpdGVtfX0gY2xhc3NOYW1lPVwiaXRlbVwiIGlkPXtgcGFnZS0ke2VudHJ5Ll9pZH1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWQgbWlkZGxlIGFsaWduZWRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcGFuZWwvcGFnZXMnLCBxdWVyeTogeyBzbHVnOiBlbnRyeS5zbHVnIH19fT48ZGl2IGNsYXNzTmFtZT1cInVpIGJ1dHRvbiB0aW55XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvZGl2PjwvTGluaz5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IG1pZGRsZSBhbGlnbmVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPntlbnRyeS5wYWdlVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2VudHJ5LnNsdWd9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyogXHJcbioqKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qKiog0KHRgtGA0LDQvdC40YbQsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXHJcbioqKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZW50cnk6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFVJKClcclxuICAgICQoJy51aS5jaGVja2JveCcpLmNoZWNrYm94KCk7XHJcbiAgfVxyXG5cclxuICAvKiBcclxuICAqKiog0J/QsNGA0YHQuNC8INGE0L7RgNC80YMg0Lgg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0L7QsdGK0LXQutGCXHJcbiAgKi9cclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIHZhciBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIGNvbnNvbGUubG9nKHNlcmlhbGl6ZUZvcm0oaW5wdXRzKSlcclxuICAgIGF4aW9zLnBvc3QoY29uZmlnLkFQSSArICdwYWdlL2VudHJpZXMvJyArIHRoaXMucHJvcHMuZGF0YS5wYWdlLnNsdWcgKyAnL3VwZGF0ZScsIHNlcmlhbGl6ZUZvcm0oaW5wdXRzKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZShpZCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IGNvbmZpcm0oJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINGB0YLRgNCw0L3QuNGG0YM/Jyk7XHJcbiAgICBpZihyZXN1bHQpIHtcclxuICAgICAgYXhpb3MuZ2V0KGNvbmZpZy5BUEkgKyBgcGFnZS9lbnRyaWVzL2AgKyBpZCArIGAvcmVtb3ZlYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gaGFuZGxlIHJlbW92ZWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciBlbnRyeSA9IHRoaXMucHJvcHMuZGF0YS5wYWdlOyAvLyDQlNCw0L3QvdGL0LUg0LjQtyDQs9C70L7QsdCw0LvRjNC90YvRhSBwcm9wc1xyXG4gICAgLy8g0KDQtdC90LTQtdGA0LjQvCDRhNC+0YDQvNGDINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGVpZ2h0IHdpZGUgY29sdW1uXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+e2VudHJ5LnBhZ2VUaXRsZX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWIgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIHtlbnRyeS5wYWdlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmb3JtXCIgcmVmPXsoZm9ybSkgPT4ge3RoaXMuZm9ybSA9IGZvcm19fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2VudHJ5LnNsdWd9IGRhdGEtdHlwZT1cInRleHRcIiBkYXRhLWxhYmVsPVwi0KHQuNGB0YLQtdC80L3QvtC5INC40LzRjyDRgdGC0YDQsNC90LjRhtGLXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2x1Z1wiIHBsYWNlaG9sZGVyPVwi0KHQuNGB0YLQtdC80L3QvtC5INC40LzRjyDRgdGC0YDQsNC90LjRhtGLXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtlbnRyeS5wYWdlVGl0bGV9IGRhdGEtdHlwZT1cInRleHRcIiBkYXRhLWxhYmVsPVwi0J3QsNC30LLQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGFnZVRpdGxlXCIgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1INGB0YLRgNCw0L3QuNGG0YtcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2VudHJ5LnBhZ2VEZXNjcmlwdGlvbn0gZGF0YS10eXBlPVwidGV4dFwiIGRhdGEtbGFiZWw9XCLQndC10LHQvtC70YzRiNC+0LUg0L7Qv9C40YHQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGFnZURlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCLQndC10LHQvtC70YzRiNC+0LUg0L7Qv9C40YHQsNC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtlbnRyeS5wYWdlQ2xhc3NuYW1lc30gZGF0YS10eXBlPVwidGV4dFwiIGRhdGEtbGFiZWw9XCJDU1Mt0LrQu9Cw0YHRgdGLXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGFnZUNsYXNzbmFtZXNcIiBwbGFjZWhvbGRlcj1cIkNTUy3QutC70LDRgdGB0YtcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUgZmllbGRcIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdENoZWNrZWQ9e2VudHJ5LnBhZ2VTaG93SGVhZGVyfSBkYXRhLXR5cGU9XCJjaGVja2JveFwiIGRhdGEtbGFiZWw9XCLQktC60LvRjtGH0LjRgtGMINGI0LDQv9C60YMg0YHRgtGA0LDQvdC40YbRi1wiIG5hbWU9XCJwYWdlU2hvd0hlYWRlclwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPtCS0LrQu9GO0YfQuNGC0Ywg0YjQsNC/0LrRgyDRgdGC0YDQsNC90LjRhtGLPC9sYWJlbD5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUgZmllbGRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdENoZWNrZWQ9e2VudHJ5LnBhZ2VTaG93VGl0bGV9IGRhdGEtdHlwZT1cImNoZWNrYm94XCIgZGF0YS1sYWJlbD1cItCS0LrQu9GO0YfQuNGC0Ywg0LfQsNCz0L7Qu9C+0LLQvtC6INGB0YLRgNCw0L3QuNGG0YtcIiBuYW1lPVwicGFnZVNob3dUaXRsZVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+0JLQutC70Y7Rh9C40YLRjCDQt9Cw0LPQvtC70L7QstC+0Log0YHRgtGA0LDQvdC40YbRizwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZSBmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0Q2hlY2tlZD17ZW50cnkucGFnZVNob3dTaWRlYmFyfSBkYXRhLXR5cGU9XCJjaGVja2JveFwiIGRhdGEtbGFiZWw9XCLQktC60LvRjtGH0LjRgtGMINGB0LDQudC00LHQsNGAXCIgbmFtZT1cInBhZ2VTaG93U2lkZWJhclwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+0JLQutC70Y7Rh9C40YLRjCDRgdCw0LnQtNCx0LDRgDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHVpIHByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTYXZlKCl9fT7QodC+0YXRgNCw0L3QuNGC0Yw8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHVpXCIgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlUmVtb3ZlKGVudHJ5Ll9pZCl9fT7Qo9C00LDQu9C40YLRjCDRgdGC0YDQsNC90LjRhtGDPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\panel\\pages.js */'
      }));
    }
  }]);

  return AddPage;
}(_react2.default.Component);

/* 
*** Список всех итемов
*/

var Entries = function (_React$Component3) {
  (0, _inherits3.default)(Entries, _React$Component3);

  function Entries(props) {
    (0, _classCallCheck3.default)(this, Entries);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (Entries.__proto__ || (0, _getPrototypeOf2.default)(Entries)).call(this, props));

    _this6.state = {
      entries: [],
      loaded: false
    };
    return _this6;
  }

  (0, _createClass3.default)(Entries, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var entries = [];
      this.props.data.map(function (item, i) {
        entries.push(_react2.default.createElement(Entry, { data: item, key: i }));
      });
      return _react2.default.createElement('div', { className: 'ui middle aligned selection list transition' }, !this.state.loaded ? _react2.default.createElement(_loader2.default, null) : entries);
    }
  }]);

  return Entries;
}(_react2.default.Component);

/* 
*** Одиночный итем (для списка)
*/

var Entry = function (_React$Component4) {
  (0, _inherits3.default)(Entry, _React$Component4);

  function Entry(props) {
    (0, _classCallCheck3.default)(this, Entry);

    return (0, _possibleConstructorReturn3.default)(this, (Entry.__proto__ || (0, _getPrototypeOf2.default)(Entry)).call(this, props));
  }

  /* 
  *** Удаление итема
  */

  (0, _createClass3.default)(Entry, [{
    key: 'handleRemove',
    value: function handleRemove() {
      var _this8 = this;

      _axios2.default.get(_app2.default.API + 'page/entries/' + this.props.data._id + '/remove').then(function (res) {
        _this8.item.classList.add('hidden');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      var entry = this.props.data;
      return _react2.default.createElement('div', { ref: function ref(item) {
          _this9.item = item;
        }, className: 'item', id: 'page-' + entry._id }, _react2.default.createElement('div', { className: 'right floated middle aligned' }, _react2.default.createElement(_link2.default, { href: { pathname: '/panel/pages', query: { slug: entry.slug } } }, _react2.default.createElement('div', { className: 'ui button tiny' }, _react2.default.createElement('i', { className: 'fa fa-cog' })))), _react2.default.createElement('div', { className: 'content middle aligned' }, _react2.default.createElement('div', { className: 'header' }, entry.pageTitle), _react2.default.createElement('div', { className: 'description' }, entry.slug)));
    }
  }]);

  return Entry;
}(_react2.default.Component);

/* 
*** -----------------------
*** Страница редактирования
*** -----------------------
*/

var PagesContainer = exports.PagesContainer = function (_React$Component5) {
  (0, _inherits3.default)(PagesContainer, _React$Component5);

  function PagesContainer(props) {
    (0, _classCallCheck3.default)(this, PagesContainer);

    var _this10 = (0, _possibleConstructorReturn3.default)(this, (PagesContainer.__proto__ || (0, _getPrototypeOf2.default)(PagesContainer)).call(this, props));

    _this10.state = {
      entry: null
    };
    return _this10;
  }

  (0, _createClass3.default)(PagesContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _initscripts.UI)();
      $('.ui.checkbox').checkbox();
    }

    /* 
    *** Парсим форму и отправляем объект
    */

  }, {
    key: 'handleSave',
    value: function handleSave() {
      var inputs = this.form.querySelectorAll('input');
      console.log((0, _serializeForm2.default)(inputs));
      _axios2.default.post(_app2.default.API + 'page/entries/' + this.props.data.page.slug + '/update', (0, _serializeForm2.default)(inputs)).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(id) {
      var result = confirm('Вы действительно хотите удалить страницу?');
      if (result) {
        _axios2.default.get(_app2.default.API + 'page/entries/' + id + '/remove').then(function (res) {
          // handle removed
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this11 = this;

      var entry = this.props.data.page; // Данные из глобальных props
      // Рендерим форму для редактирования
      return _react2.default.createElement('div', { className: 'ui grid' }, _react2.default.createElement('div', { className: 'ui eight wide column' }, _react2.default.createElement('h3', { className: 'ui header' }, entry.pageTitle, _react2.default.createElement('div', { className: 'sub header' }, entry.pageDescription)), _react2.default.createElement('div', { className: 'ui divider' }), _react2.default.createElement('div', { className: 'ui form', ref: function ref(form) {
          _this11.form = form;
        } }, _react2.default.createElement('div', { className: 'field' }, _react2.default.createElement('input', { defaultValue: entry.slug, 'data-type': 'text', 'data-label': '\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0439 \u0438\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', type: 'text', name: 'slug', placeholder: '\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0439 \u0438\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B' })), _react2.default.createElement('div', { className: 'field' }, _react2.default.createElement('input', { defaultValue: entry.pageTitle, 'data-type': 'text', 'data-label': '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', type: 'text', name: 'pageTitle', placeholder: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B' })), _react2.default.createElement('div', { className: 'field' }, _react2.default.createElement('input', { defaultValue: entry.pageDescription, 'data-type': 'text', 'data-label': '\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', type: 'text', name: 'pageDescription', placeholder: '\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B' })), _react2.default.createElement('div', { className: 'field' }, _react2.default.createElement('input', { defaultValue: entry.pageClassnames, 'data-type': 'text', 'data-label': 'CSS-\u043A\u043B\u0430\u0441\u0441\u044B', type: 'text', name: 'pageClassnames', placeholder: 'CSS-\u043A\u043B\u0430\u0441\u0441\u044B' })), _react2.default.createElement('div', { className: 'inline field' }, _react2.default.createElement('div', { className: 'ui checkbox' }, _react2.default.createElement('input', { defaultChecked: entry.pageShowHeader, 'data-type': 'checkbox', 'data-label': '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0448\u0430\u043F\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', name: 'pageShowHeader', type: 'checkbox', className: 'hidden' }), _react2.default.createElement('label', null, '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0448\u0430\u043F\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B'))), _react2.default.createElement('div', { className: 'inline field' }, _react2.default.createElement('div', { className: 'ui checkbox' }, _react2.default.createElement('input', { defaultChecked: entry.pageShowTitle, 'data-type': 'checkbox', 'data-label': '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', name: 'pageShowTitle', type: 'checkbox', className: 'hidden' }), _react2.default.createElement('label', null, '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B'))), _react2.default.createElement('div', { className: 'inline field' }, _react2.default.createElement('div', { className: 'ui checkbox' }, _react2.default.createElement('input', { defaultChecked: entry.pageShowSidebar, 'data-type': 'checkbox', 'data-label': '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0430\u0439\u0434\u0431\u0430\u0440', name: 'pageShowSidebar', type: 'checkbox', className: 'hidden' }), _react2.default.createElement('label', null, '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0430\u0439\u0434\u0431\u0430\u0440')))), _react2.default.createElement('br', null), _react2.default.createElement('div', { className: 'button ui primary', onClick: function onClick() {
          _this11.handleSave();
        } }, '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'), _react2.default.createElement('div', { className: 'button ui', onClick: function onClick() {
          _this11.handleRemove(entry._id);
        } }, '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443')));
    }
  }]);

  return PagesContainer;
}(_react2.default.Component);