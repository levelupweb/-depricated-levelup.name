"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\www\\Levelup.name\\components\\flashpost.js";


var FlashPost = function (_React$Component) {
  (0, _inherits3.default)(FlashPost, _React$Component);

  function FlashPost(props) {
    (0, _classCallCheck3.default)(this, FlashPost);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FlashPost.__proto__ || (0, _getPrototypeOf2.default)(FlashPost)).call(this, props));

    _this.state = {
      flashpost: {
        revealed: false
      }
    };
    return _this;
  }

  (0, _createClass3.default)(FlashPost, [{
    key: "revealFlashPost",
    value: function revealFlashPost() {
      this.setState({
        flashpost: {
          revealed: true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", { className: this.state.flashpost.revealed ? "revealed flashpost" : "flashpost", onClick: function onClick() {
          _this2.revealFlashPost();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("form", { className: "ui form", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("div", { className: "field", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement("div", { className: "user", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("i", { className: "fa fa-paper-plane", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement("img", { className: "rounded image ui", src: "../static/img/avatar.png", width: "40px", height: "40px", __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement("textarea", { rows: "2", placeholder: "\u041E \u0447\u0435\u043C \u0431\u044B \u0432\u044B \u0445\u043E\u0442\u0435\u043B\u0438 \u0441\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C?", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement("div", { className: "bar", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement("button", { className: "medium circular ui button primary", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440")))));
    }
  }]);

  return FlashPost;
}(_react2.default.Component);

exports.default = FlashPost;