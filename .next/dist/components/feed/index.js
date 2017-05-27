'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _article = require('./article');

var _article2 = _interopRequireDefault(_article);

var _listArticle = require('./listArticle');

var _listArticle2 = _interopRequireDefault(_listArticle);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _post = require('../../actions/post');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feed = function (_React$Component) {
  (0, _inherits3.default)(Feed, _React$Component);

  function Feed(props) {
    (0, _classCallCheck3.default)(this, Feed);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Feed.__proto__ || (0, _getPrototypeOf2.default)(Feed)).call(this, props));

    _this.interval = null;
    _this.state = {
      perPage: 4,
      page: 0,
      isFull: false,
      scrolled: 0,
      entries: [],
      masonry: [],
      templates: {
        article: _article2.default,
        listarticle: _listArticle2.default
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Feed, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.data) {
        this.props.data.post.map(function (item, i) {
          _this2.state.entries.push(_react2.default.createElement(_article2.default, { data: item, key: i }));
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _this3 = this;

        var posts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.props.data) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return (0, _post.getPostsByUserId)(this.props.author);

              case 3:
                posts = _context2.sent;
                _context2.next = 6;
                return posts.data.map(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(post, i) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this3.state.entries.push(_react2.default.createElement(_article2.default, { data: post, key: i }));

                          case 2:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this3);
                  }));

                  return function (_x, _x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 6:
                _context2.next = 8;
                return this.createGrid();

              case 8:
                _context2.next = 10;
                return this.setState({
                  isFull: true
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(nextProps) {
        var _this4 = this;

        var components, posts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.props.data) {
                  _context4.next = 9;
                  break;
                }

                components = [];
                _context4.next = 4;
                return (0, _post.getPostsByUserId)(nextProps.author);

              case 4:
                posts = _context4.sent;
                _context4.next = 7;
                return posts.data.map(function () {
                  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(post, i) {
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return components.push(_react2.default.createElement(_article2.default, { data: post, key: i }));

                          case 2:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this4);
                  }));

                  return function (_x4, _x5) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 7:
                _context4.next = 9;
                return this.setState({
                  entries: components
                });

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentWillReceiveProps(_x3) {
        return _ref3.apply(this, arguments);
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'createGrid',
    value: function createGrid() {
      var Isotope = require('isotope-layout');
      var imagesLoaded = require('imagesloaded');

      imagesLoaded('.grid', function () {
        var grid = new Isotope('.grid', {
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-sizer',
            gutterWidth: 10
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var posts = this.state.entries;
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'grid' }, _react2.default.createElement('div', { className: 'grid-sizer' }), posts), !this.state.isFull ? _react2.default.createElement(_loader2.default, null) : '');
    }
  }]);

  return Feed;
}(_react2.default.Component);

exports.default = Feed;