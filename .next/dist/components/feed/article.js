'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blank = undefined;

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

var _loader = require('../loader.js');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function (_React$Component) {
  (0, _inherits3.default)(Article, _React$Component);

  function Article(props) {
    (0, _classCallCheck3.default)(this, Article);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));

    _this.state = {
      article: null
    };
    return _this;
  }

  (0, _createClass3.default)(Article, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        article: (0, _extends3.default)({}, this.props.article)
      });

      // Количество комментариев и лайков добавить в схему POST
      (0, _comment.getPostCommentsByPostId)(this.props.article._id).then(function (res) {
        _this2.setState((0, _extends3.default)({}, _this2.state, {
          comments: res.data
        }));
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.article.postContent) {
        var description = this.stripHTML(this.state.article.postContent.substring(0, 200));
        this.setState({
          article: (0, _extends3.default)({}, this.state.article, {
            postDescription: description
          })
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var description = this.stripHTML(nextProps.article.postContent.substring(0, 200));
      this.setState({
        article: (0, _extends3.default)({}, nextProps.article, {
          postDescription: description
        })
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
      if (this.state.article) {
        var post = this.state.article;
        if (post.comments) {
          var comments = post.comments.length;
        } else {
          var comments = '';
        }
        var likes = post.postLikes.length;
        return _react2.default.createElement('article', { className: 'article preview grid-item w-100', 'data-jsx': 1695141325
        }, _react2.default.createElement(_user2.default, { id: post.postAuthor }), _react2.default.createElement('div', { className: 'image', 'data-jsx': 1695141325
        }, _react2.default.createElement('img', { src: post.postImage, className: 'rounded ui image fluid', 'data-jsx': 1695141325
        })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 1695141325
        }, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { slug: post.slug } } }, _react2.default.createElement('a', {
          'data-jsx': 1695141325
        }, _react2.default.createElement('h1', {
          'data-jsx': 1695141325
        }, post.postTitle))), _react2.default.createElement('p', { className: 'primary', 'data-jsx': 1695141325
        }, post.postDescription ? post.postDescription : '')), _react2.default.createElement('div', { className: 'meta', 'data-jsx': 1695141325
        }, _react2.default.createElement(_link2.default, { href: { pathname: 'post', query: { slug: post.slug } } }, _react2.default.createElement('a', { className: 'item', 'data-jsx': 1695141325
        }, '\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435')), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1695141325
        }, _react2.default.createElement('i', { className: 'fa fa-comment-o', 'data-jsx': 1695141325
        }), ' ', comments), _react2.default.createElement('a', { className: 'item', 'data-jsx': 1695141325
        }, _react2.default.createElement('i', { className: 'fa fa-heart-o', 'data-jsx': 1695141325
        }), ' ', likes)), _react2.default.createElement(_style2.default, {
          styleId: 1695141325,
          css: '.article.preview[data-jsx="1695141325"] .meta[data-jsx="1695141325"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZvQixBQUNhLHNFQUNQLGdCQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxmZWVkXFxhcnRpY2xlLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXInXHJcbmltcG9ydCB7IGdldFBvc3RDb21tZW50c0J5UG9zdElkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tZW50LmpzJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhcnRpY2xlOiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgXHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0YXJ0aWNsZToge1xyXG4gICAgICAgIC4uLnRoaXMucHJvcHMuYXJ0aWNsZVxyXG4gICAgICB9XHJcbiAgXHR9KVxyXG5cclxuICAgIC8vINCa0L7Qu9C40YfQtdGB0YLQstC+INC60L7QvNC80LXQvdGC0LDRgNC40LXQsiDQuCDQu9Cw0LnQutC+0LIg0LTQvtCx0LDQstC40YLRjCDQsiDRgdGF0LXQvNGDIFBPU1RcclxuICAgIGdldFBvc3RDb21tZW50c0J5UG9zdElkKHRoaXMucHJvcHMuYXJ0aWNsZS5faWQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiByZXMuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5hcnRpY2xlLnBvc3RDb250ZW50KSB7IFxyXG4gICAgXHR2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnN0cmlwSFRNTCh0aGlzLnN0YXRlLmFydGljbGUucG9zdENvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCkpXHJcbiAgICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGFydGljbGUgOiB7XHJcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmFydGljbGUsXHJcbiAgICBcdFx0ICBwb3N0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXHR9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMuc3RyaXBIVE1MKG5leHRQcm9wcy5hcnRpY2xlLnBvc3RDb250ZW50LnN1YnN0cmluZygwLCAyMDApKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAuLi5uZXh0UHJvcHMuYXJ0aWNsZSxcclxuICAgICAgICBwb3N0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdHJpcEhUTUwoaHRtbCkge1xyXG4gIFx0dmFyIHN0cmlwID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvc3RyaXBIVE1MLmpzJykuc3RyaXA7XHJcbiAgXHRyZXR1cm4gc3RyaXAoaHRtbClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuYXJ0aWNsZSkgeyBcclxuICAgICAgdmFyIHBvc3QgPSB0aGlzLnN0YXRlLmFydGljbGU7XHJcbiAgICAgIGlmKHBvc3QuY29tbWVudHMpIHsgXHJcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gcG9zdC5jb21tZW50cy5sZW5ndGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gYGA7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGxpa2VzID0gcG9zdC5wb3N0TGlrZXMubGVuZ3RoXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtgYXJ0aWNsZSBwcmV2aWV3IGdyaWQtaXRlbSB3LTEwMGB9PlxyXG4gICAgICBcdFx0PFVzZXIgaWQ9e3Bvc3QucG9zdEF1dGhvcn0gLz5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgXHRcdFx0PGltZyBzcmM9e3Bvc3QucG9zdEltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkIHVpIGltYWdlIGZsdWlkXCIgLz5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdwb3N0JywgcXVlcnk6IHsgc2x1ZzogcG9zdC5zbHVnIH19fT5cclxuICAgICAgXHRcdFx0XHQ8YT48aDE+e3Bvc3QucG9zdFRpdGxlfTwvaDE+PC9hPlxyXG4gICAgICBcdFx0XHQ8L0xpbms+XHJcbiAgICAgIFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaW1hcnlcIj57KHBvc3QucG9zdERlc2NyaXB0aW9uKSA/IHBvc3QucG9zdERlc2NyaXB0aW9uIDogJyd9PC9wPlxyXG4gICAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgIFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdwb3N0JywgcXVlcnk6IHsgc2x1ZzogcG9zdC5zbHVnIH19fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+0KfQuNGC0LDRgtGMINC00LDQu9C10LU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgXHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnQtb1wiPjwvaT4ge2NvbW1lbnRzfTwvYT5cclxuICAgICAgXHRcdCAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiPjwvaT4ge2xpa2VzfTwvYT5cclxuICAgICAgXHRcdDwvZGl2PlxyXG5cclxuICAgICAgXHRcdDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHRcdFx0LmFydGljbGUucHJldmlldyAubWV0YSB7XHJcbiAgICAgIFx0XHRcdFx0bWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICBcdFx0XHR9XHJcbiAgICAgIFx0XHRgfTwvc3R5bGU+XHJcbiAgICAgIFx0PC9hcnRpY2xlPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJsYW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBhdmF0YXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhbmsgc3RyaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhbmsgc3RyaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYW5rIGltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYW5rIGhlYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBkZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBkZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBkZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC51c2VyIC5jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\feed\\article.js */'
        }));
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return Article;
}(_react2.default.Component);

exports.default = Article;
var Blank = exports.Blank = function (_React$Component2) {
  (0, _inherits3.default)(Blank, _React$Component2);

  function Blank(props) {
    (0, _classCallCheck3.default)(this, Blank);

    return (0, _possibleConstructorReturn3.default)(this, (Blank.__proto__ || (0, _getPrototypeOf2.default)(Blank)).call(this, props));
  }

  (0, _createClass3.default)(Blank, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 192396095
      }, _react2.default.createElement('div', { className: 'user', 'data-jsx': 192396095
      }, _react2.default.createElement('div', { className: 'image', 'data-jsx': 192396095
      }, _react2.default.createElement('div', { className: 'blank avatar', 'data-jsx': 192396095
      })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 192396095
      }, _react2.default.createElement('div', { className: 'blank string', 'data-jsx': 192396095
      }), _react2.default.createElement('div', { className: 'blank string', 'data-jsx': 192396095
      }))), _react2.default.createElement('div', { className: 'image', 'data-jsx': 192396095
      }, _react2.default.createElement('div', { className: 'blank image', 'data-jsx': 192396095
      })), _react2.default.createElement('div', { className: 'content', 'data-jsx': 192396095
      }, _react2.default.createElement('div', { className: 'blank header', 'data-jsx': 192396095
      }), _react2.default.createElement('div', { className: 'blank description', 'data-jsx': 192396095
      }), _react2.default.createElement('div', { className: 'blank description', 'data-jsx': 192396095
      }), _react2.default.createElement('div', { className: 'blank description', 'data-jsx': 192396095
      })), _react2.default.createElement(_style2.default, {
        styleId: 192396095,
        css: '.user[data-jsx="192396095"] .content[data-jsx="192396095"] {margin-left:15px;}.user[data-jsx="192396095"] {display:-webkit-flex; display:flex;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lvQixBQUNNLDREQUNHLGlCQUNsQixDQUVNLDZCQUNRLG1DQUNNLHNFQUNwQiIsImZpbGUiOiJjb21wb25lbnRzXFxmZWVkXFxhcnRpY2xlLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXInXHJcbmltcG9ydCB7IGdldFBvc3RDb21tZW50c0J5UG9zdElkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tZW50LmpzJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhcnRpY2xlOiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgXHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0YXJ0aWNsZToge1xyXG4gICAgICAgIC4uLnRoaXMucHJvcHMuYXJ0aWNsZVxyXG4gICAgICB9XHJcbiAgXHR9KVxyXG5cclxuICAgIC8vINCa0L7Qu9C40YfQtdGB0YLQstC+INC60L7QvNC80LXQvdGC0LDRgNC40LXQsiDQuCDQu9Cw0LnQutC+0LIg0LTQvtCx0LDQstC40YLRjCDQsiDRgdGF0LXQvNGDIFBPU1RcclxuICAgIGdldFBvc3RDb21tZW50c0J5UG9zdElkKHRoaXMucHJvcHMuYXJ0aWNsZS5faWQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIGNvbW1lbnRzOiByZXMuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5hcnRpY2xlLnBvc3RDb250ZW50KSB7IFxyXG4gICAgXHR2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnN0cmlwSFRNTCh0aGlzLnN0YXRlLmFydGljbGUucG9zdENvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCkpXHJcbiAgICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGFydGljbGUgOiB7XHJcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmFydGljbGUsXHJcbiAgICBcdFx0ICBwb3N0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXHR9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMuc3RyaXBIVE1MKG5leHRQcm9wcy5hcnRpY2xlLnBvc3RDb250ZW50LnN1YnN0cmluZygwLCAyMDApKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAuLi5uZXh0UHJvcHMuYXJ0aWNsZSxcclxuICAgICAgICBwb3N0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdHJpcEhUTUwoaHRtbCkge1xyXG4gIFx0dmFyIHN0cmlwID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvc3RyaXBIVE1MLmpzJykuc3RyaXA7XHJcbiAgXHRyZXR1cm4gc3RyaXAoaHRtbClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuYXJ0aWNsZSkgeyBcclxuICAgICAgdmFyIHBvc3QgPSB0aGlzLnN0YXRlLmFydGljbGU7XHJcbiAgICAgIGlmKHBvc3QuY29tbWVudHMpIHsgXHJcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gcG9zdC5jb21tZW50cy5sZW5ndGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gYGA7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGxpa2VzID0gcG9zdC5wb3N0TGlrZXMubGVuZ3RoXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtgYXJ0aWNsZSBwcmV2aWV3IGdyaWQtaXRlbSB3LTEwMGB9PlxyXG4gICAgICBcdFx0PFVzZXIgaWQ9e3Bvc3QucG9zdEF1dGhvcn0gLz5cclxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgXHRcdFx0PGltZyBzcmM9e3Bvc3QucG9zdEltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkIHVpIGltYWdlIGZsdWlkXCIgLz5cclxuICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdwb3N0JywgcXVlcnk6IHsgc2x1ZzogcG9zdC5zbHVnIH19fT5cclxuICAgICAgXHRcdFx0XHQ8YT48aDE+e3Bvc3QucG9zdFRpdGxlfTwvaDE+PC9hPlxyXG4gICAgICBcdFx0XHQ8L0xpbms+XHJcbiAgICAgIFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaW1hcnlcIj57KHBvc3QucG9zdERlc2NyaXB0aW9uKSA/IHBvc3QucG9zdERlc2NyaXB0aW9uIDogJyd9PC9wPlxyXG4gICAgICBcdFx0PC9kaXY+XHJcblxyXG4gICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgIFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdwb3N0JywgcXVlcnk6IHsgc2x1ZzogcG9zdC5zbHVnIH19fT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+0KfQuNGC0LDRgtGMINC00LDQu9C10LU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgXHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnQtb1wiPjwvaT4ge2NvbW1lbnRzfTwvYT5cclxuICAgICAgXHRcdCAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnQtb1wiPjwvaT4ge2xpa2VzfTwvYT5cclxuICAgICAgXHRcdDwvZGl2PlxyXG5cclxuICAgICAgXHRcdDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHRcdFx0LmFydGljbGUucHJldmlldyAubWV0YSB7XHJcbiAgICAgIFx0XHRcdFx0bWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICBcdFx0XHR9XHJcbiAgICAgIFx0XHRgfTwvc3R5bGU+XHJcbiAgICAgIFx0PC9hcnRpY2xlPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJsYW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBhdmF0YXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhbmsgc3RyaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhbmsgc3RyaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYW5rIGltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYW5rIGhlYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBkZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBkZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFuayBkZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC51c2VyIC5jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\feed\\article.js */'
      }));
    }
  }]);

  return Blank;
}(_react2.default.Component);