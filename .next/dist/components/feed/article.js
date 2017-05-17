'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _user = require('../user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function (_React$Component) {
  (0, _inherits3.default)(Article, _React$Component);

  function Article(props) {
    (0, _classCallCheck3.default)(this, Article);

    return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));
  }

  (0, _createClass3.default)(Article, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState((0, _extends3.default)({}, this.props.data));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var description = this.stripHTML(this.state.postContent.substring(0, 200));
      this.setState({
        postDescription: description
      });
    }
  }, {
    key: 'stripHTML',
    value: function stripHTML(html) {
      var strip = require('../../utils/stripHTML.js').strip;
      return strip(html);
    }
  }, {
    key: 'render',
    value: function render() {
      var post = this.state;
      var description = post.postContent.substring(0, 200);
      return _react2.default.createElement('article', { className: 'article preview grid-item w-100', 'data-jsx': 2213173453
      }, _react2.default.createElement(_user2.default, { id: post.postAuthor }), _react2.default.createElement('div', { className: 'image', 'data-jsx': 2213173453
      }, _react2.default.createElement('img', { src: post.postImage, className: 'rounded ui image fluid', 'data-jsx': 2213173453
      })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 2213173453
      }, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { id: '1' } } }, _react2.default.createElement('a', {
        'data-jsx': 2213173453
      }, _react2.default.createElement('h1', {
        'data-jsx': 2213173453
      }, post.postTitle))), _react2.default.createElement('p', { className: 'primary', 'data-jsx': 2213173453
      }, post.postDescription)), _react2.default.createElement('div', { className: 'meta', 'data-jsx': 2213173453
      }, _react2.default.createElement('a', { className: 'item', href: '#', 'data-jsx': 2213173453
      }, '\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2213173453
      }, _react2.default.createElement('i', { className: 'fa fa-comment-o', 'data-jsx': 2213173453
      }), ' 10'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2213173453
      }, _react2.default.createElement('i', { className: 'fa fa-heart-o', 'data-jsx': 2213173453
      }), ' ', post.postLikes)), _react2.default.createElement(_style2.default, {
        styleId: 2213173453,
        css: '.article.preview[data-jsx="2213173453"] .meta[data-jsx="2213173453"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURjLEFBQ2Esc0VBQ1AsZ0JBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiLCJzb3VyY2VSb290IjoiRTovd3d3L0xldmVsdXAubmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdXNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgXHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0Li4udGhpcy5wcm9wcy5kYXRhXHJcbiAgXHR9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgXHR2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnN0cmlwSFRNTCh0aGlzLnN0YXRlLnBvc3RDb250ZW50LnN1YnN0cmluZygwLCAyMDApKVxyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgXHRcdHBvc3REZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICBcdH0pXHJcbiAgfVxyXG5cclxuICBzdHJpcEhUTUwoaHRtbCkge1xyXG4gIFx0dmFyIHN0cmlwID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvc3RyaXBIVE1MLmpzJykuc3RyaXA7XHJcbiAgXHRyZXR1cm4gc3RyaXAoaHRtbClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICBcdHZhciBwb3N0ID0gdGhpcy5zdGF0ZTtcclxuICBcdHZhciBkZXNjcmlwdGlvbiA9IHBvc3QucG9zdENvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2BhcnRpY2xlIHByZXZpZXcgZ3JpZC1pdGVtIHctMTAwYH0+XHJcblx0XHQ8VXNlciBpZD17cG9zdC5wb3N0QXV0aG9yfSAvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHQ8aW1nIHNyYz17cG9zdC5wb3N0SW1hZ2V9IGNsYXNzTmFtZT1cInJvdW5kZWQgdWkgaW1hZ2UgZmx1aWRcIiAvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3Bvc3QnLCBxdWVyeTogeyBpZDogJzEnIH19fT5cclxuXHRcdFx0XHQ8YT48aDE+e3Bvc3QucG9zdFRpdGxlfTwvaDE+PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHRcdDxwIGNsYXNzTmFtZT1cInByaW1hcnlcIj57cG9zdC5wb3N0RGVzY3JpcHRpb259PC9wPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cIml0ZW1cIiBocmVmPVwiI1wiPtCn0LjRgtCw0YLRjCDQtNCw0LvQtdC1PC9hPlxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudC1vXCI+PC9pPiAxMDwvYT5cclxuXHRcdCAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiPjwvaT4ge3Bvc3QucG9zdExpa2VzfTwvYT5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0LmFydGljbGUucHJldmlldyAubWV0YSB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDoyMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRgfTwvc3R5bGU+XHJcblx0PC9hcnRpY2xlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\feed\\article.js */'
      }));
    }
  }]);

  return Article;
}(_react2.default.Component);

exports.default = Article;