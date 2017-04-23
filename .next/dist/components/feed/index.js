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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\feed\\index.js';


var Feed = function (_React$Component) {
  (0, _inherits3.default)(Feed, _React$Component);

  function Feed(props) {
    (0, _classCallCheck3.default)(this, Feed);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Feed.__proto__ || (0, _getPrototypeOf2.default)(Feed)).call(this, props));

    _this2.state = {
      perPage: 4,
      page: 0,
      isFull: false,
      scrolled: 0,
      elements: [],
      masonry: [],
      templates: { article: _article2.default, listarticle: _listArticle2.default },
      articles: [{
        title: 'Как мы делали ML Boot Camp III',
        description: '19 \u043C\u0430\u0440\u0442\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F \u0442\u0440\u0435\u0442\u0438\u0439 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442 \u043F\u043E \u043C\u0430\u0448\u0438\u043D\u043D\u043E\u043C\u0443 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 ML Boot Camp. 614 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043F\u0440\u0438\u0441\u043B\u0430\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0431\u043E\u0440\u043E\u043B\u0438\u0441\u044C \u0437\u0430 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0440\u0438\u0437 \u30FC MacBook Air.',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/files/0ec/0e9/24f/0ec0e924f02b4743ae92dc48289d4983.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 100
      }, {
        title: 'Натив или гибрид? Специалисты Яндекса отвечают на главный вопрос мобильной разработки',
        description: '\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0447\u0435\u0442\u044B\u0440\u0435 \u0434\u043D\u044F \u0434\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430, \u043A\u043E\u0433\u0434\u0430 \u043C\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u0439 \xAB\u041C\u043E\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438\xBB \u042F\u043D\u0434\u0435\u043A\u0441\u0430.',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/files/3ec/aca/8e0/3ecaca8e03314c638b679c2cd68b3115.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 50
      }, {
        title: 'Опыт внедрения Tarantool в сервисе Calltouch',
        description: '\u0412 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u043C\u0438\u0440\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0443 \u0432\u0441\u0435\u0445 \u2014 \u0438 \u0443 \u043A\u0440\u0443\u043F\u043D\u044B\u0445, \u0438 \u0443 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u2014 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 API.',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/files/656/391/54f/65639154fc194c6589bf230e85c46cc1.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 50
      }, {
        title: 'Как я возил робота, чуть не поседел и залил кровью серверную',
        description: '\u042D\u0442\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0432\u0448\u0438\u0445\u0441\u044F \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0432 \u043C\u043E\u0435\u0439 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435. \u041F\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u044F \u043F\u043E\u043C\u0435\u043D\u044F\u043B \u0438\u043C\u0435\u043D\u0430, \u043C\u0435\u0441\u0442\u0430 \u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0437\u043D\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u044B\u043B\u043E \u0442\u043E\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. ',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/getpro/habr/post_images/797/933/d8a/797933d8a7cc536bfaba42021078fa00.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 100
      }, {
        title: 'Как мы делали ML Boot Camp III',
        description: '19 \u043C\u0430\u0440\u0442\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F \u0442\u0440\u0435\u0442\u0438\u0439 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442 \u043F\u043E \u043C\u0430\u0448\u0438\u043D\u043D\u043E\u043C\u0443 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 ML Boot Camp. 614 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043F\u0440\u0438\u0441\u043B\u0430\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0431\u043E\u0440\u043E\u043B\u0438\u0441\u044C \u0437\u0430 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0440\u0438\u0437 \u30FC MacBook Air.',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/files/0ec/0e9/24f/0ec0e924f02b4743ae92dc48289d4983.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 100
      }, {
        title: 'Натив или гибрид? Специалисты Яндекса отвечают на главный вопрос мобильной разработки',
        description: '\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0447\u0435\u0442\u044B\u0440\u0435 \u0434\u043D\u044F \u0434\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430, \u043A\u043E\u0433\u0434\u0430 \u043C\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u0439 \xAB\u041C\u043E\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438\xBB \u042F\u043D\u0434\u0435\u043A\u0441\u0430.',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/files/3ec/aca/8e0/3ecaca8e03314c638b679c2cd68b3115.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 50
      }, {
        title: 'Опыт внедрения Tarantool в сервисе Calltouch',
        description: '\u0412 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u043C\u0438\u0440\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0443 \u0432\u0441\u0435\u0445 \u2014 \u0438 \u0443 \u043A\u0440\u0443\u043F\u043D\u044B\u0445, \u0438 \u0443 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u2014 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 API.',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/files/656/391/54f/65639154fc194c6589bf230e85c46cc1.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 50
      }, {
        title: 'Как я возил робота, чуть не поседел и залил кровью серверную',
        description: '\u042D\u0442\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0432\u0448\u0438\u0445\u0441\u044F \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0432 \u043C\u043E\u0435\u0439 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435. \u041F\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u044F \u043F\u043E\u043C\u0435\u043D\u044F\u043B \u0438\u043C\u0435\u043D\u0430, \u043C\u0435\u0441\u0442\u0430 \u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0437\u043D\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u044B\u043B\u043E \u0442\u043E\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. ',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/getpro/habr/post_images/797/933/d8a/797933d8a7cc536bfaba42021078fa00.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 100
      }, {
        title: 'Как я возил робота, чуть не поседел и залил кровью серверную',
        description: '\u042D\u0442\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0432\u0448\u0438\u0445\u0441\u044F \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0432 \u043C\u043E\u0435\u0439 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435. \u041F\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u044F \u043F\u043E\u043C\u0435\u043D\u044F\u043B \u0438\u043C\u0435\u043D\u0430, \u043C\u0435\u0441\u0442\u0430 \u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0437\u043D\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u044B\u043B\u043E \u0442\u043E\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. ',
        meta: {
          likes: 20,
          comments: 13
        },
        image: 'https://habrastorage.org/getpro/habr/post_images/797/933/d8a/797933d8a7cc536bfaba42021078fa00.jpg',
        author: {
          name: 'Иван К.',
          description: 'Программист'
        },
        size: 100
      }]
    };
    return _this2;
  }

  (0, _createClass3.default)(Feed, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.createGrid();
      $('.grid').css({ height: 0 });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      for (var i = 0; i < this.state.perPage; i++) {
        this.state.elements.push(_react2.default.createElement(_article2.default, { data: this.state.articles[i], key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }));
      }
    }
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
            columnWidth: '.grid-sizer'
          }
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.pushItems();
      this.createGrid();
      this.createEventListeners();
    }
  }, {
    key: 'pushItems',
    value: function pushItems() {
      var loaded = this.state.perPage * this.state.page;
      var lost = this.state.articles.length % this.state.perPage;
      var pages = (this.state.articles.length - lost) / this.state.perPage;
      var SpecifiedArticle = this.state.templates[this.props.template];

      if (loaded < this.state.articles.length) {
        if (this.state.page != pages) {
          for (var i = loaded; i < loaded + this.state.perPage; i++) {
            this.state.masonry.push(_react2.default.createElement(SpecifiedArticle, { data: this.state.articles[i], key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              }
            }));
          }
        } else {
          for (var i = loaded; i < loaded + lost; i++) {
            this.state.masonry.push(_react2.default.createElement(SpecifiedArticle, { data: this.state.articles[i], key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              }
            }));
          }
        }
      } else {
        this.setState({
          isFull: true
        });
      }

      this.state.page = this.state.page + 1;
      this.createGrid();
    }
  }, {
    key: 'createEventListeners',
    value: function createEventListeners() {
      var _this3 = this;

      var feed = document.querySelector('.feed');

      window.startInterval = setInterval(function () {
        if (!_this3.state.isFull) {
          _this3.handleScroll(feed, feed.clientHeight);
          _this3.setState({
            scrolled: document.body.scrollTop
          });
        }
      }, 1000);

      var _this = this;
      window.createGrid = new Event('createGrid');
      document.addEventListener('createGrid', function (e) {
        _this.createGrid();
      }, true);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(container, height) {
      var scrolled = this.state.scrolled;
      if ($(".loader.active").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        this.pushItems();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {}
  }, {
    key: 'render',
    value: function render() {

      var posts = !this.state.masonry.length ? this.state.elements : this.state.masonry;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement('div', { className: 'grid', __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement('div', { className: 'grid-sizer', __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }), posts), !this.state.isFull ? _react2.default.createElement(_loader2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }) : '');
    }
  }]);

  return Feed;
}(_react2.default.Component);

exports.default = Feed;