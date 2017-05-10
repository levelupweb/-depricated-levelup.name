'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _user = require('../user.js');

var _app = require('../../app.config');

var _app2 = _interopRequireDefault(_app);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Editor = function (_React$Component) {
  (0, _inherits3.default)(Editor, _React$Component);

  function Editor(props) {
    (0, _classCallCheck3.default)(this, Editor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).call(this, props));

    _this.state = {
      post: {
        id: '893nf821fnk',
        postThumbnail: null,
        postTitle: '',
        postTags: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Подготовка разметки
      var Quill = require('quill');
      var options = {
        debug: 'info',
        modules: {
          toolbar: '#toolbar'
        },
        placeholder: 'Compose an epic...'
      };
      var editor = new Quill('#editor', options);
      this.settingTextareaHeight();
      this.postTitle.focus();
    }
  }, {
    key: 'handleThumbnail',
    value: function handleThumbnail() {
      if (!this.state.post.postThumbnail) {
        this.uploader.click();
      } else {
        this.handleDeleteThumbnail();
      }
    }
  }, {
    key: 'settingTextareaHeight',
    value: function settingTextareaHeight() {
      var clientHeight = document.body.clientHeight;
      var headerHeight = this.headerwrapper.clientHeight;
      this.textarea.style.height = clientHeight - headerHeight - 112 + 'px';
    }
  }, {
    key: 'handleTyping',
    value: function handleTyping(e) {
      var value = e.target.value;
      var link = value.replace(/\s/g, '-').toLowerCase();
      this.link.innerHTML = link;
      this.setState((0, _extends3.default)({}, this.state, {
        post: (0, _extends3.default)({}, this.state.post, {
          postTitle: value
        })
      }));
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {}
  }, {
    key: 'parseForm',
    value: function parseForm() {
      //this.editor.querySelector('input')
    }
  }, {
    key: 'handleUpload',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e, id) {
        var _this2 = this;

        var image, formData, url;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                image = e.target.files[0];
                formData = new FormData();
                url = _app2.default.API + 'post/upload';
                _context2.next = 5;
                return formData.append('postThumbnail', image);

              case 5:
                _context2.next = 7;
                return formData.append('postId', id);

              case 7:
                if (!image) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return fetch(url, {
                  method: 'POST',
                  body: formData
                }).then(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(res) {
                    var result;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return res.json();

                          case 2:
                            result = _context.sent;
                            _context.next = 5;
                            return _this2.setThumbnail(result.filename);

                          case 5:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleUpload(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleUpload;
    }()
  }, {
    key: 'setThumbnail',
    value: function setThumbnail(filename) {
      var url = _app2.default.storage + 'posts/' + this.state.post.id + '/' + filename;
      this.setState({
        post: { postThumbnail: url }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      //this.handleStatus('Черновик сохранён')
    }
  }, {
    key: 'handleStatus',
    value: function handleStatus(status) {
      var _this3 = this;

      this.status.innerHTML = status;
      setTimeout(function () {
        _this3.status.innerHTML = '';
      }, 3000);
    }
  }, {
    key: 'getBackground',
    value: function getBackground() {
      if (this.state.post.postThumbnail) {
        return _react2.default.createElement('img', { src: this.state.post.postThumbnail, className: 'header-background-img' });
      }
    }
  }, {
    key: 'handleDeleteThumbnail',
    value: function handleDeleteThumbnail() {
      this.setState({
        post: {
          postThumbnail: null
        }
      });
    }
  }, {
    key: 'handleFirstSave',
    value: function handleFirstSave() {
      if (this.state.post.postTitle != '' && this.state.post.postThumbnail != null) {
        this.handleStatus('Черновик сохранён');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('div', { className: 'editor', ref: function ref(editor) {
          _this4.editor = editor;
        }, 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'header-wrapper', ref: function ref(headerwrapper) {
          _this4.headerwrapper = headerwrapper;
        }, 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'header', ref: function ref(header) {
          _this4.header = header;
        }, 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'header-background', 'data-jsx': 2640144241
      }, _react2.default.createElement('img', { src: this.state.post.postThumbnail, className: 'header-background-img', 'data-jsx': 2640144241
      })), _react2.default.createElement('div', { className: 'header-content block', 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'title', 'data-jsx': 2640144241
      }, _react2.default.createElement(_user.Avatar, { size: 'small' }), _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2640144241
      }, _react2.default.createElement('input', { defaultValue: this.state.post.postTitle, name: 'postTitle', ref: function ref(postTitle) {
          _this4.postTitle = postTitle;
        }, onChange: function onChange(e) {
          _this4.handleTyping(e);
        }, type: 'text', placeholder: '\u0412\u0430\u0448 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A', 'data-jsx': 2640144241
      }), _react2.default.createElement('span', { className: 'sub header', 'data-jsx': 2640144241
      }, 'http://levelup.name/', _react2.default.createElement('span', { ref: function ref(link) {
          _this4.link = link;
        }, 'data-jsx': 2640144241
      }, '\u0441\u0441\u044B\u043B\u043A\u0430')))), _react2.default.createElement('div', { className: 'action', 'data-jsx': 2640144241
      }, _react2.default.createElement('span', { className: 'status', ref: function ref(status) {
          _this4.status = status;
        }, 'data-jsx': 2640144241
      }), _react2.default.createElement('button', { className: 'ui primary basic button circular large', onClick: function onClick() {
          _this4.handleSave();
        }, 'data-jsx': 2640144241
      }, '\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C'))), _react2.default.createElement('div', { className: 'thumbnail', onClick: function onClick() {
          _this4.handleThumbnail();
        }, ref: function ref(thumbnail) {
          _this4.thumbnail = thumbnail;
        }, 'data-jsx': 2640144241
      }, _react2.default.createElement('input', { onChange: function onChange(e) {
          _this4.handleUpload(e, _this4.state.post.id);
        }, ref: function ref(uploader) {
          _this4.uploader = uploader;
        }, type: 'file', name: 'postThumbnail', 'data-jsx': 2640144241
      }), _react2.default.createElement('span', {
        'data-jsx': 2640144241
      }, this.state.post.postThumbnail == null ? _react2.default.createElement('span', {
        'data-jsx': 2640144241
      }, '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435') : _react2.default.createElement('span', { onClick: function onClick() {
          _this4.handleDeleteThumbnail();
        }, 'data-jsx': 2640144241
      }, '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'))))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'block block-shadow floating', 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'tags', 'data-jsx': 2640144241
      }, _react2.default.createElement('input', { defaultValue: this.state.post.postTags, name: 'postTags', type: 'text', placeholder: '\u0412\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u0435\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E', 'data-jsx': 2640144241
      }))), _react2.default.createElement('div', { className: 'block', 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { id: 'toolbar', 'data-jsx': 2640144241
      }, _react2.default.createElement('select', { className: 'ql-size', 'data-jsx': 2640144241
      }, _react2.default.createElement('option', { value: 'small', 'data-jsx': 2640144241
      }), _react2.default.createElement('option', { defaultValue: true, 'data-jsx': 2640144241
      }), _react2.default.createElement('option', { value: 'large', 'data-jsx': 2640144241
      }), _react2.default.createElement('option', { value: 'huge', 'data-jsx': 2640144241
      })), _react2.default.createElement('button', { className: 'ql-bold', 'data-jsx': 2640144241
      }), _react2.default.createElement('button', { className: 'ql-script', value: 'sub', 'data-jsx': 2640144241
      }), _react2.default.createElement('button', { className: 'ql-script', value: 'super', 'data-jsx': 2640144241
      })), _react2.default.createElement('textarea', { id: 'editor', onFocus: function onFocus() {
          _this4.handleFirstSave();
        }, placeholder: '\u0412\u0430\u0448 \u0442\u0435\u043A\u0441\u0442 \u0437\u0434\u0435\u0441\u044C..', ref: function ref(textarea) {
          _this4.textarea = textarea;
        }, 'data-jsx': 2640144241
      }), _react2.default.createElement('div', { className: 'panel', 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'ui vertical menu', 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'ui left pointing dropdown link item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-header', 'data-jsx': 2640144241
      }), _react2.default.createElement('div', { className: 'menu', 'data-jsx': 2640144241
      }, _react2.default.createElement('div', { className: 'item', 'data-jsx': 2640144241
      }, '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2640144241
      }, '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2640144241
      }, '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3'), _react2.default.createElement('div', { className: 'item', 'data-jsx': 2640144241
      }, '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4'))), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-bold', 'data-jsx': 2640144241
      })), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-italic', 'data-jsx': 2640144241
      })), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-underline', 'data-jsx': 2640144241
      })), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-list', 'data-jsx': 2640144241
      })), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-list-ol', 'data-jsx': 2640144241
      })), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-chain', 'data-jsx': 2640144241
      })), _react2.default.createElement('a', { className: 'item', 'data-jsx': 2640144241
      }, _react2.default.createElement('i', { className: 'fa fa-save', 'data-jsx': 2640144241
      })))))), _react2.default.createElement(_style2.default, {
        styleId: 2640144241,
        css: '.editor[data-jsx="2640144241"] .header[data-jsx="2640144241"] .title[data-jsx="2640144241"] > *[data-jsx="2640144241"] {vertical-align:middle;}.editor[data-jsx="2640144241"] .header-wrapper[data-jsx="2640144241"] .header-content[data-jsx="2640144241"],.editor[data-jsx="2640144241"] .header-wrapper[data-jsx="2640144241"] .header-content[data-jsx="2640144241"] .title[data-jsx="2640144241"] {display:-webkit-flex; display:flex;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;}.editor[data-jsx="2640144241"] .header-wrapper[data-jsx="2640144241"] > .header[data-jsx="2640144241"] {position:relative;overflow:hidden;height:181px;}.editor[data-jsx="2640144241"] .header-content[data-jsx="2640144241"] {position:relative;left:0px;top:0px;z-index:10;background: rgba(255,255,255,0.6);}.editor[data-jsx="2640144241"] .header-content[data-jsx="2640144241"] .action[data-jsx="2640144241"] button[data-jsx="2640144241"] {opacity:.9;}.editor[data-jsx="2640144241"] .header-content[data-jsx="2640144241"] .action[data-jsx="2640144241"] .status[data-jsx="2640144241"] {margin-right:20px;color:#c0c0c0;}.header-background-img[data-jsx="2640144241"] {width:100%;opacity:0.2;}.editor[data-jsx="2640144241"] .header-background[data-jsx="2640144241"] {position:absolute;left:0px;top:0px;width:100%;overflow:hidden;}.editor[data-jsx="2640144241"] .floating[data-jsx="2640144241"] {position:absolute;left:0px;top:100%;width:100%;background:#fff;}.editor[data-jsx="2640144241"] .header[data-jsx="2640144241"] .title[data-jsx="2640144241"] > .header[data-jsx="2640144241"] {padding-left:15px;}.editor[data-jsx="2640144241"] .header[data-jsx="2640144241"] .title[data-jsx="2640144241"] > .header[data-jsx="2640144241"] > span[data-jsx="2640144241"] {display:block;margin-top:3px!important;}.editor[data-jsx="2640144241"] .header[data-jsx="2640144241"] .title[data-jsx="2640144241"] > .header[data-jsx="2640144241"] input[data-jsx="2640144241"] {border:0px;background:none;outline:0px;width:100%;}.editor[data-jsx="2640144241"] .thumbnail[data-jsx="2640144241"] {position:absolute;left:0px;bottom:0px;height:100px;width:100%;z-index:10;display:-webkit-flex; display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.05);cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;}.editor[data-jsx="2640144241"] .thumbnail[data-jsx="2640144241"] > span[data-jsx="2640144241"] {border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:4px;}.editor[data-jsx="2640144241"] .thumbnail[data-jsx="2640144241"]:hover {background:rgba(0,0,0,0.1);}.editor[data-jsx="2640144241"] .thumbnail[data-jsx="2640144241"] input[type="file"][data-jsx="2640144241"] {display:none;opacity:0;visibility:hidden;}.editor[data-jsx="2640144241"] .content[data-jsx="2640144241"] {position:relative;}.editor[data-jsx="2640144241"] .content[data-jsx="2640144241"] input[data-jsx="2640144241"] {width:100%;background:none;border:0px;padding:5px 0px;font-size:15px;}.editor[data-jsx="2640144241"] .content[data-jsx="2640144241"] input[data-jsx="2640144241"]:focus,.editor[data-jsx="2640144241"] .content[data-jsx="2640144241"] textarea[data-jsx="2640144241"]:focus {outline:0px;}.editor[data-jsx="2640144241"] .content[data-jsx="2640144241"] textarea[data-jsx="2640144241"] {width:100%;padding-right:200px;background:none;border:0px;font-size:16px;min-height:50vh;}.editor[data-jsx="2640144241"] .content[data-jsx="2640144241"] .panel[data-jsx="2640144241"] {position:absolute;right:20px;top:20px;background:#fafafa;}.editor[data-jsx="2640144241"] .content[data-jsx="2640144241"] .panel[data-jsx="2640144241"] .item[data-jsx="2640144241"] {font-size:17px;}.editor[data-jsx="2640144241"] .panel[data-jsx="2640144241"] .vertical.menu[data-jsx="2640144241"] {width:4em;border: 0px;}.editor[data-jsx="2640144241"] .title[data-jsx="2640144241"] .ui.header[data-jsx="2640144241"] {margin:0px          }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVkaXRvclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa01tQixBQUNpQix3SEFDTixzQkFDbkIsQ0FHNEMseVBBQ2xDLG1DQUNNLHNFQUNXLDhCQUNYLG1CQUNuQixDQUdxQyx3R0FDZixrQkFDRixnQkFDSCxhQUVkLENBRXdCLHVFQUNMLGtCQUNULFNBQ0QsUUFDRyxXQUN1QixrQ0FDbkMsQ0FFdUMsb0lBQzNCLFdBQ1osQ0FFd0MscUlBQ3JCLGtCQUNKLGNBQ2YsQ0FHdUIsK0NBQ1gsV0FDQyxZQUNiLENBRTJCLDBFQUNSLGtCQUNULFNBQ0QsUUFDRyxXQUNLLGdCQUNqQixDQUVrQixpRUFDQyxrQkFDVCxTQUNBLFNBQ0UsV0FDSyxnQkFDakIsQ0FFK0IsOEhBQ2Ysa0JBQ2xCLENBRXdDLDRKQUMxQixjQUNXLHlCQUN6QixDQUVzQywySkFDNUIsV0FDSyxnQkFDSixZQUNHLFdBQ2YsQ0FFb0Isa0VBQ0Usa0JBQ1QsU0FDRSxXQUNELGFBQ0YsV0FDRyxXQUNELG1DQUNVLHVCQUNKLG1CQUNTLDRCQUNiLGVBQ1UscUhBQ3pCLENBRTRCLGdHQUNlLHdDQUNyQixtQkFDcEIsQ0FFdUIsd0VBQ0UsMkJBQzNCLENBRXNDLDRHQUN6QixhQUNILFVBQ1Esa0JBQ2xCLENBRWdCLGdFQUNDLGtCQUNsQixDQUV3Qiw2RkFDWixXQUNLLGdCQUNMLFdBQ0ssZ0JBQ0QsZUFDZixDQUdnQyx3TUFDcEIsWUFDWixDQUUwQixnR0FDZixXQUNZLG9CQUNQLGdCQUNMLFdBQ0ksZUFDQyxnQkFDaEIsQ0FFd0IsOEZBQ04sa0JBQ1AsV0FDRixTQUNVLG1CQUNuQixDQUc4QiwySEFDaEIsZUFDZCxDQUU4QixvR0FDcEIsVUFDRSxZQUNaLENBRTRCLGdHQUUxQiIsImZpbGUiOiJjb21wb25lbnRzXFxlZGl0b3JcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICcuLi91c2VyLmpzJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2FwcC5jb25maWcnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIGlkOiAnODkzbmY4MjFmbmsnLFxyXG4gICAgICAgIHBvc3RUaHVtYm5haWw6IG51bGwsXHJcbiAgICAgICAgcG9zdFRpdGxlOiAnJyxcclxuICAgICAgICBwb3N0VGFnczogJycsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8g0J/QvtC00LPQvtGC0L7QstC60LAg0YDQsNC30LzQtdGC0LrQuFxyXG4gICAgdmFyIFF1aWxsID0gcmVxdWlyZSgncXVpbGwnKVxyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgIGRlYnVnOiAnaW5mbycsXHJcbiAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICB0b29sYmFyOiAnI3Rvb2xiYXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ29tcG9zZSBhbiBlcGljLi4uJ1xyXG4gICAgfTtcclxuICAgIHZhciBlZGl0b3IgPSBuZXcgUXVpbGwoJyNlZGl0b3InLCBvcHRpb25zKTtcclxuICBcdHRoaXMuc2V0dGluZ1RleHRhcmVhSGVpZ2h0KCk7XHJcbiAgICB0aGlzLnBvc3RUaXRsZS5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVGh1bWJuYWlsKCkge1xyXG4gICAgaWYoIXRoaXMuc3RhdGUucG9zdC5wb3N0VGh1bWJuYWlsKSB7IFxyXG4gICAgICB0aGlzLnVwbG9hZGVyLmNsaWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZURlbGV0ZVRodW1ibmFpbCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXR0aW5nVGV4dGFyZWFIZWlnaHQoKSB7XHJcbiAgXHR2YXIgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcbiAgXHR2YXIgaGVhZGVySGVpZ2h0ID0gdGhpcy5oZWFkZXJ3cmFwcGVyLmNsaWVudEhlaWdodDtcclxuICBcdHRoaXMudGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gY2xpZW50SGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gMTEyICsgJ3B4JztcclxuICB9XHJcblxyXG4gIGhhbmRsZVR5cGluZyhlKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gIFx0dmFyIGxpbmsgPSB2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJy0nKS50b0xvd2VyQ2FzZSgpXHJcbiAgXHR0aGlzLmxpbmsuaW5uZXJIVE1MID0gbGluaztcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICBwb3N0OiB7IFxyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUucG9zdCxcclxuICAgICAgICBwb3N0VGl0bGU6IHZhbHVlIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcGFyc2VGb3JtKCkge1xyXG4gICAgLy90aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVVcGxvYWQoZSwgaWQpIHtcclxuICAgIHZhciBpbWFnZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgdXJsID0gY29uZmlnLkFQSSArICdwb3N0L3VwbG9hZCc7XHJcbiAgICBhd2FpdCBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RUaHVtYm5haWwnLCBpbWFnZSk7XHJcbiAgICBhd2FpdCBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RJZCcsIGlkKVxyXG4gICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRUaHVtYm5haWwocmVzdWx0LmZpbGVuYW1lKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFRodW1ibmFpbChmaWxlbmFtZSkge1xyXG4gICAgdmFyIHVybCA9IGNvbmZpZy5zdG9yYWdlICsgJ3Bvc3RzLycgKyB0aGlzLnN0YXRlLnBvc3QuaWQgKyAnLycgKyBmaWxlbmFtZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwb3N0OiB7IHBvc3RUaHVtYm5haWw6IHVybCB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgLy90aGlzLmhhbmRsZVN0YXR1cygn0KfQtdGA0L3QvtCy0LjQuiDRgdC+0YXRgNCw0L3RkdC9JylcclxuICB9XHJcblxyXG4gIGhhbmRsZVN0YXR1cyhzdGF0dXMpIHtcclxuICAgIHRoaXMuc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXR1cy5pbm5lckhUTUwgPSAnJztcclxuICAgIH0sIDMwMDApXHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5wb3N0LnBvc3RUaHVtYm5haWwpIHtcclxuICAgICAgcmV0dXJuICg8aW1nIHNyYz17dGhpcy5zdGF0ZS5wb3N0LnBvc3RUaHVtYm5haWx9IGNsYXNzTmFtZT1cImhlYWRlci1iYWNrZ3JvdW5kLWltZ1wiIC8+KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGVsZXRlVGh1bWJuYWlsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBvc3Q6IHtcclxuICAgICAgICBwb3N0VGh1bWJuYWlsOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaXJzdFNhdmUoKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnBvc3QucG9zdFRpdGxlICE9ICcnICYmIHRoaXMuc3RhdGUucG9zdC5wb3N0VGh1bWJuYWlsICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5oYW5kbGVTdGF0dXMoJ9Cn0LXRgNC90L7QstC40Log0YHQvtGF0YDQsNC90ZHQvScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvclwiIHJlZj17KGVkaXRvcikgPT4ge3RoaXMuZWRpdG9yID0gZWRpdG9yfX0+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiIHJlZj17KGhlYWRlcndyYXBwZXIpID0+IHt0aGlzLmhlYWRlcndyYXBwZXIgPSBoZWFkZXJ3cmFwcGVyfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiIHJlZj17KGhlYWRlcikgPT4ge3RoaXMuaGVhZGVyID0gaGVhZGVyfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJhY2tncm91bmRcIj48aW1nIHNyYz17dGhpcy5zdGF0ZS5wb3N0LnBvc3RUaHVtYm5haWx9IGNsYXNzTmFtZT1cImhlYWRlci1iYWNrZ3JvdW5kLWltZ1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnQgYmxvY2tcIj5cclxuICAgIFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICBcdCAgICAgIFx0XHQ8QXZhdGFyIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICBcdCAgICAgIFx0XHQ8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XHJcbiAgICBcdCAgICAgIFx0XHRcdDxpbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUucG9zdC5wb3N0VGl0bGV9IG5hbWU9XCJwb3N0VGl0bGVcIiByZWY9eyhwb3N0VGl0bGUpID0+IHt0aGlzLnBvc3RUaXRsZSA9IHBvc3RUaXRsZX19IG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuaGFuZGxlVHlwaW5nKGUpfX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LDRiCDQt9Cw0LPQvtC70L7QstC+0LpcIiAvPlxyXG4gICAgXHQgICAgICBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzdWIgaGVhZGVyXCI+aHR0cDovL2xldmVsdXAubmFtZS88c3BhbiByZWY9eyhsaW5rKSA9PiB7dGhpcy5saW5rID0gbGlua319PtGB0YHRi9C70LrQsDwvc3Bhbj48L3NwYW4+XHJcbiAgICBcdCAgICAgIFx0XHQ8L2gzPlxyXG4gICAgXHQgICAgICBcdDwvZGl2PlxyXG4gICAgXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0dXNcIiByZWY9eyhzdGF0dXMpID0+IHt0aGlzLnN0YXR1cyA9IHN0YXR1c319Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgcHJpbWFyeSBiYXNpYyBidXR0b24gY2lyY3VsYXIgbGFyZ2VcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTYXZlKCl9fT5cclxuICAgICAgICAgICAgICAgICAg0J7Qv9GD0LHQu9C40LrQvtCy0LDRgtGMXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgIFx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsXCIgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlVGh1bWJuYWlsKCl9fSByZWY9eyh0aHVtYm5haWwpID0+IHt0aGlzLnRodW1ibmFpbCA9IHRodW1ibmFpbH19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHt0aGlzLmhhbmRsZVVwbG9hZChlLCB0aGlzLnN0YXRlLnBvc3QuaWQpfX0gcmVmPXsodXBsb2FkZXIpID0+IHt0aGlzLnVwbG9hZGVyID0gdXBsb2FkZXJ9fSB0eXBlPVwiZmlsZVwiIG5hbWU9XCJwb3N0VGh1bWJuYWlsXCIgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj57KHRoaXMuc3RhdGUucG9zdC5wb3N0VGh1bWJuYWlsID09IG51bGwpID8gPHNwYW4+0JfQsNCz0YDRg9C30LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LU8L3NwYW4+IDogPHNwYW4gb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlRGVsZXRlVGh1bWJuYWlsKCl9fT7Qo9C00LDQu9C40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1PC9zcGFuPn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFx0PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGJsb2NrLXNoYWRvdyBmbG9hdGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnBvc3QucG9zdFRhZ3N9IG5hbWU9XCJwb3N0VGFnc1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0L7QtNC40YLQtSDRgtC10LPQuCDRh9C10YDQtdC3INC30LDQv9GP0YLRg9GOXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLXNpemVcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzbWFsbFwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGFyZ2VcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodWdlXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1ib2xkXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1zY3JpcHRcIiB2YWx1ZT1cInN1YlwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtc2NyaXB0XCIgdmFsdWU9XCJzdXBlclwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHRcdFx0PHRleHRhcmVhIGlkPVwiZWRpdG9yXCIgb25Gb2N1cz17KCkgPT4ge3RoaXMuaGFuZGxlRmlyc3RTYXZlKCl9fSBwbGFjZWhvbGRlcj1cItCS0LDRiCDRgtC10LrRgdGCINC30LTQtdGB0YwuLlwiIHJlZj17KHRleHRhcmVhKSA9PiB7dGhpcy50ZXh0YXJlYSA9IHRleHRhcmVhfX0+PC90ZXh0YXJlYT5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxyXG4gICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidWkgdmVydGljYWwgbWVudVwiPlxyXG4gICAgICAgIFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJ1aSBsZWZ0IHBvaW50aW5nIGRyb3Bkb3duIGxpbmsgaXRlbVwiPlxyXG4gICAgICAgIFx0XHRcdCAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFkZXJcIj48L2k+XHJcbiAgICAgICAgXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgIFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPtCX0LDQs9C+0LvQvtCy0L7QuiAxPC9kaXY+XHJcbiAgICAgICAgXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+0JfQsNCz0L7Qu9C+0LLQvtC6IDI8L2Rpdj5cclxuICAgICAgICBcdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj7Ql9Cw0LPQvtC70L7QstC+0LogMzwvZGl2PlxyXG4gICAgICAgIFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPtCX0LDQs9C+0LvQvtCy0L7QuiA0PC9kaXY+XHJcbiAgICAgICAgXHRcdFx0ICAgIDwvZGl2PlxyXG4gICAgICAgIFx0XHRcdCAgPC9kaXY+XHJcbiAgICAgICAgXHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9sZFwiPjwvaT48L2E+XHJcbiAgICAgICAgXHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpdGVtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaXRhbGljXCI+PC9pPjwvYT5cclxuICAgICAgICBcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS11bmRlcmxpbmVcIj48L2k+PC9hPlxyXG4gICAgICAgIFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpc3RcIj48L2k+PC9hPlxyXG4gICAgICAgIFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpc3Qtb2xcIj48L2k+PC9hPlxyXG4gICAgICAgIFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaXRlbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoYWluXCI+PC9pPjwvYT5cclxuICAgICAgICBcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIml0ZW1cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zYXZlXCI+PC9pPjwvYT5cclxuICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgXHQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFx0PHN0eWxlIGpzeD57YFxyXG4gICAgICBcdFx0LmVkaXRvciAuaGVhZGVyIC50aXRsZSA+ICoge1xyXG4gICAgXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgXHRcdFx0LmVkaXRvciAuaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1jb250ZW50LFxyXG4gICAgXHRcdFx0LmVkaXRvciAuaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1jb250ZW50IC50aXRsZSB7XHJcbiAgICBcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuICAgIFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgIFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgXHRcdFx0fVxyXG5cclxuXHJcbiAgICAgICAgICAuZWRpdG9yIC5oZWFkZXItd3JhcHBlciA+IC5oZWFkZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTgxcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5lZGl0b3IgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmVkaXRvciAuaGVhZGVyLWNvbnRlbnQgLmFjdGlvbiBidXR0b24ge1xyXG4gICAgICAgICAgICBvcGFjaXR5Oi45O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5lZGl0b3IgLmhlYWRlci1jb250ZW50IC5hY3Rpb24gLnN0YXR1cyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojYzBjMGMwO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWJhY2tncm91bmQtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgb3BhY2l0eTowLjI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmVkaXRvciAuaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZWRpdG9yIC5mbG9hdGluZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgdG9wOjEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIFx0XHQuZWRpdG9yIC5oZWFkZXIgLnRpdGxlID4gLmhlYWRlciB7XHJcbiAgICAgIFx0XHRcdHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICBcdFx0fVxyXG5cclxuICAgICAgXHRcdC5lZGl0b3IgLmhlYWRlciAudGl0bGUgPiAuaGVhZGVyID4gc3BhbiB7XHJcbiAgICAgIFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgIFx0XHRcdG1hcmdpbi10b3A6M3B4IWltcG9ydGFudDtcclxuICAgICAgXHRcdH1cclxuXHJcbiAgICBcdFx0XHQuZWRpdG9yIC5oZWFkZXIgLnRpdGxlID4gLmhlYWRlciBpbnB1dCB7XHJcbiAgICBcdFx0XHRcdGJvcmRlcjowcHg7XHJcbiAgICBcdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuICAgIFx0XHRcdFx0b3V0bGluZTowcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICBcdFx0XHR9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICBib3R0b206MHB4O1xyXG4gICAgICBcdFx0XHRoZWlnaHQ6MTAwcHg7XHJcbiAgICAgIFx0XHRcdHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICAgIFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuICAgICAgXHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgXHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICBcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAgIFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICBcdFx0XHR0cmFuc2l0aW9uOjAuMnMgYWxsIGVhc2U7XHJcbiAgICAgIFx0XHR9XHJcblxyXG4gICAgICAgICAgLmVkaXRvciAudGh1bWJuYWlsID4gc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgXHRcdC5lZGl0b3IgLnRodW1ibmFpbDpob3ZlciB7XHJcbiAgICAgIFx0XHRcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBcdFx0fVxyXG5cclxuICAgICAgXHRcdC5lZGl0b3IgLnRodW1ibmFpbCBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgIFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuICAgICAgXHRcdFx0b3BhY2l0eTowO1xyXG4gICAgICBcdFx0XHR2aXNpYmlsaXR5OmhpZGRlbjtcclxuICAgICAgXHRcdH1cclxuXHJcbiAgICBcdFx0XHQuZWRpdG9yIC5jb250ZW50IHtcclxuICAgIFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBcdFx0XHR9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAuY29udGVudCBpbnB1dCB7XHJcbiAgICAgIFx0XHRcdHdpZHRoOjEwMCU7XHJcbiAgICAgIFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgXHRcdFx0Ym9yZGVyOjBweDtcclxuICAgICAgXHRcdFx0cGFkZGluZzo1cHggMHB4O1xyXG4gICAgICBcdFx0XHRmb250LXNpemU6MTVweDtcclxuICAgICAgXHRcdH1cclxuXHJcbiAgICAgIFx0XHQuZWRpdG9yIC5jb250ZW50IGlucHV0OmZvY3VzLFxyXG4gICAgICBcdFx0LmVkaXRvciAuY29udGVudCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgIFx0XHRcdG91dGxpbmU6MHB4O1xyXG4gICAgICBcdFx0fVxyXG5cclxuICAgICAgXHRcdC5lZGl0b3IgLmNvbnRlbnQgdGV4dGFyZWEge1xyXG4gICAgICBcdFx0XHR3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwMHB4O1xyXG4gICAgICBcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgIFx0XHRcdGJvcmRlcjowcHg7XHJcbiAgICAgIFx0XHRcdGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICBcdFx0XHRtaW4taGVpZ2h0OjUwdmg7XHJcbiAgICAgIFx0XHR9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAuY29udGVudCAucGFuZWwge1xyXG4gICAgICBcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgXHRcdFx0cmlnaHQ6MjBweDtcclxuICAgICAgXHRcdFx0dG9wOjIwcHg7XHJcbiAgICAgIFx0XHRcdGJhY2tncm91bmQ6I2ZhZmFmYTtcclxuICAgICAgXHRcdH1cclxuXHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAuY29udGVudCAucGFuZWwgLml0ZW0ge1xyXG5cdFx0XHRcdCAgICBmb250LXNpemU6MTdweDtcclxuICAgICAgXHRcdH1cclxuXHJcbiAgICAgIFx0XHQuZWRpdG9yIC5wYW5lbCAudmVydGljYWwubWVudSB7XHJcbiAgICAgIFx0XHRcdHdpZHRoOjRlbTtcclxuICAgICAgXHRcdFx0Ym9yZGVyOiAwcHg7XHJcbiAgICAgIFx0XHR9XHJcblxyXG4gICAgICAgICAgLmVkaXRvciAudGl0bGUgLnVpLmhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHhcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIFx0YH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\editor\\index.js */'
      }));
    }
  }]);

  return Editor;
}(_react2.default.Component);

exports.default = Editor;