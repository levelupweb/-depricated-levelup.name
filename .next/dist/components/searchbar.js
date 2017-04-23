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

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\searchbar.js';


var SearchBar = function (_React$Component) {
  (0, _inherits3.default)(SearchBar, _React$Component);

  function SearchBar(props) {
    (0, _classCallCheck3.default)(this, SearchBar);

    return (0, _possibleConstructorReturn3.default)(this, (SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call(this, props));
  }

  (0, _createClass3.default)(SearchBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { type: 'text', ref: function ref(input) {
          return input && input.focus();
        }, className: 'search-input', placeholder: '\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u043C \u0438\u0441\u043A\u0430\u0442\u044C?', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      });
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state.header;
})(SearchBar);