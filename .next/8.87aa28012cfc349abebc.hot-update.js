webpackHotUpdate(8,{

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(246);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(569);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _userbar = __webpack_require__(725);

var _userbar2 = _interopRequireDefault(_userbar);

var _reactRedux = __webpack_require__(565);

var _initscripts = __webpack_require__(599);

var _reactAvatar = __webpack_require__(592);

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _link = __webpack_require__(563);

var _link2 = _interopRequireDefault(_link);

var _user2 = __webpack_require__(567);

var _jsCookie = __webpack_require__(577);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSingle = function (_React$Component) {
  (0, _inherits3.default)(UserSingle, _React$Component);

  function UserSingle(props) {
    var _user;

    (0, _classCallCheck3.default)(this, UserSingle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserSingle.__proto__ || (0, _getPrototypeOf2.default)(UserSingle)).call(this, props));

    _this.state = {
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
      }, (0, _defineProperty3.default)(_user, 'userDescription', null), (0, _defineProperty3.default)(_user, 'userSocials', null), (0, _defineProperty3.default)(_user, 'userBio', null), _user)
    };
    _this.token = _jsCookie2.default.get('x-access-token');
    _this.currentUser = _this.props.user.profile;
    return _this;
  }

  (0, _createClass3.default)(UserSingle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.data.user !== null) {
        this.setState((0, _extends3.default)({}, this.state, {
          user: (0, _extends3.default)({}, this.state.user, this.props.data.user)
        }));
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindChangeEvent();
      (0, _initscripts.UI)();
      $('.socials .addbutton').popup({
        popup: $('.socials .popup'),
        on: 'click'
      });
    }
  }, {
    key: 'handleAddSocial',
    value: function handleAddSocial() {
      var newSocial = { title: this.newSocialTitle.innerHTML, link: this.newSocialLink.value };
      (0, _user2.addSocialToUser)(this.token, this.currentUser._id, newSocial).then(function (res) {
        console.log(res.data);
      });
    }

    // В будущем можно переделать на удаление через ID соц сети

  }, {
    key: 'handleRemoveSocial',
    value: function handleRemoveSocial(slug) {
      var lowerSlug = slug.toLowerCase().split(/[ ,]+/).join(' ');
      var socialNode = document.querySelector('.socials .items .item.' + lowerSlug);
      var userSocials = this.state.user.userSocials;
      var socialIndex = -1;
      for (var i = 0, len = userSocials.length; i < len; i++) {
        if (userSocials[i].title == slug) {
          socialIndex = i;break;
        }
      }(0, _user2.removeUserSocial)(this.token, this.currentUser._id, userSocials[socialIndex]).then(function (res) {
        if (res.data.success) {
          socialNode.remove();
          // Handle Success
        } else {
          console.log(res.data.message);
          // Handle Error
        }
      });
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      (0, _user2.updateUserById)(this.state.user._id, this.state.user).then(function (res) {
        // handle success
      });
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.data.user !== null) {
        var entry = this.state.user;
        return _react2.default.createElement('div', {
          'data-jsx': 2639846693
        }, _react2.default.createElement(_userbar2.default, { data: this.props.data }), _react2.default.createElement('div', { className: 'ui divider', 'data-jsx': 2639846693
        }), _react2.default.createElement('div', { className: 'profile-feed feed', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'ui form', ref: function ref(form) {
            _this2.form = form;
          }, 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'ui grid', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'ui eight wide column', 'data-jsx': 2639846693
        }, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 2639846693
        }, '\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F')), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('label', {
          'data-jsx': 2639846693
        }, '\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F'), _react2.default.createElement('input', { defaultValue: entry.userName, type: 'text', name: 'userName', placeholder: '\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('label', {
          'data-jsx': 2639846693
        }, 'E-mail'), _react2.default.createElement('input', { defaultValue: entry.userEmail, type: 'text', name: 'userEmail', placeholder: 'E-mail \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', 'data-jsx': 2639846693
        })), _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 2639846693
        }, '\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F')), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('input', { type: 'password', name: 'userPassword', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C', 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('input', { type: 'password', name: 'userPasswordSecond', placeholder: '\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0451 \u0440\u0430\u0437', 'data-jsx': 2639846693
        }))), _react2.default.createElement('div', { className: 'ui eight wide column', 'data-jsx': 2639846693
        }, _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 2639846693
        }, '\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F')), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('label', {
          'data-jsx': 2639846693
        }, '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F'), _react2.default.createElement('input', { type: 'text', defaultValue: entry.userCompany, name: 'userCompany', placeholder: '\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B', 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('label', {
          'data-jsx': 2639846693
        }, '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C'), _react2.default.createElement('input', { type: 'text', defaultValue: entry.userDescription, name: 'userDescription', placeholder: '\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F, \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('label', {
          'data-jsx': 2639846693
        }, '\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F'), _react2.default.createElement('textarea', { name: 'userBio', placeholder: '\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F, \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432 \u043E \u0441\u0435\u0431\u0435', rows: '2', defaultValue: entry.userBio, 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'socials field', 'data-jsx': 2639846693
        }, _react2.default.createElement('label', {
          'data-jsx': 2639846693
        }, '\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438'), _react2.default.createElement('div', { className: 'items', 'data-jsx': 2639846693
        }, entry.userSocials.map(function (item, i) {
          var slug = item.title.toLowerCase().split(/[ ,]+/).join(' ');
          return _react2.default.createElement('a', { onClick: function onClick() {
              _this2.handleRemoveSocial(item.title);
            }, key: i, className: slug + ' ui circular button item animated fade', tabindex: '0', 'data-jsx': 2639846693
          }, _react2.default.createElement('div', { className: 'ui visible content', 'data-jsx': 2639846693
          }, _react2.default.createElement('i', { className: 'fa-' + slug + ' fa icon', 'data-jsx': 2639846693
          })), _react2.default.createElement('div', { className: 'ui hidden content', 'data-jsx': 2639846693
          }, _react2.default.createElement('i', { className: 'fa fa-close icon', 'data-jsx': 2639846693
          })));
        }), _react2.default.createElement('div', { className: 'ui circular floating icon button basic addbutton', 'data-jsx': 2639846693
        }, _react2.default.createElement('i', { className: 'fa fa-plus', 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'ui fluid popup top left transition hidden', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'ui divided', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('label', {
          'data-jsx': 2639846693
        }, '\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0435\u0442\u0438'), _react2.default.createElement('div', { className: 'ui rounded floating icon button basic dropdown', 'data-jsx': 2639846693
        }, _react2.default.createElement('span', { className: 'text', ref: function ref(title) {
            _this2.newSocialTitle = title;
          }, 'data-jsx': 2639846693
        }, '\u0421\u0435\u0442\u044C'), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'search', 'data-jsx': 2639846693
        }, _react2.default.createElement('input', { type: 'text', placeholder: '\u041F\u043E\u0438\u0441\u043A...', 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'divider', 'data-jsx': 2639846693
        }), _react2.default.createElement('div', { className: 'header', 'data-jsx': 2639846693
        }, '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0442\u044C'), _react2.default.createElement('div', { className: 'scrolling menu', 'data-jsx': 2639846693
        }, _react2.default.createElement('div', { className: 'item', 'data-jsx': 2639846693
        }, 'Vk'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2639846693
        }, 'Github'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2639846693
        }, 'Facebook'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2639846693
        }, 'Twitter'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2639846693
        }, 'Google Plus'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2639846693
        }, 'LinkedIn'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2639846693
        }, 'YouTube'))))), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('input', { type: 'text', ref: function ref(link) {
            _this2.newSocialLink = link;
          }, placeholder: '\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u044C', 'data-jsx': 2639846693
        })), _react2.default.createElement('div', { className: 'field', 'data-jsx': 2639846693
        }, _react2.default.createElement('span', { onClick: function onClick() {
            _this2.handleAddSocial();
          }, className: 'ui button rounded fluid basic', 'data-jsx': 2639846693
        }, '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C')))))))), _react2.default.createElement('br', {
          'data-jsx': 2639846693
        }), _react2.default.createElement('div', { className: 'button ui primary', onClick: function onClick() {
            _this2.handleSave();
          }, 'data-jsx': 2639846693
        }, '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'), _react2.default.createElement(_link2.default, { href: { pathname: 'user', query: { slug: entry.slug } } }, _react2.default.createElement('a', { className: 'button ui', 'data-jsx': 2639846693
        }, '\u041D\u0430\u0437\u0430\u0434')))), _react2.default.createElement(_style2.default, {
          styleId: 2639846693,
          css: '.socials-form[data-jsx="2639846693"] {padding:15px;}.socials[data-jsx="2639846693"] .button.item[data-jsx="2639846693"]:hover .hidden[data-jsx="2639846693"] {display:block;opacity:1;}.socials[data-jsx="2639846693"] .divided[data-jsx="2639846693"] {display:-webkit-flex; display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;}.socials[data-jsx="2639846693"] .divided[data-jsx="2639846693"] input[data-jsx="2639846693"],.socials[data-jsx="2639846693"] .divided[data-jsx="2639846693"] .button[data-jsx="2639846693"] {width:100%;}.socials[data-jsx="2639846693"] .dropdown[data-jsx="2639846693"] .menu[data-jsx="2639846693"] {min-width:200px;margin-top:20px;}.socials[data-jsx="2639846693"] .dropdown[data-jsx="2639846693"] .menu[data-jsx="2639846693"] input[data-jsx="2639846693"] {margin:15px;display:block;width:185px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVzZXJcXHNldHRpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVOc0IsQUFDSyxzQ0FDQSxhQUNkLENBRW9DLDBHQUNyQixjQUNKLFVBQ1gsQ0FFa0IsaUVBQ0osbUNBQ1MsK0VBQ3ZCLENBRzBCLDZMQUNkLFdBQ1osQ0FFeUIsK0ZBQ1IsZ0JBQ0EsZ0JBQ2pCLENBRStCLDRIQUNsQixZQUNFLGNBQ0YsWUFDYiIsImZpbGUiOiJjb21wb25lbnRzXFx1c2VyXFxzZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiJFOi93d3cvTGV2ZWx1cC5uYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVzZXJCYXIgZnJvbSAnLi91c2VyYmFyJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5pdHNjcmlwdHMuanMnXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAncmVhY3QtYXZhdGFyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVwZGF0ZVVzZXJCeUlkLCBhZGRTb2NpYWxUb1VzZXIsIHJlbW92ZVVzZXJTb2NpYWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuXHJcbmNsYXNzIFVzZXJTaW5nbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIHNsdWc6IG51bGwsIFxyXG4gICAgICAgIHVzZXJEZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgICB1c2VyTmFtZTogbnVsbCxcclxuICAgICAgICB1c2VyRW1haWw6IG51bGwsXHJcbiAgICAgICAgdXNlckdlbmRlcjogbnVsbCxcclxuICAgICAgICB1c2VyUm9sZTogbnVsbCxcclxuICAgICAgICB1c2VySW1hZ2U6IG51bGwsXHJcbiAgICAgICAgdXNlclBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgIHVzZXJDb21wYW55OiBudWxsLFxyXG4gICAgICAgIHVzZXJEZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgICB1c2VyU29jaWFsczogbnVsbCxcclxuICAgICAgICB1c2VyQmlvOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudG9rZW4gPSBjb29raWVzLmdldCgneC1hY2Nlc3MtdG9rZW4nKTtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnByb3BzLnVzZXIucHJvZmlsZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGlmKHRoaXMucHJvcHMuZGF0YS51c2VyICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5kYXRhLnVzZXJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuYmluZENoYW5nZUV2ZW50KCk7XHJcbiAgICBVSSgpXHJcbiAgICAkKCcuc29jaWFscyAuYWRkYnV0dG9uJykucG9wdXAoe1xyXG4gICAgICAgcG9wdXAgOiAkKCcuc29jaWFscyAucG9wdXAnKSxcclxuICAgICAgIG9uICAgIDogJ2NsaWNrJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZFNvY2lhbCgpIHtcclxuICAgIHZhciBuZXdTb2NpYWwgPSB7IHRpdGxlOiB0aGlzLm5ld1NvY2lhbFRpdGxlLmlubmVySFRNTCwgbGluazogdGhpcy5uZXdTb2NpYWxMaW5rLnZhbHVlIH1cclxuICAgIGFkZFNvY2lhbFRvVXNlcih0aGlzLnRva2VuLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgbmV3U29jaWFsKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIC8vINCSINCx0YPQtNGD0YnQtdC8INC80L7QttC90L4g0L/QtdGA0LXQtNC10LvQsNGC0Ywg0L3QsCDRg9C00LDQu9C10L3QuNC1INGH0LXRgNC10LcgSUQg0YHQvtGGINGB0LXRgtC4XHJcbiAgaGFuZGxlUmVtb3ZlU29jaWFsKHNsdWcpIHtcclxuICAgIHZhciBsb3dlclNsdWcgPSBzbHVnLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1sgLF0rLykuam9pbignICcpO1xyXG4gICAgdmFyIHNvY2lhbE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29jaWFscyAuaXRlbXMgLml0ZW0uJyArIGxvd2VyU2x1Zyk7XHJcbiAgICB2YXIgdXNlclNvY2lhbHMgPSB0aGlzLnN0YXRlLnVzZXIudXNlclNvY2lhbHM7XHJcbiAgICB2YXIgc29jaWFsSW5kZXggPSAtMTtcclxuICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHVzZXJTb2NpYWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSBcclxuICAgICAgaWYgKHVzZXJTb2NpYWxzW2ldLnRpdGxlID09IHNsdWcpIHsgc29jaWFsSW5kZXggPSBpOyBicmVhazsgfVxyXG4gICAgXHJcbiAgICByZW1vdmVVc2VyU29jaWFsKHRoaXMudG9rZW4sIHRoaXMuY3VycmVudFVzZXIuX2lkLCB1c2VyU29jaWFsc1tzb2NpYWxJbmRleF0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgc29jaWFsTm9kZS5yZW1vdmUoKVxyXG4gICAgICAgIC8vIEhhbmRsZSBTdWNjZXNzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAvLyBIYW5kbGUgRXJyb3JcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVNhdmUoKSB7XHJcbiAgICB1cGRhdGVVc2VyQnlJZCh0aGlzLnN0YXRlLnVzZXIuX2lkLCB0aGlzLnN0YXRlLnVzZXIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGJpbmRDaGFuZ2VFdmVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybSBpbnB1dCwgLmZvcm0gdGV4dGFyZWEnKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5zZWxmLnN0YXRlLFxyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAuLi5zZWxmLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgIFtwcm9wZXJ0eV06IHZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5kYXRhLnVzZXIgIT09IG51bGwpIHtcclxuICAgICAgdmFyIGVudHJ5ID0gdGhpcy5zdGF0ZS51c2VyO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VXNlckJhciBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1mZWVkIGZlZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmb3JtXCIgcmVmPXsoZm9ybSkgPT4ge3RoaXMuZm9ybSA9IGZvcm19fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZWlnaHQgd2lkZSBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0J7RgdC90L7QstC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRj1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCf0L7Qu9C90L7QtSDQuNC80Y88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2VudHJ5LnVzZXJOYW1lfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyTmFtZVwiIHBsYWNlaG9sZGVyPVwi0J/QvtC70L3QvtC1INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2VudHJ5LnVzZXJFbWFpbH0gdHlwZT1cInRleHRcIiBuYW1lPVwidXNlckVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLW1haWwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgINCh0LzQtdC90LAg0L/QsNGA0L7Qu9GPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInVzZXJQYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L3QvtCy0YvQuSDQv9Cw0YDQvtC70YxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlclBhc3N3b3JkU2Vjb25kXCIgcGxhY2Vob2xkZXI9XCLQndC+0LLRi9C5INC/0LDRgNC+0LvRjCDQtdGJ0ZEg0YDQsNC3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZWlnaHQgd2lkZSBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRj1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCe0YDQs9Cw0L3QuNC30LDRhtC40Y88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlckNvbXBhbnl9IG5hbWU9XCJ1c2VyQ29tcGFueVwiIHBsYWNlaG9sZGVyPVwi0JrQvtC80L/QsNC90LjRjywg0LzQtdGB0YLQviDRgNCw0LHQvtGC0YtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD7QlNC+0LvQttC90L7RgdGC0Yw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlckRlc2NyaXB0aW9ufSBuYW1lPVwidXNlckRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCLQn9GA0L7RhNC10YHRgdC40Y8sINC00L7Qu9C20L3QvtGB0YLRjFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCR0LjQvtCz0YDQsNGE0LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ1c2VyQmlvXCIgcGxhY2Vob2xkZXI9XCLQkdC40L7Qs9GA0LDRhNC40Y8sINC/0LDRgNGDINGB0LvQvtCyINC+INGB0LXQsdC1XCIgcm93cz1cIjJcIiBkZWZhdWx0VmFsdWU9e2VudHJ5LnVzZXJCaW99PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbHMgZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0KHQvtGG0LjQsNC70YzQvdGL0LUg0YHQtdGC0Lg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVudHJ5LnVzZXJTb2NpYWxzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbHVnID0gaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bICxdKy8pLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlUmVtb3ZlU29jaWFsKGl0ZW0udGl0bGUpfX0ga2V5PXtpfSBjbGFzc05hbWU9e3NsdWcgKyAnIHVpIGNpcmN1bGFyIGJ1dHRvbiBpdGVtIGFuaW1hdGVkIGZhZGUnfSAgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdmlzaWJsZSBjb250ZW50XCI+PGkgY2xhc3NOYW1lPXsnZmEtJyArIHNsdWcgKyAnIGZhIGljb24nfT48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaGlkZGVuIGNvbnRlbnRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZSBpY29uXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjaXJjdWxhciBmbG9hdGluZyBpY29uIGJ1dHRvbiBiYXNpYyBhZGRidXR0b25cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmbHVpZCBwb3B1cCB0b3AgbGVmdCB0cmFuc2l0aW9uIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD7QlNC+0LHQsNCy0LvQtdC90LjQtSDRgdC10YLQuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgcm91bmRlZCBmbG9hdGluZyBpY29uIGJ1dHRvbiBiYXNpYyBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIiByZWY9eyh0aXRsZSkgPT4ge3RoaXMubmV3U29jaWFsVGl0bGUgPSB0aXRsZX19PtCh0LXRgtGMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6Li4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPtCS0YvQsdC10YDQuNGC0LUg0YHQtdGC0Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsaW5nIG1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+Vms8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+R2l0aHViPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPkZhY2Vib29rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlR3aXR0ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+R29vZ2xlIFBsdXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+TGlua2VkSW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+WW91VHViZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17KGxpbmspID0+IHt0aGlzLm5ld1NvY2lhbExpbmsgPSBsaW5rfX0gcGxhY2Vob2xkZXI9XCLQodGB0YvQu9C60LAg0L3QsCDQv9GA0L7RhNC40LvRjFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlQWRkU29jaWFsKCl9fSBjbGFzc05hbWU9XCJ1aSBidXR0b24gcm91bmRlZCBmbHVpZCBiYXNpY1wiPtCU0L7QsdCw0LLQuNGC0Yw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHVpIHByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTYXZlKCl9fT7QodC+0YXRgNCw0L3QuNGC0Yw8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3VzZXInLCBxdWVyeTogeyBzbHVnOiBlbnRyeS5zbHVnIH19fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gdWlcIj7QndCw0LfQsNC0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBcdFx0ICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuc29jaWFscy1mb3JtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NpYWxzIC5idXR0b24uaXRlbTpob3ZlciAuaGlkZGVuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY2lhbHMgLmRpdmlkZWQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NpYWxzIC5kaXZpZGVkIGlucHV0LFxyXG4gICAgICAgICAgICAuc29jaWFscyAuZGl2aWRlZCAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jaWFscyAuZHJvcGRvd24gLm1lbnUge1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NpYWxzIC5kcm9wZG93biAubWVudSBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjE1cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDoxODVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC90LDQudC00LXQvTwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShVc2VyU2luZ2xlKSJdfQ== */\n/*@ sourceURL=components\\user\\settings.js */'
        }));
      } else {
        return _react2.default.createElement('div', null, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D');
      }
    }
  }]);

  return UserSingle;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(UserSingle);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\www\\Levelup.name\\components\\user\\settings.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\www\\Levelup.name\\components\\user\\settings.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(330)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvc2V0dGluZ3MuanM/OGU0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFDRTs7QUFDQTs7QUFDRjs7OztBQUNBOzs7O0FBQ21DOztBQUNuQzs7Ozs7O0lBRUQ7c0NBRUo7O3NCQUFZLE9BQU87UUFBQTs7d0NBQUE7OzhJQUVqQjs7VUFBSzs7Y0FHRDt5QkFDQTtrQkFDQTttQkFDQTtvQkFDQTtrQkFDQTttQkFDQTtzQkFDQTtxQkFBYTtBQVJiLGlFQVNpQiwyREFDSix1REFDSixPQUdiO0FBZkU7VUFlRyxRQUFRLG1CQUFRLElBQ3JCO1VBQUssY0FBYyxNQUFLLE1BQU0sS0FBSztXQUNwQzs7Ozs7eUNBR0M7VUFBRyxLQUFLLE1BQU0sS0FBSyxTQUFTLE1BQzFCO2FBQUssb0NBQ0EsS0FBSzsyQ0FFSCxLQUFLLE1BQU0sTUFDWCxLQUFLLE1BQU0sS0FHbkI7QUFMRztBQU1MOzs7O3dDQUdDO1dBQ0E7QUFDQTtRQUFFLHVCQUF1QjtlQUNkLEVBQ1I7WUFFSjtBQUhJOzs7O3NDQU1IO1VBQUksWUFBWSxFQUFFLE9BQU8sS0FBSyxlQUFlLFdBQVcsTUFBTSxLQUFLLGNBQ25FO2tDQUFnQixLQUFLLE9BQU8sS0FBSyxZQUFZLEtBQUssV0FBVyxLQUFLLFVBQUMsS0FDakU7Z0JBQVEsSUFBSSxJQUNiO0FBQ0Y7QUFFRDs7Ozs7O3VDQUNtQixNQUNqQjtVQUFJLFlBQVksS0FBSyxjQUFjLE1BQU0sU0FBUyxLQUNsRDtVQUFJLGFBQWEsU0FBUyxjQUFjLDJCQUN4QztVQUFJLGNBQWMsS0FBSyxNQUFNLEtBQzdCO1VBQUksY0FBYyxDQUNsQjtXQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sWUFBWSxRQUFRLElBQUksS0FBSyxLQUNoRDtZQUFJLFlBQVksR0FBRyxTQUFTLE1BQVE7d0JBQWMsRUFBVztBQUQv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ZWJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVXNlckJhciBmcm9tICcuL3VzZXJiYXInXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuLi8uLi91dGlscy9pbml0c2NyaXB0cy5qcydcclxuaW1wb3J0IEF2YXRhciBmcm9tICdyZWFjdC1hdmF0YXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXBkYXRlVXNlckJ5SWQsIGFkZFNvY2lhbFRvVXNlciwgcmVtb3ZlVXNlclNvY2lhbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdXNlcidcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuY2xhc3MgVXNlclNpbmdsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgc2x1ZzogbnVsbCwgXHJcbiAgICAgICAgdXNlckRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgIHVzZXJOYW1lOiBudWxsLFxyXG4gICAgICAgIHVzZXJFbWFpbDogbnVsbCxcclxuICAgICAgICB1c2VyR2VuZGVyOiBudWxsLFxyXG4gICAgICAgIHVzZXJSb2xlOiBudWxsLFxyXG4gICAgICAgIHVzZXJJbWFnZTogbnVsbCxcclxuICAgICAgICB1c2VyUGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgdXNlckNvbXBhbnk6IG51bGwsXHJcbiAgICAgICAgdXNlckRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgIHVzZXJTb2NpYWxzOiBudWxsLFxyXG4gICAgICAgIHVzZXJCaW86IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy50b2tlbiA9IGNvb2tpZXMuZ2V0KCd4LWFjY2Vzcy10b2tlbicpO1xyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMucHJvcHMudXNlci5wcm9maWxlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5kYXRhLnVzZXIgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAuLi50aGlzLnByb3BzLmRhdGEudXNlclxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5iaW5kQ2hhbmdlRXZlbnQoKTtcclxuICAgIFVJKClcclxuICAgICQoJy5zb2NpYWxzIC5hZGRidXR0b24nKS5wb3B1cCh7XHJcbiAgICAgICBwb3B1cCA6ICQoJy5zb2NpYWxzIC5wb3B1cCcpLFxyXG4gICAgICAgb24gICAgOiAnY2xpY2snXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkU29jaWFsKCkge1xyXG4gICAgdmFyIG5ld1NvY2lhbCA9IHsgdGl0bGU6IHRoaXMubmV3U29jaWFsVGl0bGUuaW5uZXJIVE1MLCBsaW5rOiB0aGlzLm5ld1NvY2lhbExpbmsudmFsdWUgfVxyXG4gICAgYWRkU29jaWFsVG9Vc2VyKHRoaXMudG9rZW4sIHRoaXMuY3VycmVudFVzZXIuX2lkLCBuZXdTb2NpYWwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgIH0pIFxyXG4gIH1cclxuXHJcbiAgLy8g0JIg0LHRg9C00YPRidC10Lwg0LzQvtC20L3QviDQv9C10YDQtdC00LXQu9Cw0YLRjCDQvdCwINGD0LTQsNC70LXQvdC40LUg0YfQtdGA0LXQtyBJRCDRgdC+0YYg0YHQtdGC0LhcclxuICBoYW5kbGVSZW1vdmVTb2NpYWwoc2x1Zykge1xyXG4gICAgdmFyIGxvd2VyU2x1ZyA9IHNsdWcudG9Mb3dlckNhc2UoKS5zcGxpdCgvWyAsXSsvKS5qb2luKCcgJyk7XHJcbiAgICB2YXIgc29jaWFsTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2NpYWxzIC5pdGVtcyAuaXRlbS4nICsgbG93ZXJTbHVnKTtcclxuICAgIHZhciB1c2VyU29jaWFscyA9IHRoaXMuc3RhdGUudXNlci51c2VyU29jaWFscztcclxuICAgIHZhciBzb2NpYWxJbmRleCA9IC0xO1xyXG4gICAgZm9yKHZhciBpID0gMCwgbGVuID0gdXNlclNvY2lhbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIFxyXG4gICAgICBpZiAodXNlclNvY2lhbHNbaV0udGl0bGUgPT0gc2x1ZykgeyBzb2NpYWxJbmRleCA9IGk7IGJyZWFrOyB9XHJcbiAgICBcclxuICAgIHJlbW92ZVVzZXJTb2NpYWwodGhpcy50b2tlbiwgdGhpcy5jdXJyZW50VXNlci5faWQsIHVzZXJTb2NpYWxzW3NvY2lhbEluZGV4XSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzb2NpYWxOb2RlLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gSGFuZGxlIFN1Y2Nlc3NcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIC8vIEhhbmRsZSBFcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIHVwZGF0ZVVzZXJCeUlkKHRoaXMuc3RhdGUudXNlci5faWQsIHRoaXMuc3RhdGUudXNlcikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYmluZENoYW5nZUV2ZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtIGlucHV0LCAuZm9ybSB0ZXh0YXJlYScpO1xyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb3BlcnR5ID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnNlbGYuc3RhdGUsXHJcbiAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIC4uLnNlbGYuc3RhdGUudXNlcixcclxuICAgICAgICAgICAgW3Byb3BlcnR5XTogdmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZih0aGlzLnByb3BzLmRhdGEudXNlciAhPT0gbnVsbCkge1xyXG4gICAgICB2YXIgZW50cnkgPSB0aGlzLnN0YXRlLnVzZXI7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxVc2VyQmFyIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWZlZWQgZmVlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZvcm1cIiByZWY9eyhmb3JtKSA9PiB7dGhpcy5mb3JtID0gZm9ybX19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBlaWdodCB3aWRlIGNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQntGB0L3QvtCy0L3QsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0J/QvtC70L3QvtC1INC40LzRjzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlck5hbWV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCLQn9C+0LvQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlckVtYWlsfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyRW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0KHQvNC10L3QsCDQv9Cw0YDQvtC70Y9cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlclBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdC+0LLRi9C5INC/0LDRgNC+0LvRjFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyUGFzc3dvcmRTZWNvbmRcIiBwbGFjZWhvbGRlcj1cItCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMINC10YnRkSDRgNCw0LdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBlaWdodCB3aWRlIGNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0J7RgNCz0LDQvdC40LfQsNGG0LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtlbnRyeS51c2VyQ29tcGFueX0gbmFtZT1cInVzZXJDb21wYW55XCIgcGxhY2Vob2xkZXI9XCLQmtC+0LzQv9Cw0L3QuNGPLCDQvNC10YHRgtC+INGA0LDQsdC+0YLRi1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCU0L7Qu9C20L3QvtGB0YLRjDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtlbnRyeS51c2VyRGVzY3JpcHRpb259IG5hbWU9XCJ1c2VyRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cItCf0YDQvtGE0LXRgdGB0LjRjywg0LTQvtC70LbQvdC+0YHRgtGMXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0JHQuNC+0LPRgNCw0YTQuNGPPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInVzZXJCaW9cIiBwbGFjZWhvbGRlcj1cItCR0LjQvtCz0YDQsNGE0LjRjywg0L/QsNGA0YMg0YHQu9C+0LIg0L4g0YHQtdCx0LVcIiByb3dzPVwiMlwiIGRlZmF1bHRWYWx1ZT17ZW50cnkudXNlckJpb30+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFscyBmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD7QodC+0YbQuNCw0LvRjNC90YvQtSDRgdC10YLQuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZW50cnkudXNlclNvY2lhbHMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsdWcgPSBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1sgLF0rLykuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVSZW1vdmVTb2NpYWwoaXRlbS50aXRsZSl9fSBrZXk9e2l9IGNsYXNzTmFtZT17c2x1ZyArICcgdWkgY2lyY3VsYXIgYnV0dG9uIGl0ZW0gYW5pbWF0ZWQgZmFkZSd9ICB0YWJpbmRleD1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2aXNpYmxlIGNvbnRlbnRcIj48aSBjbGFzc05hbWU9eydmYS0nICsgc2x1ZyArICcgZmEgaWNvbid9PjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBoaWRkZW4gY29udGVudFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlIGljb25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNpcmN1bGFyIGZsb2F0aW5nIGljb24gYnV0dG9uIGJhc2ljIGFkZGJ1dHRvblwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZsdWlkIHBvcHVwIHRvcCBsZWZ0IHRyYW5zaXRpb24gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCU0L7QsdCw0LLQu9C10L3QuNC1INGB0LXRgtC4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSByb3VuZGVkIGZsb2F0aW5nIGljb24gYnV0dG9uIGJhc2ljIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHJlZj17KHRpdGxlKSA9PiB7dGhpcy5uZXdTb2NpYWxUaXRsZSA9IHRpdGxlfX0+0KHQtdGC0Yw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+0JLRi9Cx0LXRgNC40YLQtSDRgdC10YLRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxpbmcgbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5WazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5HaXRodWI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+RmFjZWJvb2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+VHdpdHRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5Hb29nbGUgUGx1czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5MaW5rZWRJbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5Zb3VUdWJlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXsobGluaykgPT4ge3RoaXMubmV3U29jaWFsTGluayA9IGxpbmt9fSBwbGFjZWhvbGRlcj1cItCh0YHRi9C70LrQsCDQvdCwINC/0YDQvtGE0LjQu9GMXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVBZGRTb2NpYWwoKX19IGNsYXNzTmFtZT1cInVpIGJ1dHRvbiByb3VuZGVkIGZsdWlkIGJhc2ljXCI+0JTQvtCx0LDQstC40YLRjDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gdWkgcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZVNhdmUoKX19PtCh0L7RhdGA0LDQvdC40YLRjDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAndXNlcicsIHF1ZXJ5OiB7IHNsdWc6IGVudHJ5LnNsdWcgfX19PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiB1aVwiPtCd0LDQt9Cw0LQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIFx0XHQgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5zb2NpYWxzLWZvcm0ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY2lhbHMgLmJ1dHRvbi5pdGVtOmhvdmVyIC5oaWRkZW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jaWFscyAuZGl2aWRlZCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY2lhbHMgLmRpdmlkZWQgaW5wdXQsXHJcbiAgICAgICAgICAgIC5zb2NpYWxzIC5kaXZpZGVkIC5idXR0b24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NpYWxzIC5kcm9wZG93biAubWVudSB7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY2lhbHMgLmRyb3Bkb3duIC5tZW51IGlucHV0IHtcclxuICAgICAgICAgICAgICBtYXJnaW46MTVweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOjE4NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9PC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUpKFVzZXJTaW5nbGUpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy91c2VyL3NldHRpbmdzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==