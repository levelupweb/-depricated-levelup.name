'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = page;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appConfig = require('../../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _user = require('../../actions/user');

var _app = require('../../actions/app');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

var _getToken = require('../../utils/getToken.js');

var _getToken2 = _interopRequireDefault(_getToken);

var _axiosAuth = require('../../utils/axiosAuth.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 

*** Запрос к API, учитывающий необходимые данные для данной страницы

* query - объект, содержащий параметры GET-запроса
* builder - объект с информацией о том, какие данные могут понадобиться дочернему контейнеру 

*/

var prepareData = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(token, builder, query) {
    var _this = this;

    var data, queries;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!builder) {
              _context3.next = 10;
              break;
            }

            data = {};
            _context3.next = 4;
            return (0, _values2.default)(builder);

          case 4:
            queries = _context3.sent;
            _context3.next = 7;
            return _promise2.default.all(queries.map(function () {
              var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(item) {
                var slug, url;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        slug = item.single ? query.slug : '';

                        if (item.custom) {
                          url = item.url;
                        } else {
                          url = _appConfig2.default.API + item.type + '/entries/' + encodeURI(slug);
                        }
                        _context2.next = 4;
                        return (0, _axiosAuth.axiosAuth)(token, {
                          url: url,
                          method: 'GET'
                        }).then(function () {
                          var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(res) {
                            return _regenerator2.default.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    data[item.type] = res.data;

                                  case 1:
                                  case 'end':
                                    return _context.stop();
                                }
                              }
                            }, _callee, _this);
                          }));

                          return function (_x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                      case 4:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 7:
            return _context3.abrupt('return', new _promise2.default(function (resolve, reject) {
              return resolve(data);
            }));

          case 10:
            return _context3.abrupt('return', null);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function prepareData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Добавить уровни доступа // Вынести в UTILS и добавить уровни доступа


function canUserPass(options, user) {
  if (user.isLogged) {
    return true;
  } else {
    if (options.userMustBeLoggedIn) {
      return false;
    } else {
      return true;
    }
  }
}

/* 

*** Функция, отвечающая за подготовку данных, которые могут понадобиться дочернему контейнеру

* Component - дочерний компонент
* slug - ключевое слово для генерируемой страницы
* builder - объект с информацией о том, какие данные могут понадобиться дочернему контейнеру 

*/

function page(Component, slug, builder) {
  return function (_Component) {
    (0, _inherits3.default)(GetAuth, _Component);

    (0, _createClass3.default)(GetAuth, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(_ref5) {
          var _this3 = this;

          var req = _ref5.req,
              store = _ref5.store,
              query = _ref5.query;
          var token, user;
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _getToken2.default)(req);

                case 2:
                  token = _context6.sent;
                  _context6.next = 5;
                  return store.dispatch((0, _user.getUserByToken)(token));

                case 5:
                  user = _context6.sent;
                  _context6.next = 8;
                  return (0, _app.getPageBySlug)(slug).then(function () {
                    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(res) {
                      return _regenerator2.default.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return prepareData(token, builder, query).then(function () {
                                var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(data) {
                                  var state, canPass;
                                  return _regenerator2.default.wrap(function _callee4$(_context4) {
                                    while (1) {
                                      switch (_context4.prev = _context4.next) {
                                        case 0:
                                          _context4.next = 2;
                                          return store.getState();

                                        case 2:
                                          state = _context4.sent;
                                          canPass = canUserPass(res.data, state.user);

                                          if (!canPass) {
                                            _context4.next = 13;
                                            break;
                                          }

                                          _context4.next = 7;
                                          return store.dispatch((0, _app.setQuery)(builder, query));

                                        case 7:
                                          _context4.next = 9;
                                          return store.dispatch((0, _app.setPageData)(data));

                                        case 9:
                                          _context4.next = 11;
                                          return store.dispatch((0, _app.setPageSettings)(res.data));

                                        case 11:
                                          _context4.next = 15;
                                          break;

                                        case 13:
                                          _context4.next = 15;
                                          return store.dispatch((0, _app.setAccessError)());

                                        case 15:
                                        case 'end':
                                          return _context4.stop();
                                      }
                                    }
                                  }, _callee4, _this3);
                                }));

                                return function (_x8) {
                                  return _ref7.apply(this, arguments);
                                };
                              }());

                            case 2:
                            case 'end':
                              return _context5.stop();
                          }
                        }
                      }, _callee5, _this3);
                    }));

                    return function (_x7) {
                      return _ref6.apply(this, arguments);
                    };
                  }());

                case 8:
                  return _context6.abrupt('return', {
                    user: user
                  });

                case 9:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function getInitialProps(_x6) {
          return _ref4.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function GetAuth(props) {
      (0, _classCallCheck3.default)(this, GetAuth);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (GetAuth.__proto__ || (0, _getPrototypeOf2.default)(GetAuth)).call(this, props));

      _this2.state = {
        isLoading: true
      };
      return _this2;
    }

    (0, _createClass3.default)(GetAuth, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({
          isLoading: false
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, this.props);
      }
    }]);

    return GetAuth;
  }(Component);
}