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

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _relateditems = require('./relateditems');

var _relateditems2 = _interopRequireDefault(_relateditems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\post\\postafter.js';


var PostAfter = function (_React$Component) {
  (0, _inherits3.default)(PostAfter, _React$Component);

  function PostAfter(props) {
    (0, _classCallCheck3.default)(this, PostAfter);

    return (0, _possibleConstructorReturn3.default)(this, (PostAfter.__proto__ || (0, _getPrototypeOf2.default)(PostAfter)).call(this, props));
  }

  (0, _createClass3.default)(PostAfter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_comments2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('div', { className: 'ui divider', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_relateditems2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }));
    }
  }]);

  return PostAfter;
}(_react2.default.Component);

exports.default = PostAfter;