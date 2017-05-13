webpackHotUpdate(0,{

/***/ 1089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_some__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "someByType", function() { return someByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findByType", function() { return findByType; });





/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */
var someByType = function someByType(children, type) {
  return __WEBPACK_IMPORTED_MODULE_1_lodash_some___default()(__WEBPACK_IMPORTED_MODULE_2_react__["Children"].toArray(children), { type: type });
};

/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */
var findByType = function findByType(children, type) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash_find___default()(__WEBPACK_IMPORTED_MODULE_2_react__["Children"].toArray(children), { type: type });
};

/***/ }),

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEqual__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_has__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_transform__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_transform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_transform__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return objectDiff; });





/**
 * Naive and inefficient object difference, intended for development / debugging use only.
 * Deleted keys are shown as [DELETED].
 * @param {{}} source The source object
 * @param {{}} target The target object.
 * @returns {{}} A new object containing new/modified/deleted keys.
 * @example
 * import { objectDiff } from 'src/lib'
 *
 * const a = { key: 'val', foo: 'bar' }
 * const b = { key: 'val', foo: 'baz' }
 *
 * objectDiff(a, b)
 * //=> { foo: 'baz' }
 */
var objectDiff = function objectDiff(source, target) {
  return __WEBPACK_IMPORTED_MODULE_2_lodash_transform___default()(source, function (res, val, key) {
    // deleted keys
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash_has___default()(target, key)) res[key] = '[DELETED]';
    // new keys / changed values
    else if (!__WEBPACK_IMPORTED_MODULE_0_lodash_isEqual___default()(val, target[key])) res[key] = target[key];
  }, {});
};

/***/ }),

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_compact__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_map__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_filter__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_dropRight__ = __webpack_require__(994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_dropRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_dropRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_union__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_union___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_union__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_get__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_includes__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_has__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_isEqual__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_classnames__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_prop_types__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__lib__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__elements_Icon__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__elements_Label__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__DropdownDivider__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__DropdownItem__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__DropdownHeader__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__DropdownMenu__ = __webpack_require__(888);







































var debug = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["o" /* makeDebugger */])('dropdown');

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */

var Dropdown = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, value) {
      debug('handleChange()');
      debug(value);
      var onChange = _this.props.onChange;

      if (onChange) onChange(e, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));
    }, _this.closeOnChange = function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;

      var shouldClose = __WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined___default()(closeOnChange) ? !multiple : closeOnChange;

      if (shouldClose) _this.close(e);
    }, _this.closeOnEscape = function (e) {
      if (__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      debug('moveSelectionOnKeyDown()');
      debug(__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getName(e));
      switch (__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getCode(e)) {
        case __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].ArrowDown:
          e.preventDefault();
          _this.moveSelectionBy(1);
          break;
        case __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].ArrowUp:
          e.preventDefault();
          _this.moveSelectionBy(-1);
          break;
        default:
          break;
      }
    }, _this.openOnSpace = function (e) {
      debug('openOnSpace()');

      if (__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].Spacebar) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.openOnArrow = function (e) {
      debug('openOnArrow()');

      var code = __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getCode(e);
      if (!__WEBPACK_IMPORTED_MODULE_22_lodash_includes___default()([__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].ArrowDown, __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].ArrowUp], code)) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.makeSelectedItemActive = function (e) {
      var open = _this.state.open;
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          onAddItem = _this$props2.onAddItem;

      var item = _this.getSelectedItem();
      var value = __WEBPACK_IMPORTED_MODULE_21_lodash_get___default()(item, 'value');

      // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed
      if (!value || !open) return;

      // notify the onAddItem prop if this is a new value
      if (onAddItem && item['data-additional']) {
        onAddItem(e, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));
      }
      // notify the onChange prop that the user is trying to change value
      if (multiple) {
        // state value may be undefined
        var newValue = __WEBPACK_IMPORTED_MODULE_20_lodash_union___default()(_this.state.value, [value]);
        _this.setValue(newValue);
        _this.handleChange(e, newValue);
      } else {
        _this.setValue(value);
        _this.handleChange(e, value);
      }
    }, _this.selectItemOnEnter = function (e) {
      debug('selectItemOnEnter()');
      debug(__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getName(e));
      if (__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].Enter) return;
      e.preventDefault();

      _this.makeSelectedItemActive(e);
      _this.closeOnChange(e);
    }, _this.removeItemOnBackspace = function (e) {
      debug('removeItemOnBackspace()');
      debug(__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getName(e));
      if (__WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_29__lib__["p" /* keyboardKey */].Backspace) return;

      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state = _this.state,
          searchQuery = _this$state.searchQuery,
          value = _this$state.value;


      if (searchQuery || !search || !multiple || __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default()(value)) return;

      e.preventDefault();

      // remove most recent value
      var newValue = __WEBPACK_IMPORTED_MODULE_18_lodash_dropRight___default()(value);

      _this.setValue(newValue);
      _this.handleChange(e, newValue);
    }, _this.closeOnDocumentClick = function (e) {
      debug('closeOnDocumentClick()');
      debug(e);

      // If event happened in the dropdown, ignore it
      if (_this.ref && __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default()(_this.ref.contains) && _this.ref.contains(e.target)) return;

      _this.close();
    }, _this.handleMouseDown = function (e) {
      debug('handleMouseDown()');
      var onMouseDown = _this.props.onMouseDown;

      if (onMouseDown) onMouseDown(e, _this.props);
      _this.isMouseDown = true;
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_29__lib__["q" /* isBrowser */]) return;
      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleDocumentMouseUp = function () {
      debug('handleDocumentMouseUp()');
      _this.isMouseDown = false;
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_29__lib__["q" /* isBrowser */]) return;
      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleClick = function (e) {
      debug('handleClick()', e);
      var onClick = _this.props.onClick;

      if (onClick) onClick(e, _this.props);
      // prevent closeOnDocumentClick()
      e.stopPropagation();
      _this.toggle(e);
    }, _this.handleItemClick = function (e, item) {
      debug('handleItemClick()');
      debug(item);
      var _this$props4 = _this.props,
          multiple = _this$props4.multiple,
          onAddItem = _this$props4.onAddItem;
      var value = item.value;

      // prevent toggle() in handleClick()

      e.stopPropagation();
      // prevent closeOnDocumentClick() if multiple or item is disabled
      if (multiple || item.disabled) {
        e.nativeEvent.stopImmediatePropagation();
      }

      if (item.disabled) return;

      // notify the onAddItem prop if this is a new value
      if (onAddItem && item['data-additional']) {
        onAddItem(e, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));
      }

      // notify the onChange prop that the user is trying to change value
      if (multiple) {
        var newValue = __WEBPACK_IMPORTED_MODULE_20_lodash_union___default()(_this.state.value, [value]);
        _this.setValue(newValue);
        _this.handleChange(e, newValue);
      } else {
        _this.setValue(value);
        _this.handleChange(e, value);
      }
      _this.closeOnChange(e);
    }, _this.handleFocus = function (e) {
      debug('handleFocus()');
      var onFocus = _this.props.onFocus;
      var focus = _this.state.focus;

      if (focus) return;
      if (onFocus) onFocus(e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {
      debug('handleBlur()');
      var _this$props5 = _this.props,
          closeOnBlur = _this$props5.closeOnBlur,
          multiple = _this$props5.multiple,
          onBlur = _this$props5.onBlur,
          selectOnBlur = _this$props5.selectOnBlur;
      // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;
      if (onBlur) onBlur(e, _this.props);
      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e);
        if (closeOnBlur) _this.close();
      }
      _this.setState({ focus: false, searchQuery: '' });
    }, _this.handleSearchChange = function (e) {
      debug('handleSearchChange()');
      debug(e.target.value);
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var _this$props6 = _this.props,
          search = _this$props6.search,
          onSearchChange = _this$props6.onSearchChange;
      var open = _this.state.open;

      var newQuery = e.target.value;

      if (onSearchChange) onSearchChange(e, newQuery);

      // open search dropdown on search query
      if (search && newQuery && !open) _this.open();

      _this.setState({
        selectedIndex: 0,
        searchQuery: newQuery
      });
    }, _this.getMenuOptions = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var _this$props7 = _this.props,
          multiple = _this$props7.multiple,
          search = _this$props7.search,
          allowAdditions = _this$props7.allowAdditions,
          additionPosition = _this$props7.additionPosition,
          additionLabel = _this$props7.additionLabel;
      var searchQuery = _this.state.searchQuery;


      var filteredOptions = options;

      // filter out active options
      if (multiple) {
        filteredOptions = __WEBPACK_IMPORTED_MODULE_16_lodash_filter___default()(filteredOptions, function (opt) {
          return !__WEBPACK_IMPORTED_MODULE_22_lodash_includes___default()(value, opt.value);
        });
      }

      // filter by search query
      if (search && searchQuery) {
        if (__WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default()(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          var re = new RegExp(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default()(searchQuery), 'i');
          filteredOptions = __WEBPACK_IMPORTED_MODULE_16_lodash_filter___default()(filteredOptions, function (opt) {
            return re.test(opt.text);
          });
        }
      }

      // insert the "add" item
      if (allowAdditions && search && searchQuery && !__WEBPACK_IMPORTED_MODULE_14_lodash_some___default()(filteredOptions, { text: searchQuery })) {
        var additionLabelElement = __WEBPACK_IMPORTED_MODULE_28_react___default.a.isValidElement(additionLabel) ? __WEBPACK_IMPORTED_MODULE_28_react___default.a.cloneElement(additionLabel, { key: 'label' }) : additionLabel || '';

        var addItem = {
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(
            'b',
            { key: 'addition' },
            searchQuery
          )],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    }, _this.getSelectedItem = function () {
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_21_lodash_get___default()(options, '[' + selectedIndex + ']');
    }, _this.getEnabledIndices = function (givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default()(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    }, _this.getItemByValue = function (value) {
      var options = _this.props.options;


      return __WEBPACK_IMPORTED_MODULE_12_lodash_find___default()(options, { value: value });
    }, _this.getMenuItemIndexByValue = function (value, givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default()(options, ['value', value]);
    }, _this.getDropdownAriaOptions = function (ElementType) {
      var _this$props8 = _this.props,
          loading = _this$props8.loading,
          disabled = _this$props8.disabled,
          search = _this$props8.search,
          multiple = _this$props8.multiple;
      var open = _this.state.open;

      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };
      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }
      return ariaOptions;
    }, _this.setValue = function (value) {
      debug('setValue()');
      debug('value', value);
      var newState = {
        searchQuery: ''
      };

      var _this$props9 = _this.props,
          multiple = _this$props9.multiple,
          search = _this$props9.search;

      if (multiple && search && _this.searchRef) _this.searchRef.focus();

      _this.trySetState({ value: value }, newState);
      _this.setSelectedIndex(value);
    }, _this.setSelectedIndex = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var multiple = _this.props.multiple;
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions(value, optionsProps);
      var enabledIndicies = _this.getEnabledIndices(options);

      var newSelectedIndex = void 0;

      // update the selected index
      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0];

        // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.
        newSelectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = _this.getMenuItemIndexByValue(value, options);

        // regular selects can only have one active item
        // set the selected index to the currently active item
        newSelectedIndex = __WEBPACK_IMPORTED_MODULE_22_lodash_includes___default()(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      _this.setState({ selectedIndex: newSelectedIndex });
    }, _this.handleLabelClick = function (e, labelProps) {
      debug('handleLabelClick()');
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({ selectedLabel: labelProps.value });

      var onLabelClick = _this.props.onLabelClick;

      if (onLabelClick) onLabelClick(e, labelProps);
    }, _this.handleLabelRemove = function (e, labelProps) {
      debug('handleLabelRemove()');
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;

      var newValue = __WEBPACK_IMPORTED_MODULE_10_lodash_without___default()(value, labelProps.value);
      debug('label props:', labelProps);
      debug('current value:', value);
      debug('remove value:', labelProps.value);
      debug('new value:', newValue);

      _this.setValue(newValue);
      _this.handleChange(e, newValue);
    }, _this.moveSelectionBy = function (offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;

      debug('moveSelectionBy()');
      debug('offset: ' + offset);

      var options = _this.getMenuOptions();
      var lastIndex = options.length - 1;

      // Prevent infinite loop
      if (__WEBPACK_IMPORTED_MODULE_9_lodash_every___default()(options, 'disabled')) return;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = startIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) return _this.moveSelectionBy(offset, nextIndex);

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
    }, _this.handleSearchRef = function (c) {
      return _this.searchRef = c;
    }, _this.handleSizerRef = function (c) {
      return _this.sizerRef = c;
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.scrollSelectedItemIntoView = function () {
      debug('scrollSelectedItemIntoView()');
      if (!_this.ref) return;
      var menu = _this.ref.querySelector('.menu.visible');
      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;
      debug('menu: ' + menu);
      debug('item: ' + item);
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.open = function (e) {
      debug('open()');

      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          onOpen = _this$props10.onOpen,
          search = _this$props10.search;

      if (disabled) return;
      if (search && _this.searchRef) _this.searchRef.focus();
      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
      _this.scrollSelectedItemIntoView();
    }, _this.close = function (e) {
      debug('close()');

      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.handleClose = function () {
      debug('handleClose()');
      var hasSearchFocus = document.activeElement === _this.searchRef;
      var hasDropdownFocus = document.activeElement === _this.ref;
      var hasFocus = hasSearchFocus || hasDropdownFocus;
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.
      if (!hasSearchFocus) {
        _this.ref.blur();
      }

      // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
      _this.setState({ focus: hasFocus });
    }, _this.toggle = function (e) {
      if (!_this.state.open) {
        _this.open(e);
        return;
      }

      var search = _this.props.search;

      var options = _this.getMenuOptions();

      if (search && __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default()(options)) {
        e.preventDefault();
        return;
      }

      _this.close(e);
    }, _this.renderText = function () {
      var _this$props11 = _this.props,
          multiple = _this$props11.multiple,
          placeholder = _this$props11.placeholder,
          search = _this$props11.search,
          text = _this$props11.text;
      var _this$state2 = _this.state,
          searchQuery = _this$state2.searchQuery,
          value = _this$state2.value,
          open = _this$state2.open;

      var hasValue = multiple ? !__WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default()(value) : !__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(value) && value !== '';

      var classes = __WEBPACK_IMPORTED_MODULE_26_classnames___default()(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;
      if (searchQuery) {
        _text = null;
      } else if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = __WEBPACK_IMPORTED_MODULE_21_lodash_get___default()(_this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = __WEBPACK_IMPORTED_MODULE_21_lodash_get___default()(_this.getItemByValue(value), 'text');
      }

      return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(
        'div',
        { className: classes },
        _text
      );
    }, _this.renderHiddenInput = function () {
      debug('renderHiddenInput()');
      var value = _this.state.value;
      var _this$props12 = _this.props,
          multiple = _this$props12.multiple,
          name = _this$props12.name,
          options = _this$props12.options,
          selection = _this$props12.selection;

      debug('name:      ' + name);
      debug('selection: ' + selection);
      debug('value:     ' + value);
      if (!selection) return null;

      // a dropdown without an active item will have an empty string value
      return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(
        'select',
        { type: 'hidden', 'aria-hidden': 'true', name: name, value: value, multiple: multiple },
        __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement('option', { value: '' }),
        __WEBPACK_IMPORTED_MODULE_7_lodash_map___default()(options, function (option) {
          return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(
            'option',
            { key: option.value, value: option.value },
            option.text
          );
        })
      );
    }, _this.renderSearchInput = function () {
      var _this$props13 = _this.props,
          disabled = _this$props13.disabled,
          search = _this$props13.search,
          name = _this$props13.name,
          tabIndex = _this$props13.tabIndex;
      var searchQuery = _this.state.searchQuery;


      if (!search) return null;

      // tabIndex
      var computedTabIndex = void 0;
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(tabIndex)) computedTabIndex = tabIndex;else computedTabIndex = disabled ? -1 : 0;

      // resize the search input, temporarily show the sizer so we can measure it
      var searchWidth = void 0;
      if (_this.sizerRef && searchQuery) {
        _this.sizerRef.style.display = 'inline';
        _this.sizerRef.textContent = searchQuery;
        searchWidth = Math.ceil(_this.sizerRef.getBoundingClientRect().width);
        _this.sizerRef.style.removeProperty('display');
      }

      return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement('input', {
        value: searchQuery,
        type: 'text',
        'aria-autocomplete': 'list',
        onChange: _this.handleSearchChange,
        className: 'search',
        name: [name, 'search'].join('-'),
        autoComplete: 'off',
        tabIndex: computedTabIndex,
        style: { width: searchWidth },
        ref: _this.handleSearchRef
      });
    }, _this.renderSearchSizer = function () {
      var _this$props14 = _this.props,
          search = _this$props14.search,
          multiple = _this$props14.multiple;


      if (!(search && multiple)) return null;
      return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement('span', { className: 'sizer', ref: _this.handleSizerRef });
    }, _this.renderLabels = function () {
      debug('renderLabels()');
      var _this$props15 = _this.props,
          multiple = _this$props15.multiple,
          renderLabel = _this$props15.renderLabel;
      var _this$state3 = _this.state,
          selectedLabel = _this$state3.selectedLabel,
          value = _this$state3.value;

      if (!multiple || __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default()(value)) {
        return;
      }
      var selectedItems = __WEBPACK_IMPORTED_MODULE_7_lodash_map___default()(value, _this.getItemByValue);
      debug('selectedItems', selectedItems);

      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return __WEBPACK_IMPORTED_MODULE_7_lodash_map___default()(__WEBPACK_IMPORTED_MODULE_6_lodash_compact___default()(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: item.value,
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };

        return __WEBPACK_IMPORTED_MODULE_31__elements_Label__["a" /* default */].create(renderLabel(item, index, defaultProps), { defaultProps: defaultProps });
      });
    }, _this.renderOptions = function () {
      var _this$props16 = _this.props,
          multiple = _this$props16.multiple,
          search = _this$props16.search,
          noResultsMessage = _this$props16.noResultsMessage;
      var _this$state4 = _this.state,
          selectedIndex = _this$state4.selectedIndex,
          value = _this$state4.value;

      var options = _this.getMenuOptions();

      if (noResultsMessage !== null && search && __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default()(options)) {
        return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(
          'div',
          { className: 'message' },
          noResultsMessage
        );
      }

      var isActive = multiple ? function (optValue) {
        return __WEBPACK_IMPORTED_MODULE_22_lodash_includes___default()(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };

      return __WEBPACK_IMPORTED_MODULE_7_lodash_map___default()(options, function (opt, i) {
        return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_33__DropdownItem__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          key: opt.value + '-' + i,
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          // Needed for handling click events on disabled items
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, opt.style, { pointerEvents: 'all' })
        }));
      });
    }, _this.renderMenu = function () {
      var _this$props17 = _this.props,
          children = _this$props17.children,
          header = _this$props17.header;
      var open = _this.state.open;

      var menuClasses = open ? 'visible' : '';
      var ariaOptions = _this.getDropdownMenuAriaOptions();

      // single menu child
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(children)) {
        var menuChild = __WEBPACK_IMPORTED_MODULE_28_react__["Children"].only(children);
        var className = __WEBPACK_IMPORTED_MODULE_26_classnames___default()(menuClasses, menuChild.props.className);

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_28_react__["cloneElement"])(menuChild, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: className }, ariaOptions));
      }

      return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_35__DropdownMenu__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, ariaOptions, { className: menuClasses }),
        __WEBPACK_IMPORTED_MODULE_34__DropdownHeader__["a" /* default */].create(header),
        _this.renderOptions()
      );
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Dropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillMount', this)) __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillMount', this).call(this);
      debug('componentWillMount()');
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      if (open) this.open();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !__WEBPACK_IMPORTED_MODULE_25_lodash_isEqual___default()(nextProps, this.props) || !__WEBPACK_IMPORTED_MODULE_25_lodash_isEqual___default()(nextState, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      debug('componentWillReceiveProps()');
      // TODO objectDiff still runs in prod, stop it
      debug('to props:', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["r" /* objectDiff */])(this.props, nextProps));

      /* eslint-disable no-console */
      if (true) {
        // in development, validate value type matches dropdown type
        var isNextValueArray = Array.isArray(nextProps.value);
        var hasValue = __WEBPACK_IMPORTED_MODULE_24_lodash_has___default()(nextProps, 'value');

        if (hasValue && nextProps.multiple && !isNextValueArray) {
          console.error('Dropdown `value` must be an array when `multiple` is set.' + (' Received type: `' + Object.prototype.toString.call(nextProps.value) + '`.'));
        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
        }
      }
      /* eslint-enable no-console */

      if (!__WEBPACK_IMPORTED_MODULE_25_lodash_isEqual___default()(nextProps.value, this.props.value)) {
        debug('value changed, setting', nextProps.value);
        this.setValue(nextProps.value);
      }

      if (!__WEBPACK_IMPORTED_MODULE_25_lodash_isEqual___default()(nextProps.options, this.props.options)) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      debug('componentDidUpdate()');
      // TODO objectDiff still runs in prod, stop it
      debug('to state:', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["r" /* objectDiff */])(prevState, this.state));

      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_29__lib__["q" /* isBrowser */]) return;

      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        debug('dropdown focused');
        if (!this.isMouseDown) {
          var openOnFocus = this.props.openOnFocus;

          debug('mouse is not down, opening');
          if (openOnFocus) this.open();
        }
        if (!this.state.open) {
          document.addEventListener('keydown', this.openOnArrow);
          document.addEventListener('keydown', this.openOnSpace);
        } else {
          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
          document.addEventListener('keydown', this.selectItemOnEnter);
        }
        document.addEventListener('keydown', this.removeItemOnBackspace);
      } else if (prevState.focus && !this.state.focus) {
        debug('dropdown blurred');
        var closeOnBlur = this.props.closeOnBlur;

        if (!this.isMouseDown && closeOnBlur) {
          debug('mouse is not down and closeOnBlur=true, closing');
          this.close();
        }
        document.removeEventListener('keydown', this.openOnArrow);
        document.removeEventListener('keydown', this.openOnSpace);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('keydown', this.removeItemOnBackspace);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        debug('dropdown opened');
        document.addEventListener('keydown', this.closeOnEscape);
        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
        document.addEventListener('keydown', this.selectItemOnEnter);
        document.addEventListener('keydown', this.removeItemOnBackspace);
        document.addEventListener('click', this.closeOnDocumentClick);
        document.removeEventListener('keydown', this.openOnArrow);
        document.removeEventListener('keydown', this.openOnSpace);
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {
        debug('dropdown closed');
        this.handleClose();
        document.removeEventListener('keydown', this.closeOnEscape);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('click', this.closeOnDocumentClick);
        if (!this.state.focus) {
          document.removeEventListener('keydown', this.removeItemOnBackspace);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');

      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_29__lib__["q" /* isBrowser */]) return;

      document.removeEventListener('keydown', this.openOnArrow);
      document.removeEventListener('keydown', this.openOnSpace);
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
      document.removeEventListener('keydown', this.selectItemOnEnter);
      document.removeEventListener('keydown', this.removeItemOnBackspace);
      document.removeEventListener('keydown', this.closeOnEscape);
      document.removeEventListener('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // onChange needs to receive a value
    // can't rely on props.value if we are controlled


    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // There are times when we need to calculate the options based on a value
    // that hasn't yet been persisted to state.

  }, {
    key: 'getDropdownMenuAriaOptions',
    value: function getDropdownMenuAriaOptions() {
      var _props = this.props,
          search = _props.search,
          multiple = _props.multiple;

      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }
      return ariaOptions;
    }

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Refs
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // ----------------------------------------
    // Render
    // ----------------------------------------

  }, {
    key: 'render',
    value: function render() {
      debug('render()');
      debug('props', this.props);
      debug('state', this.state);
      var open = this.state.open;
      var _props2 = this.props,
          basic = _props2.basic,
          button = _props2.button,
          className = _props2.className,
          compact = _props2.compact,
          fluid = _props2.fluid,
          floating = _props2.floating,
          icon = _props2.icon,
          inline = _props2.inline,
          item = _props2.item,
          labeled = _props2.labeled,
          multiple = _props2.multiple,
          pointing = _props2.pointing,
          search = _props2.search,
          selection = _props2.selection,
          simple = _props2.simple,
          loading = _props2.loading,
          error = _props2.error,
          disabled = _props2.disabled,
          scrolling = _props2.scrolling,
          tabIndex = _props2.tabIndex,
          trigger = _props2.trigger;

      // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_26_classnames___default()('ui', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(open, 'active visible'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(disabled, 'disabled'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(error, 'error'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(loading, 'loading'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(basic, 'basic'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(button, 'button'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(compact, 'compact'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(fluid, 'fluid'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(floating, 'floating'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(inline, 'inline'),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(labeled, 'labeled'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(item, 'item'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(multiple, 'multiple'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(search, 'search'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(selection, 'selection'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(simple, 'simple'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["a" /* useKeyOnly */])(scrolling, 'scrolling'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["j" /* useKeyOrValueAndKey */])(pointing, 'pointing'), className, 'dropdown');
      var rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["b" /* getUnhandledProps */])(Dropdown, this.props);
      var ElementType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__lib__["c" /* getElementType */])(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);

      var computedTabIndex = void 0;
      if (!__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(tabIndex)) {
        computedTabIndex = tabIndex;
      } else if (!search) {
        // don't set a root node tabIndex as the search input has its own tabIndex
        computedTabIndex = disabled ? -1 : 0;
      }

      return __WEBPACK_IMPORTED_MODULE_28_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, ariaOptions, {
          className: classes,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          tabIndex: computedTabIndex,
          ref: this.handleRef
        }),
        this.renderHiddenInput(),
        this.renderLabels(),
        this.renderSearchInput(),
        this.renderSearchSizer(),
        trigger || this.renderText(),
        __WEBPACK_IMPORTED_MODULE_30__elements_Icon__["a" /* default */].create(icon),
        this.renderMenu()
      );
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_29__lib__["n" /* AutoControlledComponent */]);

Dropdown.defaultProps = {
  additionLabel: 'Add ',
  additionPosition: 'top',
  icon: 'dropdown',
  noResultsMessage: 'No results found.',
  renderLabel: function renderLabel(_ref2) {
    var text = _ref2.text;
    return text;
  },
  selectOnBlur: true,
  openOnFocus: true,
  closeOnBlur: true
};
Dropdown.autoControlledProps = ['open', 'value', 'selectedLabel'];
Dropdown._meta = {
  name: 'Dropdown',
  type: __WEBPACK_IMPORTED_MODULE_29__lib__["d" /* META */].TYPES.MODULE
};
Dropdown.Divider = __WEBPACK_IMPORTED_MODULE_32__DropdownDivider__["a" /* default */];
Dropdown.Header = __WEBPACK_IMPORTED_MODULE_34__DropdownHeader__["a" /* default */];
Dropdown.Item = __WEBPACK_IMPORTED_MODULE_33__DropdownItem__["a" /* default */];
Dropdown.Menu = __WEBPACK_IMPORTED_MODULE_35__DropdownMenu__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Dropdown);
 true ? Dropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].as,

  /** Label prefixed to an option added by a user. */
  additionLabel: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].demand(['options', 'selection', 'search']), __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Format the Dropdown to appear as a button. */
  button: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].disallow(['options', 'selection']), __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].givenProps({ children: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.any.isRequired }, __WEBPACK_IMPORTED_MODULE_28_react___default.a.PropTypes.element.isRequired)]),

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A compact dropdown has no minimum width. */
  compact: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string])]),

  /** Initial value or value array if multiple. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.number]))]),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A dropdown menu can contain floated content. */
  floating: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A dropdown can take the full width of its parent */
  fluid: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A dropdown menu can contain a header. */
  header: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.node,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A dropdown can be labeled. */
  labeled: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A selection dropdown can allow multiple selections. */
  multiple: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Name of the hidden input which holds the value. */
  name: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_33__DropdownItem__["a" /* default */].propTypes))]),

  /** Placeholder text. */
  placeholder: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func,

  /** A dropdown can have its menu scroll. */
  scrolling: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.func]),

  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].demand(['options']), __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.bool,

  /** A dropdown can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: __WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_29__lib__["e" /* customPropTypes */].disallow(['selection', 'text']), __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_27_prop_types___default.a.number]))])
} : void 0;
Dropdown.handledProps = ['additionLabel', 'additionPosition', 'allowAdditions', 'as', 'basic', 'button', 'children', 'className', 'closeOnBlur', 'closeOnChange', 'compact', 'defaultOpen', 'defaultSelectedLabel', 'defaultValue', 'disabled', 'error', 'floating', 'fluid', 'header', 'icon', 'inline', 'item', 'labeled', 'loading', 'multiple', 'name', 'noResultsMessage', 'onAddItem', 'onBlur', 'onChange', 'onClick', 'onClose', 'onFocus', 'onLabelClick', 'onMouseDown', 'onOpen', 'onSearchChange', 'open', 'openOnFocus', 'options', 'placeholder', 'pointing', 'renderLabel', 'scrolling', 'search', 'selectOnBlur', 'selectedLabel', 'selection', 'simple', 'tabIndex', 'text', 'trigger', 'value'];

/***/ }),

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_partialRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_inRange__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_inRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_inRange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_get__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_isEqual__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_without__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_classnames__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prop_types__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lib__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__elements_Input__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__SearchCategory__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__SearchResult__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__SearchResults__ = __webpack_require__(899);



























var debug = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["o" /* makeDebugger */])('search');

/**
 * A search module allows a user to query for results from a selection of data
 */

var Search = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleResultSelect = function (e, result) {
      debug('handleResultSelect()');
      debug(result);
      var onResultSelect = _this.props.onResultSelect;

      if (onResultSelect) onResultSelect(e, result);
    }, _this.closeOnEscape = function (e) {
      if (__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      debug('moveSelectionOnKeyDown()');
      debug(__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getName(e));
      switch (__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getCode(e)) {
        case __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].ArrowDown:
          e.preventDefault();
          _this.moveSelectionBy(1);
          break;
        case __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].ArrowUp:
          e.preventDefault();
          _this.moveSelectionBy(-1);
          break;
        default:
          break;
      }
    }, _this.selectItemOnEnter = function (e) {
      debug('selectItemOnEnter()');
      debug(__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getName(e));
      if (__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].Enter) return;
      e.preventDefault();

      var result = _this.getSelectedResult();

      // prevent selecting null if there was no selected item value
      if (!result) return;

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.closeOnDocumentClick = function (e) {
      debug('closeOnDocumentClick()');
      debug(e);
      _this.close();
    }, _this.handleMouseDown = function (e) {
      debug('handleMouseDown()');
      var onMouseDown = _this.props.onMouseDown;

      if (onMouseDown) onMouseDown(e, _this.props);
      _this.isMouseDown = true;
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;
      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleDocumentMouseUp = function () {
      debug('handleDocumentMouseUp()');
      _this.isMouseDown = false;
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;
      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleInputClick = function (e) {
      debug('handleInputClick()', e);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      _this.tryOpen();
    }, _this.handleItemClick = function (e, _ref2) {
      var id = _ref2.id;

      debug('handleItemClick()');
      debug(id);
      var result = _this.getSelectedResult(id);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.handleFocus = function (e) {
      debug('handleFocus()');
      var onFocus = _this.props.onFocus;

      if (onFocus) onFocus(e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {
      debug('handleBlur()');
      var onBlur = _this.props.onBlur;

      if (onBlur) onBlur(e, _this.props);
      _this.setState({ focus: false });
    }, _this.handleSearchChange = function (e) {
      debug('handleSearchChange()');
      debug(e.target.value);
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var _this$props = _this.props,
          onSearchChange = _this$props.onSearchChange,
          minCharacters = _this$props.minCharacters;
      var open = _this.state.open;

      var newQuery = e.target.value;

      if (onSearchChange) onSearchChange(e, newQuery);

      // open search dropdown on search query
      if (newQuery.length < minCharacters) {
        _this.close();
      } else if (!open) {
        _this.tryOpen(newQuery);
      }

      _this.setValue(newQuery);
    }, _this.getFlattenedResults = function () {
      var _this$props2 = _this.props,
          category = _this$props2.category,
          results = _this$props2.results;


      return !category ? results : __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default()(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    }, _this.getSelectedResult = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selectedIndex;

      var results = _this.getFlattenedResults();
      return __WEBPACK_IMPORTED_MODULE_12_lodash_get___default()(results, index);
    }, _this.setValue = function (value) {
      debug('setValue()');
      debug('value', value);

      var selectFirstResult = _this.props.selectFirstResult;


      _this.trySetState({ value: value }, { selectedIndex: selectFirstResult ? 0 : -1 });
    }, _this.moveSelectionBy = function (offset) {
      debug('moveSelectionBy()');
      debug('offset: ' + offset);
      var selectedIndex = _this.state.selectedIndex;


      var results = _this.getFlattenedResults();
      var lastIndex = results.length - 1;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = selectedIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
    }, _this.scrollSelectedItemIntoView = function () {
      debug('scrollSelectedItemIntoView()');
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;
      var menu = document.querySelector('.ui.search.active.visible .results.visible');
      var item = menu.querySelector('.result.active');
      debug('menu (results): ' + menu);
      debug('item (result): ' + item);
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.tryOpen = function () {
      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;

      debug('open()');

      var minCharacters = _this.props.minCharacters;

      if (currentValue.length < minCharacters) return;

      _this.open();
    }, _this.open = function () {
      debug('open()');
      _this.trySetState({ open: true });
    }, _this.close = function () {
      debug('close()');
      _this.trySetState({ open: false });
    }, _this.renderSearchInput = function (rest) {
      var _this$props3 = _this.props,
          icon = _this$props3.icon,
          input = _this$props3.input;
      var value = _this.state.value;


      return __WEBPACK_IMPORTED_MODULE_20__elements_Input__["a" /* default */].create(input, { defaultProps: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, rest, {
          icon: icon,
          input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
          onBlur: _this.handleBlur,
          onChange: _this.handleSearchChange,
          onClick: _this.handleInputClick,
          onFocus: _this.handleFocus,
          value: value
        }) });
    }, _this.renderNoResults = function () {
      var _this$props4 = _this.props,
          noResultsDescription = _this$props4.noResultsDescription,
          noResultsMessage = _this$props4.noResultsMessage;


      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
        'div',
        { className: 'message empty' },
        __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
          'div',
          { className: 'header' },
          noResultsMessage
        ),
        noResultsDescription && __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
          'div',
          { className: 'description' },
          noResultsDescription
        )
      );
    }, _this.renderResult = function (_ref3, index, _array) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var childKey = _ref3.childKey,
          result = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['childKey']);

      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;

      var offsetIndex = index + offset;

      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__SearchResult__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
        key: childKey || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click
      }));
    }, _this.renderResults = function () {
      var results = _this.props.results;


      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(results, _this.renderResult);
    }, _this.renderCategories = function () {
      var _this$props5 = _this.props,
          categoryRenderer = _this$props5.categoryRenderer,
          categories = _this$props5.results;
      var selectedIndex = _this.state.selectedIndex;


      var count = 0;

      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(categories, function (_ref4, name, index) {
        var childKey = _ref4.childKey,
            category = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref4, ['childKey']);

        var categoryProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
          key: childKey || category.name,
          active: __WEBPACK_IMPORTED_MODULE_10_lodash_inRange___default()(selectedIndex, count, count + category.results.length),
          renderer: categoryRenderer
        }, category);
        var renderFn = __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight___default()(_this.renderResult, count);

        count = count + category.results.length;

        return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_21__SearchCategory__["a" /* default */],
          categoryProps,
          category.results.map(renderFn)
        );
      });
    }, _this.renderMenuContent = function () {
      var _this$props6 = _this.props,
          category = _this$props6.category,
          showNoResults = _this$props6.showNoResults,
          results = _this$props6.results;


      if (__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default()(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    }, _this.renderResultsMenu = function () {
      var open = _this.state.open;

      var resultsClasses = open ? 'visible' : '';
      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;

      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_23__SearchResults__["a" /* default */],
        { className: resultsClasses },
        menuContent
      );
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillMount', this)) __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillMount', this).call(this);
      debug('componentWillMount()');
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      if (open) this.open();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default()(nextProps, this.props) || !__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default()(nextState, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      debug('componentWillReceiveProps()');
      // TODO objectDiff still runs in prod, stop it
      debug('changed props:', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["r" /* objectDiff */])(nextProps, this.props));

      if (!__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default()(nextProps.value, this.props.value)) {
        debug('value changed, setting', nextProps.value);
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      debug('componentDidUpdate()');
      // TODO objectDiff still runs in prod, stop it
      debug('to state:', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["r" /* objectDiff */])(prevState, this.state));

      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;

      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        debug('search focused');
        if (!this.isMouseDown) {
          debug('mouse is not down, opening');
          this.tryOpen();
        }
        if (this.state.open) {
          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
          document.addEventListener('keydown', this.selectItemOnEnter);
        }
      } else if (prevState.focus && !this.state.focus) {
        debug('search blurred');
        if (!this.isMouseDown) {
          debug('mouse is not down, closing');
          this.close();
        }
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        debug('search opened');
        this.open();
        document.addEventListener('keydown', this.closeOnEscape);
        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
        document.addEventListener('keydown', this.selectItemOnEnter);
        document.addEventListener('click', this.closeOnDocumentClick);
      } else if (prevState.open && !this.state.open) {
        debug('search closed');
        this.close();
        document.removeEventListener('keydown', this.closeOnEscape);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('click', this.closeOnDocumentClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');

      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;

      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
      document.removeEventListener('keydown', this.selectItemOnEnter);
      document.removeEventListener('keydown', this.closeOnEscape);
      document.removeEventListener('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // Open if the current value is greater than the minCharacters prop


    // ----------------------------------------
    // Render
    // ----------------------------------------

    /**
     * Offset is needed for determining the active item for results within a
     * category. Since the index is reset to 0 for each new category, an offset
     * must be passed in.
     */

  }, {
    key: 'render',
    value: function render() {
      debug('render()');
      debug('props', this.props);
      debug('state', this.state);
      var _state2 = this.state,
          searchClasses = _state2.searchClasses,
          focus = _state2.focus,
          open = _state2.open;
      var _props = this.props,
          aligned = _props.aligned,
          category = _props.category,
          className = _props.className,
          fluid = _props.fluid,
          loading = _props.loading,
          size = _props.size;

      // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_16_classnames___default()('ui', open && 'active visible', size, searchClasses, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(category, 'category'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(focus, 'focus'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(fluid, 'fluid'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(loading, 'loading'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["h" /* useValueAndKey */])(aligned, 'aligned'), 'search', className);
      var unhandled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["b" /* getUnhandledProps */])(Search, this.props);
      var ElementType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["c" /* getElementType */])(Search, this.props);

      var _partitionHTMLInputPr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["s" /* partitionHTMLInputProps */])(unhandled, __WEBPACK_IMPORTED_MODULE_19__lib__["t" /* htmlInputAttrs */]),
          _partitionHTMLInputPr2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseDown: this.handleMouseDown
        }),
        this.renderSearchInput(htmlInputProps),
        this.renderResultsMenu()
      );
    }
  }]);

  return Search;
}(__WEBPACK_IMPORTED_MODULE_19__lib__["n" /* AutoControlledComponent */]);

Search.defaultProps = {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
};
Search.autoControlledProps = ['open', 'value'];
Search._meta = {
  name: 'Search',
  type: __WEBPACK_IMPORTED_MODULE_19__lib__["d" /* META */].TYPES.MODULE
};
Search.Category = __WEBPACK_IMPORTED_MODULE_21__SearchCategory__["a" /* default */];
Search.Result = __WEBPACK_IMPORTED_MODULE_22__SearchResult__["a" /* default */];
Search.Results = __WEBPACK_IMPORTED_MODULE_23__SearchResults__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Search);
 true ? Search.propTypes = {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_19__lib__["e" /* customPropTypes */].as,

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Initial value. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.object]),

  /** Minimum characters to query for results */
  minCharacters: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** Controls whether or not the results menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_22__SearchResult__["a" /* default */].propTypes)), __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.object]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** A search can display results from remote content ordered by categories. */
  category: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** A search can have its results take up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** A search input can take up the width of its container. */
  input: __WEBPACK_IMPORTED_MODULE_19__lib__["e" /* customPropTypes */].itemShorthand,

  /** A search can show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** A search can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_15_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_19__lib__["g" /* SUI */].SIZES, 'medium'))
} : void 0;
Search.handledProps = ['aligned', 'as', 'category', 'categoryRenderer', 'className', 'defaultOpen', 'defaultValue', 'fluid', 'icon', 'input', 'loading', 'minCharacters', 'noResultsDescription', 'noResultsMessage', 'onBlur', 'onFocus', 'onMouseDown', 'onResultSelect', 'onSearchChange', 'open', 'resultRenderer', 'results', 'selectFirstResult', 'showNoResults', 'size', 'value'];

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(179);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 701:
false,

/***/ 702:
false,

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__(342),
    baseIteratee = __webpack_require__(180),
    baseSome = __webpack_require__(707),
    isArray = __webpack_require__(22),
    isIterateeCall = __webpack_require__(381);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),

/***/ 711:
false,

/***/ 712:
false,

/***/ 713:
false,

/***/ 714:
false,

/***/ 717:
false,

/***/ 718:
false,

/***/ 719:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2NoaWxkcmVuVXRpbHMuanM/MDQwMTcyMiIsIndlYnBhY2s6Ly8vLi9+L3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL29iamVjdERpZmYuanM/MDQwMTcyMiIsIndlYnBhY2s6Ly8vLi9+L3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbW9kdWxlcy9Ecm9wZG93bi9Ecm9wZG93bi5qcz8wNDAxNzIyIiwid2VicGFjazovLy8uL34vc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9tb2R1bGVzL1NlYXJjaC9TZWFyY2guanM/MDQwMTcyMiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0VxdWFsLmpzPzA0MDE3MjIiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc29tZS5qcz8wNDAxNzIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRW1COztBQUVuQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsZ0JBQWdCO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUlBQTRDLGFBQWE7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGdCQUFnQjtBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBLGlJQUE0QyxhQUFhO0FBQ3pELEU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1AsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdGQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7eURBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ1FBQW1ILCtFQUFxQzs7QUFFeEo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFB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O0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7O0FBR0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9maW5kIGZyb20gJ2xvZGFzaC9maW5kJztcbmltcG9ydCBfc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5cbmltcG9ydCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBjaGlsZCBieSB0eXBlIGV4aXN0cyBpbiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZHJlbiBUaGUgY2hpbGRyZW4gcHJvcCBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfEZ1bmN0aW9ufSB0eXBlIEFuIGh0bWwgdGFnIG5hbWUgc3RyaW5nIG9yIFJlYWN0IGNvbXBvbmVudC5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgdmFyIHNvbWVCeVR5cGUgPSBmdW5jdGlvbiBzb21lQnlUeXBlKGNoaWxkcmVuLCB0eXBlKSB7XG4gIHJldHVybiBfc29tZShDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSwgeyB0eXBlOiB0eXBlIH0pO1xufTtcblxuLyoqXG4gKiBGaW5kIGNoaWxkIGJ5IHR5cGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY2hpbGRyZW4gVGhlIGNoaWxkcmVuIHByb3Agb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ3xGdW5jdGlvbn0gdHlwZSBBbiBodG1sIHRhZyBuYW1lIHN0cmluZyBvciBSZWFjdCBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfE9iamVjdH1cbiAqL1xuZXhwb3J0IHZhciBmaW5kQnlUeXBlID0gZnVuY3Rpb24gZmluZEJ5VHlwZShjaGlsZHJlbiwgdHlwZSkge1xuICByZXR1cm4gX2ZpbmQoQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbiksIHsgdHlwZTogdHlwZSB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2NoaWxkcmVuVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9pc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcbmltcG9ydCBfaGFzIGZyb20gJ2xvZGFzaC9oYXMnO1xuaW1wb3J0IF90cmFuc2Zvcm0gZnJvbSAnbG9kYXNoL3RyYW5zZm9ybSc7XG5cblxuLyoqXG4gKiBOYWl2ZSBhbmQgaW5lZmZpY2llbnQgb2JqZWN0IGRpZmZlcmVuY2UsIGludGVuZGVkIGZvciBkZXZlbG9wbWVudCAvIGRlYnVnZ2luZyB1c2Ugb25seS5cbiAqIERlbGV0ZWQga2V5cyBhcmUgc2hvd24gYXMgW0RFTEVURURdLlxuICogQHBhcmFtIHt7fX0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge3t9fSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3QuXG4gKiBAcmV0dXJucyB7e319IEEgbmV3IG9iamVjdCBjb250YWluaW5nIG5ldy9tb2RpZmllZC9kZWxldGVkIGtleXMuXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgb2JqZWN0RGlmZiB9IGZyb20gJ3NyYy9saWInXG4gKlxuICogY29uc3QgYSA9IHsga2V5OiAndmFsJywgZm9vOiAnYmFyJyB9XG4gKiBjb25zdCBiID0geyBrZXk6ICd2YWwnLCBmb286ICdiYXonIH1cbiAqXG4gKiBvYmplY3REaWZmKGEsIGIpXG4gKiAvLz0+IHsgZm9vOiAnYmF6JyB9XG4gKi9cbmV4cG9ydCB2YXIgb2JqZWN0RGlmZiA9IGZ1bmN0aW9uIG9iamVjdERpZmYoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIF90cmFuc2Zvcm0oc291cmNlLCBmdW5jdGlvbiAocmVzLCB2YWwsIGtleSkge1xuICAgIC8vIGRlbGV0ZWQga2V5c1xuICAgIGlmICghX2hhcyh0YXJnZXQsIGtleSkpIHJlc1trZXldID0gJ1tERUxFVEVEXSc7XG4gICAgLy8gbmV3IGtleXMgLyBjaGFuZ2VkIHZhbHVlc1xuICAgIGVsc2UgaWYgKCFfaXNFcXVhbCh2YWwsIHRhcmdldFtrZXldKSkgcmVzW2tleV0gPSB0YXJnZXRba2V5XTtcbiAgfSwge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvb2JqZWN0RGlmZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0MiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0JztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBfY29tcGFjdCBmcm9tICdsb2Rhc2gvY29tcGFjdCc7XG5pbXBvcnQgX21hcCBmcm9tICdsb2Rhc2gvbWFwJztcbmltcG9ydCBfaXNOaWwgZnJvbSAnbG9kYXNoL2lzTmlsJztcbmltcG9ydCBfZXZlcnkgZnJvbSAnbG9kYXNoL2V2ZXJ5JztcbmltcG9ydCBfd2l0aG91dCBmcm9tICdsb2Rhc2gvd2l0aG91dCc7XG5pbXBvcnQgX2ZpbmRJbmRleCBmcm9tICdsb2Rhc2gvZmluZEluZGV4JztcbmltcG9ydCBfZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBfc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5pbXBvcnQgX2VzY2FwZVJlZ0V4cCBmcm9tICdsb2Rhc2gvZXNjYXBlUmVnRXhwJztcbmltcG9ydCBfZmlsdGVyIGZyb20gJ2xvZGFzaC9maWx0ZXInO1xuaW1wb3J0IF9pc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCBfZHJvcFJpZ2h0IGZyb20gJ2xvZGFzaC9kcm9wUmlnaHQnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCBfdW5pb24gZnJvbSAnbG9kYXNoL3VuaW9uJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IF9pbmNsdWRlcyBmcm9tICdsb2Rhc2gvaW5jbHVkZXMnO1xuaW1wb3J0IF9pc1VuZGVmaW5lZCBmcm9tICdsb2Rhc2gvaXNVbmRlZmluZWQnO1xuaW1wb3J0IF9oYXMgZnJvbSAnbG9kYXNoL2hhcyc7XG5pbXBvcnQgX2lzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEF1dG9Db250cm9sbGVkQ29tcG9uZW50IGFzIENvbXBvbmVudCwgY3VzdG9tUHJvcFR5cGVzLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMsIGlzQnJvd3Nlciwga2V5Ym9hcmRLZXksIG1ha2VEZWJ1Z2dlciwgTUVUQSwgb2JqZWN0RGlmZiwgdXNlS2V5T25seSwgdXNlS2V5T3JWYWx1ZUFuZEtleSB9IGZyb20gJy4uLy4uL2xpYic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9lbGVtZW50cy9MYWJlbCc7XG5pbXBvcnQgRHJvcGRvd25EaXZpZGVyIGZyb20gJy4vRHJvcGRvd25EaXZpZGVyJztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IERyb3Bkb3duSGVhZGVyIGZyb20gJy4vRHJvcGRvd25IZWFkZXInO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5cbnZhciBkZWJ1ZyA9IG1ha2VEZWJ1Z2dlcignZHJvcGRvd24nKTtcblxuLyoqXG4gKiBBIGRyb3Bkb3duIGFsbG93cyBhIHVzZXIgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbSBhIHNlcmllcyBvZiBvcHRpb25zLlxuICogQHNlZSBGb3JtXG4gKiBAc2VlIFNlbGVjdFxuICogQHNlZSBNZW51XG4gKi9cblxudmFyIERyb3Bkb3duID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyb3Bkb3duLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcGRvd24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IERyb3Bkb3duLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJvcGRvd24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSwgdmFsdWUpIHtcbiAgICAgIGRlYnVnKCdoYW5kbGVDaGFuZ2UoKScpO1xuICAgICAgZGVidWcodmFsdWUpO1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoZSwgX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLCB7IHZhbHVlOiB2YWx1ZSB9KSk7XG4gICAgfSwgX3RoaXMuY2xvc2VPbkNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbG9zZU9uQ2hhbmdlID0gX3RoaXMkcHJvcHMuY2xvc2VPbkNoYW5nZSxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzLm11bHRpcGxlO1xuXG4gICAgICB2YXIgc2hvdWxkQ2xvc2UgPSBfaXNVbmRlZmluZWQoY2xvc2VPbkNoYW5nZSkgPyAhbXVsdGlwbGUgOiBjbG9zZU9uQ2hhbmdlO1xuXG4gICAgICBpZiAoc2hvdWxkQ2xvc2UpIF90aGlzLmNsb3NlKGUpO1xuICAgIH0sIF90aGlzLmNsb3NlT25Fc2NhcGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGtleWJvYXJkS2V5LmdldENvZGUoZSkgIT09IGtleWJvYXJkS2V5LkVzY2FwZSkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCdtb3ZlU2VsZWN0aW9uT25LZXlEb3duKCknKTtcbiAgICAgIGRlYnVnKGtleWJvYXJkS2V5LmdldE5hbWUoZSkpO1xuICAgICAgc3dpdGNoIChrZXlib2FyZEtleS5nZXRDb2RlKGUpKSB7XG4gICAgICAgIGNhc2Uga2V5Ym9hcmRLZXkuQXJyb3dEb3duOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5tb3ZlU2VsZWN0aW9uQnkoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Ym9hcmRLZXkuQXJyb3dVcDpcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3RoaXMubW92ZVNlbGVjdGlvbkJ5KC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vcGVuT25TcGFjZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1Zygnb3Blbk9uU3BhY2UoKScpO1xuXG4gICAgICBpZiAoa2V5Ym9hcmRLZXkuZ2V0Q29kZShlKSAhPT0ga2V5Ym9hcmRLZXkuU3BhY2ViYXIpIHJldHVybjtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5vcGVuKSByZXR1cm47XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMub3BlbihlKTtcbiAgICB9LCBfdGhpcy5vcGVuT25BcnJvdyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1Zygnb3Blbk9uQXJyb3coKScpO1xuXG4gICAgICB2YXIgY29kZSA9IGtleWJvYXJkS2V5LmdldENvZGUoZSk7XG4gICAgICBpZiAoIV9pbmNsdWRlcyhba2V5Ym9hcmRLZXkuQXJyb3dEb3duLCBrZXlib2FyZEtleS5BcnJvd1VwXSwgY29kZSkpIHJldHVybjtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5vcGVuKSByZXR1cm47XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMub3BlbihlKTtcbiAgICB9LCBfdGhpcy5tYWtlU2VsZWN0ZWRJdGVtQWN0aXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvcGVuID0gX3RoaXMuc3RhdGUub3BlbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMi5tdWx0aXBsZSxcbiAgICAgICAgICBvbkFkZEl0ZW0gPSBfdGhpcyRwcm9wczIub25BZGRJdGVtO1xuXG4gICAgICB2YXIgaXRlbSA9IF90aGlzLmdldFNlbGVjdGVkSXRlbSgpO1xuICAgICAgdmFyIHZhbHVlID0gX2dldChpdGVtLCAndmFsdWUnKTtcblxuICAgICAgLy8gcHJldmVudCBzZWxlY3RpbmcgbnVsbCBpZiB0aGVyZSB3YXMgbm8gc2VsZWN0ZWQgaXRlbSB2YWx1ZVxuICAgICAgLy8gcHJldmVudCBzZWxlY3RpbmcgZHVwbGljYXRlIGl0ZW1zIHdoZW4gdGhlIGRyb3Bkb3duIGlzIGNsb3NlZFxuICAgICAgaWYgKCF2YWx1ZSB8fCAhb3BlbikgcmV0dXJuO1xuXG4gICAgICAvLyBub3RpZnkgdGhlIG9uQWRkSXRlbSBwcm9wIGlmIHRoaXMgaXMgYSBuZXcgdmFsdWVcbiAgICAgIGlmIChvbkFkZEl0ZW0gJiYgaXRlbVsnZGF0YS1hZGRpdGlvbmFsJ10pIHtcbiAgICAgICAgb25BZGRJdGVtKGUsIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywgeyB2YWx1ZTogdmFsdWUgfSkpO1xuICAgICAgfVxuICAgICAgLy8gbm90aWZ5IHRoZSBvbkNoYW5nZSBwcm9wIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIGNoYW5nZSB2YWx1ZVxuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIC8vIHN0YXRlIHZhbHVlIG1heSBiZSB1bmRlZmluZWRcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3VuaW9uKF90aGlzLnN0YXRlLnZhbHVlLCBbdmFsdWVdKTtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UoZSwgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UoZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLnNlbGVjdEl0ZW1PbkVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCdzZWxlY3RJdGVtT25FbnRlcigpJyk7XG4gICAgICBkZWJ1ZyhrZXlib2FyZEtleS5nZXROYW1lKGUpKTtcbiAgICAgIGlmIChrZXlib2FyZEtleS5nZXRDb2RlKGUpICE9PSBrZXlib2FyZEtleS5FbnRlcikgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBfdGhpcy5tYWtlU2VsZWN0ZWRJdGVtQWN0aXZlKGUpO1xuICAgICAgX3RoaXMuY2xvc2VPbkNoYW5nZShlKTtcbiAgICB9LCBfdGhpcy5yZW1vdmVJdGVtT25CYWNrc3BhY2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ3JlbW92ZUl0ZW1PbkJhY2tzcGFjZSgpJyk7XG4gICAgICBkZWJ1ZyhrZXlib2FyZEtleS5nZXROYW1lKGUpKTtcbiAgICAgIGlmIChrZXlib2FyZEtleS5nZXRDb2RlKGUpICE9PSBrZXlib2FyZEtleS5CYWNrc3BhY2UpIHJldHVybjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMzLm11bHRpcGxlLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzMy5zZWFyY2g7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWFyY2hRdWVyeSA9IF90aGlzJHN0YXRlLnNlYXJjaFF1ZXJ5LFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkc3RhdGUudmFsdWU7XG5cblxuICAgICAgaWYgKHNlYXJjaFF1ZXJ5IHx8ICFzZWFyY2ggfHwgIW11bHRpcGxlIHx8IF9pc0VtcHR5KHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIHJlbW92ZSBtb3N0IHJlY2VudCB2YWx1ZVxuICAgICAgdmFyIG5ld1ZhbHVlID0gX2Ryb3BSaWdodCh2YWx1ZSk7XG5cbiAgICAgIF90aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIF90aGlzLmhhbmRsZUNoYW5nZShlLCBuZXdWYWx1ZSk7XG4gICAgfSwgX3RoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2Nsb3NlT25Eb2N1bWVudENsaWNrKCknKTtcbiAgICAgIGRlYnVnKGUpO1xuXG4gICAgICAvLyBJZiBldmVudCBoYXBwZW5lZCBpbiB0aGUgZHJvcGRvd24sIGlnbm9yZSBpdFxuICAgICAgaWYgKF90aGlzLnJlZiAmJiBfaXNGdW5jdGlvbihfdGhpcy5yZWYuY29udGFpbnMpICYmIF90aGlzLnJlZi5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcblxuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2hhbmRsZU1vdXNlRG93bigpJyk7XG4gICAgICB2YXIgb25Nb3VzZURvd24gPSBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bjtcblxuICAgICAgaWYgKG9uTW91c2VEb3duKSBvbk1vdXNlRG93bihlLCBfdGhpcy5wcm9wcyk7XG4gICAgICBfdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgICAvLyBEbyBub3QgYWNjZXNzIGRvY3VtZW50IHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLmhhbmRsZURvY3VtZW50TW91c2VVcCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlRG9jdW1lbnRNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ2hhbmRsZURvY3VtZW50TW91c2VVcCgpJyk7XG4gICAgICBfdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgLy8gRG8gbm90IGFjY2VzcyBkb2N1bWVudCB3aGVuIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuICAgICAgaWYgKCFpc0Jyb3dzZXIpIHJldHVybjtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5oYW5kbGVEb2N1bWVudE1vdXNlVXApO1xuICAgIH0sIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCdoYW5kbGVDbGljaygpJywgZSk7XG4gICAgICB2YXIgb25DbGljayA9IF90aGlzLnByb3BzLm9uQ2xpY2s7XG5cbiAgICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGUsIF90aGlzLnByb3BzKTtcbiAgICAgIC8vIHByZXZlbnQgY2xvc2VPbkRvY3VtZW50Q2xpY2soKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIF90aGlzLnRvZ2dsZShlKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoZSwgaXRlbSkge1xuICAgICAgZGVidWcoJ2hhbmRsZUl0ZW1DbGljaygpJyk7XG4gICAgICBkZWJ1ZyhpdGVtKTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzNC5tdWx0aXBsZSxcbiAgICAgICAgICBvbkFkZEl0ZW0gPSBfdGhpcyRwcm9wczQub25BZGRJdGVtO1xuICAgICAgdmFyIHZhbHVlID0gaXRlbS52YWx1ZTtcblxuICAgICAgLy8gcHJldmVudCB0b2dnbGUoKSBpbiBoYW5kbGVDbGljaygpXG5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBwcmV2ZW50IGNsb3NlT25Eb2N1bWVudENsaWNrKCkgaWYgbXVsdGlwbGUgb3IgaXRlbSBpcyBkaXNhYmxlZFxuICAgICAgaWYgKG11bHRpcGxlIHx8IGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgLy8gbm90aWZ5IHRoZSBvbkFkZEl0ZW0gcHJvcCBpZiB0aGlzIGlzIGEgbmV3IHZhbHVlXG4gICAgICBpZiAob25BZGRJdGVtICYmIGl0ZW1bJ2RhdGEtYWRkaXRpb25hbCddKSB7XG4gICAgICAgIG9uQWRkSXRlbShlLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHsgdmFsdWU6IHZhbHVlIH0pKTtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aWZ5IHRoZSBvbkNoYW5nZSBwcm9wIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIGNoYW5nZSB2YWx1ZVxuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF91bmlvbihfdGhpcy5zdGF0ZS52YWx1ZSwgW3ZhbHVlXSk7XG4gICAgICAgIF90aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKGUsIG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLmNsb3NlT25DaGFuZ2UoZSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2hhbmRsZUZvY3VzKCknKTtcbiAgICAgIHZhciBvbkZvY3VzID0gX3RoaXMucHJvcHMub25Gb2N1cztcbiAgICAgIHZhciBmb2N1cyA9IF90aGlzLnN0YXRlLmZvY3VzO1xuXG4gICAgICBpZiAoZm9jdXMpIHJldHVybjtcbiAgICAgIGlmIChvbkZvY3VzKSBvbkZvY3VzKGUsIF90aGlzLnByb3BzKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlQmx1cigpJyk7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2xvc2VPbkJsdXIgPSBfdGhpcyRwcm9wczUuY2xvc2VPbkJsdXIsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczUubXVsdGlwbGUsXG4gICAgICAgICAgb25CbHVyID0gX3RoaXMkcHJvcHM1Lm9uQmx1cixcbiAgICAgICAgICBzZWxlY3RPbkJsdXIgPSBfdGhpcyRwcm9wczUuc2VsZWN0T25CbHVyO1xuICAgICAgLy8gZG8gbm90IFwiYmx1clwiIHdoZW4gdGhlIG1vdXNlIGlzIGRvd24gaW5zaWRlIG9mIHRoZSBEcm9wZG93blxuXG4gICAgICBpZiAoX3RoaXMuaXNNb3VzZURvd24pIHJldHVybjtcbiAgICAgIGlmIChvbkJsdXIpIG9uQmx1cihlLCBfdGhpcy5wcm9wcyk7XG4gICAgICBpZiAoc2VsZWN0T25CbHVyICYmICFtdWx0aXBsZSkge1xuICAgICAgICBfdGhpcy5tYWtlU2VsZWN0ZWRJdGVtQWN0aXZlKGUpO1xuICAgICAgICBpZiAoY2xvc2VPbkJsdXIpIF90aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSwgc2VhcmNoUXVlcnk6ICcnIH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlU2VhcmNoQ2hhbmdlKCknKTtcbiAgICAgIGRlYnVnKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpbmcgdG8gdGhpcy5wcm9wcy5vbkNoYW5nZSgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzNi5zZWFyY2gsXG4gICAgICAgICAgb25TZWFyY2hDaGFuZ2UgPSBfdGhpcyRwcm9wczYub25TZWFyY2hDaGFuZ2U7XG4gICAgICB2YXIgb3BlbiA9IF90aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgIHZhciBuZXdRdWVyeSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICBpZiAob25TZWFyY2hDaGFuZ2UpIG9uU2VhcmNoQ2hhbmdlKGUsIG5ld1F1ZXJ5KTtcblxuICAgICAgLy8gb3BlbiBzZWFyY2ggZHJvcGRvd24gb24gc2VhcmNoIHF1ZXJ5XG4gICAgICBpZiAoc2VhcmNoICYmIG5ld1F1ZXJ5ICYmICFvcGVuKSBfdGhpcy5vcGVuKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgc2VhcmNoUXVlcnk6IG5ld1F1ZXJ5XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5nZXRNZW51T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3RoaXMucHJvcHMub3B0aW9ucztcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzNy5tdWx0aXBsZSxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczcuc2VhcmNoLFxuICAgICAgICAgIGFsbG93QWRkaXRpb25zID0gX3RoaXMkcHJvcHM3LmFsbG93QWRkaXRpb25zLFxuICAgICAgICAgIGFkZGl0aW9uUG9zaXRpb24gPSBfdGhpcyRwcm9wczcuYWRkaXRpb25Qb3NpdGlvbixcbiAgICAgICAgICBhZGRpdGlvbkxhYmVsID0gX3RoaXMkcHJvcHM3LmFkZGl0aW9uTGFiZWw7XG4gICAgICB2YXIgc2VhcmNoUXVlcnkgPSBfdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeTtcblxuXG4gICAgICB2YXIgZmlsdGVyZWRPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgLy8gZmlsdGVyIG91dCBhY3RpdmUgb3B0aW9uc1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGZpbHRlcmVkT3B0aW9ucyA9IF9maWx0ZXIoZmlsdGVyZWRPcHRpb25zLCBmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgcmV0dXJuICFfaW5jbHVkZXModmFsdWUsIG9wdC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBmaWx0ZXIgYnkgc2VhcmNoIHF1ZXJ5XG4gICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIGlmIChfaXNGdW5jdGlvbihzZWFyY2gpKSB7XG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gc2VhcmNoKGZpbHRlcmVkT3B0aW9ucywgc2VhcmNoUXVlcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoX2VzY2FwZVJlZ0V4cChzZWFyY2hRdWVyeSksICdpJyk7XG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gX2ZpbHRlcihmaWx0ZXJlZE9wdGlvbnMsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZS50ZXN0KG9wdC50ZXh0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpbnNlcnQgdGhlIFwiYWRkXCIgaXRlbVxuICAgICAgaWYgKGFsbG93QWRkaXRpb25zICYmIHNlYXJjaCAmJiBzZWFyY2hRdWVyeSAmJiAhX3NvbWUoZmlsdGVyZWRPcHRpb25zLCB7IHRleHQ6IHNlYXJjaFF1ZXJ5IH0pKSB7XG4gICAgICAgIHZhciBhZGRpdGlvbkxhYmVsRWxlbWVudCA9IFJlYWN0LmlzVmFsaWRFbGVtZW50KGFkZGl0aW9uTGFiZWwpID8gUmVhY3QuY2xvbmVFbGVtZW50KGFkZGl0aW9uTGFiZWwsIHsga2V5OiAnbGFiZWwnIH0pIDogYWRkaXRpb25MYWJlbCB8fCAnJztcblxuICAgICAgICB2YXIgYWRkSXRlbSA9IHtcbiAgICAgICAgICAvLyBieSB1c2luZyBhbiBhcnJheSwgd2UgY2FuIHBhc3MgbXVsdGlwbGUgZWxlbWVudHMsIGJ1dCB3aGVuIGRvaW5nIHNvXG4gICAgICAgICAgLy8gd2UgbXVzdCBzcGVjaWZ5IGEgYGtleWAgZm9yIFJlYWN0IHRvIGtub3cgd2hpY2ggb25lIGlzIHdoaWNoXG4gICAgICAgICAgdGV4dDogW2FkZGl0aW9uTGFiZWxFbGVtZW50LCBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2InLFxuICAgICAgICAgICAgeyBrZXk6ICdhZGRpdGlvbicgfSxcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5XG4gICAgICAgICAgKV0sXG4gICAgICAgICAgdmFsdWU6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICAgIGNsYXNzTmFtZTogJ2FkZGl0aW9uJyxcbiAgICAgICAgICAnZGF0YS1hZGRpdGlvbmFsJzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBpZiAoYWRkaXRpb25Qb3NpdGlvbiA9PT0gJ3RvcCcpIGZpbHRlcmVkT3B0aW9ucy51bnNoaWZ0KGFkZEl0ZW0pO2Vsc2UgZmlsdGVyZWRPcHRpb25zLnB1c2goYWRkSXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgfSwgX3RoaXMuZ2V0U2VsZWN0ZWRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldE1lbnVPcHRpb25zKCk7XG5cbiAgICAgIHJldHVybiBfZ2V0KG9wdGlvbnMsICdbJyArIHNlbGVjdGVkSW5kZXggKyAnXScpO1xuICAgIH0sIF90aGlzLmdldEVuYWJsZWRJbmRpY2VzID0gZnVuY3Rpb24gKGdpdmVuT3B0aW9ucykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBnaXZlbk9wdGlvbnMgfHwgX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcblxuICAgICAgcmV0dXJuIF9yZWR1Y2Uob3B0aW9ucywgZnVuY3Rpb24gKG1lbW8sIGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkgbWVtby5wdXNoKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG4gICAgfSwgX3RoaXMuZ2V0SXRlbUJ5VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMucHJvcHMub3B0aW9ucztcblxuXG4gICAgICByZXR1cm4gX2ZpbmQob3B0aW9ucywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfSwgX3RoaXMuZ2V0TWVudUl0ZW1JbmRleEJ5VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGdpdmVuT3B0aW9ucykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBnaXZlbk9wdGlvbnMgfHwgX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcblxuICAgICAgcmV0dXJuIF9maW5kSW5kZXgob3B0aW9ucywgWyd2YWx1ZScsIHZhbHVlXSk7XG4gICAgfSwgX3RoaXMuZ2V0RHJvcGRvd25BcmlhT3B0aW9ucyA9IGZ1bmN0aW9uIChFbGVtZW50VHlwZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGxvYWRpbmcgPSBfdGhpcyRwcm9wczgubG9hZGluZyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzOC5kaXNhYmxlZCxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczguc2VhcmNoLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHM4Lm11bHRpcGxlO1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICB2YXIgYXJpYU9wdGlvbnMgPSB7XG4gICAgICAgIHJvbGU6IHNlYXJjaCA/ICdjb21ib2JveCcgOiAnbGlzdGJveCcsXG4gICAgICAgICdhcmlhLWJ1c3knOiBsb2FkaW5nLFxuICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6ICEhb3BlblxuICAgICAgfTtcbiAgICAgIGlmIChhcmlhT3B0aW9ucy5yb2xlID09PSAnbGlzdGJveCcpIHtcbiAgICAgICAgYXJpYU9wdGlvbnNbJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJ10gPSBtdWx0aXBsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmlhT3B0aW9ucztcbiAgICB9LCBfdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZGVidWcoJ3NldFZhbHVlKCknKTtcbiAgICAgIGRlYnVnKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgc2VhcmNoUXVlcnk6ICcnXG4gICAgICB9O1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczkubXVsdGlwbGUsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHM5LnNlYXJjaDtcblxuICAgICAgaWYgKG11bHRpcGxlICYmIHNlYXJjaCAmJiBfdGhpcy5zZWFyY2hSZWYpIF90aGlzLnNlYXJjaFJlZi5mb2N1cygpO1xuXG4gICAgICBfdGhpcy50cnlTZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9LCBuZXdTdGF0ZSk7XG4gICAgICBfdGhpcy5zZXRTZWxlY3RlZEluZGV4KHZhbHVlKTtcbiAgICB9LCBfdGhpcy5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBvcHRpb25zUHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF90aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgICB2YXIgbXVsdGlwbGUgPSBfdGhpcy5wcm9wcy5tdWx0aXBsZTtcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleDtcblxuICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5nZXRNZW51T3B0aW9ucyh2YWx1ZSwgb3B0aW9uc1Byb3BzKTtcbiAgICAgIHZhciBlbmFibGVkSW5kaWNpZXMgPSBfdGhpcy5nZXRFbmFibGVkSW5kaWNlcyhvcHRpb25zKTtcblxuICAgICAgdmFyIG5ld1NlbGVjdGVkSW5kZXggPSB2b2lkIDA7XG5cbiAgICAgIC8vIHVwZGF0ZSB0aGUgc2VsZWN0ZWQgaW5kZXhcbiAgICAgIGlmICghc2VsZWN0ZWRJbmRleCB8fCBzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgICB2YXIgZmlyc3RJbmRleCA9IGVuYWJsZWRJbmRpY2llc1swXTtcblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGN1cnJlbnRseSBhY3RpdmUgaXRlbSwgaWYgbm9uZSwgdXNlIHRoZSBmaXJzdCBpdGVtLlxuICAgICAgICAvLyBNdWx0aXBsZSBzZWxlY3RzIHJlbW92ZSBhY3RpdmUgaXRlbXMgZnJvbSB0aGUgbGlzdCxcbiAgICAgICAgLy8gdGhlaXIgaW5pdGlhbCBzZWxlY3RlZCBpbmRleCBzaG91bGQgYmUgMC5cbiAgICAgICAgbmV3U2VsZWN0ZWRJbmRleCA9IG11bHRpcGxlID8gZmlyc3RJbmRleCA6IF90aGlzLmdldE1lbnVJdGVtSW5kZXhCeVZhbHVlKHZhbHVlLCBvcHRpb25zKSB8fCBlbmFibGVkSW5kaWNpZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIC8vIG11bHRpcGxlIHNlbGVjdHMgcmVtb3ZlIG9wdGlvbnMgZnJvbSB0aGUgbWVudSBhcyB0aGV5IGFyZSBtYWRlIGFjdGl2ZVxuICAgICAgICAvLyBrZWVwIHRoZSBzZWxlY3RlZCBpbmRleCB3aXRoaW4gcmFuZ2Ugb2YgdGhlIHJlbWFpbmluZyBpdGVtc1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSBvcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBuZXdTZWxlY3RlZEluZGV4ID0gZW5hYmxlZEluZGljaWVzW2VuYWJsZWRJbmRpY2llcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gX3RoaXMuZ2V0TWVudUl0ZW1JbmRleEJ5VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIHJlZ3VsYXIgc2VsZWN0cyBjYW4gb25seSBoYXZlIG9uZSBhY3RpdmUgaXRlbVxuICAgICAgICAvLyBzZXQgdGhlIHNlbGVjdGVkIGluZGV4IHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIGl0ZW1cbiAgICAgICAgbmV3U2VsZWN0ZWRJbmRleCA9IF9pbmNsdWRlcyhlbmFibGVkSW5kaWNpZXMsIGFjdGl2ZUluZGV4KSA/IGFjdGl2ZUluZGV4IDogdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5ld1NlbGVjdGVkSW5kZXggfHwgbmV3U2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgbmV3U2VsZWN0ZWRJbmRleCA9IGVuYWJsZWRJbmRpY2llc1swXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEluZGV4OiBuZXdTZWxlY3RlZEluZGV4IH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZUxhYmVsQ2xpY2sgPSBmdW5jdGlvbiAoZSwgbGFiZWxQcm9wcykge1xuICAgICAgZGVidWcoJ2hhbmRsZUxhYmVsQ2xpY2soKScpO1xuICAgICAgLy8gcHJldmVudCBmb2N1c2luZyBzZWFyY2ggaW5wdXQgb24gY2xpY2tcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRMYWJlbDogbGFiZWxQcm9wcy52YWx1ZSB9KTtcblxuICAgICAgdmFyIG9uTGFiZWxDbGljayA9IF90aGlzLnByb3BzLm9uTGFiZWxDbGljaztcblxuICAgICAgaWYgKG9uTGFiZWxDbGljaykgb25MYWJlbENsaWNrKGUsIGxhYmVsUHJvcHMpO1xuICAgIH0sIF90aGlzLmhhbmRsZUxhYmVsUmVtb3ZlID0gZnVuY3Rpb24gKGUsIGxhYmVsUHJvcHMpIHtcbiAgICAgIGRlYnVnKCdoYW5kbGVMYWJlbFJlbW92ZSgpJyk7XG4gICAgICAvLyBwcmV2ZW50IGZvY3VzaW5nIHNlYXJjaCBpbnB1dCBvbiBjbGlja1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgICB2YXIgbmV3VmFsdWUgPSBfd2l0aG91dCh2YWx1ZSwgbGFiZWxQcm9wcy52YWx1ZSk7XG4gICAgICBkZWJ1ZygnbGFiZWwgcHJvcHM6JywgbGFiZWxQcm9wcyk7XG4gICAgICBkZWJ1ZygnY3VycmVudCB2YWx1ZTonLCB2YWx1ZSk7XG4gICAgICBkZWJ1ZygncmVtb3ZlIHZhbHVlOicsIGxhYmVsUHJvcHMudmFsdWUpO1xuICAgICAgZGVidWcoJ25ldyB2YWx1ZTonLCBuZXdWYWx1ZSk7XG5cbiAgICAgIF90aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIF90aGlzLmhhbmRsZUNoYW5nZShlLCBuZXdWYWx1ZSk7XG4gICAgfSwgX3RoaXMubW92ZVNlbGVjdGlvbkJ5ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgdmFyIHN0YXJ0SW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF90aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgIGRlYnVnKCdtb3ZlU2VsZWN0aW9uQnkoKScpO1xuICAgICAgZGVidWcoJ29mZnNldDogJyArIG9mZnNldCk7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcbiAgICAgIHZhciBsYXN0SW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDE7XG5cbiAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcFxuICAgICAgaWYgKF9ldmVyeShvcHRpb25zLCAnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAvLyBuZXh0IGlzIGFmdGVyIGxhc3QsIHdyYXAgdG8gYmVnaW5uaW5nXG4gICAgICAvLyBuZXh0IGlzIGJlZm9yZSBmaXJzdCwgd3JhcCB0byBlbmRcbiAgICAgIHZhciBuZXh0SW5kZXggPSBzdGFydEluZGV4ICsgb2Zmc2V0O1xuICAgICAgaWYgKG5leHRJbmRleCA+IGxhc3RJbmRleCkgbmV4dEluZGV4ID0gMDtlbHNlIGlmIChuZXh0SW5kZXggPCAwKSBuZXh0SW5kZXggPSBsYXN0SW5kZXg7XG5cbiAgICAgIGlmIChvcHRpb25zW25leHRJbmRleF0uZGlzYWJsZWQpIHJldHVybiBfdGhpcy5tb3ZlU2VsZWN0aW9uQnkob2Zmc2V0LCBuZXh0SW5kZXgpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSW5kZXg6IG5leHRJbmRleCB9KTtcbiAgICAgIF90aGlzLnNjcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3KCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlU2VhcmNoUmVmID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zZWFyY2hSZWYgPSBjO1xuICAgIH0sIF90aGlzLmhhbmRsZVNpemVyUmVmID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zaXplclJlZiA9IGM7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmVmID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5yZWYgPSBjO1xuICAgIH0sIF90aGlzLnNjcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ3Njcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3KCknKTtcbiAgICAgIGlmICghX3RoaXMucmVmKSByZXR1cm47XG4gICAgICB2YXIgbWVudSA9IF90aGlzLnJlZi5xdWVyeVNlbGVjdG9yKCcubWVudS52aXNpYmxlJyk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybjtcbiAgICAgIHZhciBpdGVtID0gbWVudS5xdWVyeVNlbGVjdG9yKCcuaXRlbS5zZWxlY3RlZCcpO1xuICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgICBkZWJ1ZygnbWVudTogJyArIG1lbnUpO1xuICAgICAgZGVidWcoJ2l0ZW06ICcgKyBpdGVtKTtcbiAgICAgIHZhciBpc091dE9mVXBwZXJWaWV3ID0gaXRlbS5vZmZzZXRUb3AgPCBtZW51LnNjcm9sbFRvcDtcbiAgICAgIHZhciBpc091dE9mTG93ZXJWaWV3ID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCA+IG1lbnUuc2Nyb2xsVG9wICsgbWVudS5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGlmIChpc091dE9mVXBwZXJWaWV3KSB7XG4gICAgICAgIG1lbnUuc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgICB9IGVsc2UgaWYgKGlzT3V0T2ZMb3dlclZpZXcpIHtcbiAgICAgICAgbWVudS5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcCArIGl0ZW0uY2xpZW50SGVpZ2h0IC0gbWVudS5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1Zygnb3BlbigpJyk7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczEwID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczEwLmRpc2FibGVkLFxuICAgICAgICAgIG9uT3BlbiA9IF90aGlzJHByb3BzMTAub25PcGVuLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzMTAuc2VhcmNoO1xuXG4gICAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICAgIGlmIChzZWFyY2ggJiYgX3RoaXMuc2VhcmNoUmVmKSBfdGhpcy5zZWFyY2hSZWYuZm9jdXMoKTtcbiAgICAgIGlmIChvbk9wZW4pIG9uT3BlbihlLCBfdGhpcy5wcm9wcyk7XG5cbiAgICAgIF90aGlzLnRyeVNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICAgIF90aGlzLnNjcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3KCk7XG4gICAgfSwgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2Nsb3NlKCknKTtcblxuICAgICAgdmFyIG9uQ2xvc2UgPSBfdGhpcy5wcm9wcy5vbkNsb3NlO1xuXG4gICAgICBpZiAob25DbG9zZSkgb25DbG9zZShlLCBfdGhpcy5wcm9wcyk7XG5cbiAgICAgIF90aGlzLnRyeVNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlQ2xvc2UoKScpO1xuICAgICAgdmFyIGhhc1NlYXJjaEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuc2VhcmNoUmVmO1xuICAgICAgdmFyIGhhc0Ryb3Bkb3duRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5yZWY7XG4gICAgICB2YXIgaGFzRm9jdXMgPSBoYXNTZWFyY2hGb2N1cyB8fCBoYXNEcm9wZG93bkZvY3VzO1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1NlbWFudGljLU9yZy9TZW1hbnRpYy1VSS1SZWFjdC9pc3N1ZXMvNjI3XG4gICAgICAvLyBCbHVyIHRoZSBEcm9wZG93biBvbiBjbG9zZSBzbyBpdCBpcyBibHVycmVkIGFmdGVyIHNlbGVjdGluZyBhbiBpdGVtLlxuICAgICAgLy8gVGhpcyBpcyB0byBwcmV2ZW50IGl0IGZyb20gcmUtb3BlbmluZyB3aGVuIHN3aXRjaGluZyB0YWJzIGFmdGVyIHNlbGVjdGluZyBhbiBpdGVtLlxuICAgICAgaWYgKCFoYXNTZWFyY2hGb2N1cykge1xuICAgICAgICBfdGhpcy5yZWYuYmx1cigpO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBuZWVkIHRvIGtlZXAgdGhlIHZpcnR1YWwgbW9kZWwgaW4gc3luYyB3aXRoIHRoZSBicm93c2VyIGZvY3VzIGNoYW5nZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1NlbWFudGljLU9yZy9TZW1hbnRpYy1VSS1SZWFjdC9pc3N1ZXMvNjkyXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBoYXNGb2N1cyB9KTtcbiAgICB9LCBfdGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIF90aGlzLm9wZW4oZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlYXJjaCA9IF90aGlzLnByb3BzLnNlYXJjaDtcblxuICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5nZXRNZW51T3B0aW9ucygpO1xuXG4gICAgICBpZiAoc2VhcmNoICYmIF9pc0VtcHR5KG9wdGlvbnMpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbG9zZShlKTtcbiAgICB9LCBfdGhpcy5yZW5kZXJUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMTEubXVsdGlwbGUsXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRwcm9wczExLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzMTEuc2VhcmNoLFxuICAgICAgICAgIHRleHQgPSBfdGhpcyRwcm9wczExLnRleHQ7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgc2VhcmNoUXVlcnkgPSBfdGhpcyRzdGF0ZTIuc2VhcmNoUXVlcnksXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZTIudmFsdWUsXG4gICAgICAgICAgb3BlbiA9IF90aGlzJHN0YXRlMi5vcGVuO1xuXG4gICAgICB2YXIgaGFzVmFsdWUgPSBtdWx0aXBsZSA/ICFfaXNFbXB0eSh2YWx1ZSkgOiAhX2lzTmlsKHZhbHVlKSAmJiB2YWx1ZSAhPT0gJyc7XG5cbiAgICAgIHZhciBjbGFzc2VzID0gY3gocGxhY2Vob2xkZXIgJiYgIWhhc1ZhbHVlICYmICdkZWZhdWx0JywgJ3RleHQnLCBzZWFyY2ggJiYgc2VhcmNoUXVlcnkgJiYgJ2ZpbHRlcmVkJyk7XG4gICAgICB2YXIgX3RleHQgPSBwbGFjZWhvbGRlcjtcbiAgICAgIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgICBfdGV4dCA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHRleHQpIHtcbiAgICAgICAgX3RleHQgPSB0ZXh0O1xuICAgICAgfSBlbHNlIGlmIChvcGVuICYmICFtdWx0aXBsZSkge1xuICAgICAgICBfdGV4dCA9IF9nZXQoX3RoaXMuZ2V0U2VsZWN0ZWRJdGVtKCksICd0ZXh0Jyk7XG4gICAgICB9IGVsc2UgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgIF90ZXh0ID0gX2dldChfdGhpcy5nZXRJdGVtQnlWYWx1ZSh2YWx1ZSksICd0ZXh0Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMgfSxcbiAgICAgICAgX3RleHRcbiAgICAgICk7XG4gICAgfSwgX3RoaXMucmVuZGVySGlkZGVuSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1ZygncmVuZGVySGlkZGVuSW5wdXQoKScpO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMxMi5tdWx0aXBsZSxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMxMi5uYW1lLFxuICAgICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wczEyLm9wdGlvbnMsXG4gICAgICAgICAgc2VsZWN0aW9uID0gX3RoaXMkcHJvcHMxMi5zZWxlY3Rpb247XG5cbiAgICAgIGRlYnVnKCduYW1lOiAgICAgICcgKyBuYW1lKTtcbiAgICAgIGRlYnVnKCdzZWxlY3Rpb246ICcgKyBzZWxlY3Rpb24pO1xuICAgICAgZGVidWcoJ3ZhbHVlOiAgICAgJyArIHZhbHVlKTtcbiAgICAgIGlmICghc2VsZWN0aW9uKSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gYSBkcm9wZG93biB3aXRob3V0IGFuIGFjdGl2ZSBpdGVtIHdpbGwgaGF2ZSBhbiBlbXB0eSBzdHJpbmcgdmFsdWVcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgeyB0eXBlOiAnaGlkZGVuJywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG11bHRpcGxlOiBtdWx0aXBsZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7IHZhbHVlOiAnJyB9KSxcbiAgICAgICAgX21hcChvcHRpb25zLCBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgIHsga2V5OiBvcHRpb24udmFsdWUsIHZhbHVlOiBvcHRpb24udmFsdWUgfSxcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgX3RoaXMucmVuZGVyU2VhcmNoSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMxMy5kaXNhYmxlZCxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczEzLnNlYXJjaCxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMxMy5uYW1lLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3RoaXMkcHJvcHMxMy50YWJJbmRleDtcbiAgICAgIHZhciBzZWFyY2hRdWVyeSA9IF90aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5O1xuXG5cbiAgICAgIGlmICghc2VhcmNoKSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gdGFiSW5kZXhcbiAgICAgIHZhciBjb21wdXRlZFRhYkluZGV4ID0gdm9pZCAwO1xuICAgICAgaWYgKCFfaXNOaWwodGFiSW5kZXgpKSBjb21wdXRlZFRhYkluZGV4ID0gdGFiSW5kZXg7ZWxzZSBjb21wdXRlZFRhYkluZGV4ID0gZGlzYWJsZWQgPyAtMSA6IDA7XG5cbiAgICAgIC8vIHJlc2l6ZSB0aGUgc2VhcmNoIGlucHV0LCB0ZW1wb3JhcmlseSBzaG93IHRoZSBzaXplciBzbyB3ZSBjYW4gbWVhc3VyZSBpdFxuICAgICAgdmFyIHNlYXJjaFdpZHRoID0gdm9pZCAwO1xuICAgICAgaWYgKF90aGlzLnNpemVyUmVmICYmIHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIF90aGlzLnNpemVyUmVmLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgICAgX3RoaXMuc2l6ZXJSZWYudGV4dENvbnRlbnQgPSBzZWFyY2hRdWVyeTtcbiAgICAgICAgc2VhcmNoV2lkdGggPSBNYXRoLmNlaWwoX3RoaXMuc2l6ZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgICBfdGhpcy5zaXplclJlZi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIHZhbHVlOiBzZWFyY2hRdWVyeSxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgIG9uQ2hhbmdlOiBfdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UsXG4gICAgICAgIGNsYXNzTmFtZTogJ3NlYXJjaCcsXG4gICAgICAgIG5hbWU6IFtuYW1lLCAnc2VhcmNoJ10uam9pbignLScpLFxuICAgICAgICBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgICAgICB0YWJJbmRleDogY29tcHV0ZWRUYWJJbmRleCxcbiAgICAgICAgc3R5bGU6IHsgd2lkdGg6IHNlYXJjaFdpZHRoIH0sXG4gICAgICAgIHJlZjogX3RoaXMuaGFuZGxlU2VhcmNoUmVmXG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJTZWFyY2hTaXplciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMxNC5zZWFyY2gsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczE0Lm11bHRpcGxlO1xuXG5cbiAgICAgIGlmICghKHNlYXJjaCAmJiBtdWx0aXBsZSkpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ3NpemVyJywgcmVmOiBfdGhpcy5oYW5kbGVTaXplclJlZiB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJMYWJlbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1ZygncmVuZGVyTGFiZWxzKCknKTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczE1Lm11bHRpcGxlLFxuICAgICAgICAgIHJlbmRlckxhYmVsID0gX3RoaXMkcHJvcHMxNS5yZW5kZXJMYWJlbDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZExhYmVsID0gX3RoaXMkc3RhdGUzLnNlbGVjdGVkTGFiZWwsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZTMudmFsdWU7XG5cbiAgICAgIGlmICghbXVsdGlwbGUgfHwgX2lzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzZWxlY3RlZEl0ZW1zID0gX21hcCh2YWx1ZSwgX3RoaXMuZ2V0SXRlbUJ5VmFsdWUpO1xuICAgICAgZGVidWcoJ3NlbGVjdGVkSXRlbXMnLCBzZWxlY3RlZEl0ZW1zKTtcblxuICAgICAgLy8gaWYgbm8gaXRlbSBjb3VsZCBiZSBmb3VuZCBmb3IgYSBnaXZlbiBzdGF0ZSB2YWx1ZSB0aGUgc2VsZWN0ZWQgaXRlbSB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgLy8gY29tcGFjdCB0aGUgc2VsZWN0ZWRJdGVtcyBzbyB3ZSBvbmx5IGhhdmUgYWN0dWFsIG9iamVjdHMgbGVmdFxuICAgICAgcmV0dXJuIF9tYXAoX2NvbXBhY3Qoc2VsZWN0ZWRJdGVtcyksIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAgIGFjdGl2ZTogaXRlbS52YWx1ZSA9PT0gc2VsZWN0ZWRMYWJlbCxcbiAgICAgICAgICBhczogJ2EnLFxuICAgICAgICAgIGtleTogaXRlbS52YWx1ZSxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVMYWJlbENsaWNrLFxuICAgICAgICAgIG9uUmVtb3ZlOiBfdGhpcy5oYW5kbGVMYWJlbFJlbW92ZSxcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBMYWJlbC5jcmVhdGUocmVuZGVyTGFiZWwoaXRlbSwgaW5kZXgsIGRlZmF1bHRQcm9wcyksIHsgZGVmYXVsdFByb3BzOiBkZWZhdWx0UHJvcHMgfSk7XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMTYubXVsdGlwbGUsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMxNi5zZWFyY2gsXG4gICAgICAgICAgbm9SZXN1bHRzTWVzc2FnZSA9IF90aGlzJHByb3BzMTYubm9SZXN1bHRzTWVzc2FnZTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTQgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gX3RoaXMkc3RhdGU0LnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZTQudmFsdWU7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcblxuICAgICAgaWYgKG5vUmVzdWx0c01lc3NhZ2UgIT09IG51bGwgJiYgc2VhcmNoICYmIF9pc0VtcHR5KG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWVzc2FnZScgfSxcbiAgICAgICAgICBub1Jlc3VsdHNNZXNzYWdlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9IG11bHRpcGxlID8gZnVuY3Rpb24gKG9wdFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfaW5jbHVkZXModmFsdWUsIG9wdFZhbHVlKTtcbiAgICAgIH0gOiBmdW5jdGlvbiAob3B0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdFZhbHVlID09PSB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfbWFwKG9wdGlvbnMsIGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd25JdGVtLCBfZXh0ZW5kcyh7XG4gICAgICAgICAga2V5OiBvcHQudmFsdWUgKyAnLScgKyBpLFxuICAgICAgICAgIGFjdGl2ZTogaXNBY3RpdmUob3B0LnZhbHVlKSxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkSW5kZXggPT09IGlcbiAgICAgICAgfSwgb3B0LCB7XG4gICAgICAgICAgLy8gTmVlZGVkIGZvciBoYW5kbGluZyBjbGljayBldmVudHMgb24gZGlzYWJsZWQgaXRlbXNcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIG9wdC5zdHlsZSwgeyBwb2ludGVyRXZlbnRzOiAnYWxsJyB9KVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTcgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMTcuY2hpbGRyZW4sXG4gICAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMxNy5oZWFkZXI7XG4gICAgICB2YXIgb3BlbiA9IF90aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgIHZhciBtZW51Q2xhc3NlcyA9IG9wZW4gPyAndmlzaWJsZScgOiAnJztcbiAgICAgIHZhciBhcmlhT3B0aW9ucyA9IF90aGlzLmdldERyb3Bkb3duTWVudUFyaWFPcHRpb25zKCk7XG5cbiAgICAgIC8vIHNpbmdsZSBtZW51IGNoaWxkXG4gICAgICBpZiAoIV9pc05pbChjaGlsZHJlbikpIHtcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gY3gobWVudUNsYXNzZXMsIG1lbnVDaGlsZC5wcm9wcy5jbGFzc05hbWUpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQobWVudUNoaWxkLCBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIGFyaWFPcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBEcm9wZG93bk1lbnUsXG4gICAgICAgIF9leHRlbmRzKHt9LCBhcmlhT3B0aW9ucywgeyBjbGFzc05hbWU6IG1lbnVDbGFzc2VzIH0pLFxuICAgICAgICBEcm9wZG93bkhlYWRlci5jcmVhdGUoaGVhZGVyKSxcbiAgICAgICAgX3RoaXMucmVuZGVyT3B0aW9ucygpXG4gICAgICApO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyb3Bkb3duLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIGlmIChfZ2V0MihEcm9wZG93bi5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bi5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbE1vdW50JywgdGhpcykpIF9nZXQyKERyb3Bkb3duLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsTW91bnQnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgZGVidWcoJ2NvbXBvbmVudFdpbGxNb3VudCgpJyk7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBvcGVuID0gX3N0YXRlLm9wZW4sXG4gICAgICAgICAgdmFsdWUgPSBfc3RhdGUudmFsdWU7XG5cblxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAob3BlbikgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gIV9pc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgIV9pc0VxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBfZ2V0MihEcm9wZG93bi5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bi5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsIHRoaXMpLmNhbGwodGhpcywgbmV4dFByb3BzKTtcbiAgICAgIGRlYnVnKCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCknKTtcbiAgICAgIC8vIFRPRE8gb2JqZWN0RGlmZiBzdGlsbCBydW5zIGluIHByb2QsIHN0b3AgaXRcbiAgICAgIGRlYnVnKCd0byBwcm9wczonLCBvYmplY3REaWZmKHRoaXMucHJvcHMsIG5leHRQcm9wcykpO1xuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBpbiBkZXZlbG9wbWVudCwgdmFsaWRhdGUgdmFsdWUgdHlwZSBtYXRjaGVzIGRyb3Bkb3duIHR5cGVcbiAgICAgICAgdmFyIGlzTmV4dFZhbHVlQXJyYXkgPSBBcnJheS5pc0FycmF5KG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICAgIHZhciBoYXNWYWx1ZSA9IF9oYXMobmV4dFByb3BzLCAndmFsdWUnKTtcblxuICAgICAgICBpZiAoaGFzVmFsdWUgJiYgbmV4dFByb3BzLm11bHRpcGxlICYmICFpc05leHRWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJvcGRvd24gYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IHdoZW4gYG11bHRpcGxlYCBpcyBzZXQuJyArICgnIFJlY2VpdmVkIHR5cGU6IGAnICsgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5leHRQcm9wcy52YWx1ZSkgKyAnYC4nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzVmFsdWUgJiYgIW5leHRQcm9wcy5tdWx0aXBsZSAmJiBpc05leHRWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJvcGRvd24gYHZhbHVlYCBtdXN0IG5vdCBiZSBhbiBhcnJheSB3aGVuIGBtdWx0aXBsZWAgaXMgbm90IHNldC4nICsgJyBFaXRoZXIgc2V0IGBtdWx0aXBsZT17dHJ1ZX1gIG9yIHVzZSBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG4gICAgICBpZiAoIV9pc0VxdWFsKG5leHRQcm9wcy52YWx1ZSwgdGhpcy5wcm9wcy52YWx1ZSkpIHtcbiAgICAgICAgZGVidWcoJ3ZhbHVlIGNoYW5nZWQsIHNldHRpbmcnLCBuZXh0UHJvcHMudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghX2lzRXF1YWwobmV4dFByb3BzLm9wdGlvbnMsIHRoaXMucHJvcHMub3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KHVuZGVmaW5lZCwgbmV4dFByb3BzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb21wbGV4aXR5XG4gICAgICBkZWJ1ZygnY29tcG9uZW50RGlkVXBkYXRlKCknKTtcbiAgICAgIC8vIFRPRE8gb2JqZWN0RGlmZiBzdGlsbCBydW5zIGluIHByb2QsIHN0b3AgaXRcbiAgICAgIGRlYnVnKCd0byBzdGF0ZTonLCBvYmplY3REaWZmKHByZXZTdGF0ZSwgdGhpcy5zdGF0ZSkpO1xuXG4gICAgICAvLyBEbyBub3QgYWNjZXNzIGRvY3VtZW50IHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgICAvLyBmb2N1c2VkIC8gYmx1cnJlZFxuICAgICAgaWYgKCFwcmV2U3RhdGUuZm9jdXMgJiYgdGhpcy5zdGF0ZS5mb2N1cykge1xuICAgICAgICBkZWJ1ZygnZHJvcGRvd24gZm9jdXNlZCcpO1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3VzZURvd24pIHtcbiAgICAgICAgICB2YXIgb3Blbk9uRm9jdXMgPSB0aGlzLnByb3BzLm9wZW5PbkZvY3VzO1xuXG4gICAgICAgICAgZGVidWcoJ21vdXNlIGlzIG5vdCBkb3duLCBvcGVuaW5nJyk7XG4gICAgICAgICAgaWYgKG9wZW5PbkZvY3VzKSB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5PbkFycm93KTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuT25TcGFjZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93bik7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnJlbW92ZUl0ZW1PbkJhY2tzcGFjZSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZTdGF0ZS5mb2N1cyAmJiAhdGhpcy5zdGF0ZS5mb2N1cykge1xuICAgICAgICBkZWJ1ZygnZHJvcGRvd24gYmx1cnJlZCcpO1xuICAgICAgICB2YXIgY2xvc2VPbkJsdXIgPSB0aGlzLnByb3BzLmNsb3NlT25CbHVyO1xuXG4gICAgICAgIGlmICghdGhpcy5pc01vdXNlRG93biAmJiBjbG9zZU9uQmx1cikge1xuICAgICAgICAgIGRlYnVnKCdtb3VzZSBpcyBub3QgZG93biBhbmQgY2xvc2VPbkJsdXI9dHJ1ZSwgY2xvc2luZycpO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuT25BcnJvdyk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5PblNwYWNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93bik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMucmVtb3ZlSXRlbU9uQmFja3NwYWNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gb3BlbmVkIC8gY2xvc2VkXG4gICAgICBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICBkZWJ1ZygnZHJvcGRvd24gb3BlbmVkJyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNsb3NlT25Fc2NhcGUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5yZW1vdmVJdGVtT25CYWNrc3BhY2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuT25BcnJvdyk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5PblNwYWNlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxTZWxlY3RlZEl0ZW1JbnRvVmlldygpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGRlYnVnKCdkcm9wZG93biBjbG9zZWQnKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jbG9zZU9uRXNjYXBlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93bik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZvY3VzKSB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMucmVtb3ZlSXRlbU9uQmFja3NwYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBkZWJ1ZygnY29tcG9uZW50V2lsbFVubW91bnQoKScpO1xuXG4gICAgICAvLyBEbyBub3QgYWNjZXNzIGRvY3VtZW50IHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuT25BcnJvdyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuT25TcGFjZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnJlbW92ZUl0ZW1PbkJhY2tzcGFjZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jbG9zZU9uRXNjYXBlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIERvY3VtZW50IEV2ZW50IEhhbmRsZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gb25DaGFuZ2UgbmVlZHMgdG8gcmVjZWl2ZSBhIHZhbHVlXG4gICAgLy8gY2FuJ3QgcmVseSBvbiBwcm9wcy52YWx1ZSBpZiB3ZSBhcmUgY29udHJvbGxlZFxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29tcG9uZW50IEV2ZW50IEhhbmRsZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEdldHRlcnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBUaGVyZSBhcmUgdGltZXMgd2hlbiB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgb3B0aW9ucyBiYXNlZCBvbiBhIHZhbHVlXG4gICAgLy8gdGhhdCBoYXNuJ3QgeWV0IGJlZW4gcGVyc2lzdGVkIHRvIHN0YXRlLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXREcm9wZG93bk1lbnVBcmlhT3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERyb3Bkb3duTWVudUFyaWFPcHRpb25zKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc2VhcmNoID0gX3Byb3BzLnNlYXJjaCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZTtcblxuICAgICAgdmFyIGFyaWFPcHRpb25zID0ge307XG5cbiAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgYXJpYU9wdGlvbnNbJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJ10gPSBtdWx0aXBsZTtcbiAgICAgICAgYXJpYU9wdGlvbnMucm9sZSA9ICdsaXN0Ym94JztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmlhT3B0aW9ucztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU2V0dGVyc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBSZWZzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEJlaGF2aW9yXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlbmRlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgZGVidWcoJ3JlbmRlcigpJyk7XG4gICAgICBkZWJ1ZygncHJvcHMnLCB0aGlzLnByb3BzKTtcbiAgICAgIGRlYnVnKCdzdGF0ZScsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIG9wZW4gPSB0aGlzLnN0YXRlLm9wZW47XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYmFzaWMgPSBfcHJvcHMyLmJhc2ljLFxuICAgICAgICAgIGJ1dHRvbiA9IF9wcm9wczIuYnV0dG9uLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGNvbXBhY3QgPSBfcHJvcHMyLmNvbXBhY3QsXG4gICAgICAgICAgZmx1aWQgPSBfcHJvcHMyLmZsdWlkLFxuICAgICAgICAgIGZsb2F0aW5nID0gX3Byb3BzMi5mbG9hdGluZyxcbiAgICAgICAgICBpY29uID0gX3Byb3BzMi5pY29uLFxuICAgICAgICAgIGlubGluZSA9IF9wcm9wczIuaW5saW5lLFxuICAgICAgICAgIGl0ZW0gPSBfcHJvcHMyLml0ZW0sXG4gICAgICAgICAgbGFiZWxlZCA9IF9wcm9wczIubGFiZWxlZCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wczIubXVsdGlwbGUsXG4gICAgICAgICAgcG9pbnRpbmcgPSBfcHJvcHMyLnBvaW50aW5nLFxuICAgICAgICAgIHNlYXJjaCA9IF9wcm9wczIuc2VhcmNoLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IF9wcm9wczIuc2VsZWN0aW9uLFxuICAgICAgICAgIHNpbXBsZSA9IF9wcm9wczIuc2ltcGxlLFxuICAgICAgICAgIGxvYWRpbmcgPSBfcHJvcHMyLmxvYWRpbmcsXG4gICAgICAgICAgZXJyb3IgPSBfcHJvcHMyLmVycm9yLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICBzY3JvbGxpbmcgPSBfcHJvcHMyLnNjcm9sbGluZyxcbiAgICAgICAgICB0YWJJbmRleCA9IF9wcm9wczIudGFiSW5kZXgsXG4gICAgICAgICAgdHJpZ2dlciA9IF9wcm9wczIudHJpZ2dlcjtcblxuICAgICAgLy8gQ2xhc3Nlc1xuXG4gICAgICB2YXIgY2xhc3NlcyA9IGN4KCd1aScsIHVzZUtleU9ubHkob3BlbiwgJ2FjdGl2ZSB2aXNpYmxlJyksIHVzZUtleU9ubHkoZGlzYWJsZWQsICdkaXNhYmxlZCcpLCB1c2VLZXlPbmx5KGVycm9yLCAnZXJyb3InKSwgdXNlS2V5T25seShsb2FkaW5nLCAnbG9hZGluZycpLCB1c2VLZXlPbmx5KGJhc2ljLCAnYmFzaWMnKSwgdXNlS2V5T25seShidXR0b24sICdidXR0b24nKSwgdXNlS2V5T25seShjb21wYWN0LCAnY29tcGFjdCcpLCB1c2VLZXlPbmx5KGZsdWlkLCAnZmx1aWQnKSwgdXNlS2V5T25seShmbG9hdGluZywgJ2Zsb2F0aW5nJyksIHVzZUtleU9ubHkoaW5saW5lLCAnaW5saW5lJyksXG4gICAgICAvLyBUT0RPOiBjb25zaWRlciBhdWdtZW50YXRpb24gdG8gcmVuZGVyIERyb3Bkb3ducyBhcyBCdXR0b24vTWVudSwgc29sdmVzIGljb24vbGluayBpdGVtIGlzc3Vlc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1NlbWFudGljLU9yZy9TZW1hbnRpYy1VSS1SZWFjdC9pc3N1ZXMvNDAxI2lzc3VlY29tbWVudC0yNDA0ODcyMjlcbiAgICAgIC8vIFRPRE86IHRoZSBpY29uIGNsYXNzIGlzIG9ubHkgcmVxdWlyZWQgd2hlbiBhIGRyb3Bkb3duIGlzIGEgYnV0dG9uXG4gICAgICAvLyB1c2VLZXlPbmx5KGljb24sICdpY29uJyksXG4gICAgICB1c2VLZXlPbmx5KGxhYmVsZWQsICdsYWJlbGVkJyksIHVzZUtleU9ubHkoaXRlbSwgJ2l0ZW0nKSwgdXNlS2V5T25seShtdWx0aXBsZSwgJ211bHRpcGxlJyksIHVzZUtleU9ubHkoc2VhcmNoLCAnc2VhcmNoJyksIHVzZUtleU9ubHkoc2VsZWN0aW9uLCAnc2VsZWN0aW9uJyksIHVzZUtleU9ubHkoc2ltcGxlLCAnc2ltcGxlJyksIHVzZUtleU9ubHkoc2Nyb2xsaW5nLCAnc2Nyb2xsaW5nJyksIHVzZUtleU9yVmFsdWVBbmRLZXkocG9pbnRpbmcsICdwb2ludGluZycpLCBjbGFzc05hbWUsICdkcm9wZG93bicpO1xuICAgICAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhEcm9wZG93biwgdGhpcy5wcm9wcyk7XG4gICAgICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShEcm9wZG93biwgdGhpcy5wcm9wcyk7XG4gICAgICB2YXIgYXJpYU9wdGlvbnMgPSB0aGlzLmdldERyb3Bkb3duQXJpYU9wdGlvbnMoRWxlbWVudFR5cGUsIHRoaXMucHJvcHMpO1xuXG4gICAgICB2YXIgY29tcHV0ZWRUYWJJbmRleCA9IHZvaWQgMDtcbiAgICAgIGlmICghX2lzTmlsKHRhYkluZGV4KSkge1xuICAgICAgICBjb21wdXRlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKCFzZWFyY2gpIHtcbiAgICAgICAgLy8gZG9uJ3Qgc2V0IGEgcm9vdCBub2RlIHRhYkluZGV4IGFzIHRoZSBzZWFyY2ggaW5wdXQgaGFzIGl0cyBvd24gdGFiSW5kZXhcbiAgICAgICAgY29tcHV0ZWRUYWJJbmRleCA9IGRpc2FibGVkID8gLTEgOiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRWxlbWVudFR5cGUsXG4gICAgICAgIF9leHRlbmRzKHt9LCByZXN0LCBhcmlhT3B0aW9ucywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICB0YWJJbmRleDogY29tcHV0ZWRUYWJJbmRleCxcbiAgICAgICAgICByZWY6IHRoaXMuaGFuZGxlUmVmXG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnJlbmRlckhpZGRlbklucHV0KCksXG4gICAgICAgIHRoaXMucmVuZGVyTGFiZWxzKCksXG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoKSxcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hTaXplcigpLFxuICAgICAgICB0cmlnZ2VyIHx8IHRoaXMucmVuZGVyVGV4dCgpLFxuICAgICAgICBJY29uLmNyZWF0ZShpY29uKSxcbiAgICAgICAgdGhpcy5yZW5kZXJNZW51KClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufShDb21wb25lbnQpO1xuXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFkZGl0aW9uTGFiZWw6ICdBZGQgJyxcbiAgYWRkaXRpb25Qb3NpdGlvbjogJ3RvcCcsXG4gIGljb246ICdkcm9wZG93bicsXG4gIG5vUmVzdWx0c01lc3NhZ2U6ICdObyByZXN1bHRzIGZvdW5kLicsXG4gIHJlbmRlckxhYmVsOiBmdW5jdGlvbiByZW5kZXJMYWJlbChfcmVmMikge1xuICAgIHZhciB0ZXh0ID0gX3JlZjIudGV4dDtcbiAgICByZXR1cm4gdGV4dDtcbiAgfSxcbiAgc2VsZWN0T25CbHVyOiB0cnVlLFxuICBvcGVuT25Gb2N1czogdHJ1ZSxcbiAgY2xvc2VPbkJsdXI6IHRydWVcbn07XG5Ecm9wZG93bi5hdXRvQ29udHJvbGxlZFByb3BzID0gWydvcGVuJywgJ3ZhbHVlJywgJ3NlbGVjdGVkTGFiZWwnXTtcbkRyb3Bkb3duLl9tZXRhID0ge1xuICBuYW1lOiAnRHJvcGRvd24nLFxuICB0eXBlOiBNRVRBLlRZUEVTLk1PRFVMRVxufTtcbkRyb3Bkb3duLkRpdmlkZXIgPSBEcm9wZG93bkRpdmlkZXI7XG5Ecm9wZG93bi5IZWFkZXIgPSBEcm9wZG93bkhlYWRlcjtcbkRyb3Bkb3duLkl0ZW0gPSBEcm9wZG93bkl0ZW07XG5Ecm9wZG93bi5NZW51ID0gRHJvcGRvd25NZW51O1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBEcm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBBbiBlbGVtZW50IHR5cGUgdG8gcmVuZGVyIGFzIChzdHJpbmcgb3IgZnVuY3Rpb24pLiAqL1xuICBhczogY3VzdG9tUHJvcFR5cGVzLmFzLFxuXG4gIC8qKiBMYWJlbCBwcmVmaXhlZCB0byBhbiBvcHRpb24gYWRkZWQgYnkgYSB1c2VyLiAqL1xuICBhZGRpdGlvbkxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKiBQb3NpdGlvbiBvZiB0aGUgYEFkZDogLi4uYCBvcHRpb24gaW4gdGhlIGRyb3Bkb3duIGxpc3QgKCd0b3AnIG9yICdib3R0b20nKS4gKi9cbiAgYWRkaXRpb25Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKSxcblxuICAvKipcbiAgICogQWxsb3cgdXNlciBhZGRpdGlvbnMgdG8gdGhlIGxpc3Qgb2Ygb3B0aW9ucyAoYm9vbGVhbikuXG4gICAqIFJlcXVpcmVzIHRoZSB1c2Ugb2YgYHNlbGVjdGlvbmAsIGBvcHRpb25zYCBhbmQgYHNlYXJjaGAuXG4gICAqL1xuICBhbGxvd0FkZGl0aW9uczogY3VzdG9tUHJvcFR5cGVzLmV2ZXJ5KFtjdXN0b21Qcm9wVHlwZXMuZGVtYW5kKFsnb3B0aW9ucycsICdzZWxlY3Rpb24nLCAnc2VhcmNoJ10pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKiBBIERyb3Bkb3duIGNhbiByZWR1Y2UgaXRzIGNvbXBsZXhpdHkuICovXG4gIGJhc2ljOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogRm9ybWF0IHRoZSBEcm9wZG93biB0byBhcHBlYXIgYXMgYSBidXR0b24uICovXG4gIGJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRpc2FsbG93KFsnb3B0aW9ucycsICdzZWxlY3Rpb24nXSksIGN1c3RvbVByb3BUeXBlcy5naXZlblByb3BzKHsgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCB9LCBSZWFjdC5Qcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkKV0pLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIG1lbnUgc2hvdWxkIGNsb3NlIHdoZW4gdGhlIGRyb3Bkb3duIGlzIGJsdXJyZWQuICovXG4gIGNsb3NlT25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIG1lbnUgc2hvdWxkIGNsb3NlIHdoZW4gYSB2YWx1ZSBpcyBzZWxlY3RlZCBmcm9tIHRoZSBkcm9wZG93bi5cbiAgICogQnkgZGVmYXVsdCwgbXVsdGlwbGUgc2VsZWN0aW9uIGRyb3Bkb3ducyB3aWxsIHJlbWFpbiBvcGVuIG9uIGNoYW5nZSwgd2hpbGUgc2luZ2xlXG4gICAqIHNlbGVjdGlvbiBkcm9wZG93bnMgd2lsbCBjbG9zZSBvbiBjaGFuZ2UuXG4gICAqL1xuICBjbG9zZU9uQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBjb21wYWN0IGRyb3Bkb3duIGhhcyBubyBtaW5pbXVtIHdpZHRoLiAqL1xuICBjb21wYWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogSW5pdGlhbCB2YWx1ZSBvZiBvcGVuLiAqL1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEN1cnJlbnRseSBzZWxlY3RlZCBsYWJlbCBpbiBtdWx0aS1zZWxlY3QuICovXG4gIGRlZmF1bHRTZWxlY3RlZExhYmVsOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kZW1hbmQoWydtdWx0aXBsZSddKSwgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXSksXG5cbiAgLyoqIEluaXRpYWwgdmFsdWUgb3IgdmFsdWUgYXJyYXkgaWYgbXVsdGlwbGUuICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pKV0pLFxuXG4gIC8qKiBBIGRpc2FibGVkIGRyb3Bkb3duIG1lbnUgb3IgaXRlbSBkb2VzIG5vdCBhbGxvdyB1c2VyIGludGVyYWN0aW9uLiAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFuIGVycm9yZWQgZHJvcGRvd24gY2FuIGFsZXJ0IGEgdXNlciB0byBhIHByb2JsZW0uICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkcm9wZG93biBtZW51IGNhbiBjb250YWluIGZsb2F0ZWQgY29udGVudC4gKi9cbiAgZmxvYXRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiB0YWtlIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBwYXJlbnQgKi9cbiAgZmx1aWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIGRyb3Bkb3duIG1lbnUgY2FuIGNvbnRhaW4gYSBoZWFkZXIuICovXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgSWNvbi4gKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5vYmplY3RdKSxcblxuICAvKiogQSBkcm9wZG93biBjYW4gYmUgZm9ybWF0dGVkIHRvIGFwcGVhciBpbmxpbmUgaW4gb3RoZXIgY29udGVudC4gKi9cbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkcm9wZG93biBjYW4gYmUgZm9ybWF0dGVkIGFzIGEgTWVudSBpdGVtLiAqL1xuICBpdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkcm9wZG93biBjYW4gYmUgbGFiZWxlZC4gKi9cbiAgbGFiZWxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIHNob3cgdGhhdCBpdCBpcyBjdXJyZW50bHkgbG9hZGluZyBkYXRhLiAqL1xuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBzZWxlY3Rpb24gZHJvcGRvd24gY2FuIGFsbG93IG11bHRpcGxlIHNlbGVjdGlvbnMuICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogTmFtZSBvZiB0aGUgaGlkZGVuIGlucHV0IHdoaWNoIGhvbGRzIHRoZSB2YWx1ZS4gKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHMuICovXG4gIG5vUmVzdWx0c01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgdXNlciBhZGRzIGEgbmV3IGl0ZW0uIFVzZSB0aGlzIHRvIHVwZGF0ZSB0aGUgb3B0aW9ucyBsaXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzIGFuZCB0aGUgbmV3IGl0ZW0ncyB2YWx1ZS5cbiAgICovXG4gIG9uQWRkSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBibHVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgYXR0ZW1wdHMgdG8gY2hhbmdlIHRoZSB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcyBhbmQgcHJvcG9zZWQgdmFsdWUuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBjbGljay5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGNsb3NlIGV2ZW50IGhhcHBlbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbXVsdGktc2VsZWN0IGxhYmVsIGlzIGNsaWNrZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgbGFiZWwgcHJvcHMuXG4gICAqL1xuICBvbkxhYmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gbW91c2Vkb3duLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBvcGVuIGV2ZW50IGhhcHBlbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gc2VhcmNoIGlucHV0IGNoYW5nZS5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBDdXJyZW50IHZhbHVlIG9mIHNlYXJjaCBpbnB1dC5cbiAgICovXG4gIG9uU2VhcmNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIGRyb3Bkb3duIG1lbnUgaXMgZGlzcGxheWVkLiAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIG1lbnUgc2hvdWxkIG9wZW4gd2hlbiB0aGUgZHJvcGRvd24gaXMgZm9jdXNlZC4gKi9cbiAgb3Blbk9uRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBcnJheSBvZiBEcm9wZG93bi5JdGVtIHByb3BzIGUuZy4gYHsgdGV4dDogJycsIHZhbHVlOiAnJyB9YCAqL1xuICBvcHRpb25zOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kaXNhbGxvdyhbJ2NoaWxkcmVuJ10pLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoRHJvcGRvd25JdGVtLnByb3BUeXBlcykpXSksXG5cbiAgLyoqIFBsYWNlaG9sZGVyIHRleHQuICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBiZSBmb3JtYXR0ZWQgc28gdGhhdCBpdHMgbWVudSBpcyBwb2ludGluZy4gKi9cbiAgcG9pbnRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICd0b3AgbGVmdCcsICd0b3AgcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbSBsZWZ0JywgJ2JvdHRvbSByaWdodCddKV0pLFxuXG4gIC8qKlxuICAgKiBNYXBwZWQgb3ZlciB0aGUgYWN0aXZlIGl0ZW1zIGFuZCByZXR1cm5zIHNob3J0aGFuZCBmb3IgdGhlIGFjdGl2ZSBpdGVtIExhYmVscy5cbiAgICogT25seSBhcHBsaWVzIHRvIGBtdWx0aXBsZWAgRHJvcGRvd25zLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSAtIEEgY3VycmVudGx5IGFjdGl2ZSBkcm9wZG93biBpdGVtLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgY3VycmVudCBpbmRleC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRMYWJlbFByb3BzIC0gVGhlIGRlZmF1bHQgcHJvcHMgZm9yIGFuIGFjdGl2ZSBpdGVtIExhYmVsLlxuICAgKiBAcmV0dXJucyB7Kn0gU2hvcnRoYW5kIGZvciBhIExhYmVsLlxuICAgKi9cbiAgcmVuZGVyTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBoYXZlIGl0cyBtZW51IHNjcm9sbC4gKi9cbiAgc2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBzZWxlY3Rpb24gZHJvcGRvd24gY2FuIGFsbG93IGEgdXNlciB0byBzZWFyY2ggdGhyb3VnaCBhIGxhcmdlIGxpc3Qgb2YgY2hvaWNlcy5cbiAgICogUGFzcyBhIGZ1bmN0aW9uIGhlcmUgdG8gcmVwbGFjZSB0aGUgZGVmYXVsdCBzZWFyY2guXG4gICAqL1xuICBzZWFyY2g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8vIFRPRE8gJ3NlYXJjaEluTWVudScgb3IgJ3NlYXJjaD0naW4gbWVudScgb3IgPz8/ICBIb3cgdG8gaGFuZGxlIHRoaXMgbWFya3VwIGFuZCBmdW5jdGlvbmFsaXR5P1xuXG4gIC8qKiBEZWZpbmUgd2hldGhlciB0aGUgaGlnaGxpZ2h0ZWQgaXRlbSBzaG91bGQgYmUgc2VsZWN0ZWQgb24gYmx1ci4gKi9cbiAgc2VsZWN0T25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQ3VycmVudGx5IHNlbGVjdGVkIGxhYmVsIGluIG11bHRpLXNlbGVjdC4gKi9cbiAgc2VsZWN0ZWRMYWJlbDogY3VzdG9tUHJvcFR5cGVzLmV2ZXJ5KFtjdXN0b21Qcm9wVHlwZXMuZGVtYW5kKFsnbXVsdGlwbGUnXSksIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKV0pLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBiZSB1c2VkIHRvIHNlbGVjdCBiZXR3ZWVuIGNob2ljZXMgaW4gYSBmb3JtLiAqL1xuICBzZWxlY3Rpb246IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRpc2FsbG93KFsnY2hpbGRyZW4nXSksIGN1c3RvbVByb3BUeXBlcy5kZW1hbmQoWydvcHRpb25zJ10pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKiBBIHNpbXBsZSBkcm9wZG93biBjYW4gb3BlbiB3aXRob3V0IEphdmFzY3JpcHQuICovXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIHJlY2VpdmUgZm9jdXMuICovXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqIFRoZSB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgZHJvcGRvd24sIHVzdWFsbHkgZm9yIHRoZSBhY3RpdmUgaXRlbS4gKi9cbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQ3VzdG9tIGVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgbWVudSB0byBiZWNvbWUgdmlzaWJsZS4gVGFrZXMgcGxhY2Ugb2YgJ3RleHQnLiAqL1xuICB0cmlnZ2VyOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kaXNhbGxvdyhbJ3NlbGVjdGlvbicsICd0ZXh0J10pLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9yIHZhbHVlIGFycmF5IGlmIG11bHRpcGxlLiBDcmVhdGVzIGEgY29udHJvbGxlZCBjb21wb25lbnQuICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkpXSlcbn0gOiB2b2lkIDA7XG5Ecm9wZG93bi5oYW5kbGVkUHJvcHMgPSBbJ2FkZGl0aW9uTGFiZWwnLCAnYWRkaXRpb25Qb3NpdGlvbicsICdhbGxvd0FkZGl0aW9ucycsICdhcycsICdiYXNpYycsICdidXR0b24nLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Nsb3NlT25CbHVyJywgJ2Nsb3NlT25DaGFuZ2UnLCAnY29tcGFjdCcsICdkZWZhdWx0T3BlbicsICdkZWZhdWx0U2VsZWN0ZWRMYWJlbCcsICdkZWZhdWx0VmFsdWUnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZmxvYXRpbmcnLCAnZmx1aWQnLCAnaGVhZGVyJywgJ2ljb24nLCAnaW5saW5lJywgJ2l0ZW0nLCAnbGFiZWxlZCcsICdsb2FkaW5nJywgJ211bHRpcGxlJywgJ25hbWUnLCAnbm9SZXN1bHRzTWVzc2FnZScsICdvbkFkZEl0ZW0nLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uQ2xpY2snLCAnb25DbG9zZScsICdvbkZvY3VzJywgJ29uTGFiZWxDbGljaycsICdvbk1vdXNlRG93bicsICdvbk9wZW4nLCAnb25TZWFyY2hDaGFuZ2UnLCAnb3BlbicsICdvcGVuT25Gb2N1cycsICdvcHRpb25zJywgJ3BsYWNlaG9sZGVyJywgJ3BvaW50aW5nJywgJ3JlbmRlckxhYmVsJywgJ3Njcm9sbGluZycsICdzZWFyY2gnLCAnc2VsZWN0T25CbHVyJywgJ3NlbGVjdGVkTGFiZWwnLCAnc2VsZWN0aW9uJywgJ3NpbXBsZScsICd0YWJJbmRleCcsICd0ZXh0JywgJ3RyaWdnZXInLCAndmFsdWUnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9tb2R1bGVzL0Ryb3Bkb3duL0Ryb3Bkb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0MiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0JztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgX3BhcnRpYWxSaWdodCBmcm9tICdsb2Rhc2gvcGFydGlhbFJpZ2h0JztcbmltcG9ydCBfaW5SYW5nZSBmcm9tICdsb2Rhc2gvaW5SYW5nZSc7XG5pbXBvcnQgX21hcCBmcm9tICdsb2Rhc2gvbWFwJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IF9yZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgX2lzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuaW1wb3J0IF93aXRob3V0IGZyb20gJ2xvZGFzaC93aXRob3V0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEF1dG9Db250cm9sbGVkQ29tcG9uZW50IGFzIENvbXBvbmVudCwgY3VzdG9tUHJvcFR5cGVzLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMsIGh0bWxJbnB1dEF0dHJzLCBpc0Jyb3dzZXIsIGtleWJvYXJkS2V5LCBtYWtlRGVidWdnZXIsIE1FVEEsIG9iamVjdERpZmYsIHBhcnRpdGlvbkhUTUxJbnB1dFByb3BzLCBTVUksIHVzZUtleU9ubHksIHVzZVZhbHVlQW5kS2V5IH0gZnJvbSAnLi4vLi4vbGliJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9lbGVtZW50cy9JbnB1dCc7XG5pbXBvcnQgU2VhcmNoQ2F0ZWdvcnkgZnJvbSAnLi9TZWFyY2hDYXRlZ29yeSc7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vU2VhcmNoUmVzdWx0JztcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJy4vU2VhcmNoUmVzdWx0cyc7XG5cbnZhciBkZWJ1ZyA9IG1ha2VEZWJ1Z2dlcignc2VhcmNoJyk7XG5cbi8qKlxuICogQSBzZWFyY2ggbW9kdWxlIGFsbG93cyBhIHVzZXIgdG8gcXVlcnkgZm9yIHJlc3VsdHMgZnJvbSBhIHNlbGVjdGlvbiBvZiBkYXRhXG4gKi9cblxudmFyIFNlYXJjaCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWFyY2gsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VhcmNoKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTZWFyY2guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWFyY2gpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QgPSBmdW5jdGlvbiAoZSwgcmVzdWx0KSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlUmVzdWx0U2VsZWN0KCknKTtcbiAgICAgIGRlYnVnKHJlc3VsdCk7XG4gICAgICB2YXIgb25SZXN1bHRTZWxlY3QgPSBfdGhpcy5wcm9wcy5vblJlc3VsdFNlbGVjdDtcblxuICAgICAgaWYgKG9uUmVzdWx0U2VsZWN0KSBvblJlc3VsdFNlbGVjdChlLCByZXN1bHQpO1xuICAgIH0sIF90aGlzLmNsb3NlT25Fc2NhcGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGtleWJvYXJkS2V5LmdldENvZGUoZSkgIT09IGtleWJvYXJkS2V5LkVzY2FwZSkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCdtb3ZlU2VsZWN0aW9uT25LZXlEb3duKCknKTtcbiAgICAgIGRlYnVnKGtleWJvYXJkS2V5LmdldE5hbWUoZSkpO1xuICAgICAgc3dpdGNoIChrZXlib2FyZEtleS5nZXRDb2RlKGUpKSB7XG4gICAgICAgIGNhc2Uga2V5Ym9hcmRLZXkuQXJyb3dEb3duOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5tb3ZlU2VsZWN0aW9uQnkoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Ym9hcmRLZXkuQXJyb3dVcDpcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3RoaXMubW92ZVNlbGVjdGlvbkJ5KC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5zZWxlY3RJdGVtT25FbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1Zygnc2VsZWN0SXRlbU9uRW50ZXIoKScpO1xuICAgICAgZGVidWcoa2V5Ym9hcmRLZXkuZ2V0TmFtZShlKSk7XG4gICAgICBpZiAoa2V5Ym9hcmRLZXkuZ2V0Q29kZShlKSAhPT0ga2V5Ym9hcmRLZXkuRW50ZXIpIHJldHVybjtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLmdldFNlbGVjdGVkUmVzdWx0KCk7XG5cbiAgICAgIC8vIHByZXZlbnQgc2VsZWN0aW5nIG51bGwgaWYgdGhlcmUgd2FzIG5vIHNlbGVjdGVkIGl0ZW0gdmFsdWVcbiAgICAgIGlmICghcmVzdWx0KSByZXR1cm47XG5cbiAgICAgIC8vIG5vdGlmeSB0aGUgb25SZXN1bHRTZWxlY3QgcHJvcCB0aGF0IHRoZSB1c2VyIGlzIHRyeWluZyB0byBjaGFuZ2UgdmFsdWVcbiAgICAgIF90aGlzLnNldFZhbHVlKHJlc3VsdC50aXRsZSk7XG4gICAgICBfdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QoZSwgcmVzdWx0KTtcbiAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgfSwgX3RoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2Nsb3NlT25Eb2N1bWVudENsaWNrKCknKTtcbiAgICAgIGRlYnVnKGUpO1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2hhbmRsZU1vdXNlRG93bigpJyk7XG4gICAgICB2YXIgb25Nb3VzZURvd24gPSBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bjtcblxuICAgICAgaWYgKG9uTW91c2VEb3duKSBvbk1vdXNlRG93bihlLCBfdGhpcy5wcm9wcyk7XG4gICAgICBfdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgICAvLyBEbyBub3QgYWNjZXNzIGRvY3VtZW50IHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLmhhbmRsZURvY3VtZW50TW91c2VVcCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlRG9jdW1lbnRNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ2hhbmRsZURvY3VtZW50TW91c2VVcCgpJyk7XG4gICAgICBfdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgLy8gRG8gbm90IGFjY2VzcyBkb2N1bWVudCB3aGVuIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuICAgICAgaWYgKCFpc0Jyb3dzZXIpIHJldHVybjtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5oYW5kbGVEb2N1bWVudE1vdXNlVXApO1xuICAgIH0sIF90aGlzLmhhbmRsZUlucHV0Q2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2hhbmRsZUlucHV0Q2xpY2soKScsIGUpO1xuXG4gICAgICAvLyBwcmV2ZW50IGNsb3NlT25Eb2N1bWVudENsaWNrKClcbiAgICAgIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIF90aGlzLnRyeU9wZW4oKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoZSwgX3JlZjIpIHtcbiAgICAgIHZhciBpZCA9IF9yZWYyLmlkO1xuXG4gICAgICBkZWJ1ZygnaGFuZGxlSXRlbUNsaWNrKCknKTtcbiAgICAgIGRlYnVnKGlkKTtcbiAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5nZXRTZWxlY3RlZFJlc3VsdChpZCk7XG5cbiAgICAgIC8vIHByZXZlbnQgY2xvc2VPbkRvY3VtZW50Q2xpY2soKVxuICAgICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgLy8gbm90aWZ5IHRoZSBvblJlc3VsdFNlbGVjdCBwcm9wIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIGNoYW5nZSB2YWx1ZVxuICAgICAgX3RoaXMuc2V0VmFsdWUocmVzdWx0LnRpdGxlKTtcbiAgICAgIF90aGlzLmhhbmRsZVJlc3VsdFNlbGVjdChlLCByZXN1bHQpO1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlRm9jdXMoKScpO1xuICAgICAgdmFyIG9uRm9jdXMgPSBfdGhpcy5wcm9wcy5vbkZvY3VzO1xuXG4gICAgICBpZiAob25Gb2N1cykgb25Gb2N1cyhlLCBfdGhpcy5wcm9wcyk7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ2hhbmRsZUJsdXIoKScpO1xuICAgICAgdmFyIG9uQmx1ciA9IF90aGlzLnByb3BzLm9uQmx1cjtcblxuICAgICAgaWYgKG9uQmx1cikgb25CbHVyKGUsIF90aGlzLnByb3BzKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlU2VhcmNoQ2hhbmdlKCknKTtcbiAgICAgIGRlYnVnKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpbmcgdG8gdGhpcy5wcm9wcy5vbkNoYW5nZSgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25TZWFyY2hDaGFuZ2UgPSBfdGhpcyRwcm9wcy5vblNlYXJjaENoYW5nZSxcbiAgICAgICAgICBtaW5DaGFyYWN0ZXJzID0gX3RoaXMkcHJvcHMubWluQ2hhcmFjdGVycztcbiAgICAgIHZhciBvcGVuID0gX3RoaXMuc3RhdGUub3BlbjtcblxuICAgICAgdmFyIG5ld1F1ZXJ5ID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgIGlmIChvblNlYXJjaENoYW5nZSkgb25TZWFyY2hDaGFuZ2UoZSwgbmV3UXVlcnkpO1xuXG4gICAgICAvLyBvcGVuIHNlYXJjaCBkcm9wZG93biBvbiBzZWFyY2ggcXVlcnlcbiAgICAgIGlmIChuZXdRdWVyeS5sZW5ndGggPCBtaW5DaGFyYWN0ZXJzKSB7XG4gICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICB9IGVsc2UgaWYgKCFvcGVuKSB7XG4gICAgICAgIF90aGlzLnRyeU9wZW4obmV3UXVlcnkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRWYWx1ZShuZXdRdWVyeSk7XG4gICAgfSwgX3RoaXMuZ2V0RmxhdHRlbmVkUmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjYXRlZ29yeSA9IF90aGlzJHByb3BzMi5jYXRlZ29yeSxcbiAgICAgICAgICByZXN1bHRzID0gX3RoaXMkcHJvcHMyLnJlc3VsdHM7XG5cblxuICAgICAgcmV0dXJuICFjYXRlZ29yeSA/IHJlc3VsdHMgOiBfcmVkdWNlKHJlc3VsdHMsIGZ1bmN0aW9uIChtZW1vLCBjYXRlZ29yeURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lbW8uY29uY2F0KGNhdGVnb3J5RGF0YS5yZXN1bHRzKTtcbiAgICAgIH0sIFtdKTtcbiAgICB9LCBfdGhpcy5nZXRTZWxlY3RlZFJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleDtcblxuICAgICAgdmFyIHJlc3VsdHMgPSBfdGhpcy5nZXRGbGF0dGVuZWRSZXN1bHRzKCk7XG4gICAgICByZXR1cm4gX2dldChyZXN1bHRzLCBpbmRleCk7XG4gICAgfSwgX3RoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGRlYnVnKCdzZXRWYWx1ZSgpJyk7XG4gICAgICBkZWJ1ZygndmFsdWUnLCB2YWx1ZSk7XG5cbiAgICAgIHZhciBzZWxlY3RGaXJzdFJlc3VsdCA9IF90aGlzLnByb3BzLnNlbGVjdEZpcnN0UmVzdWx0O1xuXG5cbiAgICAgIF90aGlzLnRyeVNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0sIHsgc2VsZWN0ZWRJbmRleDogc2VsZWN0Rmlyc3RSZXN1bHQgPyAwIDogLTEgfSk7XG4gICAgfSwgX3RoaXMubW92ZVNlbGVjdGlvbkJ5ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgZGVidWcoJ21vdmVTZWxlY3Rpb25CeSgpJyk7XG4gICAgICBkZWJ1Zygnb2Zmc2V0OiAnICsgb2Zmc2V0KTtcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleDtcblxuXG4gICAgICB2YXIgcmVzdWx0cyA9IF90aGlzLmdldEZsYXR0ZW5lZFJlc3VsdHMoKTtcbiAgICAgIHZhciBsYXN0SW5kZXggPSByZXN1bHRzLmxlbmd0aCAtIDE7XG5cbiAgICAgIC8vIG5leHQgaXMgYWZ0ZXIgbGFzdCwgd3JhcCB0byBiZWdpbm5pbmdcbiAgICAgIC8vIG5leHQgaXMgYmVmb3JlIGZpcnN0LCB3cmFwIHRvIGVuZFxuICAgICAgdmFyIG5leHRJbmRleCA9IHNlbGVjdGVkSW5kZXggKyBvZmZzZXQ7XG4gICAgICBpZiAobmV4dEluZGV4ID4gbGFzdEluZGV4KSBuZXh0SW5kZXggPSAwO2Vsc2UgaWYgKG5leHRJbmRleCA8IDApIG5leHRJbmRleCA9IGxhc3RJbmRleDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEluZGV4OiBuZXh0SW5kZXggfSk7XG4gICAgICBfdGhpcy5zY3JvbGxTZWxlY3RlZEl0ZW1JbnRvVmlldygpO1xuICAgIH0sIF90aGlzLnNjcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ3Njcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3KCknKTtcbiAgICAgIC8vIERvIG5vdCBhY2Nlc3MgZG9jdW1lbnQgd2hlbiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICAgIGlmICghaXNCcm93c2VyKSByZXR1cm47XG4gICAgICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aS5zZWFyY2guYWN0aXZlLnZpc2libGUgLnJlc3VsdHMudmlzaWJsZScpO1xuICAgICAgdmFyIGl0ZW0gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQuYWN0aXZlJyk7XG4gICAgICBkZWJ1ZygnbWVudSAocmVzdWx0cyk6ICcgKyBtZW51KTtcbiAgICAgIGRlYnVnKCdpdGVtIChyZXN1bHQpOiAnICsgaXRlbSk7XG4gICAgICB2YXIgaXNPdXRPZlVwcGVyVmlldyA9IGl0ZW0ub2Zmc2V0VG9wIDwgbWVudS5zY3JvbGxUb3A7XG4gICAgICB2YXIgaXNPdXRPZkxvd2VyVmlldyA9IGl0ZW0ub2Zmc2V0VG9wICsgaXRlbS5jbGllbnRIZWlnaHQgPiBtZW51LnNjcm9sbFRvcCArIG1lbnUuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBpZiAoaXNPdXRPZlVwcGVyVmlldykge1xuICAgICAgICBtZW51LnNjcm9sbFRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgICAgfSBlbHNlIGlmIChpc091dE9mTG93ZXJWaWV3KSB7XG4gICAgICAgIG1lbnUuc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCAtIG1lbnUuY2xpZW50SGVpZ2h0O1xuICAgICAgfVxuICAgIH0sIF90aGlzLnRyeU9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY3VycmVudFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfdGhpcy5zdGF0ZS52YWx1ZTtcblxuICAgICAgZGVidWcoJ29wZW4oKScpO1xuXG4gICAgICB2YXIgbWluQ2hhcmFjdGVycyA9IF90aGlzLnByb3BzLm1pbkNoYXJhY3RlcnM7XG5cbiAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoIDwgbWluQ2hhcmFjdGVycykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vcGVuKCk7XG4gICAgfSwgX3RoaXMub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnKCdvcGVuKCknKTtcbiAgICAgIF90aGlzLnRyeVNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICB9LCBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnKCdjbG9zZSgpJyk7XG4gICAgICBfdGhpcy50cnlTZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIH0sIF90aGlzLnJlbmRlclNlYXJjaElucHV0ID0gZnVuY3Rpb24gKHJlc3QpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpY29uID0gX3RoaXMkcHJvcHMzLmljb24sXG4gICAgICAgICAgaW5wdXQgPSBfdGhpcyRwcm9wczMuaW5wdXQ7XG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcblxuXG4gICAgICByZXR1cm4gSW5wdXQuY3JlYXRlKGlucHV0LCB7IGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGlucHV0OiB7IGNsYXNzTmFtZTogJ3Byb21wdCcsIHRhYkluZGV4OiAnMCcsIGF1dG9Db21wbGV0ZTogJ29mZicgfSxcbiAgICAgICAgICBvbkJsdXI6IF90aGlzLmhhbmRsZUJsdXIsXG4gICAgICAgICAgb25DaGFuZ2U6IF90aGlzLmhhbmRsZVNlYXJjaENoYW5nZSxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVJbnB1dENsaWNrLFxuICAgICAgICAgIG9uRm9jdXM6IF90aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KSB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJOb1Jlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbm9SZXN1bHRzRGVzY3JpcHRpb24gPSBfdGhpcyRwcm9wczQubm9SZXN1bHRzRGVzY3JpcHRpb24sXG4gICAgICAgICAgbm9SZXN1bHRzTWVzc2FnZSA9IF90aGlzJHByb3BzNC5ub1Jlc3VsdHNNZXNzYWdlO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdtZXNzYWdlIGVtcHR5JyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaGVhZGVyJyB9LFxuICAgICAgICAgIG5vUmVzdWx0c01lc3NhZ2VcbiAgICAgICAgKSxcbiAgICAgICAgbm9SZXN1bHRzRGVzY3JpcHRpb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Rlc2NyaXB0aW9uJyB9LFxuICAgICAgICAgIG5vUmVzdWx0c0Rlc2NyaXB0aW9uXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSwgX3RoaXMucmVuZGVyUmVzdWx0ID0gZnVuY3Rpb24gKF9yZWYzLCBpbmRleCwgX2FycmF5KSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG4gICAgICB2YXIgY2hpbGRLZXkgPSBfcmVmMy5jaGlsZEtleSxcbiAgICAgICAgICByZXN1bHQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjMsIFsnY2hpbGRLZXknXSk7XG5cbiAgICAgIHZhciByZXN1bHRSZW5kZXJlciA9IF90aGlzLnByb3BzLnJlc3VsdFJlbmRlcmVyO1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4O1xuXG4gICAgICB2YXIgb2Zmc2V0SW5kZXggPSBpbmRleCArIG9mZnNldDtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VhcmNoUmVzdWx0LCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogY2hpbGRLZXkgfHwgcmVzdWx0LnRpdGxlLFxuICAgICAgICBhY3RpdmU6IHNlbGVjdGVkSW5kZXggPT09IG9mZnNldEluZGV4LFxuICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXG4gICAgICAgIHJlbmRlcmVyOiByZXN1bHRSZW5kZXJlclxuICAgICAgfSwgcmVzdWx0LCB7XG4gICAgICAgIGlkOiBvZmZzZXRJbmRleCAvLyBVc2VkIHRvIGxvb2t1cCB0aGUgcmVzdWx0IG9uIGl0ZW0gY2xpY2tcbiAgICAgIH0pKTtcbiAgICB9LCBfdGhpcy5yZW5kZXJSZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdHMgPSBfdGhpcy5wcm9wcy5yZXN1bHRzO1xuXG5cbiAgICAgIHJldHVybiBfbWFwKHJlc3VsdHMsIF90aGlzLnJlbmRlclJlc3VsdCk7XG4gICAgfSwgX3RoaXMucmVuZGVyQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjYXRlZ29yeVJlbmRlcmVyID0gX3RoaXMkcHJvcHM1LmNhdGVnb3J5UmVuZGVyZXIsXG4gICAgICAgICAgY2F0ZWdvcmllcyA9IF90aGlzJHByb3BzNS5yZXN1bHRzO1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4O1xuXG5cbiAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgIHJldHVybiBfbWFwKGNhdGVnb3JpZXMsIGZ1bmN0aW9uIChfcmVmNCwgbmFtZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNoaWxkS2V5ID0gX3JlZjQuY2hpbGRLZXksXG4gICAgICAgICAgICBjYXRlZ29yeSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNCwgWydjaGlsZEtleSddKTtcblxuICAgICAgICB2YXIgY2F0ZWdvcnlQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICBrZXk6IGNoaWxkS2V5IHx8IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgYWN0aXZlOiBfaW5SYW5nZShzZWxlY3RlZEluZGV4LCBjb3VudCwgY291bnQgKyBjYXRlZ29yeS5yZXN1bHRzLmxlbmd0aCksXG4gICAgICAgICAgcmVuZGVyZXI6IGNhdGVnb3J5UmVuZGVyZXJcbiAgICAgICAgfSwgY2F0ZWdvcnkpO1xuICAgICAgICB2YXIgcmVuZGVyRm4gPSBfcGFydGlhbFJpZ2h0KF90aGlzLnJlbmRlclJlc3VsdCwgY291bnQpO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyBjYXRlZ29yeS5yZXN1bHRzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBTZWFyY2hDYXRlZ29yeSxcbiAgICAgICAgICBjYXRlZ29yeVByb3BzLFxuICAgICAgICAgIGNhdGVnb3J5LnJlc3VsdHMubWFwKHJlbmRlckZuKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyTWVudUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2F0ZWdvcnkgPSBfdGhpcyRwcm9wczYuY2F0ZWdvcnksXG4gICAgICAgICAgc2hvd05vUmVzdWx0cyA9IF90aGlzJHByb3BzNi5zaG93Tm9SZXN1bHRzLFxuICAgICAgICAgIHJlc3VsdHMgPSBfdGhpcyRwcm9wczYucmVzdWx0cztcblxuXG4gICAgICBpZiAoX2lzRW1wdHkocmVzdWx0cykpIHtcbiAgICAgICAgcmV0dXJuIHNob3dOb1Jlc3VsdHMgPyBfdGhpcy5yZW5kZXJOb1Jlc3VsdHMoKSA6IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXRlZ29yeSA/IF90aGlzLnJlbmRlckNhdGVnb3JpZXMoKSA6IF90aGlzLnJlbmRlclJlc3VsdHMoKTtcbiAgICB9LCBfdGhpcy5yZW5kZXJSZXN1bHRzTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvcGVuID0gX3RoaXMuc3RhdGUub3BlbjtcblxuICAgICAgdmFyIHJlc3VsdHNDbGFzc2VzID0gb3BlbiA/ICd2aXNpYmxlJyA6ICcnO1xuICAgICAgdmFyIG1lbnVDb250ZW50ID0gX3RoaXMucmVuZGVyTWVudUNvbnRlbnQoKTtcblxuICAgICAgaWYgKCFtZW51Q29udGVudCkgcmV0dXJuO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgU2VhcmNoUmVzdWx0cyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHJlc3VsdHNDbGFzc2VzIH0sXG4gICAgICAgIG1lbnVDb250ZW50XG4gICAgICApO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNlYXJjaCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAoX2dldDIoU2VhcmNoLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlYXJjaC5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbE1vdW50JywgdGhpcykpIF9nZXQyKFNlYXJjaC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWFyY2gucHJvdG90eXBlKSwgJ2NvbXBvbmVudFdpbGxNb3VudCcsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICBkZWJ1ZygnY29tcG9uZW50V2lsbE1vdW50KCknKTtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIG9wZW4gPSBfc3RhdGUub3BlbixcbiAgICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZTtcblxuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIGlmIChvcGVuKSB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgIHJldHVybiAhX2lzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhX2lzRXF1YWwobmV4dFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIF9nZXQyKFNlYXJjaC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWFyY2gucHJvdG90eXBlKSwgJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLCB0aGlzKS5jYWxsKHRoaXMsIG5leHRQcm9wcyk7XG4gICAgICBkZWJ1ZygnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpJyk7XG4gICAgICAvLyBUT0RPIG9iamVjdERpZmYgc3RpbGwgcnVucyBpbiBwcm9kLCBzdG9wIGl0XG4gICAgICBkZWJ1ZygnY2hhbmdlZCBwcm9wczonLCBvYmplY3REaWZmKG5leHRQcm9wcywgdGhpcy5wcm9wcykpO1xuXG4gICAgICBpZiAoIV9pc0VxdWFsKG5leHRQcm9wcy52YWx1ZSwgdGhpcy5wcm9wcy52YWx1ZSkpIHtcbiAgICAgICAgZGVidWcoJ3ZhbHVlIGNoYW5nZWQsIHNldHRpbmcnLCBuZXh0UHJvcHMudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbXBsZXhpdHlcbiAgICAgIGRlYnVnKCdjb21wb25lbnREaWRVcGRhdGUoKScpO1xuICAgICAgLy8gVE9ETyBvYmplY3REaWZmIHN0aWxsIHJ1bnMgaW4gcHJvZCwgc3RvcCBpdFxuICAgICAgZGVidWcoJ3RvIHN0YXRlOicsIG9iamVjdERpZmYocHJldlN0YXRlLCB0aGlzLnN0YXRlKSk7XG5cbiAgICAgIC8vIERvIG5vdCBhY2Nlc3MgZG9jdW1lbnQgd2hlbiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICAgIGlmICghaXNCcm93c2VyKSByZXR1cm47XG5cbiAgICAgIC8vIGZvY3VzZWQgLyBibHVycmVkXG4gICAgICBpZiAoIXByZXZTdGF0ZS5mb2N1cyAmJiB0aGlzLnN0YXRlLmZvY3VzKSB7XG4gICAgICAgIGRlYnVnKCdzZWFyY2ggZm9jdXNlZCcpO1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3VzZURvd24pIHtcbiAgICAgICAgICBkZWJ1ZygnbW91c2UgaXMgbm90IGRvd24sIG9wZW5pbmcnKTtcbiAgICAgICAgICB0aGlzLnRyeU9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93bik7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHByZXZTdGF0ZS5mb2N1cyAmJiAhdGhpcy5zdGF0ZS5mb2N1cykge1xuICAgICAgICBkZWJ1Zygnc2VhcmNoIGJsdXJyZWQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICAgICAgZGVidWcoJ21vdXNlIGlzIG5vdCBkb3duLCBjbG9zaW5nJyk7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24pO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zZWxlY3RJdGVtT25FbnRlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIG9wZW5lZCAvIGNsb3NlZFxuICAgICAgaWYgKCFwcmV2U3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgZGVidWcoJ3NlYXJjaCBvcGVuZWQnKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNsb3NlT25Fc2NhcGUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfSBlbHNlIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGRlYnVnKCdzZWFyY2ggY2xvc2VkJyk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY2xvc2VPbkVzY2FwZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24pO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zZWxlY3RJdGVtT25FbnRlcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU9uRG9jdW1lbnRDbGljayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGRlYnVnKCdjb21wb25lbnRXaWxsVW5tb3VudCgpJyk7XG5cbiAgICAgIC8vIERvIG5vdCBhY2Nlc3MgZG9jdW1lbnQgd2hlbiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICAgIGlmICghaXNCcm93c2VyKSByZXR1cm47XG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY2xvc2VPbkVzY2FwZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2spO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBEb2N1bWVudCBFdmVudCBIYW5kbGVyc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb21wb25lbnQgRXZlbnQgSGFuZGxlcnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gR2V0dGVyc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTZXR0ZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEJlaGF2aW9yXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gT3BlbiBpZiB0aGUgY3VycmVudCB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gdGhlIG1pbkNoYXJhY3RlcnMgcHJvcFxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVuZGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogT2Zmc2V0IGlzIG5lZWRlZCBmb3IgZGV0ZXJtaW5pbmcgdGhlIGFjdGl2ZSBpdGVtIGZvciByZXN1bHRzIHdpdGhpbiBhXG4gICAgICogY2F0ZWdvcnkuIFNpbmNlIHRoZSBpbmRleCBpcyByZXNldCB0byAwIGZvciBlYWNoIG5ldyBjYXRlZ29yeSwgYW4gb2Zmc2V0XG4gICAgICogbXVzdCBiZSBwYXNzZWQgaW4uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGRlYnVnKCdyZW5kZXIoKScpO1xuICAgICAgZGVidWcoJ3Byb3BzJywgdGhpcy5wcm9wcyk7XG4gICAgICBkZWJ1Zygnc3RhdGUnLCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWFyY2hDbGFzc2VzID0gX3N0YXRlMi5zZWFyY2hDbGFzc2VzLFxuICAgICAgICAgIGZvY3VzID0gX3N0YXRlMi5mb2N1cyxcbiAgICAgICAgICBvcGVuID0gX3N0YXRlMi5vcGVuO1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWxpZ25lZCA9IF9wcm9wcy5hbGlnbmVkLFxuICAgICAgICAgIGNhdGVnb3J5ID0gX3Byb3BzLmNhdGVnb3J5LFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZmx1aWQgPSBfcHJvcHMuZmx1aWQsXG4gICAgICAgICAgbG9hZGluZyA9IF9wcm9wcy5sb2FkaW5nLFxuICAgICAgICAgIHNpemUgPSBfcHJvcHMuc2l6ZTtcblxuICAgICAgLy8gQ2xhc3Nlc1xuXG4gICAgICB2YXIgY2xhc3NlcyA9IGN4KCd1aScsIG9wZW4gJiYgJ2FjdGl2ZSB2aXNpYmxlJywgc2l6ZSwgc2VhcmNoQ2xhc3NlcywgdXNlS2V5T25seShjYXRlZ29yeSwgJ2NhdGVnb3J5JyksIHVzZUtleU9ubHkoZm9jdXMsICdmb2N1cycpLCB1c2VLZXlPbmx5KGZsdWlkLCAnZmx1aWQnKSwgdXNlS2V5T25seShsb2FkaW5nLCAnbG9hZGluZycpLCB1c2VWYWx1ZUFuZEtleShhbGlnbmVkLCAnYWxpZ25lZCcpLCAnc2VhcmNoJywgY2xhc3NOYW1lKTtcbiAgICAgIHZhciB1bmhhbmRsZWQgPSBnZXRVbmhhbmRsZWRQcm9wcyhTZWFyY2gsIHRoaXMucHJvcHMpO1xuICAgICAgdmFyIEVsZW1lbnRUeXBlID0gZ2V0RWxlbWVudFR5cGUoU2VhcmNoLCB0aGlzLnByb3BzKTtcblxuICAgICAgdmFyIF9wYXJ0aXRpb25IVE1MSW5wdXRQciA9IHBhcnRpdGlvbkhUTUxJbnB1dFByb3BzKHVuaGFuZGxlZCwgaHRtbElucHV0QXR0cnMpLFxuICAgICAgICAgIF9wYXJ0aXRpb25IVE1MSW5wdXRQcjIgPSBfc2xpY2VkVG9BcnJheShfcGFydGl0aW9uSFRNTElucHV0UHIsIDIpLFxuICAgICAgICAgIGh0bWxJbnB1dFByb3BzID0gX3BhcnRpdGlvbkhUTUxJbnB1dFByMlswXSxcbiAgICAgICAgICByZXN0ID0gX3BhcnRpdGlvbkhUTUxJbnB1dFByMlsxXTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEVsZW1lbnRUeXBlLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93blxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hJbnB1dChodG1sSW5wdXRQcm9wcyksXG4gICAgICAgIHRoaXMucmVuZGVyUmVzdWx0c01lbnUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VhcmNoO1xufShDb21wb25lbnQpO1xuXG5TZWFyY2guZGVmYXVsdFByb3BzID0ge1xuICBpY29uOiAnc2VhcmNoJyxcbiAgaW5wdXQ6ICd0ZXh0JyxcbiAgbWluQ2hhcmFjdGVyczogMSxcbiAgbm9SZXN1bHRzTWVzc2FnZTogJ05vIHJlc3VsdHMgZm91bmQuJyxcbiAgc2hvd05vUmVzdWx0czogdHJ1ZVxufTtcblNlYXJjaC5hdXRvQ29udHJvbGxlZFByb3BzID0gWydvcGVuJywgJ3ZhbHVlJ107XG5TZWFyY2guX21ldGEgPSB7XG4gIG5hbWU6ICdTZWFyY2gnLFxuICB0eXBlOiBNRVRBLlRZUEVTLk1PRFVMRVxufTtcblNlYXJjaC5DYXRlZ29yeSA9IFNlYXJjaENhdGVnb3J5O1xuU2VhcmNoLlJlc3VsdCA9IFNlYXJjaFJlc3VsdDtcblNlYXJjaC5SZXN1bHRzID0gU2VhcmNoUmVzdWx0cztcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBBbiBlbGVtZW50IHR5cGUgdG8gcmVuZGVyIGFzIChzdHJpbmcgb3IgZnVuY3Rpb24pLiAqL1xuICBhczogY3VzdG9tUHJvcFR5cGVzLmFzLFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBCZWhhdmlvclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKiogSW5pdGlhbCB2YWx1ZSBvZiBvcGVuLiAqL1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEluaXRpYWwgdmFsdWUuICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogU2hvcnRoYW5kIGZvciBJY29uLiAqL1xuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKiBNaW5pbXVtIGNoYXJhY3RlcnMgdG8gcXVlcnkgZm9yIHJlc3VsdHMgKi9cbiAgbWluQ2hhcmFjdGVyczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogQWRkaXRpb25hbCB0ZXh0IGZvciBcIk5vIFJlc3VsdHNcIiBtZXNzYWdlIHdpdGggbGVzcyBlbXBoYXNpcy4gKi9cbiAgbm9SZXN1bHRzRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIE1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGFyZSBubyByZXN1bHRzLiAqL1xuICBub1Jlc3VsdHNNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgcmVzdWx0cyBtZW51IGlzIGRpc3BsYXllZC4gKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE9uZSBvZjpcbiAgICogLSBhcnJheSBvZiBTZWFyY2guUmVzdWx0IHByb3BzIGUuZy4gYHsgdGl0bGU6ICcnLCBkZXNjcmlwdGlvbjogJycgfWAgb3JcbiAgICogLSBvYmplY3Qgb2YgY2F0ZWdvcmllcyBlLmcuIGB7IG5hbWU6ICcnLCByZXN1bHRzOiBbeyB0aXRsZTogJycsIGRlc2NyaXB0aW9uOiAnJyB9XWBcbiAgICovXG4gIHJlc3VsdHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZShTZWFyY2hSZXN1bHQucHJvcFR5cGVzKSksIFByb3BUeXBlcy5vYmplY3RdKSxcblxuICAvKiogV2hldGhlciB0aGUgc2VhcmNoIHNob3VsZCBhdXRvbWF0aWNhbGx5IHNlbGVjdCB0aGUgZmlyc3QgcmVzdWx0IGFmdGVyIHNlYXJjaGluZy4gKi9cbiAgc2VsZWN0Rmlyc3RSZXN1bHQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBXaGV0aGVyIGEgXCJubyByZXN1bHRzXCIgbWVzc2FnZSBzaG91bGQgYmUgc2hvd24gaWYgbm8gcmVzdWx0cyBhcmUgZm91bmQuICovXG4gIHNob3dOb1Jlc3VsdHM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHRoZSBzZWFyY2ggaW5wdXQuIENyZWF0ZXMgYSBjb250cm9sbGVkIGNvbXBvbmVudC4gKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFJlbmRlcmluZ1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgU2VhcmNoQ2F0ZWdvcnkgY29udGVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyAtIFRoZSBTZWFyY2hDYXRlZ29yeSBwcm9wcyBvYmplY3QuXG4gICAqIEByZXR1cm5zIHsqfSAtIFJlbmRlcmFibGUgU2VhcmNoQ2F0ZWdvcnkgY29udGVudHMuXG4gICAqL1xuICBjYXRlZ29yeVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgU2VhcmNoUmVzdWx0IGNvbnRlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgLSBUaGUgU2VhcmNoUmVzdWx0IHByb3BzIG9iamVjdC5cbiAgICogQHJldHVybnMgeyp9IC0gUmVuZGVyYWJsZSBTZWFyY2hSZXN1bHQgY29udGVudHMuXG4gICAqL1xuICByZXN1bHRSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENhbGxiYWNrc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGJsdXIuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIG9uIG1vdXNlZG93bi5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSByZXN1bHQgaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvblJlc3VsdFNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBzZWFyY2ggaW5wdXQgY2hhbmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIEN1cnJlbnQgdmFsdWUgb2Ygc2VhcmNoIGlucHV0LlxuICAgKi9cbiAgb25TZWFyY2hDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTdHlsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKiogQSBzZWFyY2ggY2FuIGhhdmUgaXRzIHJlc3VsdHMgYWxpZ25lZCB0byBpdHMgbGVmdCBvciByaWdodCBjb250YWluZXIgZWRnZS4gKi9cbiAgYWxpZ25lZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQSBzZWFyY2ggY2FuIGRpc3BsYXkgcmVzdWx0cyBmcm9tIHJlbW90ZSBjb250ZW50IG9yZGVyZWQgYnkgY2F0ZWdvcmllcy4gKi9cbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQSBzZWFyY2ggY2FuIGhhdmUgaXRzIHJlc3VsdHMgdGFrZSB1cCB0aGUgd2lkdGggb2YgaXRzIGNvbnRhaW5lci4gKi9cbiAgZmx1aWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIHNlYXJjaCBpbnB1dCBjYW4gdGFrZSB1cCB0aGUgd2lkdGggb2YgaXRzIGNvbnRhaW5lci4gKi9cbiAgaW5wdXQ6IGN1c3RvbVByb3BUeXBlcy5pdGVtU2hvcnRoYW5kLFxuXG4gIC8qKiBBIHNlYXJjaCBjYW4gc2hvdyBhIGxvYWRpbmcgaW5kaWNhdG9yLiAqL1xuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBzZWFyY2ggY2FuIGhhdmUgZGlmZmVyZW50IHNpemVzLiAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoX3dpdGhvdXQoU1VJLlNJWkVTLCAnbWVkaXVtJykpXG59IDogdm9pZCAwO1xuU2VhcmNoLmhhbmRsZWRQcm9wcyA9IFsnYWxpZ25lZCcsICdhcycsICdjYXRlZ29yeScsICdjYXRlZ29yeVJlbmRlcmVyJywgJ2NsYXNzTmFtZScsICdkZWZhdWx0T3BlbicsICdkZWZhdWx0VmFsdWUnLCAnZmx1aWQnLCAnaWNvbicsICdpbnB1dCcsICdsb2FkaW5nJywgJ21pbkNoYXJhY3RlcnMnLCAnbm9SZXN1bHRzRGVzY3JpcHRpb24nLCAnbm9SZXN1bHRzTWVzc2FnZScsICdvbkJsdXInLCAnb25Gb2N1cycsICdvbk1vdXNlRG93bicsICdvblJlc3VsdFNlbGVjdCcsICdvblNlYXJjaENoYW5nZScsICdvcGVuJywgJ3Jlc3VsdFJlbmRlcmVyJywgJ3Jlc3VsdHMnLCAnc2VsZWN0Rmlyc3RSZXN1bHQnLCAnc2hvd05vUmVzdWx0cycsICdzaXplJywgJ3ZhbHVlJ107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbW9kdWxlcy9TZWFyY2gvU2VhcmNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDcwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVNvbWUgPSByZXF1aXJlKCcuL19iYXNlU29tZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvciAqKmFueSoqIGVsZW1lbnQgb2YgYGNvbGxlY3Rpb25gLlxuICogSXRlcmF0aW9uIGlzIHN0b3BwZWQgb25jZSBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeS4gVGhlIHByZWRpY2F0ZSBpc1xuICogaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zb21lKFtudWxsLCAwLCAneWVzJywgZmFsc2VdLCBCb29sZWFuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWN0aXZlJzogZmFsc2UgfVxuICogXTtcbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc2AgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5zb21lKHVzZXJzLCB7ICd1c2VyJzogJ2Jhcm5leScsICdhY3RpdmUnOiBmYWxzZSB9KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5zb21lKHVzZXJzLCBbJ2FjdGl2ZScsIGZhbHNlXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnNvbWUodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gc29tZShjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGd1YXJkKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5U29tZSA6IGJhc2VTb21lO1xuICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBndWFyZCkpIHtcbiAgICBwcmVkaWNhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNvbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3NvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDcxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9