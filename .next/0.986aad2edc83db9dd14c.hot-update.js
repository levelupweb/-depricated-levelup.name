webpackHotUpdate(0,{

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



module.exports = __webpack_require__(708);


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SameLoopPromise = undefined;

var _from = __webpack_require__(143);

var _from2 = _interopRequireDefault(_from);

var _keys = __webpack_require__(238);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(41);

var _inherits3 = _interopRequireDefault(_inherits2);

var _set = __webpack_require__(115);

var _set2 = _interopRequireDefault(_set);

exports.default = dynamicComponent;
exports.registerChunk = registerChunk;
exports.flushChunks = flushChunks;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentChunks = new _set2.default();

function dynamicComponent(p, o) {
  var promise = void 0;
  var options = void 0;

  if (p instanceof SameLoopPromise) {
    promise = p;
    options = o || {};
  } else {
    // Now we are trying to use the modules and render fields in options to load modules.
    if (!p.modules || !p.render) {
      var errorMessage = 'Options to `next/dynamic` should contains `modules` and `render` fields.';
      throw new Error(errorMessage);
    }

    if (o) {
      var _errorMessage = 'Include options in the first argument which contains `modules` and `render` fields.';
      throw new Error(_errorMessage);
    }

    options = p;
  }

  return function (_React$Component) {
    (0, _inherits3.default)(DynamicComponent, _React$Component);

    function DynamicComponent() {
      var _ref;

      (0, _classCallCheck3.default)(this, DynamicComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = DynamicComponent.__proto__ || (0, _getPrototypeOf2.default)(DynamicComponent)).call.apply(_ref, [this].concat(args)));

      _this.LoadingComponent = options.loading ? options.loading : function () {
        return _react2.default.createElement(
          'p',
          null,
          'loading...'
        );
      };
      _this.ssr = options.ssr === false ? options.ssr : true;

      _this.state = { AsyncComponent: null, asyncElement: null };
      _this.isServer = typeof window === 'undefined';

      // This flag is used to load the bundle again, if needed
      _this.loadBundleAgain = null;
      // This flag keeps track of the whether we are loading a bundle or not.
      _this.loadingBundle = false;

      if (_this.ssr) {
        _this.load();
      }
      return _this;
    }

    (0, _createClass3.default)(DynamicComponent, [{
      key: 'load',
      value: function load() {
        if (promise) {
          this.loadComponent();
        } else {
          this.loadBundle(this.props);
        }
      }
    }, {
      key: 'loadComponent',
      value: function loadComponent() {
        var _this2 = this;

        promise.then(function (AsyncComponent) {
          // Set a readable displayName for the wrapper component
          var asyncCompName = (0, _utils.getDisplayName)(AsyncComponent);
          if (asyncCompName) {
            DynamicComponent.displayName = 'DynamicComponent for ' + asyncCompName;
          }

          if (_this2.mounted) {
            _this2.setState({ AsyncComponent: AsyncComponent });
          } else {
            if (_this2.isServer) {
              registerChunk(AsyncComponent.__webpackChunkName);
            }
            _this2.state.AsyncComponent = AsyncComponent;
          }
        });
      }
    }, {
      key: 'loadBundle',
      value: function loadBundle(props) {
        var _this3 = this;

        this.loadBundleAgain = null;
        this.loadingBundle = true;

        // Run this for prop changes as well.
        var modulePromiseMap = options.modules(props);
        var moduleNames = (0, _keys2.default)(modulePromiseMap);
        var remainingPromises = moduleNames.length;
        var moduleMap = {};

        var renderModules = function renderModules() {
          if (_this3.loadBundleAgain) {
            _this3.loadBundle(_this3.loadBundleAgain);
            return;
          }

          _this3.loadingBundle = false;
          DynamicComponent.displayName = 'DynamicBundle';
          var asyncElement = options.render(props, moduleMap);
          if (_this3.mounted) {
            _this3.setState({ asyncElement: asyncElement });
          } else {
            _this3.state.asyncElement = asyncElement;
          }
        };

        var loadModule = function loadModule(name) {
          var promise = modulePromiseMap[name];
          promise.then(function (Component) {
            if (_this3.isServer) {
              registerChunk(Component.__webpackChunkName);
            }
            moduleMap[name] = Component;
            remainingPromises--;
            if (remainingPromises === 0) {
              renderModules();
            }
          });
        };

        moduleNames.forEach(loadModule);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.mounted = true;
        if (!this.ssr) {
          this.load();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (promise) return;

        this.setState({ asyncElement: null });

        if (this.loadingBundle) {
          this.loadBundleAgain = nextProps;
          return;
        }

        this.loadBundle(nextProps);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            AsyncComponent = _state.AsyncComponent,
            asyncElement = _state.asyncElement;
        var LoadingComponent = this.LoadingComponent;


        if (asyncElement) return asyncElement;
        if (AsyncComponent) return _react2.default.createElement(AsyncComponent, this.props);

        return _react2.default.createElement(LoadingComponent, this.props);
      }
    }]);
    return DynamicComponent;
  }(_react2.default.Component);
}

function registerChunk(chunk) {
  currentChunks.add(chunk);
}

function flushChunks() {
  var chunks = (0, _from2.default)(currentChunks);
  currentChunks.clear();
  return chunks;
}

var SameLoopPromise = exports.SameLoopPromise = function () {
  function SameLoopPromise(cb) {
    (0, _classCallCheck3.default)(this, SameLoopPromise);

    this.onResultCallbacks = [];
    this.onErrorCallbacks = [];
    this.cb = cb;
  }

  (0, _createClass3.default)(SameLoopPromise, [{
    key: 'setResult',
    value: function setResult(result) {
      this.gotResult = true;
      this.result = result;
      this.onResultCallbacks.forEach(function (cb) {
        return cb(result);
      });
      this.onResultCallbacks = [];
    }
  }, {
    key: 'setError',
    value: function setError(error) {
      this.gotError = true;
      this.error = error;
      this.onErrorCallbacks.forEach(function (cb) {
        return cb(error);
      });
      this.onErrorCallbacks = [];
    }
  }, {
    key: 'then',
    value: function then(onResult, onError) {
      var _this4 = this;

      this.runIfNeeded();
      var promise = new SameLoopPromise();

      var handleError = function handleError() {
        if (onError) {
          promise.setResult(onError(_this4.error));
        } else {
          promise.setError(_this4.error);
        }
      };

      var handleResult = function handleResult() {
        promise.setResult(onResult(_this4.result));
      };

      if (this.gotResult) {
        handleResult();
        return promise;
      }

      if (this.gotError) {
        handleError();
        return promise;
      }

      this.onResultCallbacks.push(handleResult);
      this.onErrorCallbacks.push(handleError);

      return promise;
    }
  }, {
    key: 'catch',
    value: function _catch(onError) {
      var _this5 = this;

      this.runIfNeeded();
      var promise = new SameLoopPromise();

      var handleError = function handleError() {
        promise.setResult(onError(_this5.error));
      };

      var handleResult = function handleResult() {
        promise.setResult(_this5.result);
      };

      if (this.gotResult) {
        handleResult();
        return promise;
      }

      if (this.gotError) {
        handleError();
        return promise;
      }

      this.onErrorCallbacks.push(handleError);
      this.onResultCallbacks.push(handleResult);

      return promise;
    }
  }, {
    key: 'runIfNeeded',
    value: function runIfNeeded() {
      var _this6 = this;

      if (!this.cb) return;
      if (this.ran) return;

      this.ran = true;
      this.cb(function (result) {
        return _this6.setResult(result);
      }, function (error) {
        return _this6.setError(error);
      });
    }
  }]);
  return SameLoopPromise;
}();

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(709);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(713);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(622);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  true ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(710);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(711);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(712);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 710:
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(8);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(714);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(716);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(717);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(718);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(199);

var _PropTypes = __webpack_require__(622);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  true ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(715);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(621);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(621);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(199);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DOMPositionUtils = __webpack_require__(720);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import ImmutablePropTypes from 'react-immutable-proptypes';

var ReduxInfiniteScroll = function (_React$Component) {
  _inherits(ReduxInfiniteScroll, _React$Component);

  function ReduxInfiniteScroll(props) {
    _classCallCheck(this, ReduxInfiniteScroll);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReduxInfiniteScroll).call(this, props));

    _this.scrollFunction = _this.scrollListener.bind(_this);
    return _this;
  }

  _createClass(ReduxInfiniteScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.attachScrollListener();
    }
  }, {
    key: '_findElement',
    value: function _findElement() {
      return this.props.elementIsScrollable ? _reactDom2.default.findDOMNode(this) : window;
    }
  }, {
    key: 'attachScrollListener',
    value: function attachScrollListener() {
      if (!this.props.hasMore || this.props.loadingMore) return;
      var el = this._findElement();
      el.addEventListener('scroll', this.scrollFunction, true);
      el.addEventListener('resize', this.scrollFunction, true);
      this.scrollListener();
    }
  }, {
    key: '_elScrollListener',
    value: function _elScrollListener() {
      var el = _reactDom2.default.findDOMNode(this);
      var topScrollPos = el.scrollTop;
      var totalContainerHeight = el.scrollHeight;
      var containerFixedHeight = el.offsetHeight;
      var bottomScrollPos = topScrollPos + containerFixedHeight;

      return totalContainerHeight - bottomScrollPos;
    }
  }, {
    key: '_windowScrollListener',
    value: function _windowScrollListener() {
      var el = _reactDom2.default.findDOMNode(this);
      var windowScrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      var elTotalHeight = (0, _DOMPositionUtils.topPosition)(el) + el.offsetHeight;
      var currentBottomPosition = elTotalHeight - windowScrollTop - window.innerHeight;

      return currentBottomPosition;
    }
  }, {
    key: 'scrollListener',
    value: function scrollListener() {
      // This is to prevent the upcoming logic from toggling a load more before
      // any data has been passed to the component
      if (this._totalItemsSize() <= 0) return;

      var bottomPosition = this.props.elementIsScrollable ? this._elScrollListener() : this._windowScrollListener();

      if (bottomPosition < Number(this.props.threshold)) {
        this.detachScrollListener();
        this.props.loadMore();
      }
    }
  }, {
    key: 'detachScrollListener',
    value: function detachScrollListener() {
      var el = this._findElement();
      el.removeEventListener('scroll', this.scrollFunction, true);
      el.removeEventListener('resize', this.scrollFunction, true);
    }
  }, {
    key: '_renderOptions',
    value: function _renderOptions() {
      var allItems = this.props.children.concat(this.props.items);

      return allItems;
    }
  }, {
    key: '_totalItemsSize',
    value: function _totalItemsSize() {
      var totalSize = void 0;
      totalSize += this.props.children.size ? this.props.children.size : this.props.children.length;
      totalSize += this.props.items.size ? this.props.items.size : this.props.items.length;
      return totalSize;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachScrollListener();
    }
  }, {
    key: 'renderLoader',
    value: function renderLoader() {
      return this.props.loadingMore && this.props.showLoader ? this.props.loader : undefined;
    }
  }, {
    key: '_assignHolderClass',
    value: function _assignHolderClass() {
      var additionalClass = void 0;
      additionalClass = typeof this.props.className === 'function' ? this.props.className() : this.props.className;

      return 'redux-infinite-scroll ' + additionalClass;
    }
  }, {
    key: 'render',
    value: function render() {
      var Holder = this.props.holderType;

      return _react2.default.createElement(
        Holder,
        { className: this._assignHolderClass(), style: { height: this.props.containerHeight } },
        this._renderOptions(),
        this.renderLoader()
      );
    }
  }]);

  return ReduxInfiniteScroll;
}(_react2.default.Component);

exports.default = ReduxInfiniteScroll;


ReduxInfiniteScroll.propTypes = {
  elementIsScrollable: _react2.default.PropTypes.bool,
  containerHeight: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  threshold: _react2.default.PropTypes.number,
  hasMore: _react2.default.PropTypes.bool,
  loadingMore: _react2.default.PropTypes.bool,
  loader: _react2.default.PropTypes.any,
  showLoader: _react2.default.PropTypes.bool,
  loadMore: _react2.default.PropTypes.func.isRequired,
  items: _react2.default.PropTypes.oneOfType([
  //ImmutablePropTypes.list,
  _react2.default.PropTypes.array]),
  children: _react2.default.PropTypes.oneOfType([
  //ImmutablePropTypes.list,
  _react2.default.PropTypes.array]),
  holderType: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func])
};

ReduxInfiniteScroll.defaultProps = {
  className: '',
  elementIsScrollable: true,
  containerHeight: '100%',
  threshold: 100,
  hasMore: true,
  loadingMore: false,
  loader: _react2.default.createElement(
    'div',
    { style: { textAlign: 'center' } },
    'Loading...'
  ),
  showLoader: true,
  holderType: 'div',
  children: [],
  items: []
};

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topPosition = topPosition;
function topPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + topPosition(domElt.offsetParent);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ODZhYWQyZWRjODNkYjlkZDE0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcz81NzFkOThjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL2luRE9NLmpzPzU3MWQ5OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvUHJvcFR5cGVzLmpzPzU3MWQ5OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9saWIvZHluYW1pYy5qcz81NzFkOThjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb25Hcm91cC5qcz81NzFkOThjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcz81NzFkOThjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaGFpbi1mdW5jdGlvbi9pbmRleC5qcz81NzFkOThjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanM/MWFmMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanM/ZDY4OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5qcz81MDRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qcz9mM2VlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qcz8xZTBiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcy5qcz9lMmMyYTdmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcz9lMmMyYTdmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMuanM/ZTJjMmE3ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtaW5maW5pdGUtc2Nyb2xsL2xpYi9SZWR1eEluZmluaXRlU2Nyb2xsLmpzP2UyYzJhN2YiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWluZmluaXRlLXNjcm9sbC9saWIvVXRpbGl0aWVzL0RPTVBvc2l0aW9uVXRpbHMuanM/ZTJjMmE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXAnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL2luRE9NLmpzXG4vLyBtb2R1bGUgaWQgPSA2MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5uYW1lU2hhcGUgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25UaW1lb3V0KHRyYW5zaXRpb25UeXBlKSB7XG4gIHZhciB0aW1lb3V0UHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZSArICdUaW1lb3V0JztcbiAgdmFyIGVuYWJsZWRQcm9wTmFtZSA9ICd0cmFuc2l0aW9uJyArIHRyYW5zaXRpb25UeXBlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAvLyBJZiB0aGUgdHJhbnNpdGlvbiBpcyBlbmFibGVkXG4gICAgaWYgKHByb3BzW2VuYWJsZWRQcm9wTmFtZV0pIHtcbiAgICAgIC8vIElmIG5vIHRpbWVvdXQgZHVyYXRpb24gaXMgcHJvdmlkZWRcbiAgICAgIGlmIChwcm9wc1t0aW1lb3V0UHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcih0aW1lb3V0UHJvcE5hbWUgKyAnIHdhc25cXCd0IHN1cHBsaWVkIHRvIENTU1RyYW5zaXRpb25Hcm91cDogJyArICd0aGlzIGNhbiBjYXVzZSB1bnJlbGlhYmxlIGFuaW1hdGlvbnMgYW5kIHdvblxcJ3QgYmUgc3VwcG9ydGVkIGluICcgKyAnYSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdC4gU2VlICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hbmltYXRpb24tdHJhbnNpdGlvbi1ncm91cC10aW1lb3V0IGZvciBtb3JlICcgKyAnaW5mb3JtYXRpb24uJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGR1cmF0aW9uIGlzbid0IGEgbnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1t0aW1lb3V0UHJvcE5hbWVdICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgbXVzdCBiZSBhIG51bWJlciAoaW4gbWlsbGlzZWNvbmRzKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgbmFtZVNoYXBlID0gZXhwb3J0cy5uYW1lU2hhcGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufSksIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsZWF2ZUFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFwcGVhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFwcGVhckFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0pXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNhbWVMb29wUHJvbWlzZSA9IHVuZGVmaW5lZDtcblxudmFyIF9mcm9tID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20nKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zZXQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0Jyk7XG5cbnZhciBfc2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWNDb21wb25lbnQ7XG5leHBvcnRzLnJlZ2lzdGVyQ2h1bmsgPSByZWdpc3RlckNodW5rO1xuZXhwb3J0cy5mbHVzaENodW5rcyA9IGZsdXNoQ2h1bmtzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjdXJyZW50Q2h1bmtzID0gbmV3IF9zZXQyLmRlZmF1bHQoKTtcblxuZnVuY3Rpb24gZHluYW1pY0NvbXBvbmVudChwLCBvKSB7XG4gIHZhciBwcm9taXNlID0gdm9pZCAwO1xuICB2YXIgb3B0aW9ucyA9IHZvaWQgMDtcblxuICBpZiAocCBpbnN0YW5jZW9mIFNhbWVMb29wUHJvbWlzZSkge1xuICAgIHByb21pc2UgPSBwO1xuICAgIG9wdGlvbnMgPSBvIHx8IHt9O1xuICB9IGVsc2Uge1xuICAgIC8vIE5vdyB3ZSBhcmUgdHJ5aW5nIHRvIHVzZSB0aGUgbW9kdWxlcyBhbmQgcmVuZGVyIGZpZWxkcyBpbiBvcHRpb25zIHRvIGxvYWQgbW9kdWxlcy5cbiAgICBpZiAoIXAubW9kdWxlcyB8fCAhcC5yZW5kZXIpIHtcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSAnT3B0aW9ucyB0byBgbmV4dC9keW5hbWljYCBzaG91bGQgY29udGFpbnMgYG1vZHVsZXNgIGFuZCBgcmVuZGVyYCBmaWVsZHMuJztcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChvKSB7XG4gICAgICB2YXIgX2Vycm9yTWVzc2FnZSA9ICdJbmNsdWRlIG9wdGlvbnMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IHdoaWNoIGNvbnRhaW5zIGBtb2R1bGVzYCBhbmQgYHJlbmRlcmAgZmllbGRzLic7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoX2Vycm9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHA7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShEeW5hbWljQ29tcG9uZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIER5bmFtaWNDb21wb25lbnQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRHluYW1pY0NvbXBvbmVudCk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBEeW5hbWljQ29tcG9uZW50Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShEeW5hbWljQ29tcG9uZW50KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgIF90aGlzLkxvYWRpbmdDb21wb25lbnQgPSBvcHRpb25zLmxvYWRpbmcgPyBvcHRpb25zLmxvYWRpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAncCcsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICAnbG9hZGluZy4uLidcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBfdGhpcy5zc3IgPSBvcHRpb25zLnNzciA9PT0gZmFsc2UgPyBvcHRpb25zLnNzciA6IHRydWU7XG5cbiAgICAgIF90aGlzLnN0YXRlID0geyBBc3luY0NvbXBvbmVudDogbnVsbCwgYXN5bmNFbGVtZW50OiBudWxsIH07XG4gICAgICBfdGhpcy5pc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG4gICAgICAvLyBUaGlzIGZsYWcgaXMgdXNlZCB0byBsb2FkIHRoZSBidW5kbGUgYWdhaW4sIGlmIG5lZWRlZFxuICAgICAgX3RoaXMubG9hZEJ1bmRsZUFnYWluID0gbnVsbDtcbiAgICAgIC8vIFRoaXMgZmxhZyBrZWVwcyB0cmFjayBvZiB0aGUgd2hldGhlciB3ZSBhcmUgbG9hZGluZyBhIGJ1bmRsZSBvciBub3QuXG4gICAgICBfdGhpcy5sb2FkaW5nQnVuZGxlID0gZmFsc2U7XG5cbiAgICAgIGlmIChfdGhpcy5zc3IpIHtcbiAgICAgICAgX3RoaXMubG9hZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKER5bmFtaWNDb21wb25lbnQsIFt7XG4gICAgICBrZXk6ICdsb2FkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICBpZiAocHJvbWlzZSkge1xuICAgICAgICAgIHRoaXMubG9hZENvbXBvbmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9hZEJ1bmRsZSh0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xvYWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAoQXN5bmNDb21wb25lbnQpIHtcbiAgICAgICAgICAvLyBTZXQgYSByZWFkYWJsZSBkaXNwbGF5TmFtZSBmb3IgdGhlIHdyYXBwZXIgY29tcG9uZW50XG4gICAgICAgICAgdmFyIGFzeW5jQ29tcE5hbWUgPSAoMCwgX3V0aWxzLmdldERpc3BsYXlOYW1lKShBc3luY0NvbXBvbmVudCk7XG4gICAgICAgICAgaWYgKGFzeW5jQ29tcE5hbWUpIHtcbiAgICAgICAgICAgIER5bmFtaWNDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnRHluYW1pY0NvbXBvbmVudCBmb3IgJyArIGFzeW5jQ29tcE5hbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzMi5tb3VudGVkKSB7XG4gICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBBc3luY0NvbXBvbmVudDogQXN5bmNDb21wb25lbnQgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfdGhpczIuaXNTZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJDaHVuayhBc3luY0NvbXBvbmVudC5fX3dlYnBhY2tDaHVua05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMyLnN0YXRlLkFzeW5jQ29tcG9uZW50ID0gQXN5bmNDb21wb25lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkQnVuZGxlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkQnVuZGxlKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubG9hZEJ1bmRsZUFnYWluID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2FkaW5nQnVuZGxlID0gdHJ1ZTtcblxuICAgICAgICAvLyBSdW4gdGhpcyBmb3IgcHJvcCBjaGFuZ2VzIGFzIHdlbGwuXG4gICAgICAgIHZhciBtb2R1bGVQcm9taXNlTWFwID0gb3B0aW9ucy5tb2R1bGVzKHByb3BzKTtcbiAgICAgICAgdmFyIG1vZHVsZU5hbWVzID0gKDAsIF9rZXlzMi5kZWZhdWx0KShtb2R1bGVQcm9taXNlTWFwKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1Byb21pc2VzID0gbW9kdWxlTmFtZXMubGVuZ3RoO1xuICAgICAgICB2YXIgbW9kdWxlTWFwID0ge307XG5cbiAgICAgICAgdmFyIHJlbmRlck1vZHVsZXMgPSBmdW5jdGlvbiByZW5kZXJNb2R1bGVzKCkge1xuICAgICAgICAgIGlmIChfdGhpczMubG9hZEJ1bmRsZUFnYWluKSB7XG4gICAgICAgICAgICBfdGhpczMubG9hZEJ1bmRsZShfdGhpczMubG9hZEJ1bmRsZUFnYWluKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczMubG9hZGluZ0J1bmRsZSA9IGZhbHNlO1xuICAgICAgICAgIER5bmFtaWNDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnRHluYW1pY0J1bmRsZSc7XG4gICAgICAgICAgdmFyIGFzeW5jRWxlbWVudCA9IG9wdGlvbnMucmVuZGVyKHByb3BzLCBtb2R1bGVNYXApO1xuICAgICAgICAgIGlmIChfdGhpczMubW91bnRlZCkge1xuICAgICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgYXN5bmNFbGVtZW50OiBhc3luY0VsZW1lbnQgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMy5zdGF0ZS5hc3luY0VsZW1lbnQgPSBhc3luY0VsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBsb2FkTW9kdWxlID0gZnVuY3Rpb24gbG9hZE1vZHVsZShuYW1lKSB7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBtb2R1bGVQcm9taXNlTWFwW25hbWVdO1xuICAgICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMzLmlzU2VydmVyKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVyQ2h1bmsoQ29tcG9uZW50Ll9fd2VicGFja0NodW5rTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGVNYXBbbmFtZV0gPSBDb21wb25lbnQ7XG4gICAgICAgICAgICByZW1haW5pbmdQcm9taXNlcy0tO1xuICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1Byb21pc2VzID09PSAwKSB7XG4gICAgICAgICAgICAgIHJlbmRlck1vZHVsZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBtb2R1bGVOYW1lcy5mb3JFYWNoKGxvYWRNb2R1bGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLnNzcikge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb21pc2UpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXN5bmNFbGVtZW50OiBudWxsIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdCdW5kbGUpIHtcbiAgICAgICAgICB0aGlzLmxvYWRCdW5kbGVBZ2FpbiA9IG5leHRQcm9wcztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRCdW5kbGUobmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBBc3luY0NvbXBvbmVudCA9IF9zdGF0ZS5Bc3luY0NvbXBvbmVudCxcbiAgICAgICAgICAgIGFzeW5jRWxlbWVudCA9IF9zdGF0ZS5hc3luY0VsZW1lbnQ7XG4gICAgICAgIHZhciBMb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5Mb2FkaW5nQ29tcG9uZW50O1xuXG5cbiAgICAgICAgaWYgKGFzeW5jRWxlbWVudCkgcmV0dXJuIGFzeW5jRWxlbWVudDtcbiAgICAgICAgaWYgKEFzeW5jQ29tcG9uZW50KSByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXN5bmNDb21wb25lbnQsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIER5bmFtaWNDb21wb25lbnQ7XG4gIH0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2h1bmsoY2h1bmspIHtcbiAgY3VycmVudENodW5rcy5hZGQoY2h1bmspO1xufVxuXG5mdW5jdGlvbiBmbHVzaENodW5rcygpIHtcbiAgdmFyIGNodW5rcyA9ICgwLCBfZnJvbTIuZGVmYXVsdCkoY3VycmVudENodW5rcyk7XG4gIGN1cnJlbnRDaHVua3MuY2xlYXIoKTtcbiAgcmV0dXJuIGNodW5rcztcbn1cblxudmFyIFNhbWVMb29wUHJvbWlzZSA9IGV4cG9ydHMuU2FtZUxvb3BQcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTYW1lTG9vcFByb21pc2UoY2IpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTYW1lTG9vcFByb21pc2UpO1xuXG4gICAgdGhpcy5vblJlc3VsdENhbGxiYWNrcyA9IFtdO1xuICAgIHRoaXMub25FcnJvckNhbGxiYWNrcyA9IFtdO1xuICAgIHRoaXMuY2IgPSBjYjtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFNhbWVMb29wUHJvbWlzZSwgW3tcbiAgICBrZXk6ICdzZXRSZXN1bHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZXN1bHQocmVzdWx0KSB7XG4gICAgICB0aGlzLmdvdFJlc3VsdCA9IHRydWU7XG4gICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgIHRoaXMub25SZXN1bHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25SZXN1bHRDYWxsYmFja3MgPSBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRFcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEVycm9yKGVycm9yKSB7XG4gICAgICB0aGlzLmdvdEVycm9yID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHRoaXMub25FcnJvckNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gY2IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9uRXJyb3JDYWxsYmFja3MgPSBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0aGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGhlbihvblJlc3VsdCwgb25FcnJvcikge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHRoaXMucnVuSWZOZWVkZWQoKTtcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFNhbWVMb29wUHJvbWlzZSgpO1xuXG4gICAgICB2YXIgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnNldFJlc3VsdChvbkVycm9yKF90aGlzNC5lcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoX3RoaXM0LmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGhhbmRsZVJlc3VsdCA9IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdCgpIHtcbiAgICAgICAgcHJvbWlzZS5zZXRSZXN1bHQob25SZXN1bHQoX3RoaXM0LnJlc3VsdCkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuZ290UmVzdWx0KSB7XG4gICAgICAgIGhhbmRsZVJlc3VsdCgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ290RXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25SZXN1bHRDYWxsYmFja3MucHVzaChoYW5kbGVSZXN1bHQpO1xuICAgICAgdGhpcy5vbkVycm9yQ2FsbGJhY2tzLnB1c2goaGFuZGxlRXJyb3IpO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jYXRjaChvbkVycm9yKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdGhpcy5ydW5JZk5lZWRlZCgpO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgU2FtZUxvb3BQcm9taXNlKCk7XG5cbiAgICAgIHZhciBoYW5kbGVFcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgICBwcm9taXNlLnNldFJlc3VsdChvbkVycm9yKF90aGlzNS5lcnJvcikpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGhhbmRsZVJlc3VsdCA9IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdCgpIHtcbiAgICAgICAgcHJvbWlzZS5zZXRSZXN1bHQoX3RoaXM1LnJlc3VsdCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5nb3RSZXN1bHQpIHtcbiAgICAgICAgaGFuZGxlUmVzdWx0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb3RFcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcigpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkVycm9yQ2FsbGJhY2tzLnB1c2goaGFuZGxlRXJyb3IpO1xuICAgICAgdGhpcy5vblJlc3VsdENhbGxiYWNrcy5wdXNoKGhhbmRsZVJlc3VsdCk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3J1bklmTmVlZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcnVuSWZOZWVkZWQoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmNiKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5yYW4pIHJldHVybjtcblxuICAgICAgdGhpcy5yYW4gPSB0cnVlO1xuICAgICAgdGhpcy5jYihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBfdGhpczYuc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNi5zZXRFcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNhbWVMb29wUHJvbWlzZTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbGliL2R5bmFtaWMuanNcbi8vIG1vZHVsZSBpZCA9IDYyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxudmFyIF9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCA9IHJlcXVpcmUoJy4vQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQnKTtcblxudmFyIF9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9Qcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICB0cmFuc2l0aW9uTmFtZTogX1Byb3BUeXBlcy5uYW1lU2hhcGUuaXNSZXF1aXJlZCxcblxuICB0cmFuc2l0aW9uQXBwZWFyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHRyYW5zaXRpb25FbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB0cmFuc2l0aW9uTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6ICgwLCBfUHJvcFR5cGVzLnRyYW5zaXRpb25UaW1lb3V0KSgnQXBwZWFyJyksXG4gIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6ICgwLCBfUHJvcFR5cGVzLnRyYW5zaXRpb25UaW1lb3V0KSgnRW50ZXInKSxcbiAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogKDAsIF9Qcm9wVHlwZXMudHJhbnNpdGlvblRpbWVvdXQpKCdMZWF2ZScpXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgdHJhbnNpdGlvbkVudGVyOiB0cnVlLFxuICB0cmFuc2l0aW9uTGVhdmU6IHRydWVcbn07XG5cbnZhciBDU1NUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ1NTVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uR3JvdXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLl93cmFwQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQyLmRlZmF1bHQsIHtcbiAgICAgICAgbmFtZTogX3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIGFwcGVhcjogX3RoaXMucHJvcHMudHJhbnNpdGlvbkFwcGVhcixcbiAgICAgICAgZW50ZXI6IF90aGlzLnByb3BzLnRyYW5zaXRpb25FbnRlcixcbiAgICAgICAgbGVhdmU6IF90aGlzLnByb3BzLnRyYW5zaXRpb25MZWF2ZSxcbiAgICAgICAgYXBwZWFyVGltZW91dDogX3RoaXMucHJvcHMudHJhbnNpdGlvbkFwcGVhclRpbWVvdXQsXG4gICAgICAgIGVudGVyVGltZW91dDogX3RoaXMucHJvcHMudHJhbnNpdGlvbkVudGVyVGltZW91dCxcbiAgICAgICAgbGVhdmVUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0XG4gICAgICB9LCBjaGlsZCk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICAvLyBXZSBuZWVkIHRvIHByb3ZpZGUgdGhpcyBjaGlsZEZhY3Rvcnkgc28gdGhhdFxuICAvLyBSZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkIGNhbiByZWNlaXZlIHVwZGF0ZXMgdG8gbmFtZSwgZW50ZXIsIGFuZFxuICAvLyBsZWF2ZSB3aGlsZSBpdCBpcyBsZWF2aW5nLlxuXG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNoaWxkRmFjdG9yeTogdGhpcy5fd3JhcENoaWxkIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbkdyb3VwO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ0NTU1RyYW5zaXRpb25Hcm91cCc7XG5cblxuQ1NTVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuQ1NTVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbkdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDcwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2hhaW5GdW5jdGlvbiA9IHJlcXVpcmUoJ2NoYWluLWZ1bmN0aW9uJyk7XG5cbnZhciBfY2hhaW5GdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbkZ1bmN0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfQ2hpbGRNYXBwaW5nID0gcmVxdWlyZSgnLi91dGlscy9DaGlsZE1hcHBpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBjaGlsZEZhY3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59O1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zaXRpb25Hcm91cCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLnBlcmZvcm1BcHBlYXIgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxBcHBlYXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxBcHBlYXIoX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcuYmluZChfdGhpcywga2V5LCBjb21wb25lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRBcHBlYXIoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBhcHBlYXJlZC4gUmVtb3ZlIGl0LlxuICAgICAgICBfdGhpcy5wZXJmb3JtTGVhdmUoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcuYmluZChfdGhpcywga2V5LCBjb21wb25lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZEVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcigpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKCFjdXJyZW50Q2hpbGRNYXBwaW5nIHx8ICFjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyB3YXMgcmVtb3ZlZCBiZWZvcmUgaXQgaGFkIGZ1bGx5IGVudGVyZWQuIFJlbW92ZSBpdC5cbiAgICAgICAgX3RoaXMucGVyZm9ybUxlYXZlKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZShfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcuYmluZChfdGhpcywga2V5LCBjb21wb25lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIHNvbWV3aGF0IGRhbmdlcm91cyBiL2MgaXQgY2FsbHMgc2V0U3RhdGUoKVxuICAgICAgICAvLyBhZ2FpbiwgZWZmZWN0aXZlbHkgbXV0YXRpbmcgdGhlIGNvbXBvbmVudCBiZWZvcmUgYWxsIHRoZSB3b3JrXG4gICAgICAgIC8vIGlzIGRvbmUuXG4gICAgICAgIF90aGlzLl9oYW5kbGVEb25lTGVhdmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lTGVhdmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChjdXJyZW50Q2hpbGRNYXBwaW5nICYmIGN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIGVudGVyZWQgYWdhaW4gYmVmb3JlIGl0IGZ1bGx5IGxlZnQuIEFkZCBpdCBhZ2Fpbi5cbiAgICAgICAgX3RoaXMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgdmFyIG5ld0NoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcbiAgICAgICAgICBkZWxldGUgbmV3Q2hpbGRyZW5ba2V5XTtcbiAgICAgICAgICByZXR1cm4geyBjaGlsZHJlbjogbmV3Q2hpbGRyZW4gfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNoaWxkUmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoaWxkcmVuOiAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKHByb3BzLmNoaWxkcmVuKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5cyA9IHt9O1xuICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBpbml0aWFsQ2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5pdGlhbENoaWxkTWFwcGluZykge1xuICAgICAgaWYgKGluaXRpYWxDaGlsZE1hcHBpbmdba2V5XSkge1xuICAgICAgICB0aGlzLnBlcmZvcm1BcHBlYXIoa2V5LCB0aGlzLmNoaWxkUmVmc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgbmV4dENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgcHJldkNoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoaWxkcmVuOiAoMCwgX0NoaWxkTWFwcGluZy5tZXJnZUNoaWxkTWFwcGluZ3MpKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpXG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gbmV4dENoaWxkTWFwcGluZykge1xuICAgICAgdmFyIGhhc1ByZXYgPSBwcmV2Q2hpbGRNYXBwaW5nICYmIHByZXZDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgIGlmIChuZXh0Q2hpbGRNYXBwaW5nW2tleV0gJiYgIWhhc1ByZXYgJiYgIXRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSkge1xuICAgICAgICB0aGlzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHByZXZDaGlsZE1hcHBpbmcpIHtcbiAgICAgIHZhciBoYXNOZXh0ID0gbmV4dENoaWxkTWFwcGluZyAmJiBuZXh0Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KF9rZXkpO1xuICAgICAgaWYgKHByZXZDaGlsZE1hcHBpbmdbX2tleV0gJiYgIWhhc05leHQgJiYgIXRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNbX2tleV0pIHtcbiAgICAgICAgdGhpcy5rZXlzVG9MZWF2ZS5wdXNoKF9rZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIHdhbnQgdG8gc29tZWRheSBjaGVjayBmb3IgcmVvcmRlcmluZywgd2UgY291bGQgZG8gaXQgaGVyZS5cbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIGtleXNUb0VudGVyLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wZXJmb3JtRW50ZXIoa2V5LCBfdGhpczIuY2hpbGRSZWZzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGtleXNUb0xlYXZlID0gdGhpcy5rZXlzVG9MZWF2ZTtcbiAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAga2V5c1RvTGVhdmUuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBlcmZvcm1MZWF2ZShrZXksIF90aGlzMi5jaGlsZFJlZnNba2V5XSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAvLyBUT0RPOiB3ZSBjb3VsZCBnZXQgcmlkIG9mIHRoZSBuZWVkIGZvciB0aGUgd3JhcHBlciBub2RlXG4gICAgLy8gYnkgY2xvbmluZyBhIHNpbmdsZSBjaGlsZFxuICAgIHZhciBjaGlsZHJlblRvUmVuZGVyID0gW107XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrZXkpIHtcbiAgICAgIHZhciBjaGlsZCA9IF90aGlzMy5zdGF0ZS5jaGlsZHJlbltrZXldO1xuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIHZhciBpc0NhbGxiYWNrUmVmID0gdHlwZW9mIGNoaWxkLnJlZiAhPT0gJ3N0cmluZyc7XG4gICAgICAgIHZhciBmYWN0b3J5Q2hpbGQgPSBfdGhpczMucHJvcHMuY2hpbGRGYWN0b3J5KGNoaWxkKTtcbiAgICAgICAgdmFyIHJlZiA9IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgX3RoaXMzLmNoaWxkUmVmc1trZXldID0gcjtcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShpc0NhbGxiYWNrUmVmLCAnc3RyaW5nIHJlZnMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gY2hpbGRyZW4gb2YgVHJhbnNpdGlvbkdyb3VwIGFuZCB3aWxsIGJlIGlnbm9yZWQuICcgKyAnUGxlYXNlIHVzZSBhIGNhbGxiYWNrIHJlZiBpbnN0ZWFkOiBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCN0aGUtcmVmLWNhbGxiYWNrLWF0dHJpYnV0ZScpIDogdm9pZCAwO1xuXG4gICAgICAgIC8vIEFsd2F5cyBjaGFpbmluZyB0aGUgcmVmcyBsZWFkcyB0byBwcm9ibGVtcyB3aGVuIHRoZSBjaGlsZEZhY3RvcnlcbiAgICAgICAgLy8gd3JhcHMgdGhlIGNoaWxkLiBUaGUgY2hpbGQgcmVmIGNhbGxiYWNrIGdldHMgY2FsbGVkIHR3aWNlIHdpdGggdGhlXG4gICAgICAgIC8vIHdyYXBwZXIgYW5kIHRoZSBjaGlsZC4gU28gd2Ugb25seSBuZWVkIHRvIGNoYWluIHRoZSByZWYgaWYgdGhlXG4gICAgICAgIC8vIGZhY3RvcnlDaGlsZCBpcyBub3QgZGlmZmVyZW50IGZyb20gY2hpbGQuXG4gICAgICAgIGlmIChmYWN0b3J5Q2hpbGQgPT09IGNoaWxkICYmIGlzQ2FsbGJhY2tSZWYpIHtcbiAgICAgICAgICByZWYgPSAoMCwgX2NoYWluRnVuY3Rpb24yLmRlZmF1bHQpKGNoaWxkLnJlZiwgcmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgbGVhdmluZy5cbiAgICAgICAgLy8gVGhlIG5vcm1hbCBSZWFjdCB3YXkgdG8gZG8gaXQgd29uJ3Qgd29yayBzaW5jZSB0aGUgY2hpbGQgd2lsbCBoYXZlXG4gICAgICAgIC8vIGFscmVhZHkgYmVlbiByZW1vdmVkLiBJbiBjYXNlIHlvdSBuZWVkIHRoaXMgYmVoYXZpb3IgeW91IGNhbiBwcm92aWRlXG4gICAgICAgIC8vIGEgY2hpbGRGYWN0b3J5IGZ1bmN0aW9uIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmVcbiAgICAgICAgLy8gbGVhdmluZy5cbiAgICAgICAgY2hpbGRyZW5Ub1JlbmRlci5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoZmFjdG9yeUNoaWxkLCB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgcmVmOiByZWZcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5jaGlsZHJlbikge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG5cbiAgICAvLyBEbyBub3QgZm9yd2FyZCBUcmFuc2l0aW9uR3JvdXAgcHJvcHMgdG8gcHJpbWl0aXZlIERPTSBub2Rlc1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkxlYXZlO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTmFtZTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5jaGlsZEZhY3Rvcnk7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25FbnRlclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25BcHBlYXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy5jb21wb25lbnQ7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5jb21wb25lbnQsIHByb3BzLCBjaGlsZHJlblRvUmVuZGVyKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ1RyYW5zaXRpb25Hcm91cCc7XG5cblxuVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNpdGlvbkdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDcwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaGFpbigpe1xyXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgdmFyIGFyZ3MgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cclxuXHJcbiAgYXJncyA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uKGZuKXsgcmV0dXJuIGZuICE9IG51bGwgfSlcclxuXHJcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXHJcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXR1cm4gYXJnc1swXVxyXG5cclxuICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oY3VycmVudCwgbmV4dCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xyXG4gICAgICBjdXJyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIG5leHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfSlcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jaGFpbi1mdW5jdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmc7XG5leHBvcnRzLm1lcmdlQ2hpbGRNYXBwaW5ncyA9IG1lcmdlQ2hpbGRNYXBwaW5ncztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbikge1xuICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICBpZiAobmV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gbmV4dFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2W2tleV07XG4gIH1cblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IHt9O1xuXG4gIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAobmV4dC5oYXNPd25Qcm9wZXJ0eShwcmV2S2V5KSkge1xuICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBuZXh0S2V5c1BlbmRpbmdbcHJldktleV0gPSBwZW5kaW5nS2V5cztcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSA9IHZvaWQgMDtcbiAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHQpIHtcbiAgICBpZiAobmV4dEtleXNQZW5kaW5nLmhhc093blByb3BlcnR5KG5leHRLZXkpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbmV4dEtleXNQZW5kaW5nW25leHRLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwZW5kaW5nTmV4dEtleSA9IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXTtcbiAgICAgICAgY2hpbGRNYXBwaW5nW25leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nTmV4dEtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9XG5cbiAgLy8gRmluYWxseSwgYWRkIHRoZSBrZXlzIHdoaWNoIGRpZG4ndCBhcHBlYXIgYmVmb3JlIGFueSBrZXkgaW4gYG5leHRgXG4gIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRNYXBwaW5nO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2FkZENsYXNzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MnKTtcblxudmFyIF9hZGRDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRDbGFzcyk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSByZXF1aXJlKCdkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcycpO1xuXG52YXIgX3JlbW92ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbW92ZUNsYXNzKTtcblxudmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1aXJlKCdkb20taGVscGVycy91dGlsL3JlcXVlc3RBbmltYXRpb25GcmFtZScpO1xuXG52YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuXG52YXIgX3Byb3BlcnRpZXMgPSByZXF1aXJlKCdkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGV2ZW50cyA9IFtdO1xuaWYgKF9wcm9wZXJ0aWVzLnRyYW5zaXRpb25FbmQpIGV2ZW50cy5wdXNoKF9wcm9wZXJ0aWVzLnRyYW5zaXRpb25FbmQpO1xuaWYgKF9wcm9wZXJ0aWVzLmFuaW1hdGlvbkVuZCkgZXZlbnRzLnB1c2goX3Byb3BlcnRpZXMuYW5pbWF0aW9uRW5kKTtcblxuZnVuY3Rpb24gYWRkRW5kTGlzdGVuZXIobm9kZSwgbGlzdGVuZXIpIHtcbiAgaWYgKGV2ZW50cy5sZW5ndGgpIHtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihlLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQobGlzdGVuZXIsIDApO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWV2ZW50cy5sZW5ndGgpIHJldHVybjtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xufVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBuYW1lOiBfUHJvcFR5cGVzLm5hbWVTaGFwZS5pc1JlcXVpcmVkLFxuXG4gIC8vIE9uY2Ugd2UgcmVxdWlyZSB0aW1lb3V0cyB0byBiZSBzcGVjaWZpZWQsIHdlIGNhbiByZW1vdmUgdGhlXG4gIC8vIGJvb2xlYW4gZmxhZ3MgKGFwcGVhciBldGMuKSBhbmQganVzdCBhY2NlcHQgYSBudW1iZXJcbiAgLy8gb3IgYSBib29sIGZvciB0aGUgdGltZW91dCBmbGFncyAoYXBwZWFyVGltZW91dCBldGMuKVxuICBhcHBlYXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgYXBwZWFyVGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGVudGVyVGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxlYXZlVGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbn07XG5cbnZhciBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY29tcG9uZW50V2lsbEFwcGVhciA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuYXBwZWFyKSB7XG4gICAgICAgIF90aGlzLnRyYW5zaXRpb24oJ2FwcGVhcicsIGRvbmUsIF90aGlzLnByb3BzLmFwcGVhclRpbWVvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNvbXBvbmVudFdpbGxFbnRlciA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZW50ZXIpIHtcbiAgICAgICAgX3RoaXMudHJhbnNpdGlvbignZW50ZXInLCBkb25lLCBfdGhpcy5wcm9wcy5lbnRlclRpbWVvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNvbXBvbmVudFdpbGxMZWF2ZSA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMubGVhdmUpIHtcbiAgICAgICAgX3RoaXMudHJhbnNpdGlvbignbGVhdmUnLCBkb25lLCBfdGhpcy5wcm9wcy5sZWF2ZVRpbWVvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZSA9IFtdO1xuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXRzID0gW107XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXRzLmZvckVhY2goZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLnRyYW5zaXRpb24gPSBmdW5jdGlvbiB0cmFuc2l0aW9uKGFuaW1hdGlvblR5cGUsIGZpbmlzaENhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgaWYgKGZpbmlzaENhbGxiYWNrKSB7XG4gICAgICAgIGZpbmlzaENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMubmFtZVthbmltYXRpb25UeXBlXSB8fCB0aGlzLnByb3BzLm5hbWUgKyAnLScgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0aGlzLnByb3BzLm5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXSB8fCBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG4gICAgdmFyIHRpbWVyID0gbnVsbDtcbiAgICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gdm9pZCAwO1xuXG4gICAgKDAsIF9hZGRDbGFzczIuZGVmYXVsdCkobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgIC8vIE5lZWQgdG8gZG8gdGhpcyB0byBhY3R1YWxseSB0cmlnZ2VyIGEgdHJhbnNpdGlvbi5cbiAgICB0aGlzLnF1ZXVlQ2xhc3NBbmROb2RlKGFjdGl2ZUNsYXNzTmFtZSwgbm9kZSk7XG5cbiAgICAvLyBDbGVhbi11cCB0aGUgYW5pbWF0aW9uIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXlcbiAgICB2YXIgZmluaXNoID0gZnVuY3Rpb24gZmluaXNoKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIGlmIChyZW1vdmVMaXN0ZW5lcnMpIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgICAoMCwgX3JlbW92ZUNsYXNzMi5kZWZhdWx0KShub2RlLCBjbGFzc05hbWUpO1xuICAgICAgKDAsIF9yZW1vdmVDbGFzczIuZGVmYXVsdCkobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKHJlbW92ZUxpc3RlbmVycykgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgICBpZiAoZmluaXNoQ2FsbGJhY2spIHtcbiAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmaW5pc2gsIHRpbWVvdXQpO1xuICAgICAgdGhpcy50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lcik7XG4gICAgfSBlbHNlIGlmIChfcHJvcGVydGllcy50cmFuc2l0aW9uRW5kKSB7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMgPSBhZGRFbmRMaXN0ZW5lcihub2RlLCBmaW5pc2gpO1xuICAgIH1cbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUucXVldWVDbGFzc0FuZE5vZGUgPSBmdW5jdGlvbiBxdWV1ZUNsYXNzQW5kTm9kZShjbGFzc05hbWUsIG5vZGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLnB1c2goe1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBub2RlOiBub2RlXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMucmFmSGFuZGxlKSB7XG4gICAgICB0aGlzLnJhZkhhbmRsZSA9ICgwLCBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuZmx1c2hDbGFzc05hbWVBbmROb2RlUXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuZmx1c2hDbGFzc05hbWVBbmROb2RlUXVldWUgPSBmdW5jdGlvbiBmbHVzaENsYXNzTmFtZUFuZE5vZGVRdWV1ZSgpIHtcbiAgICBpZiAoIXRoaXMudW5tb3VudGVkKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgICAgICAvLyB3aGljaCBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gdHJhbnNpdGlvbiBzdHlsZXMgd2hlbiBhZGRpbmcgYSBjbGFzcyBuYW1lLlxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgICAgb2JqLm5vZGUuc2Nyb2xsVG9wO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgICAoMCwgX2FkZENsYXNzMi5kZWZhdWx0KShvYmoubm9kZSwgb2JqLmNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUubGVuZ3RoID0gMDtcbiAgICB0aGlzLnJhZkhhbmRsZSA9IG51bGw7XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgZGVsZXRlIHByb3BzLm5hbWU7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmxlYXZlO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmxlYXZlVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMuY2hpbGRyZW47XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5kaXNwbGF5TmFtZSA9ICdDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCc7XG5cblxuQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENTU1RyYW5zaXRpb25Hcm91cENoaWxkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5qc1xuLy8gbW9kdWxlIGlkID0gNzEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZENsYXNzO1xuXG52YXIgX2hhc0NsYXNzID0gcmVxdWlyZSgnLi9oYXNDbGFzcycpO1xuXG52YXIgX2hhc0NsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc0NsYXNzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoISgwLCBfaGFzQ2xhc3MyLmRlZmF1bHQpKGVsZW1lbnQpKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDcxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7ZWxzZSByZXR1cm4gKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gNzE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbkRPTSA9IHJlcXVpcmUoJy4vaW5ET00nKTtcblxudmFyIF9pbkRPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbkRPTSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2ZW5kb3JzID0gWycnLCAnd2Via2l0JywgJ21veicsICdvJywgJ21zJ107XG52YXIgY2FuY2VsID0gJ2NsZWFyVGltZW91dCc7XG52YXIgcmFmID0gZmFsbGJhY2s7XG52YXIgY29tcGF0UmFmID0gdm9pZCAwO1xuXG52YXIgZ2V0S2V5ID0gZnVuY3Rpb24gZ2V0S2V5KHZlbmRvciwgaykge1xuICByZXR1cm4gdmVuZG9yICsgKCF2ZW5kb3IgPyBrIDoga1swXS50b1VwcGVyQ2FzZSgpICsgay5zdWJzdHIoMSkpICsgJ0FuaW1hdGlvbkZyYW1lJztcbn07XG5cbmlmIChfaW5ET00yLmRlZmF1bHQpIHtcbiAgdmVuZG9ycy5zb21lKGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICB2YXIgcmFmS2V5ID0gZ2V0S2V5KHZlbmRvciwgJ3JlcXVlc3QnKTtcblxuICAgIGlmIChyYWZLZXkgaW4gd2luZG93KSB7XG4gICAgICBjYW5jZWwgPSBnZXRLZXkodmVuZG9yLCAnY2FuY2VsJyk7XG4gICAgICByZXR1cm4gcmFmID0gZnVuY3Rpb24gcmFmKGNiKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbcmFmS2V5XShjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9jb21wb25lbnQvcmFmICovXG52YXIgcHJldiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgdmFyIGN1cnIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKSxcbiAgICAgIHJlcSA9IHNldFRpbWVvdXQoZm4sIG1zKTtcblxuICBwcmV2ID0gY3VycjtcbiAgcmV0dXJuIHJlcTtcbn1cblxuY29tcGF0UmFmID0gZnVuY3Rpb24gY29tcGF0UmFmKGNiKSB7XG4gIHJldHVybiByYWYoY2IpO1xufTtcbmNvbXBhdFJhZi5jYW5jZWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgd2luZG93W2NhbmNlbF0gJiYgdHlwZW9mIHdpbmRvd1tjYW5jZWxdID09PSAnZnVuY3Rpb24nICYmIHdpbmRvd1tjYW5jZWxdKGlkKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjb21wYXRSYWY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gNzE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYW5pbWF0aW9uRW5kID0gZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGV4cG9ydHMudHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nO1xudmFyIHByZWZpeCA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkVuZCA9IHZvaWQgMDtcbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmcgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdm9pZCAwO1xudmFyIGFuaW1hdGlvbk5hbWUgPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uRHVyYXRpb24gPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uVGltaW5nID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkRlbGF5ID0gdm9pZCAwO1xuXG5pZiAoX2luRE9NMi5kZWZhdWx0KSB7XG4gIHZhciBfZ2V0VHJhbnNpdGlvblByb3BlcnQgPSBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpO1xuXG4gIHByZWZpeCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC5wcmVmaXg7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQudHJhbnNpdGlvbkVuZDtcbiAgZXhwb3J0cy5hbmltYXRpb25FbmQgPSBhbmltYXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQuYW5pbWF0aW9uRW5kO1xuXG5cbiAgZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0gPSBwcmVmaXggKyAnLScgKyB0cmFuc2Zvcm07XG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLXByb3BlcnR5JztcbiAgZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tZHVyYXRpb24nO1xuICBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheSA9IHByZWZpeCArICctdHJhbnNpdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJztcblxuICBleHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lID0gcHJlZml4ICsgJy1hbmltYXRpb24tbmFtZSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbiA9IHByZWZpeCArICctYW5pbWF0aW9uLWR1cmF0aW9uJztcbiAgZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLWFuaW1hdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheSA9IHByZWZpeCArICctYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbic7XG59XG5cbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSB0cmFuc2l0aW9uVGltaW5nO1xuZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXk7XG5leHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQ7XG5leHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lO1xuZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmc7XG5leHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXk7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIGVuZDogdHJhbnNpdGlvbkVuZCxcbiAgcHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdGltaW5nOiB0cmFuc2l0aW9uVGltaW5nLFxuICBkZWxheTogdHJhbnNpdGlvbkRlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG59O1xuXG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCkge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcblxuICB2YXIgdmVuZG9yTWFwID0ge1xuICAgIE86IGZ1bmN0aW9uIE8oZSkge1xuICAgICAgcmV0dXJuICdvJyArIGUudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIE1vejogZnVuY3Rpb24gTW96KGUpIHtcbiAgICAgIHJldHVybiBlLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICBXZWJraXQ6IGZ1bmN0aW9uIFdlYmtpdChlKSB7XG4gICAgICByZXR1cm4gJ3dlYmtpdCcgKyBlO1xuICAgIH0sXG4gICAgbXM6IGZ1bmN0aW9uIG1zKGUpIHtcbiAgICAgIHJldHVybiAnTVMnICsgZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlbmRvcnMgPSBPYmplY3Qua2V5cyh2ZW5kb3JNYXApO1xuXG4gIHZhciB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgICAgYW5pbWF0aW9uRW5kID0gdm9pZCAwO1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZlbmRvciA9IHZlbmRvcnNbaV07XG5cbiAgICBpZiAodmVuZG9yICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHtcbiAgICAgIHByZWZpeCA9ICctJyArIHZlbmRvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgdHJhbnNpdGlvbkVuZCA9IHZlbmRvck1hcFt2ZW5kb3JdKCdUcmFuc2l0aW9uRW5kJyk7XG4gICAgICBhbmltYXRpb25FbmQgPSB2ZW5kb3JNYXBbdmVuZG9yXSgnQW5pbWF0aW9uRW5kJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIXRyYW5zaXRpb25FbmQgJiYgJ3RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHRyYW5zaXRpb25FbmQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgaWYgKCFhbmltYXRpb25FbmQgJiYgJ2FuaW1hdGlvbk5hbWUnIGluIHN0eWxlKSBhbmltYXRpb25FbmQgPSAnYW5pbWF0aW9uZW5kJztcblxuICBzdHlsZSA9IG51bGw7XG5cbiAgcmV0dXJuIHsgYW5pbWF0aW9uRW5kOiBhbmltYXRpb25FbmQsIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQsIHByZWZpeDogcHJlZml4IH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfRE9NUG9zaXRpb25VdGlscyA9IHJlcXVpcmUoJy4vVXRpbGl0aWVzL0RPTVBvc2l0aW9uVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vL2ltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5cbnZhciBSZWR1eEluZmluaXRlU2Nyb2xsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlZHV4SW5maW5pdGVTY3JvbGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlZHV4SW5maW5pdGVTY3JvbGwocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkdXhJbmZpbml0ZVNjcm9sbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVkdXhJbmZpbml0ZVNjcm9sbCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc2Nyb2xsRnVuY3Rpb24gPSBfdGhpcy5zY3JvbGxMaXN0ZW5lci5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVkdXhJbmZpbml0ZVNjcm9sbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5hdHRhY2hTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuYXR0YWNoU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZmluZEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50SXNTY3JvbGxhYmxlID8gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpIDogd2luZG93O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2F0dGFjaFNjcm9sbExpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXR0YWNoU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaGFzTW9yZSB8fCB0aGlzLnByb3BzLmxvYWRpbmdNb3JlKSByZXR1cm47XG4gICAgICB2YXIgZWwgPSB0aGlzLl9maW5kRWxlbWVudCgpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxGdW5jdGlvbiwgdHJ1ZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbEZ1bmN0aW9uLCB0cnVlKTtcbiAgICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZWxTY3JvbGxMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9lbFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgdmFyIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIHRvcFNjcm9sbFBvcyA9IGVsLnNjcm9sbFRvcDtcbiAgICAgIHZhciB0b3RhbENvbnRhaW5lckhlaWdodCA9IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgIHZhciBjb250YWluZXJGaXhlZEhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcbiAgICAgIHZhciBib3R0b21TY3JvbGxQb3MgPSB0b3BTY3JvbGxQb3MgKyBjb250YWluZXJGaXhlZEhlaWdodDtcblxuICAgICAgcmV0dXJuIHRvdGFsQ29udGFpbmVySGVpZ2h0IC0gYm90dG9tU2Nyb2xsUG9zO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ193aW5kb3dTY3JvbGxMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF93aW5kb3dTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgIHZhciBlbCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHZhciB3aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcbiAgICAgIHZhciBlbFRvdGFsSGVpZ2h0ID0gKDAsIF9ET01Qb3NpdGlvblV0aWxzLnRvcFBvc2l0aW9uKShlbCkgKyBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgY3VycmVudEJvdHRvbVBvc2l0aW9uID0gZWxUb3RhbEhlaWdodCAtIHdpbmRvd1Njcm9sbFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgcmV0dXJuIGN1cnJlbnRCb3R0b21Qb3NpdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY3JvbGxMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgLy8gVGhpcyBpcyB0byBwcmV2ZW50IHRoZSB1cGNvbWluZyBsb2dpYyBmcm9tIHRvZ2dsaW5nIGEgbG9hZCBtb3JlIGJlZm9yZVxuICAgICAgLy8gYW55IGRhdGEgaGFzIGJlZW4gcGFzc2VkIHRvIHRoZSBjb21wb25lbnRcbiAgICAgIGlmICh0aGlzLl90b3RhbEl0ZW1zU2l6ZSgpIDw9IDApIHJldHVybjtcblxuICAgICAgdmFyIGJvdHRvbVBvc2l0aW9uID0gdGhpcy5wcm9wcy5lbGVtZW50SXNTY3JvbGxhYmxlID8gdGhpcy5fZWxTY3JvbGxMaXN0ZW5lcigpIDogdGhpcy5fd2luZG93U2Nyb2xsTGlzdGVuZXIoKTtcblxuICAgICAgaWYgKGJvdHRvbVBvc2l0aW9uIDwgTnVtYmVyKHRoaXMucHJvcHMudGhyZXNob2xkKSkge1xuICAgICAgICB0aGlzLmRldGFjaFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE1vcmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2hTY3JvbGxMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgdmFyIGVsID0gdGhpcy5fZmluZEVsZW1lbnQoKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsRnVuY3Rpb24sIHRydWUpO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxGdW5jdGlvbiwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3JlbmRlck9wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVuZGVyT3B0aW9ucygpIHtcbiAgICAgIHZhciBhbGxJdGVtcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4uY29uY2F0KHRoaXMucHJvcHMuaXRlbXMpO1xuXG4gICAgICByZXR1cm4gYWxsSXRlbXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3RvdGFsSXRlbXNTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3RvdGFsSXRlbXNTaXplKCkge1xuICAgICAgdmFyIHRvdGFsU2l6ZSA9IHZvaWQgMDtcbiAgICAgIHRvdGFsU2l6ZSArPSB0aGlzLnByb3BzLmNoaWxkcmVuLnNpemUgPyB0aGlzLnByb3BzLmNoaWxkcmVuLnNpemUgOiB0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIHRvdGFsU2l6ZSArPSB0aGlzLnByb3BzLml0ZW1zLnNpemUgPyB0aGlzLnByb3BzLml0ZW1zLnNpemUgOiB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICAgIHJldHVybiB0b3RhbFNpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZGV0YWNoU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJMb2FkZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMb2FkZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5sb2FkaW5nTW9yZSAmJiB0aGlzLnByb3BzLnNob3dMb2FkZXIgPyB0aGlzLnByb3BzLmxvYWRlciA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfYXNzaWduSG9sZGVyQ2xhc3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXNzaWduSG9sZGVyQ2xhc3MoKSB7XG4gICAgICB2YXIgYWRkaXRpb25hbENsYXNzID0gdm9pZCAwO1xuICAgICAgYWRkaXRpb25hbENsYXNzID0gdHlwZW9mIHRoaXMucHJvcHMuY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5jbGFzc05hbWUoKSA6IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuXG4gICAgICByZXR1cm4gJ3JlZHV4LWluZmluaXRlLXNjcm9sbCAnICsgYWRkaXRpb25hbENsYXNzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBIb2xkZXIgPSB0aGlzLnByb3BzLmhvbGRlclR5cGU7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSG9sZGVyLFxuICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5fYXNzaWduSG9sZGVyQ2xhc3MoKSwgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnByb3BzLmNvbnRhaW5lckhlaWdodCB9IH0sXG4gICAgICAgIHRoaXMuX3JlbmRlck9wdGlvbnMoKSxcbiAgICAgICAgdGhpcy5yZW5kZXJMb2FkZXIoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVkdXhJbmZpbml0ZVNjcm9sbDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlZHV4SW5maW5pdGVTY3JvbGw7XG5cblxuUmVkdXhJbmZpbml0ZVNjcm9sbC5wcm9wVHlwZXMgPSB7XG4gIGVsZW1lbnRJc1Njcm9sbGFibGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29udGFpbmVySGVpZ2h0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRocmVzaG9sZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsXG4gIGhhc01vcmU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZ01vcmU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgc2hvd0xvYWRlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBsb2FkTW9yZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGl0ZW1zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIC8vSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXldKSxcbiAgY2hpbGRyZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgLy9JbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheV0pLFxuICBob2xkZXJUeXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY10pXG59O1xuXG5SZWR1eEluZmluaXRlU2Nyb2xsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZWxlbWVudElzU2Nyb2xsYWJsZTogdHJ1ZSxcbiAgY29udGFpbmVySGVpZ2h0OiAnMTAwJScsXG4gIHRocmVzaG9sZDogMTAwLFxuICBoYXNNb3JlOiB0cnVlLFxuICBsb2FkaW5nTW9yZTogZmFsc2UsXG4gIGxvYWRlcjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0gfSxcbiAgICAnTG9hZGluZy4uLidcbiAgKSxcbiAgc2hvd0xvYWRlcjogdHJ1ZSxcbiAgaG9sZGVyVHlwZTogJ2RpdicsXG4gIGNoaWxkcmVuOiBbXSxcbiAgaXRlbXM6IFtdXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LWluZmluaXRlLXNjcm9sbC9saWIvUmVkdXhJbmZpbml0ZVNjcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gNzE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50b3BQb3NpdGlvbiA9IHRvcFBvc2l0aW9uO1xuZnVuY3Rpb24gdG9wUG9zaXRpb24oZG9tRWx0KSB7XG4gIGlmICghZG9tRWx0KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIGRvbUVsdC5vZmZzZXRUb3AgKyB0b3BQb3NpdGlvbihkb21FbHQub2Zmc2V0UGFyZW50KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1pbmZpbml0ZS1zY3JvbGwvbGliL1V0aWxpdGllcy9ET01Qb3NpdGlvblV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=