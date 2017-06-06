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

var _comment = require('../../actions/comment.js');

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
      var _this2 = this;

      this.setState((0, _extends3.default)({}, this.props.data));

      (0, _comment.getPostCommentsByPostId)(this.props.data._id).then(function (res) {
        _this2.setState((0, _extends3.default)({}, _this2.state, {
          comments: res.data
        }));
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.postContent) {
        var description = this.stripHTML(this.state.postContent.substring(0, 200));
        this.setState({
          postDescription: description
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var description = this.stripHTML(nextProps.data.postContent.substring(0, 200));
      this.setState((0, _extends3.default)({}, nextProps.data, {
        postDescription: description
      }));
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
      if (post.comments) {
        var comments = post.comments.length;
      } else {
        var comments = '';
      }
      var likes = post.postLikes.length;

      return _react2.default.createElement('article', { className: 'article preview grid-item w-100', 'data-jsx': 3338626765
      }, _react2.default.createElement(_user2.default, { id: post.postAuthor }), _react2.default.createElement('div', { className: 'image', 'data-jsx': 3338626765
      }, _react2.default.createElement('img', { src: post.postImage, className: 'rounded ui image fluid', 'data-jsx': 3338626765
      })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3338626765
      }, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { slug: post.slug } } }, _react2.default.createElement('a', {
        'data-jsx': 3338626765
      }, _react2.default.createElement('h1', {
        'data-jsx': 3338626765
      }, post.postTitle))), _react2.default.createElement('p', { className: 'primary', 'data-jsx': 3338626765
      }, post.postDescription ? post.postDescription : '')), _react2.default.createElement('div', { className: 'meta', 'data-jsx': 3338626765
      }, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { slug: post.slug } } }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, '\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435')), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, _react2.default.createElement('i', { className: 'fa fa-comment-o', 'data-jsx': 3338626765
      }), ' ', comments), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, _react2.default.createElement('i', { className: 'fa fa-heart-o', 'data-jsx': 3338626765
      }), ' ', likes)), _react2.default.createElement(_style2.default, {
        styleId: 3338626765,
        css: '.article.preview[data-jsx="3338626765"] .meta[data-jsx="3338626765"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVrQixBQUNhLHNFQUNQLGdCQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxmZWVkXFxhcnRpY2xlLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXInXHJcbmltcG9ydCB7IGdldFBvc3RDb21tZW50c0J5UG9zdElkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tZW50LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHQuLi50aGlzLnByb3BzLmRhdGFcclxuICBcdH0pXHJcblxyXG4gICAgZ2V0UG9zdENvbW1lbnRzQnlQb3N0SWQodGhpcy5wcm9wcy5kYXRhLl9pZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnBvc3RDb250ZW50KSB7IFxyXG4gICAgXHR2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnN0cmlwSFRNTCh0aGlzLnN0YXRlLnBvc3RDb250ZW50LnN1YnN0cmluZygwLCAyMDApKVxyXG4gICAgXHR0aGlzLnNldFN0YXRlKHtcclxuICAgIFx0XHRwb3N0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICBcdH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5zdHJpcEhUTUwobmV4dFByb3BzLmRhdGEucG9zdENvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCkpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4ubmV4dFByb3BzLmRhdGEsXHJcbiAgICAgIHBvc3REZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdHJpcEhUTUwoaHRtbCkge1xyXG4gIFx0dmFyIHN0cmlwID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvc3RyaXBIVE1MLmpzJykuc3RyaXA7XHJcbiAgXHRyZXR1cm4gc3RyaXAoaHRtbClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICBcdHZhciBwb3N0ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmKHBvc3QuY29tbWVudHMpIHsgXHJcbiAgICAgIHZhciBjb21tZW50cyA9IHBvc3QuY29tbWVudHMubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNvbW1lbnRzID0gYGA7XHJcbiAgICB9XHJcbiAgICB2YXIgbGlrZXMgPSBwb3N0LnBvc3RMaWtlcy5sZW5ndGhcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2BhcnRpY2xlIHByZXZpZXcgZ3JpZC1pdGVtIHctMTAwYH0+XHJcbiAgICBcdFx0PFVzZXIgaWQ9e3Bvc3QucG9zdEF1dGhvcn0gLz5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICBcdFx0XHQ8aW1nIHNyYz17cG9zdC5wb3N0SW1hZ2V9IGNsYXNzTmFtZT1cInJvdW5kZWQgdWkgaW1hZ2UgZmx1aWRcIiAvPlxyXG4gICAgXHRcdDwvZGl2PlxyXG4gICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgXHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3Bvc3QnLCBxdWVyeTogeyBzbHVnOiBwb3N0LnNsdWcgfX19PlxyXG4gICAgXHRcdFx0XHQ8YT48aDE+e3Bvc3QucG9zdFRpdGxlfTwvaDE+PC9hPlxyXG4gICAgXHRcdFx0PC9MaW5rPlxyXG4gICAgXHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpbWFyeVwiPnsocG9zdC5wb3N0RGVzY3JpcHRpb24pID8gcG9zdC5wb3N0RGVzY3JpcHRpb24gOiAnJ308L3A+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgXHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJ3Bvc3QnLCBxdWVyeTogeyBzbHVnOiBwb3N0LnNsdWcgfX19PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+0KfQuNGC0LDRgtGMINC00LDQu9C10LU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICBcdFx0XHQ8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudC1vXCI+PC9pPiB7Y29tbWVudHN9PC9hPlxyXG4gICAgXHRcdCAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiPjwvaT4ge2xpa2VzfTwvYT5cclxuICAgIFx0XHQ8L2Rpdj5cclxuXHJcbiAgICBcdFx0PHN0eWxlIGpzeD57YFxyXG4gICAgXHRcdFx0LmFydGljbGUucHJldmlldyAubWV0YSB7XHJcbiAgICBcdFx0XHRcdG1hcmdpbi10b3A6MjBweDtcclxuICAgIFx0XHRcdH1cclxuICAgIFx0XHRgfTwvc3R5bGU+XHJcbiAgICBcdDwvYXJ0aWNsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\feed\\article.js */'
      }));
    }
  }]);

  return Article;
}(_react2.default.Component);

exports.default = Article;