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

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

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
      return _react2.default.createElement('div', { className: 'feed', 'data-jsx': 3040843798
      }, this.state.entries.length > 0 ? _react2.default.createElement('div', { className: 'grid', 'data-jsx': 3040843798
      }, _react2.default.createElement('div', { className: 'grid-sizer', 'data-jsx': 3040843798
      }), this.state.entries) : _react2.default.createElement('h2', { className: 'ui icon header', 'data-jsx': 3040843798
      }, _react2.default.createElement('i', { className: 'fa fa-bars icon', 'data-jsx': 3040843798
      }), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3040843798
      }, '\u0423\u043F\u0441.. :)', _react2.default.createElement('div', { className: 'sub header', 'data-jsx': 3040843798
      }, '\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E'))), !this.state.isFull ? _react2.default.createElement(_loader2.default, null) : '', _react2.default.createElement(_style2.default, {
        styleId: 3040843798,
        css: '.header[data-jsx="3040843798"] i[data-jsx="3040843798"] {color:#eee;}.feed[data-jsx="3040843798"] {text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHa0IsQUFDQyx5REFDRSxXQUNaLENBQ00sOEJBQ2Esa0JBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZlZWRcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL2FydGljbGUnXHJcbmltcG9ydCBMaXN0QXJ0aWNsZSBmcm9tICcuL2xpc3RBcnRpY2xlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vYXBwLmNvbmZpZy5qcydcclxuaW1wb3J0IHsgZ2V0UG9zdHNCeVVzZXJJZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcG9zdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgXHRwZXJQYWdlOiA0LFxyXG4gICAgXHRwYWdlOiAwLFxyXG4gICAgXHRpc0Z1bGw6IGZhbHNlLFxyXG4gICAgXHRzY3JvbGxlZDogMCxcclxuICAgIFx0ZW50cmllczogW10sXHJcbiAgICBcdG1hc29ucnk6IFtdLFxyXG4gICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAgICBhcnRpY2xlOiBBcnRpY2xlLCBcclxuICAgICAgICBsaXN0YXJ0aWNsZTogTGlzdEFydGljbGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5kYXRhKSB7IFxyXG4gICAgICB0aGlzLnByb3BzLmRhdGEucG9zdC5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlLmVudHJpZXMucHVzaCg8QXJ0aWNsZSBkYXRhPXtpdGVtfSBrZXk9e2l9IC8+KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZighdGhpcy5wcm9wcy5kYXRhKSB7XHJcbiAgICAgIHZhciBwb3N0cyA9IGF3YWl0IGdldFBvc3RzQnlVc2VySWQodGhpcy5wcm9wcy5hdXRob3IpO1xyXG4gICAgICBhd2FpdCBwb3N0cy5kYXRhLm1hcChhc3luYyAocG9zdCwgaSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc3RhdGUuZW50cmllcy5wdXNoKDxBcnRpY2xlIGRhdGE9e3Bvc3R9IGtleT17aX0gLz4pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmNyZWF0ZUdyaWQoKVxyXG4gICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRnVsbDogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZighdGhpcy5wcm9wcy5kYXRhKSB7XHJcbiAgICAgIHZhciBjb21wb25lbnRzID0gW107XHJcbiAgICAgIHZhciBwb3N0cyA9IGF3YWl0IGdldFBvc3RzQnlVc2VySWQobmV4dFByb3BzLmF1dGhvcik7XHJcbiAgICAgIGF3YWl0IHBvc3RzLmRhdGEubWFwKGFzeW5jIChwb3N0LCBpKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY29tcG9uZW50cy5wdXNoKDxBcnRpY2xlIGRhdGE9e3Bvc3R9IGtleT17aX0gLz4pXHJcbiAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGVudHJpZXM6IGNvbXBvbmVudHNcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUdyaWQoKSB7XHJcbiAgXHR2YXIgSXNvdG9wZSA9IHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0Jyk7XHJcbiAgXHR2YXIgaW1hZ2VzTG9hZGVkID0gcmVxdWlyZSgnaW1hZ2VzbG9hZGVkJyk7XHJcblxyXG4gIFx0aW1hZ2VzTG9hZGVkKCcuZ3JpZCcsIGZ1bmN0aW9uKCkge1xyXG5cdCAgXHR2YXIgZ3JpZCA9IG5ldyBJc290b3BlKCcuZ3JpZCcsIHtcclxuXHQgIFx0XHRpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuXHRcdFx0ICBwZXJjZW50UG9zaXRpb246IHRydWUsXHJcblx0XHRcdCAgbWFzb25yeToge1xyXG5cdFx0XHQgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXHJcbiAgICAgICAgICBndXR0ZXJXaWR0aDogMTBcclxuXHRcdFx0ICB9XHJcblx0ICBcdH0pO1x0XHJcblx0IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZFwiPlxyXG4gICAgICB7KHRoaXMuc3RhdGUuZW50cmllcy5sZW5ndGggPiAwKSA/IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXNpemVyXCI+PC9kaXY+XHJcblx0ICAgICAgICAge3RoaXMuc3RhdGUuZW50cmllc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA6IFxyXG4gICAgICAgICA8aDIgY2xhc3NOYW1lPVwidWkgaWNvbiBoZWFkZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnMgaWNvblwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICDQo9C/0YEuLiA6KVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YiBoZWFkZXJcIj7Ql9Cw0L/QuNGB0LXQuSDQvdC1INC90LDQudC00LXQvdC+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICB9XHJcbiAgICAgIHsoIXRoaXMuc3RhdGUuaXNGdWxsKSA/IDxMb2FkZXIgLz4gOiBgYH1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXIgaSB7XHJcbiAgICAgICAgICBjb2xvcjojZWVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmVlZCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHQgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\feed\\index.js */'
      }));
    }
  }]);

  return Feed;
}(_react2.default.Component);

exports.default = Feed;