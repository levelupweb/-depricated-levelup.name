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

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. Исправить косяк с Checksum
// 2. Сделать сохранение кнопкой
// 3. Сделать загрузку изображений
// 4. Добавить раздел "Описание"
// 5. Сделать тулбар расширяемым для маленьких экранов

var Editor = function (_Component) {
  (0, _inherits3.default)(Editor, _Component);

  function Editor(props) {
    (0, _classCallCheck3.default)(this, Editor);

    return (0, _possibleConstructorReturn3.default)(this, (Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).call(this, props));
  }

  (0, _createClass3.default)(Editor, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      try {
        this.quillreact = require('react-quill');
        var Quill = this.quillreact.Quill;

        var Inline = Quill.import('blots/inline');
        var icons = Quill.import('ui/icons');

        // Handle custom toolbar options

        var HeaderBlot1 = function (_Inline) {
          (0, _inherits3.default)(HeaderBlot1, _Inline);

          function HeaderBlot1() {
            (0, _classCallCheck3.default)(this, HeaderBlot1);

            return (0, _possibleConstructorReturn3.default)(this, (HeaderBlot1.__proto__ || (0, _getPrototypeOf2.default)(HeaderBlot1)).apply(this, arguments));
          }

          return HeaderBlot1;
        }(Inline);

        HeaderBlot1.blotName = 'header1';
        HeaderBlot1.tagName = 'h1';
        Quill.register(HeaderBlot1);

        var HeaderBlot2 = function (_Inline2) {
          (0, _inherits3.default)(HeaderBlot2, _Inline2);

          function HeaderBlot2() {
            (0, _classCallCheck3.default)(this, HeaderBlot2);

            return (0, _possibleConstructorReturn3.default)(this, (HeaderBlot2.__proto__ || (0, _getPrototypeOf2.default)(HeaderBlot2)).apply(this, arguments));
          }

          return HeaderBlot2;
        }(Inline);

        HeaderBlot2.blotName = 'header2';
        HeaderBlot2.tagName = 'h2';
        Quill.register(HeaderBlot2);

        // Handle custom icons
        icons['header1'] = '<div><i class="fa fa-header" aria-hidden="true"></i><div class="floating ui label">1</div></div>';
        icons['header2'] = '<div><i class="fa fa-header" aria-hidden="true"></i><div class="floating ui label">2</div></div>';

        // Setting default options
        this.modules = {
          toolbar: [['header1', 'header2', 'italic', 'underline', 'strike', 'blockquote'], [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['link', 'image'], ['clean']]
        };

        this.formats = ['header1', 'header2', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image'];
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Quill = this.quillreact;
      if (Quill) {
        return _react2.default.createElement('div', null, _react2.default.createElement(Quill, {
          value: this.props.value,
          placeholder: '\u0412\u0430\u0448 \u0442\u0435\u043A\u0441\u0442 \u0437\u0434\u0435\u0441\u044C...',
          modules: this.modules,
          formats: this.formats,
          onChange: this.props.onChange
        }));
      } else {
        return _react2.default.createElement(_loader2.default, null);
      }
    }
  }]);

  return Editor;
}(_react.Component);

exports.default = Editor;