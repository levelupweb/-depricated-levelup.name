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
      var description = this.stripHTML(this.state.postContent.substring(0, 200));
      this.setState({
        postDescription: description
      });
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
      var description = post.postContent.substring(0, 200);

      return _react2.default.createElement('article', { className: 'article preview grid-item w-100', 'data-jsx': 3338626765
      }, _react2.default.createElement(_user2.default, { id: post.postAuthor }), _react2.default.createElement('div', { className: 'image', 'data-jsx': 3338626765
      }, _react2.default.createElement('img', { src: post.postImage, className: 'rounded ui image fluid', 'data-jsx': 3338626765
      })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3338626765
      }, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { slug: post.slug } } }, _react2.default.createElement('a', {
        'data-jsx': 3338626765
      }, _react2.default.createElement('h1', {
        'data-jsx': 3338626765
      }, post.postTitle))), _react2.default.createElement('p', { className: 'primary', 'data-jsx': 3338626765
      }, post.postDescription)), _react2.default.createElement('div', { className: 'meta', 'data-jsx': 3338626765
      }, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { slug: post.slug } } }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, '\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435')), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, _react2.default.createElement('i', { className: 'fa fa-comment-o', 'data-jsx': 3338626765
      }), ' ', comments), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, _react2.default.createElement('i', { className: 'fa fa-heart-o', 'data-jsx': 3338626765
      }), ' ', likes)), _react2.default.createElement(_style2.default, {
        styleId: 3338626765,
        css: '.article.preview[data-jsx="3338626765"] .meta[data-jsx="3338626765"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVrQixBQUNhLHNFQUNQLGdCQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxmZWVkXFxhcnRpY2xlLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXInXHJcbmltcG9ydCB7IGdldFBvc3RDb21tZW50c0J5UG9zdElkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tZW50LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHQuLi50aGlzLnByb3BzLmRhdGFcclxuICBcdH0pXHJcblxyXG4gICAgZ2V0UG9zdENvbW1lbnRzQnlQb3N0SWQodGhpcy5wcm9wcy5kYXRhLl9pZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgY29tbWVudHM6IHJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgXHR2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnN0cmlwSFRNTCh0aGlzLnN0YXRlLnBvc3RDb250ZW50LnN1YnN0cmluZygwLCAyMDApKVxyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgXHRcdHBvc3REZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICBcdH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5zdHJpcEhUTUwobmV4dFByb3BzLmRhdGEucG9zdENvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCkpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4ubmV4dFByb3BzLmRhdGEsXHJcbiAgICAgIHBvc3REZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdHJpcEhUTUwoaHRtbCkge1xyXG4gIFx0dmFyIHN0cmlwID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvc3RyaXBIVE1MLmpzJykuc3RyaXA7XHJcbiAgXHRyZXR1cm4gc3RyaXAoaHRtbClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICBcdHZhciBwb3N0ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmKHBvc3QuY29tbWVudHMpIHsgXHJcbiAgICAgIHZhciBjb21tZW50cyA9IHBvc3QuY29tbWVudHMubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNvbW1lbnRzID0gYGA7XHJcbiAgICB9XHJcbiAgICB2YXIgbGlrZXMgPSBwb3N0LnBvc3RMaWtlcy5sZW5ndGhcclxuICBcdHZhciBkZXNjcmlwdGlvbiA9IHBvc3QucG9zdENvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtgYXJ0aWNsZSBwcmV2aWV3IGdyaWQtaXRlbSB3LTEwMGB9PlxyXG4gICAgXHRcdDxVc2VyIGlkPXtwb3N0LnBvc3RBdXRob3J9IC8+XHJcbiAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgXHRcdFx0PGltZyBzcmM9e3Bvc3QucG9zdEltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkIHVpIGltYWdlIGZsdWlkXCIgLz5cclxuICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgIFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdwb3N0JywgcXVlcnk6IHsgc2x1ZzogcG9zdC5zbHVnIH19fT5cclxuICAgIFx0XHRcdFx0PGE+PGgxPntwb3N0LnBvc3RUaXRsZX08L2gxPjwvYT5cclxuICAgIFx0XHRcdDwvTGluaz5cclxuICAgIFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaW1hcnlcIj57cG9zdC5wb3N0RGVzY3JpcHRpb259PC9wPlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgIFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdwb3N0JywgcXVlcnk6IHsgc2x1ZzogcG9zdC5zbHVnIH19fT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPtCn0LjRgtCw0YLRjCDQtNCw0LvQtdC1PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgXHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnQtb1wiPjwvaT4ge2NvbW1lbnRzfTwvYT5cclxuICAgIFx0XHQgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIj48L2k+IHtsaWtlc308L2E+XHJcbiAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgXHRcdDxzdHlsZSBqc3g+e2BcclxuICAgIFx0XHRcdC5hcnRpY2xlLnByZXZpZXcgLm1ldGEge1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0YH08L3N0eWxlPlxyXG4gICAgXHQ8L2FydGljbGU+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\feed\\article.js */'
      }));
    }
  }]);

  return Article;
}(_react2.default.Component);

exports.default = Article;