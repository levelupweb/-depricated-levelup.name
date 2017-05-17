'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersContainer = exports.Users = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactAvatar = require('react-avatar');

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _user2 = require('../../actions/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
1. Сделать смену пароля
*/

var Users = exports.Users = function (_React$Component) {
  (0, _inherits3.default)(Users, _React$Component);

  function Users(props) {
    (0, _classCallCheck3.default)(this, Users);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Users.__proto__ || (0, _getPrototypeOf2.default)(Users)).call(this, props));

    _this2.state = {
      users: []
    };
    return _this2;
  }

  (0, _createClass3.default)(Users, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      _axios2.default.get(_app2.default.API + 'user/entries').then(function (res) {
        _this3.setState({
          users: res.data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'ui segments' }, _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement('h3', { className: 'ui header' }, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438', _react2.default.createElement('div', { className: 'sub header' }, '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435'))), _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement(Entries, { data: this.state.users })), _react2.default.createElement('div', { className: 'ui segment' }, _react2.default.createElement(AddUser, null)));
    }
  }]);

  return Users;
}(_react2.default.Component);

var AddUser = function (_React$Component2) {
  (0, _inherits3.default)(AddUser, _React$Component2);

  function AddUser(props) {
    (0, _classCallCheck3.default)(this, AddUser);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (AddUser.__proto__ || (0, _getPrototypeOf2.default)(AddUser)).call(this, props));

    _this4.state = {
      isAddFormActive: false,
      errors: null,
      message: null
    };
    return _this4;
  }

  (0, _createClass3.default)(AddUser, [{
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
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var inputs = this.form.querySelectorAll('input');
      var _this = this;
      _axios2.default.post(_app2.default.API + 'user/add', (0, _serializeForm2.default)(inputs)).then(function (response) {
        if (response.data.success) {
          _this.handleSuccess(response.data);
        } else {
          _this.setState({
            errors: response.data.errors
          });
        }
      }).catch(function (error) {
        // handle Error
      });
    }
  }, {
    key: 'handleSuccess',
    value: function handleSuccess(page) {
      this.setState({
        message: page.message
      });
    }
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
      }, !this.state.isAddFormActive ? '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F' : '\u041E\u0442\u043C\u0435\u043D\u0430'), _react2.default.createElement('div', { className: !this.state.isAddFormActive ? 'ui form hidden' : 'ui form', ref: function ref(form) {
          _this5.form = form;
        }, 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: !this.state.errors ? 'ui message hidden' : 'ui message visible warning', 'data-jsx': 3768511810
      }, errors), _react2.default.createElement('div', { className: !this.state.message ? 'ui message hidden' : 'ui message visible success', 'data-jsx': 3768511810
      }, message), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { type: 'text', name: 'userName', placeholder: '\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { type: 'text', name: 'slug', placeholder: '\u041B\u043E\u0433\u0438\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { type: 'text', name: 'userEmail', placeholder: 'E-mail \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: 'ui selection dropdown', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { type: 'hidden', name: 'userGender', 'data-jsx': 3768511810
      }), _react2.default.createElement('i', { className: 'dropdown icon', 'data-jsx': 3768511810
      }), _react2.default.createElement('div', { className: 'default text', 'data-jsx': 3768511810
      }, '\u041F\u043E\u043B'), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: 'item', 'data-value': 'male', 'data-jsx': 3768511810
      }, '\u041C\u0443\u0436\u0441\u043A\u043E\u0439'), _react2.default.createElement('div', { className: 'item', 'data-value': 'female', 'data-jsx': 3768511810
      }, '\u0416\u0435\u043D\u0441\u043A\u0438\u0439')))), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: 'ui selection dropdown', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { type: 'hidden', name: 'userRole', 'data-jsx': 3768511810
      }), _react2.default.createElement('i', { className: 'dropdown icon', 'data-jsx': 3768511810
      }), _react2.default.createElement('div', { className: 'default text', 'data-jsx': 3768511810
      }, '\u0420\u043E\u043B\u044C'), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 3768511810
      }, _react2.default.createElement('div', { className: 'item', 'data-value': 'subscriber', 'data-jsx': 3768511810
      }, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C'), _react2.default.createElement('div', { className: 'item', 'data-value': 'advertiser', 'data-jsx': 3768511810
      }, '\u0420\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u044C'), _react2.default.createElement('div', { className: 'item', 'data-value': 'admin', 'data-jsx': 3768511810
      }, '\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440'), _react2.default.createElement('div', { className: 'item', 'data-value': 'stuff', 'data-jsx': 3768511810
      }, '\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440')))), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { type: 'password', name: 'userPassword', placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 3768511810
      }, _react2.default.createElement('input', { type: 'password', name: 'userPasswordSecond', placeholder: '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C', 'data-jsx': 3768511810
      })), _react2.default.createElement('div', { className: 'fluid ui button', onClick: function onClick() {
          _this5.handleSubmit();
        }, 'data-jsx': 3768511810
      }, '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C')), _react2.default.createElement(_style2.default, {
        styleId: 3768511810,
        css: '#pageSubmitForm[data-jsx="3768511810"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBhbmVsXFx1c2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Sm1CLEFBQ0ssd0NBQ0ksZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHNcXHBhbmVsXFx1c2Vycy5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuLi8uLi91dGlscy9pbml0c2NyaXB0cy5qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzZXJpYWxpemVGb3JtIGZyb20gJy4uLy4uL3V0aWxzL3NlcmlhbGl6ZUZvcm0nXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vYXBwLmNvbmZpZydcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXInXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAncmVhY3QtYXZhdGFyJ1xyXG5pbXBvcnQgeyB1cGRhdGVVc2VyQnlJZCwgcmVtb3ZlVXNlckJ5SWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXInXHJcblxyXG4vKiBcclxuMS4g0KHQtNC10LvQsNGC0Ywg0YHQvNC10L3RgyDQv9Cw0YDQvtC70Y9cclxuKi9cclxuIFxyXG5leHBvcnQgY2xhc3MgVXNlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VyczogW11cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGF4aW9zLmdldChjb25maWcuQVBJICsgJ3VzZXIvZW50cmllcycpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VyczogcmVzLmRhdGFcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlZ21lbnRzXCI+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJ1aSBzZWdtZW50XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWIgaGVhZGVyXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQuCDQtNC+0LHQsNCy0LvQtdC90LjQtTwvZGl2PlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWdtZW50XCI+XHJcbiAgICAgICAgICA8RW50cmllcyBkYXRhPXt0aGlzLnN0YXRlLnVzZXJzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudFwiPlxyXG4gICAgICAgICAgPEFkZFVzZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQWRkVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdGlzQWRkRm9ybUFjdGl2ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yczogbnVsbCxcclxuICAgICAgbWVzc2FnZTogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgXHRVSSgpXHJcbiAgXHQkKCcudWkuY2hlY2tib3gnKS5jaGVja2JveCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnV0dG9uKCkge1xyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgXHRcdGlzQWRkRm9ybUFjdGl2ZTogIXRoaXMuc3RhdGUuaXNBZGRGb3JtQWN0aXZlXHJcbiAgXHR9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgdmFyIGlucHV0cyA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGF4aW9zLnBvc3QoY29uZmlnLkFQSSArICd1c2VyL2FkZCcsIHNlcmlhbGl6ZUZvcm0oaW5wdXRzKSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBfdGhpcy5oYW5kbGVTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGVycm9yczogcmVzcG9uc2UuZGF0YS5lcnJvcnNcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBoYW5kbGUgRXJyb3JcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VjY2VzcyhwYWdlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogcGFnZS5tZXNzYWdlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGVycm9ycyA9IFtdXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcnMpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5lcnJvcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4geyBcclxuICAgICAgICBlcnJvcnMucHVzaCg8ZGl2IGtleT17aX0gPntpdGVtfTwvZGl2PilcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9eyghdGhpcy5zdGF0ZS5pc0FkZEZvcm1BY3RpdmUpID8gYGxhcmdlIGZsdWlkIGNpcmN1bGFyIHVpIGJ1dHRvbiBwcmltYXJ5YCA6IGBsYXJnZSBmbHVpZCBjaXJjdWxhciB1aSBidXR0b25gfSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVCdXR0b24oKX19PlxyXG4gICAgICBcdFx0eyghdGhpcy5zdGF0ZS5pc0FkZEZvcm1BY3RpdmUpID8gYNCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPYCA6IGDQntGC0LzQtdC90LBgfVxyXG4gICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUuaXNBZGRGb3JtQWN0aXZlKSA/IGB1aSBmb3JtIGhpZGRlbmAgOiBgdWkgZm9ybWB9IHJlZj17KGZvcm0pID0+IHt0aGlzLmZvcm0gPSBmb3JtfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KCF0aGlzLnN0YXRlLmVycm9ycykgPyBgdWkgbWVzc2FnZSBoaWRkZW5gIDogYHVpIG1lc3NhZ2UgdmlzaWJsZSB3YXJuaW5nYH0+XHJcbiAgICAgICAgICAgIHtlcnJvcnN9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUubWVzc2FnZSkgPyBgdWkgbWVzc2FnZSBoaWRkZW5gIDogYHVpIG1lc3NhZ2UgdmlzaWJsZSBzdWNjZXNzYH0+XHJcbiAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgXHRcdCAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyTmFtZVwiIHBsYWNlaG9sZGVyPVwi0J/QvtC70L3QvtC1INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxyXG4gIFx0XHQgICAgPC9kaXY+XHJcbiAgXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgXHRcdCAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzbHVnXCIgcGxhY2Vob2xkZXI9XCLQm9C+0LPQuNC9INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIC8+XHJcbiAgXHRcdCAgICA8L2Rpdj5cclxuICBcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICBcdFx0ICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIC8+XHJcbiAgXHRcdCAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlbGVjdGlvbiBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VyR2VuZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZhdWx0IHRleHRcIj7Qn9C+0Ls8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwibWFsZVwiPtCc0YPQttGB0LrQvtC5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwiZmVtYWxlXCI+0JbQtdC90YHQutC40Lk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlbGVjdGlvbiBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VyUm9sZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdCB0ZXh0XCI+0KDQvtC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwic3Vic2NyaWJlclwiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cImFkdmVydGlzZXJcIj7QoNC10LrQu9Cw0LzQvtC00LDRgtC10LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cImFkbWluXCI+0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJzdHVmZlwiPtCg0LXQtNCw0LrRgtC+0YA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyUGFzc3dvcmRTZWNvbmRcIiBwbGFjZWhvbGRlcj1cItCf0L7QstGC0L7RgNC40YLQtSDQv9Cw0YDQvtC70YxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdWlkIHVpIGJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZVN1Ym1pdCgpfX0+0J7RgtC/0YDQsNCy0LjRgtGMPC9kaXY+XHJcblx0XHQgICAgPC9kaXY+XHJcbiAgICAgIFx0PHN0eWxlIGpzeD57YFxyXG4gICAgXHRcdFx0I3BhZ2VTdWJtaXRGb3JtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICBcdGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRW50cmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVudHJpZXM6IFtdLFxyXG4gICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkZWQ6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgZW50cmllcyA9IFtdO1xyXG4gICAgdGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBlbnRyaWVzLnB1c2goPEVudHJ5IGRhdGE9e2l0ZW19IGtleT17aX0gLz4pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBtaWRkbGUgYWxpZ25lZCBzZWxlY3Rpb24gbGlzdCB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgeyghdGhpcy5zdGF0ZS5sb2FkZWQpID8gPExvYWRlciAvPiA6IGVudHJpZXMgfSBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgIHN1cGVyKHByb3BzKTtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGVudHJ5ID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiByZWY9eyhpdGVtKSA9PiB7dGhpcy5pdGVtID0gaXRlbX19IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWQgbWlkZGxlIGFsaWduZWRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcGFuZWwvdXNlcnMnLCBxdWVyeTogeyBzbHVnOiBlbnRyeS5zbHVnIH19fT48ZGl2IGNsYXNzTmFtZT1cInVpIGJ1dHRvbiB0aW55XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvZGl2PjwvTGluaz5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IG1pZGRsZSBhbGlnbmVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPntlbnRyeS51c2VyTmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZW50cnkudXNlckVtYWlsfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgfVxyXG59XHJcblxyXG5cclxuLyogXHJcbioqKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qKiog0KHRgtGA0LDQvdC40YbQsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXHJcbioqKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIHNsdWc6IG51bGwsIFxyXG4gICAgICAgIHVzZXJEZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgICB1c2VyTmFtZTogbnVsbCxcclxuICAgICAgICB1c2VyRW1haWw6IG51bGwsXHJcbiAgICAgICAgdXNlckdlbmRlcjogbnVsbCxcclxuICAgICAgICB1c2VyUm9sZTogbnVsbCxcclxuICAgICAgICB1c2VySW1hZ2U6IG51bGwsXHJcbiAgICAgICAgdXNlclBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgIHVzZXJDb21wYW55OiBudWxsLFxyXG4gICAgICAgIHVzZXJEZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgICB1c2VyQmlvOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxyXG4gICAgICAgIC4uLnRoaXMucHJvcHMuZGF0YS51c2VyXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFVJKClcclxuICAgICQoJy51aS5jaGVja2JveCcpLmNoZWNrYm94KCk7XHJcbiAgICB0aGlzLmJpbmRDaGFuZ2VFdmVudCgpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTYXZlKCkge1xyXG4gICAgdXBkYXRlVXNlckJ5SWQodGhpcy5zdGF0ZS51c2VyLl9pZCwgdGhpcy5zdGF0ZS51c2VyKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUoaWQpIHtcclxuICAgIGxldCByZXN1bHQgPSBjb25maXJtKCfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8/Jyk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHJlbW92ZVVzZXJCeUlkKGlkKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZENoYW5nZUV2ZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtIGlucHV0LCAuZm9ybSB0ZXh0YXJlYScpO1xyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb3BlcnR5ID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnNlbGYuc3RhdGUsXHJcbiAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIC4uLnNlbGYuc3RhdGUudXNlcixcclxuICAgICAgICAgICAgW3Byb3BlcnR5XTogdmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDQn9C10YDQtdC/0LjRgdCw0YLRjCDQsiBhY3Rpb25zINC/0YDQuCDQv9C+0LzQvtGJ0LggYXhpb3MhISFcclxuICBhc3luYyBoYW5kbGVVcGxvYWQoZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciB1cmwgPSBjb25maWcuQVBJICsgJ3VzZXIvdXBsb2FkJztcclxuICAgIGF3YWl0IGZvcm1EYXRhLmFwcGVuZCgndXNlckltYWdlJywgaW1hZ2UpO1xyXG4gICAgYXdhaXQgZm9ybURhdGEuYXBwZW5kKCdzbHVnJywgdGhpcy5zdGF0ZS51c2VyLnNsdWcpXHJcbiAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgdmFyIHBhdGggPSBjb25maWcuc3RvcmFnZSArICd1c2Vycy8nICsgc2VsZi5zdGF0ZS51c2VyLnNsdWcgKyAnLycgKyByZXN1bHQuZmlsZW5hbWVcclxuICAgICAgICBhd2FpdCBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnNlbGYuc3RhdGUsXHJcbiAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIC4uLnNlbGYuc3RhdGUudXNlcixcclxuICAgICAgICAgICAgdXNlckltYWdlOiBwYXRoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciBlbnRyeSA9IHRoaXMuc3RhdGUudXNlcjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2VudHJ5LnVzZXJJbWFnZX0gbmFtZT17ZW50cnkuc2x1Z30gY29sb3I9e2AjNDY5NzhjYH0gc2l6ZT17NDB9IGNsYXNzTmFtZT17YHVpIGltYWdlYH0gcm91bmQ9e3RydWV9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAge2VudHJ5LnNsdWd9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViIGhlYWRlclwiPlxyXG4gICAgICAgICAgICB7ZW50cnkudXNlckVtYWlsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZvcm1cIiByZWY9eyhmb3JtKSA9PiB7dGhpcy5mb3JtID0gZm9ybX19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNpeCB3aWRlIGNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtlbnRyeS51c2VyTmFtZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidXNlck5hbWVcIiBwbGFjZWhvbGRlcj1cItCf0L7Qu9C90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQgZGVmYXVsdFZhbHVlPXtlbnRyeS5zbHVnfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJzbHVnXCIgcGxhY2Vob2xkZXI9XCLQm9C+0LPQuNC9INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlckVtYWlsfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyRW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWxlY3Rpb24gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlckdlbmRlcn0gdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VyR2VuZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZhdWx0IHRleHRcIj7Qn9C+0Ls8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwibWFsZVwiPtCc0YPQttGB0LrQvtC5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwiZmVtYWxlXCI+0JbQtdC90YHQutC40Lk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlbGVjdGlvbiBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtlbnRyeS51c2VyUm9sZX0gdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VyUm9sZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdCB0ZXh0XCI+0KDQvtC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwic3Vic2NyaWJlclwiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cImFkdmVydGlzZXJcIj7QoNC10LrQu9Cw0LzQvtC00LDRgtC10LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cImFkbWluXCI+0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJzdHVmZlwiPtCg0LXQtNCw0LrRgtC+0YA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC90L7QstGL0Lkg0L/QsNGA0L7Qu9GMXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInVzZXJQYXNzd29yZFNlY29uZFwiIHBsYWNlaG9sZGVyPVwi0J3QvtCy0YvQuSDQv9Cw0YDQvtC70Ywg0LXRidGRINGA0LDQt1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNpeCB3aWRlIGNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2VudHJ5LnVzZXJDb21wYW55fSBuYW1lPVwidXNlckNvbXBhbnlcIiBwbGFjZWhvbGRlcj1cItCa0L7QvNC/0LDQvdC40Y8sINC80LXRgdGC0L4g0YDQsNCx0L7RgtGLXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2VudHJ5LnVzZXJEZXNjcmlwdGlvbn0gbmFtZT1cInVzZXJEZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwi0J/RgNC+0YTQtdGB0YHQuNGPLCDQtNC+0LvQttC90L7RgdGC0YxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidXNlckJpb1wiIHBsYWNlaG9sZGVyPVwi0JHQuNC+0LPRgNCw0YTQuNGPLCDQv9Cw0YDRgyDRgdC70L7QsiDQviDRgdC10LHQtVwiIHJvd3M9XCIyXCI+e2VudHJ5LnVzZXJCaW99PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZm91ciB3aWRlIGNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RBdmF0YXJcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5hdmF0YXIuY2xpY2soKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgcm91bmQ9e3RydWV9IHNyYz17ZW50cnkudXNlckltYWdlfSBuYW1lPXtlbnRyeS5zbHVnfSBjb2xvcj17YCM0Njk3OGNgfSBzaXplPXsxMDB9IGNsYXNzTmFtZT17YHVpIGltYWdlYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdEF2YXRhckljb25cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50IHNtYWxsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZVVwbG9hZChlKX0gdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJoaWRkZW4gdWlcIiByZWY9eyhhdmF0YXIpID0+IHt0aGlzLmF2YXRhciA9IGF2YXRhcn19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHVpIHByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTYXZlKCl9fT7QodC+0YXRgNCw0L3QuNGC0Yw8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHVpXCIgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlUmVtb3ZlKGVudHJ5Ll9pZCl9fT7Qo9C00LDQu9C40YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y88L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuc2VsZWN0QXZhdGFyIHtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlbGVjdEF2YXRhcjpob3ZlciAuc2VsZWN0QXZhdGFySWNvbiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VsZWN0QXZhdGFySWNvbiB7XHJcbiAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgdG9wOjBweDtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuMnMgYWxsIGVhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlbGVjdEF2YXRhckljb24gaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=components\\panel\\users.js */'
      }));
    }
  }]);

  return AddUser;
}(_react2.default.Component);

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

var Entry = function (_React$Component4) {
  (0, _inherits3.default)(Entry, _React$Component4);

  function Entry(props) {
    (0, _classCallCheck3.default)(this, Entry);

    return (0, _possibleConstructorReturn3.default)(this, (Entry.__proto__ || (0, _getPrototypeOf2.default)(Entry)).call(this, props));
  }

  (0, _createClass3.default)(Entry, [{
    key: 'render',
    value: function render() {
      var _this8 = this;

      var entry = this.props.data;
      return _react2.default.createElement('div', { ref: function ref(item) {
          _this8.item = item;
        }, className: 'item' }, _react2.default.createElement('div', { className: 'right floated middle aligned' }, _react2.default.createElement(_link2.default, { href: { pathname: '/panel/users', query: { slug: entry.slug } } }, _react2.default.createElement('div', { className: 'ui button tiny' }, _react2.default.createElement('i', { className: 'fa fa-cog' })))), _react2.default.createElement('div', { className: 'content middle aligned' }, _react2.default.createElement('div', { className: 'header' }, entry.userName), _react2.default.createElement('div', { className: 'description' }, entry.userEmail)));
    }
  }]);

  return Entry;
}(_react2.default.Component);

/* 
*** -----------------------
*** Страница редактирования
*** -----------------------
*/

var UsersContainer = exports.UsersContainer = function (_React$Component5) {
  (0, _inherits3.default)(UsersContainer, _React$Component5);

  function UsersContainer(props) {
    var _user;

    (0, _classCallCheck3.default)(this, UsersContainer);

    var _this9 = (0, _possibleConstructorReturn3.default)(this, (UsersContainer.__proto__ || (0, _getPrototypeOf2.default)(UsersContainer)).call(this, props));

    _this9.state = {
      user: (_user = {
        slug: null,
        userDescription: null,
        userName: null,
        userEmail: null,
        userGender: null,
        userRole: null,
        userImage: null,
        userPassword: null,
        userCompany: null
      }, (0, _defineProperty3.default)(_user, 'userDescription', null), (0, _defineProperty3.default)(_user, 'userBio', null), _user)
    };
    return _this9;
  }

  (0, _createClass3.default)(UsersContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState((0, _extends3.default)({}, this.state, {
        user: (0, _extends3.default)({}, this.state.user, this.props.data.user)
      }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _initscripts.UI)();
      $('.ui.checkbox').checkbox();
      this.bindChangeEvent();
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      (0, _user2.updateUserById)(this.state.user._id, this.state.user).then(function (res) {
        // handle success
      });
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(id) {
      var result = confirm('Вы действительно хотите удалить пользователя?');
      if (result) {
        (0, _user2.removeUserById)(id).then(function (res) {
          // handle success
        });
      }
    }
  }, {
    key: 'bindChangeEvent',
    value: function bindChangeEvent() {
      var self = this;
      var inputs = document.querySelectorAll('.form input, .form textarea');
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

    // Переписать в actions при помощи axios!!!

  }, {
    key: 'handleUpload',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var _this10 = this;

        var self, image, formData, url;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                image = e.target.files[0];
                formData = new FormData();
                url = _app2.default.API + 'user/upload';
                _context2.next = 6;
                return formData.append('userImage', image);

              case 6:
                _context2.next = 8;
                return formData.append('slug', this.state.user.slug);

              case 8:
                if (!image) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 11;
                return fetch(url, {
                  method: 'POST',
                  body: formData
                }).then(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(res) {
                    var result, path;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return res.json();

                          case 2:
                            result = _context.sent;
                            path = _app2.default.storage + 'users/' + self.state.user.slug + '/' + result.filename;
                            _context.next = 6;
                            return self.setState((0, _extends3.default)({}, self.state, {
                              user: (0, _extends3.default)({}, self.state.user, {
                                userImage: path
                              })
                            }));

                          case 6:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this10);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleUpload(_x) {
        return _ref.apply(this, arguments);
      }

      return handleUpload;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this11 = this;

      var entry = this.state.user;
      return _react2.default.createElement('div', {
        'data-jsx': 4082398492
      }, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 4082398492
      }, _react2.default.createElement(_reactAvatar2.default, { src: entry.userImage, name: entry.slug, color: '#46978c', size: 40, className: 'ui image', round: true }), _react2.default.createElement('div', { className: 'content', 'data-jsx': 4082398492
      }, entry.slug, _react2.default.createElement('div', { className: 'sub header', 'data-jsx': 4082398492
      }, entry.userEmail))), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 4082398492
      }), _react2.default.createElement('div', { className: 'ui form', ref: function ref(form) {
          _this11.form = form;
        }, 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'ui grid', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'ui six wide column', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { defaultValue: entry.userName, type: 'text', name: 'userName', placeholder: '\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 4082398492
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { disabled: true, defaultValue: entry.slug, type: 'text', name: 'slug', placeholder: '\u041B\u043E\u0433\u0438\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 4082398492
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { defaultValue: entry.userEmail, type: 'text', name: 'userEmail', placeholder: 'E-mail \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 4082398492
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'ui selection dropdown', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { defaultValue: entry.userGender, type: 'hidden', name: 'userGender', 'data-jsx': 4082398492
      }), _react2.default.createElement('i', { className: 'dropdown icon', 'data-jsx': 4082398492
      }), _react2.default.createElement('div', { className: 'default text', 'data-jsx': 4082398492
      }, '\u041F\u043E\u043B'), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'item', 'data-value': 'male', 'data-jsx': 4082398492
      }, '\u041C\u0443\u0436\u0441\u043A\u043E\u0439'), _react2.default.createElement('div', { className: 'item', 'data-value': 'female', 'data-jsx': 4082398492
      }, '\u0416\u0435\u043D\u0441\u043A\u0438\u0439')))), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'ui selection dropdown', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { defaultValue: entry.userRole, type: 'hidden', name: 'userRole', 'data-jsx': 4082398492
      }), _react2.default.createElement('i', { className: 'dropdown icon', 'data-jsx': 4082398492
      }), _react2.default.createElement('div', { className: 'default text', 'data-jsx': 4082398492
      }, '\u0420\u043E\u043B\u044C'), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'item', 'data-value': 'subscriber', 'data-jsx': 4082398492
      }, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C'), _react2.default.createElement('div', { className: 'item', 'data-value': 'advertiser', 'data-jsx': 4082398492
      }, '\u0420\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u044C'), _react2.default.createElement('div', { className: 'item', 'data-value': 'admin', 'data-jsx': 4082398492
      }, '\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440'), _react2.default.createElement('div', { className: 'item', 'data-value': 'stuff', 'data-jsx': 4082398492
      }, '\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440')))), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { type: 'password', name: 'userPassword', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C', 'data-jsx': 4082398492
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { type: 'password', name: 'userPasswordSecond', placeholder: '\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0451 \u0440\u0430\u0437', 'data-jsx': 4082398492
      }))), _react2.default.createElement('div', { className: 'ui six wide column', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { type: 'text', defaultValue: entry.userCompany, name: 'userCompany', placeholder: '\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B', 'data-jsx': 4082398492
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('input', { type: 'text', defaultValue: entry.userDescription, name: 'userDescription', placeholder: '\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F, \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', 'data-jsx': 4082398492
      })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 4082398492
      }, _react2.default.createElement('textarea', { name: 'userBio', placeholder: '\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F, \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432 \u043E \u0441\u0435\u0431\u0435', rows: '2', 'data-jsx': 4082398492
      }, entry.userBio))), _react2.default.createElement('div', { className: 'ui four wide column', 'data-jsx': 4082398492
      }, _react2.default.createElement('div', {
        'data-jsx': 4082398492
      }, _react2.default.createElement('div', { className: 'selectAvatar', onClick: function onClick() {
          _this11.avatar.click();
        }, 'data-jsx': 4082398492
      }, _react2.default.createElement(_reactAvatar2.default, { round: true, src: entry.userImage, name: entry.slug, color: '#46978c', size: 100, className: 'ui image' }), _react2.default.createElement('div', { className: 'selectAvatarIcon', 'data-jsx': 4082398492
      }, _react2.default.createElement('i', { className: 'fa fa-cog', 'aria-hidden': 'true', 'data-jsx': 4082398492
      }))), _react2.default.createElement('span', { className: 'content small', 'data-jsx': 4082398492
      }), _react2.default.createElement('input', { onChange: function onChange(e) {
          return _this11.handleUpload(e);
        }, type: 'file', className: 'hidden ui', ref: function ref(avatar) {
          _this11.avatar = avatar;
        }, 'data-jsx': 4082398492
      })))), _react2.default.createElement('br', {
        'data-jsx': 4082398492
      }), _react2.default.createElement('div', { className: 'button ui primary', onClick: function onClick() {
          _this11.handleSave();
        }, 'data-jsx': 4082398492
      }, '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'), _react2.default.createElement('div', { className: 'button ui', onClick: function onClick() {
          _this11.handleRemove(entry._id);
        }, 'data-jsx': 4082398492
      }, '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F')), _react2.default.createElement(_style2.default, {
        styleId: 4082398492,
        css: '.selectAvatar[data-jsx="4082398492"] {cursor:pointer;position:relative;width:100px;border-radius:100%;overflow:hidden;}.selectAvatar[data-jsx="4082398492"]:hover .selectAvatarIcon[data-jsx="4082398492"] {opacity:1;}.selectAvatarIcon[data-jsx="4082398492"] {position:absolute;left:0px;top:0px;background:rgba(0,0,0,0.5);color:#fff;width:100%;height:100%;display:-webkit-flex; display:flex;justify-content:center;align-items:center;opacity:0;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;}.selectAvatarIcon[data-jsx="4082398492"] i[data-jsx="4082398492"] {font-size:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBhbmVsXFx1c2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpWm9CLEFBQ0ssc0NBQ0UsZUFDRyxrQkFDTixZQUNPLG1CQUNILGdCQUNqQixDQUVzQyxxRkFDM0IsVUFDWCxDQUVrQiwwQ0FDRSxrQkFDVCxTQUNELFFBQ21CLDJCQUNoQixXQUNBLFdBQ0MsWUFDQyxtQ0FDVSx1QkFDSixtQkFDVCxVQUNlLHFIQUMzQixDQUVvQixtRUFDSixlQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxwYW5lbFxcdXNlcnMuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5pdHNjcmlwdHMuanMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc2VyaWFsaXplRm9ybSBmcm9tICcuLi8uLi91dGlscy9zZXJpYWxpemVGb3JtJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2FwcC5jb25maWcnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vbG9hZGVyJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcclxuaW1wb3J0IHsgdXBkYXRlVXNlckJ5SWQsIHJlbW92ZVVzZXJCeUlkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJ1xyXG5cclxuLyogXHJcbjEuINCh0LTQtdC70LDRgtGMINGB0LzQtdC90YMg0L/QsNGA0L7Qu9GPXHJcbiovXHJcbiBcclxuZXhwb3J0IGNsYXNzIFVzZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBheGlvcy5nZXQoY29uZmlnLkFQSSArICd1c2VyL2VudHJpZXMnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcnM6IHJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWdtZW50c1wiPlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70LhcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViIGhlYWRlclwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0Lgg0LTQvtCx0LDQstC70LXQvdC40LU8L2Rpdj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudFwiPlxyXG4gICAgICAgICAgPEVudHJpZXMgZGF0YT17dGhpcy5zdGF0ZS51c2Vyc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlZ21lbnRcIj5cclxuICAgICAgICAgIDxBZGRVc2VyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEFkZFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgXHRpc0FkZEZvcm1BY3RpdmU6IGZhbHNlLFxyXG4gICAgICBlcnJvcnM6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIFx0VUkoKVxyXG4gIFx0JCgnLnVpLmNoZWNrYm94JykuY2hlY2tib3goKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1dHRvbigpIHtcclxuICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRpc0FkZEZvcm1BY3RpdmU6ICF0aGlzLnN0YXRlLmlzQWRkRm9ybUFjdGl2ZVxyXG4gIFx0fSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIHZhciBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBheGlvcy5wb3N0KGNvbmZpZy5BUEkgKyAndXNlci9hZGQnLCBzZXJpYWxpemVGb3JtKGlucHV0cykpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBlcnJvcnM6IHJlc3BvbnNlLmRhdGEuZXJyb3JzXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gaGFuZGxlIEVycm9yXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Y2Nlc3MocGFnZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6IHBhZ2UubWVzc2FnZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciBlcnJvcnMgPSBbXVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JzKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZXJyb3JzLmZvckVhY2goKGl0ZW0sIGkpID0+IHsgXHJcbiAgICAgICAgZXJyb3JzLnB1c2goPGRpdiBrZXk9e2l9ID57aXRlbX08L2Rpdj4pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5zdGF0ZS5tZXNzYWdlO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUuaXNBZGRGb3JtQWN0aXZlKSA/IGBsYXJnZSBmbHVpZCBjaXJjdWxhciB1aSBidXR0b24gcHJpbWFyeWAgOiBgbGFyZ2UgZmx1aWQgY2lyY3VsYXIgdWkgYnV0dG9uYH0gb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlQnV0dG9uKCl9fT5cclxuICAgICAgXHRcdHsoIXRoaXMuc3RhdGUuaXNBZGRGb3JtQWN0aXZlKSA/IGDQlNC+0LHQsNCy0LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj2AgOiBg0J7RgtC80LXQvdCwYH1cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17KCF0aGlzLnN0YXRlLmlzQWRkRm9ybUFjdGl2ZSkgPyBgdWkgZm9ybSBoaWRkZW5gIDogYHVpIGZvcm1gfSByZWY9eyhmb3JtKSA9PiB7dGhpcy5mb3JtID0gZm9ybX19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyghdGhpcy5zdGF0ZS5lcnJvcnMpID8gYHVpIG1lc3NhZ2UgaGlkZGVuYCA6IGB1aSBtZXNzYWdlIHZpc2libGUgd2FybmluZ2B9PlxyXG4gICAgICAgICAgICB7ZXJyb3JzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KCF0aGlzLnN0YXRlLm1lc3NhZ2UpID8gYHVpIG1lc3NhZ2UgaGlkZGVuYCA6IGB1aSBtZXNzYWdlIHZpc2libGUgc3VjY2Vzc2B9PlxyXG4gICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gIFx0XHQgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlck5hbWVcIiBwbGFjZWhvbGRlcj1cItCf0L7Qu9C90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgLz5cclxuICBcdFx0ICAgIDwvZGl2PlxyXG4gIFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gIFx0XHQgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2x1Z1wiIHBsYWNlaG9sZGVyPVwi0JvQvtCz0LjQvSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxyXG4gIFx0XHQgICAgPC9kaXY+XHJcbiAgXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgXHRcdCAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyRW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxyXG4gIFx0XHQgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWxlY3Rpb24gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlckdlbmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdCB0ZXh0XCI+0J/QvtC7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cIm1hbGVcIj7QnNGD0LbRgdC60L7QuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cImZlbWFsZVwiPtCW0LXQvdGB0LrQuNC5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWxlY3Rpb24gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlclJvbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHQgdGV4dFwiPtCg0L7Qu9GMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cInN1YnNjcmliZXJcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJhZHZlcnRpc2VyXCI+0KDQtdC60LvQsNC80L7QtNCw0YLQtdC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJhZG1pblwiPtCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwic3R1ZmZcIj7QoNC10LTQsNC60YLQvtGAPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlclBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlclBhc3N3b3JkU2Vjb25kXCIgcGxhY2Vob2xkZXI9XCLQn9C+0LLRgtC+0YDQuNGC0LUg0L/QsNGA0L7Qu9GMXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHVpZCB1aSBidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTdWJtaXQoKX19PtCe0YLQv9GA0LDQstC40YLRjDwvZGl2PlxyXG5cdFx0ICAgIDwvZGl2PlxyXG4gICAgICBcdDxzdHlsZSBqc3g+e2BcclxuICAgIFx0XHRcdCNwYWdlU3VibWl0Rm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHRgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEVudHJpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbnRyaWVzOiBbXSxcclxuICAgICAgbG9hZGVkOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGVudHJpZXMgPSBbXTtcclxuICAgIHRoaXMucHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgZW50cmllcy5wdXNoKDxFbnRyeSBkYXRhPXtpdGVtfSBrZXk9e2l9IC8+KVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgbWlkZGxlIGFsaWduZWQgc2VsZWN0aW9uIGxpc3QgdHJhbnNpdGlvblwiPlxyXG4gICAgICAgIHsoIXRoaXMuc3RhdGUubG9hZGVkKSA/IDxMb2FkZXIgLz4gOiBlbnRyaWVzIH0gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICBzdXBlcihwcm9wcyk7XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgIHZhciBlbnRyeSA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcmVmPXsoaXRlbSkgPT4ge3RoaXMuaXRlbSA9IGl0ZW19fSBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkIG1pZGRsZSBhbGlnbmVkXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3BhbmVsL3VzZXJzJywgcXVlcnk6IHsgc2x1ZzogZW50cnkuc2x1ZyB9fX0+PGRpdiBjbGFzc05hbWU9XCJ1aSBidXR0b24gdGlueVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBtaWRkbGUgYWxpZ25lZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj57ZW50cnkudXNlck5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2VudHJ5LnVzZXJFbWFpbH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgIH1cclxufVxyXG5cclxuXHJcbi8qIFxyXG4qKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKioqINCh0YLRgNCw0L3QuNGG0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRj1xyXG4qKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBzbHVnOiBudWxsLCBcclxuICAgICAgICB1c2VyRGVzY3JpcHRpb246IG51bGwsXHJcbiAgICAgICAgdXNlck5hbWU6IG51bGwsXHJcbiAgICAgICAgdXNlckVtYWlsOiBudWxsLFxyXG4gICAgICAgIHVzZXJHZW5kZXI6IG51bGwsXHJcbiAgICAgICAgdXNlclJvbGU6IG51bGwsXHJcbiAgICAgICAgdXNlckltYWdlOiBudWxsLFxyXG4gICAgICAgIHVzZXJQYXNzd29yZDogbnVsbCxcclxuICAgICAgICB1c2VyQ29tcGFueTogbnVsbCxcclxuICAgICAgICB1c2VyRGVzY3JpcHRpb246IG51bGwsXHJcbiAgICAgICAgdXNlckJpbzogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUudXNlcixcclxuICAgICAgICAuLi50aGlzLnByb3BzLmRhdGEudXNlclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBVSSgpXHJcbiAgICAkKCcudWkuY2hlY2tib3gnKS5jaGVja2JveCgpO1xyXG4gICAgdGhpcy5iaW5kQ2hhbmdlRXZlbnQoKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIHVwZGF0ZVVzZXJCeUlkKHRoaXMuc3RhdGUudXNlci5faWQsIHRoaXMuc3RhdGUudXNlcikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlKGlkKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gY29uZmlybSgn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPycpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICByZW1vdmVVc2VyQnlJZChpZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRDaGFuZ2VFdmVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybSBpbnB1dCwgLmZvcm0gdGV4dGFyZWEnKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5zZWxmLnN0YXRlLFxyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAuLi5zZWxmLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgIFtwcm9wZXJ0eV06IHZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g0J/QtdGA0LXQv9C40YHQsNGC0Ywg0LIgYWN0aW9ucyDQv9GA0Lgg0L/QvtC80L7RidC4IGF4aW9zISEhXHJcbiAgYXN5bmMgaGFuZGxlVXBsb2FkKGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBpbWFnZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgdXJsID0gY29uZmlnLkFQSSArICd1c2VyL3VwbG9hZCc7XHJcbiAgICBhd2FpdCBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJJbWFnZScsIGltYWdlKTtcclxuICAgIGF3YWl0IGZvcm1EYXRhLmFwcGVuZCgnc2x1ZycsIHRoaXMuc3RhdGUudXNlci5zbHVnKVxyXG4gICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIHZhciBwYXRoID0gY29uZmlnLnN0b3JhZ2UgKyAndXNlcnMvJyArIHNlbGYuc3RhdGUudXNlci5zbHVnICsgJy8nICsgcmVzdWx0LmZpbGVuYW1lXHJcbiAgICAgICAgYXdhaXQgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5zZWxmLnN0YXRlLFxyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAuLi5zZWxmLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogcGF0aFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgZW50cnkgPSB0aGlzLnN0YXRlLnVzZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtlbnRyeS51c2VySW1hZ2V9IG5hbWU9e2VudHJ5LnNsdWd9IGNvbG9yPXtgIzQ2OTc4Y2B9IHNpemU9ezQwfSBjbGFzc05hbWU9e2B1aSBpbWFnZWB9IHJvdW5kPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIHtlbnRyeS5zbHVnfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YiBoZWFkZXJcIj5cclxuICAgICAgICAgICAge2VudHJ5LnVzZXJFbWFpbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmb3JtXCIgcmVmPXsoZm9ybSkgPT4ge3RoaXMuZm9ybSA9IGZvcm19fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBncmlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaXggd2lkZSBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlck5hbWV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCLQn9C+0LvQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkIGRlZmF1bHRWYWx1ZT17ZW50cnkuc2x1Z30gdHlwZT1cInRleHRcIiBuYW1lPVwic2x1Z1wiIHBsYWNlaG9sZGVyPVwi0JvQvtCz0LjQvSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2VudHJ5LnVzZXJFbWFpbH0gdHlwZT1cInRleHRcIiBuYW1lPVwidXNlckVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLW1haWwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VsZWN0aW9uIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2VudHJ5LnVzZXJHZW5kZXJ9IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlckdlbmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdCB0ZXh0XCI+0J/QvtC7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cIm1hbGVcIj7QnNGD0LbRgdC60L7QuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cImZlbWFsZVwiPtCW0LXQvdGB0LrQuNC5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWxlY3Rpb24gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlclJvbGV9IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlclJvbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHQgdGV4dFwiPtCg0L7Qu9GMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgZGF0YS12YWx1ZT1cInN1YnNjcmliZXJcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJhZHZlcnRpc2VyXCI+0KDQtdC60LvQsNC80L7QtNCw0YLQtdC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJhZG1pblwiPtCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPVwic3R1ZmZcIj7QoNC10LTQsNC60YLQvtGAPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlclBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdC+0LLRi9C5INC/0LDRgNC+0LvRjFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyUGFzc3dvcmRTZWNvbmRcIiBwbGFjZWhvbGRlcj1cItCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMINC10YnRkSDRgNCw0LdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaXggd2lkZSBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtlbnRyeS51c2VyQ29tcGFueX0gbmFtZT1cInVzZXJDb21wYW55XCIgcGxhY2Vob2xkZXI9XCLQmtC+0LzQv9Cw0L3QuNGPLCDQvNC10YHRgtC+INGA0LDQsdC+0YLRi1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtlbnRyeS51c2VyRGVzY3JpcHRpb259IG5hbWU9XCJ1c2VyRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cItCf0YDQvtGE0LXRgdGB0LjRjywg0LTQvtC70LbQvdC+0YHRgtGMXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInVzZXJCaW9cIiBwbGFjZWhvbGRlcj1cItCR0LjQvtCz0YDQsNGE0LjRjywg0L/QsNGA0YMg0YHQu9C+0LIg0L4g0YHQtdCx0LVcIiByb3dzPVwiMlwiPntlbnRyeS51c2VyQmlvfTwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZvdXIgd2lkZSBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0QXZhdGFyXCIgb25DbGljaz17KCkgPT4ge3RoaXMuYXZhdGFyLmNsaWNrKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHJvdW5kPXt0cnVlfSBzcmM9e2VudHJ5LnVzZXJJbWFnZX0gbmFtZT17ZW50cnkuc2x1Z30gY29sb3I9e2AjNDY5NzhjYH0gc2l6ZT17MTAwfSBjbGFzc05hbWU9e2B1aSBpbWFnZWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RBdmF0YXJJY29uXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudCBzbWFsbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVVcGxvYWQoZSl9IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIHVpXCIgcmVmPXsoYXZhdGFyKSA9PiB7dGhpcy5hdmF0YXIgPSBhdmF0YXJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiB1aSBwcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlU2F2ZSgpfX0+0KHQvtGF0YDQsNC90LjRgtGMPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiB1aVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZVJlbW92ZShlbnRyeS5faWQpfX0+0KPQtNCw0LvQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnNlbGVjdEF2YXRhciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWxlY3RBdmF0YXI6aG92ZXIgLnNlbGVjdEF2YXRhckljb24ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlbGVjdEF2YXRhckljb24ge1xyXG4gICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgICAgICAgdHJhbnNpdGlvbjowLjJzIGFsbCBlYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWxlY3RBdmF0YXJJY29uIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\panel\\users.js */'
      }));
    }
  }]);

  return UsersContainer;
}(_react2.default.Component);