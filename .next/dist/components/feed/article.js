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
      }, _react2.default.createElement('a', { className: 'item', href: '#', 'data-jsx': 3338626765
      }, '\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, _react2.default.createElement('i', { className: 'fa fa-comment-o', 'data-jsx': 3338626765
      }), ' 10'), _react2.default.createElement('a', { className: 'item', 'data-jsx': 3338626765
      }, _react2.default.createElement('i', { className: 'fa fa-heart-o', 'data-jsx': 3338626765
      }), ' ', post.postLikes)), _react2.default.createElement(_style2.default, {
        styleId: 3338626765,
        css: '.article.preview[data-jsx="3338626765"] .meta[data-jsx="3338626765"] {margin-top:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZlZWRcXGFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUNhLHNFQUNQLGdCQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxmZWVkXFxhcnRpY2xlLmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgXHRcdC4uLnRoaXMucHJvcHMuZGF0YVxyXG4gIFx0fSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIFx0dmFyIGRlc2NyaXB0aW9uID0gdGhpcy5zdHJpcEhUTUwodGhpcy5zdGF0ZS5wb3N0Q29udGVudC5zdWJzdHJpbmcoMCwgMjAwKSlcclxuICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRwb3N0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgXHR9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMuc3RyaXBIVE1MKG5leHRQcm9wcy5kYXRhLnBvc3RDb250ZW50LnN1YnN0cmluZygwLCAyMDApKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLm5leHRQcm9wcy5kYXRhLFxyXG4gICAgICBwb3N0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RyaXBIVE1MKGh0bWwpIHtcclxuICBcdHZhciBzdHJpcCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3N0cmlwSFRNTC5qcycpLnN0cmlwO1xyXG4gIFx0cmV0dXJuIHN0cmlwKGh0bWwpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgXHR2YXIgcG9zdCA9IHRoaXMuc3RhdGU7XHJcbiAgXHR2YXIgZGVzY3JpcHRpb24gPSBwb3N0LnBvc3RDb250ZW50LnN1YnN0cmluZygwLCAyMDApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtgYXJ0aWNsZSBwcmV2aWV3IGdyaWQtaXRlbSB3LTEwMGB9PlxyXG4gICAgXHRcdDxVc2VyIGlkPXtwb3N0LnBvc3RBdXRob3J9IC8+XHJcbiAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgXHRcdFx0PGltZyBzcmM9e3Bvc3QucG9zdEltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkIHVpIGltYWdlIGZsdWlkXCIgLz5cclxuICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgIFx0XHRcdDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICdwb3N0JywgcXVlcnk6IHsgc2x1ZzogcG9zdC5zbHVnIH19fT5cclxuICAgIFx0XHRcdFx0PGE+PGgxPntwb3N0LnBvc3RUaXRsZX08L2gxPjwvYT5cclxuICAgIFx0XHRcdDwvTGluaz5cclxuICAgIFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaW1hcnlcIj57cG9zdC5wb3N0RGVzY3JpcHRpb259PC9wPlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgIFx0XHRcdDxhIGNsYXNzTmFtZT1cIml0ZW1cIiBocmVmPVwiI1wiPtCn0LjRgtCw0YLRjCDQtNCw0LvQtdC1PC9hPlxyXG4gICAgXHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnQtb1wiPjwvaT4gMTA8L2E+XHJcbiAgICBcdFx0ICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydC1vXCI+PC9pPiB7cG9zdC5wb3N0TGlrZXN9PC9hPlxyXG4gICAgXHRcdDwvZGl2PlxyXG5cclxuICAgIFx0XHQ8c3R5bGUganN4PntgXHJcbiAgICBcdFx0XHQuYXJ0aWNsZS5wcmV2aWV3IC5tZXRhIHtcclxuICAgIFx0XHRcdFx0bWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdGB9PC9zdHlsZT5cclxuICAgIFx0PC9hcnRpY2xlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\feed\\article.js */'
      }));
    }
  }]);

  return Article;
}(_react2.default.Component);

exports.default = Article;