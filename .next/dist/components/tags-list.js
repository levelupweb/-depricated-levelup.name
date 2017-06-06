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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _tag = require('../actions/tag.js');

var _loader = require('./loader.js');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Компонент принимает userID или выводит список популярных

var TagsList = function (_React$Component) {
  (0, _inherits3.default)(TagsList, _React$Component);

  function TagsList(props) {
    (0, _classCallCheck3.default)(this, TagsList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TagsList.__proto__ || (0, _getPrototypeOf2.default)(TagsList)).call(this, props));

    _this.state = {
      tags: [],
      isLoaded: false
    };
    return _this;
  }

  (0, _createClass3.default)(TagsList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.tagsdata === undefined) {
        if (this.props.subscriber === undefined) {
          (0, _tag.getAllTags)().then(function (res) {
            _this2.setState({
              tags: res.data
            });
          });
        } else {
          (0, _tag.getUserTags)(this.props.subscriber).then(function (res) {
            _this2.setState({
              tags: res.data
            });
          });
        }
      } else {
        this.setState({
          tags: this.props.tagsdata
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState((0, _extends3.default)({}, this.state, {
        isLoaded: true
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isLoaded) {
        if (this.state.tags.length == 0) {
          return _react2.default.createElement('div', { className: 'no-content' }, _react2.default.createElement('p', null, '\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442'));
        } else {
          return _react2.default.createElement('div', { className: 'tag-list' }, this.state.tags.map(function (item) {
            return _react2.default.createElement(Tag, { tagData: item, key: item._id });
          }));
        }
      } else {
        return _react2.default.createElement(_loader2.default, null);
      }
    }
  }]);

  return TagsList;
}(_react2.default.Component);

exports.default = TagsList;


var Tag = function (_React$Component2) {
  (0, _inherits3.default)(Tag, _React$Component2);

  function Tag(props) {
    (0, _classCallCheck3.default)(this, Tag);

    return (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).call(this, props));
  }

  (0, _createClass3.default)(Tag, [{
    key: 'render',
    value: function render() {
      var tag = this.props.tagData;
      return _react2.default.createElement('div', { className: 'tag' }, _react2.default.createElement(_link2.default, { href: { pathname: 'explore', query: { search: tag.slug } } }, _react2.default.createElement('a', null, tag.tagTitle)));
    }
  }]);

  return Tag;
}(_react2.default.Component);