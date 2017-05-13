'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _editor = require('./editor.js');

var _editor2 = _interopRequireDefault(_editor);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _randomString = require('../../utils/randomString.js');

var _randomString2 = _interopRequireDefault(_randomString);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorWrapper = function (_React$Component) {
  (0, _inherits3.default)(EditorWrapper, _React$Component);

  function EditorWrapper(props) {
    (0, _classCallCheck3.default)(this, EditorWrapper);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (EditorWrapper.__proto__ || (0, _getPrototypeOf2.default)(EditorWrapper)).call(this, props));

    _this2.state = {
      post: {
        storage: null,
        slug: '',
        postImage: null,
        postDescription: '',
        postTitle: '',
        postTags: '',
        postContent: '',
        postLikes: 0,
        postFavorites: [],
        postAuthor: null
      }
    };
    return _this2;
  }

  (0, _createClass3.default)(EditorWrapper, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getPost();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Подготовка разметки
      this.settingTextareaHeight();
      this.postTitle.focus();

      if (!this.state.post.storage) {
        this.createStorage();
      }
    }
  }, {
    key: 'getPost',
    value: function getPost() {
      this.updateState(this.props.data.post);
    }
  }, {
    key: 'createStorage',
    value: function createStorage() {
      var _this = this;
      return new _promise2.default(function (resolve, reject) {
        _this.updateState('storage', (0, _randomString2.default)(10)).then(function (res) {
          //_this.handleSave()
        });
        resolve();
      });
    }
  }, {
    key: 'hasPost',
    value: function hasPost() {
      if (this.props.data.post) {
        return true;
      } else {
        return false;
      }
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
      document.querySelector('.quill').style.height = clientHeight - headerHeight - 112 + 'px';
    }
  }, {
    key: 'handleTyping',
    value: function handleTyping(e) {
      var _this3 = this;

      var value = e.target.value;
      var link = value.replace(/\s/g, '-').toLowerCase();
      this.link.value = link;
      this.updateState('postTitle', value).then(function () {
        _this3.updateState('slug', link);
      });
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      var body = this.state.post;
      var _this = this;
      if (this.state.post._id) {
        var url = _app2.default.API + 'post/entries/' + this.state.post._id + '/update';
      } else {
        var url = _app2.default.API + 'post/add';
      }

      _axios2.default.post(url, body).then(function (response) {
        if (response.data) {
          _this.handleStatus('Сохранено!');
          _this.handleRedirect();
          _this.getPostFromServer();
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        // Handle Error
      });
    }
  }, {
    key: 'getPostFromServer',
    value: function getPostFromServer() {
      var _this4 = this;

      _axios2.default.get(_app2.default.API + 'post/entries/' + this.state.post.slug).then(function (res) {
        _this4.updateState(res.data);
      });
    }
  }, {
    key: 'handleRedirect',
    value: function handleRedirect() {
      var _this5 = this;

      return new _promise2.default(function (resolve, reject) {
        var href = '/editor?slug=' + _this5.state.post.slug;
        var as = href;
        _index2.default.replace(href, as, { shallow: true });
        resolve();
      });
    }
  }, {
    key: 'handleUpload',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var _this6 = this;

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
                return formData.append('storage', this.state.post.storage);

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
                            return _this6.setThumbnail(result.filename);

                          case 5:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this6);
                  }));

                  return function (_x2) {
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

      function handleUpload(_x) {
        return _ref.apply(this, arguments);
      }

      return handleUpload;
    }()
  }, {
    key: 'setThumbnail',
    value: function setThumbnail(filename) {
      var url = _app2.default.storage + 'posts/' + this.state.post.storage + '/' + filename;
      this.updateState('postImage', url);
      this.handleFirstSave();
    }
  }, {
    key: 'handleStatus',
    value: function handleStatus(status) {
      var _this7 = this;

      this.status.innerHTML = status;
      setTimeout(function () {
        _this7.status.innerHTML = '';
      }, 3000);
    }
  }, {
    key: 'getBackground',
    value: function getBackground() {
      if (this.state.post.postImage) {
        return _react2.default.createElement('img', { src: this.state.post.postImage, className: 'header-background-img' });
      }
    }
  }, {
    key: 'handleDeleteThumbnail',
    value: function handleDeleteThumbnail() {
      this.updateState('postImage', null);
    }
  }, {
    key: 'handleFirstSave',
    value: function handleFirstSave() {
      if (this.state.post.postTitle != '' && this.state.post.postImage != null) {
        this.handleSave();
      }
    }
  }, {
    key: 'handleEditorChange',
    value: function handleEditorChange() {
      var _this8 = this;

      return function () {
        var area = document.querySelector('.ql-editor');
        _this8.updateState('postContent', area.innerHTML);
      };
    }
  }, {
    key: 'handleTagsChange',
    value: function handleTagsChange(e) {
      this.updateState('postTags', e.target.value);
    }
  }, {
    key: 'updateState',
    value: function updateState(key, value) {
      var _this9 = this;

      return new _promise2.default(function (resolve, reject) {
        if ((typeof key === 'undefined' ? 'undefined' : (0, _typeof3.default)(key)) === 'object') {
          _this9.setState((0, _extends3.default)({}, _this9.state, {
            post: (0, _extends3.default)({}, _this9.state.post, key)
          }));
        } else {
          console.log(key, value);
          _this9.setState((0, _extends3.default)({}, _this9.state, {
            post: (0, _extends3.default)({}, _this9.state.post, (0, _defineProperty3.default)({}, key, value))
          }));
        }
        resolve(true);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this10 = this;

      //console.log(this.state.post)
      var post = this.state.post;
      return _react2.default.createElement('div', { className: 'editor', ref: function ref(editor) {
          _this10.editor = editor;
        }, 'data-jsx': 2134063669
      }, _react2.default.createElement('div', { className: 'header-wrapper', ref: function ref(headerwrapper) {
          _this10.headerwrapper = headerwrapper;
        }, 'data-jsx': 2134063669
      }, _react2.default.createElement('div', { className: 'header', ref: function ref(header) {
          _this10.header = header;
        }, 'data-jsx': 2134063669
      }, _react2.default.createElement('div', { className: 'header-background', 'data-jsx': 2134063669
      }, _react2.default.createElement('img', { src: post.postImage, className: 'header-background-img', 'data-jsx': 2134063669
      })), _react2.default.createElement('div', { className: 'header-content block', 'data-jsx': 2134063669
      }, _react2.default.createElement('div', { className: 'title', 'data-jsx': 2134063669
      }, _react2.default.createElement(_user.Avatar, { size: 'small' }), _react2.default.createElement('h3', { className: 'ui header', 'data-jsx': 2134063669
      }, _react2.default.createElement('input', { defaultValue: post.postTitle, name: 'postTitle', ref: function ref(postTitle) {
          _this10.postTitle = postTitle;
        }, onChange: function onChange(e) {
          _this10.handleTyping(e);
        }, type: 'text', placeholder: '\u0412\u0430\u0448 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A', 'data-jsx': 2134063669
      }), _react2.default.createElement('span', { className: 'sub header', 'data-jsx': 2134063669
      }, 'http://levelup.name/', _react2.default.createElement('input', { onChange: function onChange(e) {
          _this10.handleTyping(e);
        }, type: 'text', defaultValue: post.slug, ref: function ref(link) {
          _this10.link = link;
        }, 'data-jsx': 2134063669
      })))), _react2.default.createElement('div', { className: 'action', 'data-jsx': 2134063669
      }, _react2.default.createElement('span', { className: 'status', ref: function ref(status) {
          _this10.status = status;
        }, 'data-jsx': 2134063669
      }), _react2.default.createElement('button', { className: 'ui primary basic button circular large', onClick: function onClick() {
          _this10.handleSave();
        }, 'data-jsx': 2134063669
      }, !this.state.post._id ? '\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C' : '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'))), _react2.default.createElement('div', { className: 'thumbnail', onClick: function onClick() {
          _this10.handleThumbnail();
        }, ref: function ref(thumbnail) {
          _this10.thumbnail = thumbnail;
        }, 'data-jsx': 2134063669
      }, _react2.default.createElement('input', { onChange: function onChange(e) {
          _this10.handleUpload(e);
        }, ref: function ref(uploader) {
          _this10.uploader = uploader;
        }, type: 'file', name: 'postThumbnail', 'data-jsx': 2134063669
      }), _react2.default.createElement('span', {
        'data-jsx': 2134063669
      }, post.postThumbnail == null ? _react2.default.createElement('span', {
        'data-jsx': 2134063669
      }, '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435') : _react2.default.createElement('span', { onClick: function onClick() {
          _this10.handleDeleteThumbnail();
        }, 'data-jsx': 2134063669
      }, '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435')))), _react2.default.createElement('div', { className: 'tags block', 'data-jsx': 2134063669
      }, _react2.default.createElement('input', { onChange: function onChange(e) {
          _this10.handleTagsChange(e);
        }, defaultValue: post.postTags, name: 'postTags', type: 'text', placeholder: '\u0412\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u0435\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E', 'data-jsx': 2134063669
      }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 2134063669
      }, _react2.default.createElement('div', { className: 'block', 'data-jsx': 2134063669
      }, _react2.default.createElement(_editor2.default, { value: post.postContent, onChange: this.handleEditorChange() }))), _react2.default.createElement(_style2.default, {
        styleId: 2134063669,
        css: '.editor[data-jsx="2134063669"] .header[data-jsx="2134063669"] .title[data-jsx="2134063669"] > *[data-jsx="2134063669"] {vertical-align:middle;}.editor[data-jsx="2134063669"] .header-wrapper[data-jsx="2134063669"] .header-content[data-jsx="2134063669"],.editor[data-jsx="2134063669"] .header-wrapper[data-jsx="2134063669"] .header-content[data-jsx="2134063669"] .title[data-jsx="2134063669"] {display:-webkit-flex; display:flex;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;}.editor[data-jsx="2134063669"] .header-wrapper[data-jsx="2134063669"] > .header[data-jsx="2134063669"] {position:relative;overflow:hidden;height:181px;}.editor[data-jsx="2134063669"] .header-content[data-jsx="2134063669"] {position:relative;left:0px;top:0px;z-index:10;background: rgba(255,255,255,0.6);}.editor[data-jsx="2134063669"] .header-content[data-jsx="2134063669"] .action[data-jsx="2134063669"] button[data-jsx="2134063669"] {opacity:.9;}.editor[data-jsx="2134063669"] .header-content[data-jsx="2134063669"] .action[data-jsx="2134063669"] .status[data-jsx="2134063669"] {margin-right:20px;color:#c0c0c0;}.header-background-img[data-jsx="2134063669"] {width:100%;opacity:0.2;}.editor[data-jsx="2134063669"] .header-background[data-jsx="2134063669"] {position:absolute;left:0px;top:0px;width:100%;overflow:hidden;}.editor[data-jsx="2134063669"] .floating[data-jsx="2134063669"] {position:absolute;left:0px;top:100%;width:100%;background:#fff;}.editor[data-jsx="2134063669"] .header[data-jsx="2134063669"] .title[data-jsx="2134063669"] > .header[data-jsx="2134063669"] {padding-left:15px;}.editor[data-jsx="2134063669"] .header[data-jsx="2134063669"] .title[data-jsx="2134063669"] > .header[data-jsx="2134063669"] > span[data-jsx="2134063669"] {display:block;margin-top:3px!important;}.editor[data-jsx="2134063669"] .header[data-jsx="2134063669"] .title[data-jsx="2134063669"] > .header[data-jsx="2134063669"] input[data-jsx="2134063669"] {border:0px;background:none;outline:0px;width:200px;display:inline-block;}.editor[data-jsx="2134063669"] .thumbnail[data-jsx="2134063669"] {position:absolute;left:0px;bottom:0px;height:100px;width:100%;z-index:10;display:-webkit-flex; display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.7);color:#c0c0c0;cursor:pointer;-webkit-transition:0.2s all ease;-moz-transition:0.2s all ease;-ms-transition:0.2s all ease;transition:0.2s all ease;}.editor[data-jsx="2134063669"] .thumbnail[data-jsx="2134063669"] > span[data-jsx="2134063669"] {border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:4px;}.editor[data-jsx="2134063669"] .thumbnail[data-jsx="2134063669"]:hover {background:rgba(0,0,0,0.8);}.editor[data-jsx="2134063669"] .thumbnail[data-jsx="2134063669"] input[type="file"][data-jsx="2134063669"] {display:none;opacity:0;visibility:hidden;}.editor[data-jsx="2134063669"] .content[data-jsx="2134063669"] {position:relative;}.editor[data-jsx="2134063669"] .tags[data-jsx="2134063669"] {border-bottom: 1px solid rgba(0,0,0,0.1);}.editor[data-jsx="2134063669"] .tags[data-jsx="2134063669"] input[data-jsx="2134063669"] {width:100%;background:none;border:0px;font-size:17px;}.editor[data-jsx="2134063669"] .tags[data-jsx="2134063669"] input[data-jsx="2134063669"]:focus,.editor[data-jsx="2134063669"] .content[data-jsx="2134063669"] textarea[data-jsx="2134063669"]:focus {outline:0px;}.editor[data-jsx="2134063669"] .content[data-jsx="2134063669"] .quill[data-jsx="2134063669"] {width:100%;padding-right:200px;background:none;border:0px;font-size:16px;min-height:50vh;border:0px;}.editor[data-jsx="2134063669"] .content[data-jsx="2134063669"] .panel[data-jsx="2134063669"] {position:absolute;right:20px;top:20px;background:#fafafa;}.editor[data-jsx="2134063669"] .content[data-jsx="2134063669"] .panel[data-jsx="2134063669"] .item[data-jsx="2134063669"] {font-size:17px;}.editor[data-jsx="2134063669"] .panel[data-jsx="2134063669"] .vertical.menu[data-jsx="2134063669"] {width:4em;border: 0px;}.editor[data-jsx="2134063669"] .title[data-jsx="2134063669"] .ui.header[data-jsx="2134063669"] {margin:0px          }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVkaXRvclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1BtQixBQUNpQix3SEFDTixzQkFDbkIsQ0FHNEMseVBBQ2xDLG1DQUNNLHNFQUNXLDhCQUNYLG1CQUNuQixDQUdxQyx3R0FDZixrQkFDRixnQkFDSCxhQUVkLENBRXdCLHVFQUNMLGtCQUNULFNBQ0QsUUFDRyxXQUN1QixrQ0FDbkMsQ0FFdUMsb0lBQzNCLFdBQ1osQ0FFd0MscUlBQ3JCLGtCQUNKLGNBQ2YsQ0FHdUIsK0NBQ1gsV0FDQyxZQUNiLENBRTJCLDBFQUNSLGtCQUNULFNBQ0QsUUFDRyxXQUNLLGdCQUNqQixDQUVrQixpRUFDQyxrQkFDVCxTQUNBLFNBQ0UsV0FDSyxnQkFDakIsQ0FFK0IsOEhBQ2Ysa0JBQ2xCLENBRXdDLDRKQUMxQixjQUNXLHlCQUN6QixDQUVzQywySkFDNUIsV0FDSyxnQkFDSixZQUNJLFlBQ1MscUJBQ3pCLENBRW9CLGtFQUNFLGtCQUNULFNBQ0UsV0FDRCxhQUNGLFdBQ0csV0FDRCxtQ0FDVSx1QkFDSixtQkFDUSwyQkFDVixjQUNGLGVBQ1UscUhBQ3pCLENBRTRCLGdHQUNlLHdDQUNyQixtQkFDcEIsQ0FFdUIsd0VBQ0UsMkJBQzNCLENBRXNDLDRHQUN6QixhQUNILFVBQ1Esa0JBQ2xCLENBRWdCLGdFQUNDLGtCQUNsQixDQUVpQiw2REFDNEIseUNBQzFDLENBRWtCLDBGQUNULFdBQ0ssZ0JBQ0wsV0FDSSxlQUNmLENBR2dDLHFNQUNwQixZQUNaLENBRXdCLDhGQUNiLFdBQ1ksb0JBQ1AsZ0JBQ0wsV0FDSSxlQUNDLGdCQUNGLFdBQ2QsQ0FFd0IsOEZBQ04sa0JBQ1AsV0FDRixTQUNVLG1CQUNuQixDQUc4QiwySEFDaEIsZUFDZCxDQUU4QixvR0FDcEIsVUFDRSxZQUNaLENBRTRCLGdHQUUxQiIsImZpbGUiOiJjb21wb25lbnRzXFxlZGl0b3JcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L3d3dy9MZXZlbHVwLm5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICcuLi91c2VyLmpzJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2FwcC5jb25maWcnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJy4uLy4uL3V0aWxzL3JhbmRvbVN0cmluZy5qcydcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvcldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIHN0b3JhZ2U6IG51bGwsXHJcbiAgICAgICAgc2x1ZzogJycsXHJcbiAgICAgICAgcG9zdEltYWdlOiBudWxsLFxyXG4gICAgICAgIHBvc3REZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgcG9zdFRpdGxlOiAnJyxcclxuICAgICAgICBwb3N0VGFnczogJycsXHJcbiAgICAgICAgcG9zdENvbnRlbnQ6ICcnLFxyXG4gICAgICAgIHBvc3RMaWtlczogMCxcclxuICAgICAgICBwb3N0RmF2b3JpdGVzOiBbXSxcclxuICAgICAgICBwb3N0QXV0aG9yOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldFBvc3QoKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyDQn9C+0LTQs9C+0YLQvtCy0LrQsCDRgNCw0LfQvNC10YLQutC4XHJcbiAgICB0aGlzLnNldHRpbmdUZXh0YXJlYUhlaWdodCgpO1xyXG4gICAgdGhpcy5wb3N0VGl0bGUuZm9jdXMoKTtcclxuXHJcbiAgICBpZighdGhpcy5zdGF0ZS5wb3N0LnN0b3JhZ2UpIHtcclxuICAgICAgdGhpcy5jcmVhdGVTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQb3N0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh0aGlzLnByb3BzLmRhdGEucG9zdClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVN0b3JhZ2UoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICBfdGhpcy51cGRhdGVTdGF0ZSgnc3RvcmFnZScsIHJhbmRvbVN0cmluZygxMCkpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vX3RoaXMuaGFuZGxlU2F2ZSgpXHJcbiAgICAgIH0pXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhc1Bvc3QoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhLnBvc3QpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVGh1bWJuYWlsKCkge1xyXG4gICAgaWYoIXRoaXMuc3RhdGUucG9zdC5wb3N0VGh1bWJuYWlsKSB7IFxyXG4gICAgICB0aGlzLnVwbG9hZGVyLmNsaWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZURlbGV0ZVRodW1ibmFpbCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXR0aW5nVGV4dGFyZWFIZWlnaHQoKSB7XHJcbiAgXHR2YXIgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcbiAgXHR2YXIgaGVhZGVySGVpZ2h0ID0gdGhpcy5oZWFkZXJ3cmFwcGVyLmNsaWVudEhlaWdodDtcclxuICBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWlsbCcpLnN0eWxlLmhlaWdodCA9IGNsaWVudEhlaWdodCAtIGhlYWRlckhlaWdodCAtIDExMiArICdweCc7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUeXBpbmcoZSkge1xyXG4gICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICBcdHZhciBsaW5rID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICctJykudG9Mb3dlckNhc2UoKVxyXG4gIFx0dGhpcy5saW5rLnZhbHVlID0gbGluaztcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoJ3Bvc3RUaXRsZScsIHZhbHVlKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnc2x1ZycsIGxpbmspXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIHZhciBib2R5ID0gdGhpcy5zdGF0ZS5wb3N0O1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmKHRoaXMuc3RhdGUucG9zdC5faWQpIHtcclxuICAgICAgdmFyIHVybCA9IGNvbmZpZy5BUEkgKyAncG9zdC9lbnRyaWVzLycgKyB0aGlzLnN0YXRlLnBvc3QuX2lkICsgJy91cGRhdGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVybCA9IGNvbmZpZy5BUEkgKyAncG9zdC9hZGQnO1xyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zLnBvc3QodXJsLCBib2R5KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICBfdGhpcy5oYW5kbGVTdGF0dXMoJ9Ch0L7RhdGA0LDQvdC10L3QviEnKVxyXG4gICAgICAgIF90aGlzLmhhbmRsZVJlZGlyZWN0KClcclxuICAgICAgICBfdGhpcy5nZXRQb3N0RnJvbVNlcnZlcigpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIEhhbmRsZSBFcnJvclxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3N0RnJvbVNlcnZlcigpIHtcclxuICAgIGF4aW9zLmdldChjb25maWcuQVBJICsgJ3Bvc3QvZW50cmllcy8nICsgdGhpcy5zdGF0ZS5wb3N0LnNsdWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHJlcy5kYXRhKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZWRpcmVjdCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGhyZWYgPSAnL2VkaXRvcj9zbHVnPScgKyB0aGlzLnN0YXRlLnBvc3Quc2x1Z1xyXG4gICAgICBjb25zdCBhcyA9IGhyZWZcclxuICAgICAgcm91dGVyLnJlcGxhY2UoaHJlZiwgYXMsIHsgc2hhbGxvdzogdHJ1ZSB9KVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVVcGxvYWQoZSkge1xyXG4gICAgdmFyIGltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciB1cmwgPSBjb25maWcuQVBJICsgJ3Bvc3QvdXBsb2FkJztcclxuICAgIGF3YWl0IGZvcm1EYXRhLmFwcGVuZCgncG9zdFRodW1ibmFpbCcsIGltYWdlKTtcclxuICAgIGF3YWl0IGZvcm1EYXRhLmFwcGVuZCgnc3RvcmFnZScsIHRoaXMuc3RhdGUucG9zdC5zdG9yYWdlKVxyXG4gICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0VGh1bWJuYWlsKHJlc3VsdC5maWxlbmFtZSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRUaHVtYm5haWwoZmlsZW5hbWUpIHtcclxuICAgIHZhciB1cmwgPSBjb25maWcuc3RvcmFnZSArICdwb3N0cy8nICsgdGhpcy5zdGF0ZS5wb3N0LnN0b3JhZ2UgKyAnLycgKyBmaWxlbmFtZTtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoJ3Bvc3RJbWFnZScsIHVybClcclxuICAgIHRoaXMuaGFuZGxlRmlyc3RTYXZlKClcclxuICB9XHJcblxyXG4gIGhhbmRsZVN0YXR1cyhzdGF0dXMpIHtcclxuICAgIHRoaXMuc3RhdHVzLmlubmVySFRNTCA9IHN0YXR1cztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXR1cy5pbm5lckhUTUwgPSAnJztcclxuICAgIH0sIDMwMDApXHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5wb3N0LnBvc3RJbWFnZSkge1xyXG4gICAgICByZXR1cm4gKDxpbWcgc3JjPXt0aGlzLnN0YXRlLnBvc3QucG9zdEltYWdlfSBjbGFzc05hbWU9XCJoZWFkZXItYmFja2dyb3VuZC1pbWdcIiAvPilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZURlbGV0ZVRodW1ibmFpbCgpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoJ3Bvc3RJbWFnZScsIG51bGwpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaXJzdFNhdmUoKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnBvc3QucG9zdFRpdGxlICE9ICcnICYmIHRoaXMuc3RhdGUucG9zdC5wb3N0SW1hZ2UgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVNhdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUVkaXRvckNoYW5nZSgpIHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHZhciBhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnFsLWVkaXRvcicpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwb3N0Q29udGVudCcsIGFyZWEuaW5uZXJIVE1MKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVGFnc0NoYW5nZShlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwb3N0VGFncycsIGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhdGUoa2V5LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICBwb3N0OiB7IFxyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3QsXHJcbiAgICAgICAgICAgIC4uLmtleVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICBwb3N0OiB7IFxyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3QsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZSh0cnVlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucG9zdClcclxuICAgIHZhciBwb3N0ID0gdGhpcy5zdGF0ZS5wb3N0O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JcIiByZWY9eyhlZGl0b3IpID0+IHt0aGlzLmVkaXRvciA9IGVkaXRvcn19PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIiByZWY9eyhoZWFkZXJ3cmFwcGVyKSA9PiB7dGhpcy5oZWFkZXJ3cmFwcGVyID0gaGVhZGVyd3JhcHBlcn19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiByZWY9eyhoZWFkZXIpID0+IHt0aGlzLmhlYWRlciA9IGhlYWRlcn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1iYWNrZ3JvdW5kXCI+PGltZyBzcmM9e3Bvc3QucG9zdEltYWdlfSBjbGFzc05hbWU9XCJoZWFkZXItYmFja2dyb3VuZC1pbWdcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50IGJsb2NrXCI+XHJcbiAgICBcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgXHQgICAgICBcdFx0PEF2YXRhciBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgXHQgICAgICBcdFx0PGgzIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxyXG4gICAgXHQgICAgICBcdFx0XHQ8aW5wdXQgZGVmYXVsdFZhbHVlPXtwb3N0LnBvc3RUaXRsZX0gbmFtZT1cInBvc3RUaXRsZVwiIHJlZj17KHBvc3RUaXRsZSkgPT4ge3RoaXMucG9zdFRpdGxlID0gcG9zdFRpdGxlfX0gb25DaGFuZ2U9eyhlKSA9PiB7dGhpcy5oYW5kbGVUeXBpbmcoZSl9fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGIINC30LDQs9C+0LvQvtCy0L7QulwiIC8+XHJcbiAgICBcdCAgICAgIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN1YiBoZWFkZXJcIj5odHRwOi8vbGV2ZWx1cC5uYW1lLzxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHt0aGlzLmhhbmRsZVR5cGluZyhlKX19IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtwb3N0LnNsdWd9IHJlZj17KGxpbmspID0+IHt0aGlzLmxpbmsgPSBsaW5rfX0gLz48L3NwYW4+XHJcbiAgICBcdCAgICAgIFx0XHQ8L2gzPlxyXG4gICAgXHQgICAgICBcdDwvZGl2PlxyXG4gICAgXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0dXNcIiByZWY9eyhzdGF0dXMpID0+IHt0aGlzLnN0YXR1cyA9IHN0YXR1c319Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgcHJpbWFyeSBiYXNpYyBidXR0b24gY2lyY3VsYXIgbGFyZ2VcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTYXZlKCl9fT5cclxuICAgICAgICAgICAgICAgICAgeyghdGhpcy5zdGF0ZS5wb3N0Ll9pZCkgPyBg0J7Qv9GD0LHQu9C40LrQvtCy0LDRgtGMYCA6IGDQodC+0YXRgNCw0L3QuNGC0YxgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICBcdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbFwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZVRodW1ibmFpbCgpfX0gcmVmPXsodGh1bWJuYWlsKSA9PiB7dGhpcy50aHVtYm5haWwgPSB0aHVtYm5haWx9fT5cclxuICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB7dGhpcy5oYW5kbGVVcGxvYWQoZSl9fSByZWY9eyh1cGxvYWRlcikgPT4ge3RoaXMudXBsb2FkZXIgPSB1cGxvYWRlcn19IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBvc3RUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnsocG9zdC5wb3N0VGh1bWJuYWlsID09IG51bGwpID8gPHNwYW4+0JfQsNCz0YDRg9C30LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LU8L3NwYW4+IDogPHNwYW4gb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlRGVsZXRlVGh1bWJuYWlsKCl9fT7Qo9C00LDQu9C40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1PC9zcGFuPn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MgYmxvY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuaGFuZGxlVGFnc0NoYW5nZShlKX19IGRlZmF1bHRWYWx1ZT17cG9zdC5wb3N0VGFnc30gbmFtZT1cInBvc3RUYWdzXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LLQvtC00LjRgtC1INGC0LXQs9C4INGH0LXRgNC10Lcg0LfQsNC/0Y/RgtGD0Y5cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxFZGl0b3IgdmFsdWU9e3Bvc3QucG9zdENvbnRlbnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVkaXRvckNoYW5nZSgpfSAvPlxyXG4gICAgICAgIFx0PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcdDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHRcdC5lZGl0b3IgLmhlYWRlciAudGl0bGUgPiAqIHtcclxuICAgIFx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIFx0XHRcdC5lZGl0b3IgLmhlYWRlci13cmFwcGVyIC5oZWFkZXItY29udGVudCxcclxuICAgIFx0XHRcdC5lZGl0b3IgLmhlYWRlci13cmFwcGVyIC5oZWFkZXItY29udGVudCAudGl0bGUge1xyXG4gICAgXHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcbiAgICBcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIFx0XHRcdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIFx0XHRcdH1cclxuXHJcblxyXG4gICAgICAgICAgLmVkaXRvciAuaGVhZGVyLXdyYXBwZXIgPiAuaGVhZGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OjE4MXB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZWRpdG9yIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgdG9wOjBweDtcclxuICAgICAgICAgICAgei1pbmRleDoxMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5lZGl0b3IgLmhlYWRlci1jb250ZW50IC5hY3Rpb24gYnV0dG9uIHtcclxuICAgICAgICAgICAgb3BhY2l0eTouOTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZWRpdG9yIC5oZWFkZXItY29udGVudCAuYWN0aW9uIC5zdGF0dXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuICAgICAgICAgICAgY29sb3I6I2MwYzBjMDtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgLmhlYWRlci1iYWNrZ3JvdW5kLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MC4yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5lZGl0b3IgLmhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmVkaXRvciAuZmxvYXRpbmcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHRvcDoxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAuaGVhZGVyIC50aXRsZSA+IC5oZWFkZXIge1xyXG4gICAgICBcdFx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgICAgXHRcdH1cclxuXHJcbiAgICAgIFx0XHQuZWRpdG9yIC5oZWFkZXIgLnRpdGxlID4gLmhlYWRlciA+IHNwYW4ge1xyXG4gICAgICBcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG4gICAgICBcdFx0XHRtYXJnaW4tdG9wOjNweCFpbXBvcnRhbnQ7XHJcbiAgICAgIFx0XHR9XHJcblxyXG4gICAgXHRcdFx0LmVkaXRvciAuaGVhZGVyIC50aXRsZSA+IC5oZWFkZXIgaW5wdXQge1xyXG4gICAgXHRcdFx0XHRib3JkZXI6MHB4O1xyXG4gICAgXHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBcdFx0XHRcdG91dGxpbmU6MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBcdFx0XHR9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICBib3R0b206MHB4O1xyXG4gICAgICBcdFx0XHRoZWlnaHQ6MTAwcHg7XHJcbiAgICAgIFx0XHRcdHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICAgIFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuICAgICAgXHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgXHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICBcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC43KTtcclxuICAgICAgICAgICAgY29sb3I6I2MwYzBjMDtcclxuICAgICAgXHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIFx0XHRcdHRyYW5zaXRpb246MC4ycyBhbGwgZWFzZTtcclxuICAgICAgXHRcdH1cclxuXHJcbiAgICAgICAgICAuZWRpdG9yIC50aHVtYm5haWwgPiBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAudGh1bWJuYWlsOmhvdmVyIHtcclxuICAgICAgXHRcdFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICAgIFx0XHR9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAudGh1bWJuYWlsIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgXHRcdFx0ZGlzcGxheTpub25lO1xyXG4gICAgICBcdFx0XHRvcGFjaXR5OjA7XHJcbiAgICAgIFx0XHRcdHZpc2liaWxpdHk6aGlkZGVuO1xyXG4gICAgICBcdFx0fVxyXG5cclxuICAgIFx0XHRcdC5lZGl0b3IgLmNvbnRlbnQge1xyXG4gICAgXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAuZWRpdG9yIC50YWdzIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIFx0XHQuZWRpdG9yIC50YWdzIGlucHV0IHtcclxuICAgICAgXHRcdFx0d2lkdGg6MTAwJTtcclxuICAgICAgXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG4gICAgICBcdFx0XHRib3JkZXI6MHB4O1xyXG4gICAgICBcdFx0XHRmb250LXNpemU6MTdweDtcclxuICAgICAgXHRcdH1cclxuXHJcbiAgICAgIFx0XHQuZWRpdG9yIC50YWdzIGlucHV0OmZvY3VzLFxyXG4gICAgICBcdFx0LmVkaXRvciAuY29udGVudCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgIFx0XHRcdG91dGxpbmU6MHB4O1xyXG4gICAgICBcdFx0fVxyXG5cclxuICAgICAgXHRcdC5lZGl0b3IgLmNvbnRlbnQgLnF1aWxsIHtcclxuICAgICAgXHRcdFx0d2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDoyMDBweDtcclxuICAgICAgXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG4gICAgICBcdFx0XHRib3JkZXI6MHB4O1xyXG4gICAgICBcdFx0XHRmb250LXNpemU6MTZweDtcclxuICAgICAgXHRcdFx0bWluLWhlaWdodDo1MHZoO1xyXG4gICAgICAgICAgICBib3JkZXI6MHB4O1xyXG4gICAgICBcdFx0fVxyXG5cclxuICAgICAgXHRcdC5lZGl0b3IgLmNvbnRlbnQgLnBhbmVsIHtcclxuICAgICAgXHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIFx0XHRcdHJpZ2h0OjIwcHg7XHJcbiAgICAgIFx0XHRcdHRvcDoyMHB4O1xyXG4gICAgICBcdFx0XHRiYWNrZ3JvdW5kOiNmYWZhZmE7XHJcbiAgICAgIFx0XHR9XHJcblxyXG5cclxuICAgICAgXHRcdC5lZGl0b3IgLmNvbnRlbnQgLnBhbmVsIC5pdGVtIHtcclxuXHRcdFx0XHQgICAgZm9udC1zaXplOjE3cHg7XHJcbiAgICAgIFx0XHR9XHJcblxyXG4gICAgICBcdFx0LmVkaXRvciAucGFuZWwgLnZlcnRpY2FsLm1lbnUge1xyXG4gICAgICBcdFx0XHR3aWR0aDo0ZW07XHJcbiAgICAgIFx0XHRcdGJvcmRlcjogMHB4O1xyXG4gICAgICBcdFx0fVxyXG5cclxuICAgICAgICAgIC5lZGl0b3IgLnRpdGxlIC51aS5oZWFkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46MHB4XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICBcdGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\editor\\index.js */'
      }));
    }
  }]);

  return EditorWrapper;
}(_react2.default.Component);

exports.default = EditorWrapper;