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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagsList = function (_React$Component) {
  (0, _inherits3.default)(TagsList, _React$Component);

  function TagsList(props) {
    (0, _classCallCheck3.default)(this, TagsList);

    return (0, _possibleConstructorReturn3.default)(this, (TagsList.__proto__ || (0, _getPrototypeOf2.default)(TagsList)).call(this, props));
  }

  (0, _createClass3.default)(TagsList, [{
    key: 'render',
    value: function render() {
      if (this.props.tags.length > 0) {
        return _react2.default.createElement('div', { className: 'tag-list' }, this.props.tags.map(function (item) {
          return _react2.default.createElement(Tag, { tag: item, key: item.id });
        }));
      } else {
        return _react2.default.createElement('div', { className: 'no-content' }, _react2.default.createElement('p', null, '\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442'));
      }
    }
  }]);

  return TagsList;
}(_react2.default.Component);

exports.default = TagsList;


var Tag = function Tag(props) {
  return _react2.default.createElement('div', { className: 'tag' }, _react2.default.createElement('a', { href: '#' }, props.tag));
};