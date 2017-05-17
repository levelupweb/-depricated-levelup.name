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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feed = function (_React$Component) {
  (0, _inherits3.default)(Feed, _React$Component);

  function Feed(props) {
    (0, _classCallCheck3.default)(this, Feed);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Feed.__proto__ || (0, _getPrototypeOf2.default)(Feed)).call(this, props));

    _this2.interval = null;
    _this2.state = {
      perPage: 4,
      page: 0,
      isFull: false,
      scrolled: 0,
      entries: [],
      masonry: [],
      templates: { article: _article2.default, listarticle: _listArticle2.default }
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
      var _this3 = this;

      if (this.props.data) {
        this.props.data.post.map(function (item, i) {
          _this3.state.entries.push(_react2.default.createElement(_article2.default, { data: item, key: i }));
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.data) {
        this.state.entries.push(_react2.default.createElement('div', null, 'Hello'));
      }
      //this.pushItems()
      this.createGrid();
      //this.createEventListeners();
      this.setState({
        isFull: true
      });
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
            columnWidth: '.grid-sizer',
            gutterWidth: 10
          }
        });
      });
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
            this.state.masonry.push(_react2.default.createElement(SpecifiedArticle, { data: this.state.articles[i], key: i }));
          }
        } else {
          for (var i = loaded; i < loaded + lost; i++) {
            this.state.masonry.push(_react2.default.createElement(SpecifiedArticle, { data: this.state.articles[i], key: i }));
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
      var _this4 = this;

      var feed = document.querySelector('.feed');
      this.interval = setInterval(function () {
        if (!_this4.state.isFull) {
          _this4.handleScroll(feed, feed.clientHeight);
          _this4.setState({
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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      //var posts = (!this.state.masonry.length) ? this.state.elements : this.state.masonry
      var posts = this.state.entries;
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'grid' }, _react2.default.createElement('div', { className: 'grid-sizer' }), posts), !this.state.isFull ? _react2.default.createElement(_loader2.default, null) : '');
    }
  }]);

  return Feed;
}(_react2.default.Component);

exports.default = Feed;