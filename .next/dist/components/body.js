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

var _menu = require('./header/menu');

var _menu2 = _interopRequireDefault(_menu);

var _reactRedux = require('react-redux');

var _searchbar = require('./searchbar');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _feed = require('./feed/');

var _feed2 = _interopRequireDefault(_feed);

var _header = require('./header/');

var _header2 = _interopRequireDefault(_header);

var _flashpost = require('./flashpost');

var _flashpost2 = _interopRequireDefault(_flashpost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\www\\Levelup.name\\components\\body.js';


var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body(props) {
    (0, _classCallCheck3.default)(this, Body);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).call(this, props));

    _this.state = {
      flashpost: {
        revealed: false
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Body, [{
    key: 'render',
    value: function render() {
      var data = this.props.page,
          title = null,
          children = this.props.children;

      if (data.showTitle) {
        title = _react2.default.createElement('h1', { className: 'ui header', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, data.title, _react2.default.createElement('div', { className: 'sub header', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, data.description));
      }
      return _react2.default.createElement('div', { className: this.props.classnames + ' main', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('div', { className: 'inner', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, data.displayHeader ? _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }) : '', _react2.default.createElement('div', { className: 'after-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', { className: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, data.beforeChildren), _react2.default.createElement('div', { className: '' + data.classnames, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, title, children), data.afterChildren)));
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Body);