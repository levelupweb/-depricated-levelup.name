"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideMessage = exports.displayMessage = exports.handleError = exports.handleWarn = exports.handleSuccess = exports.uploadUnsignedImage = exports.updateImage = exports.settingUpPageProperties = exports.settingUpPageData = exports.hideMessageEnd = exports.hideMessageStart = exports.clearMessage = exports.createMessage = exports.cacheData = exports.setAccessStatus = exports.setPageProperties = exports.setPageData = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _pageDataBuilder = require("../utils/pageDataBuilder");

var _pageDataBuilder2 = _interopRequireDefault(_pageDataBuilder);

var _app = require("../models/app");

var MODEL = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Clear Actions
var SET_PAGE_DATA = "SET_PAGE_DATA";

// models
var setPageData = exports.setPageData = function setPageData(pageData) {
  return {
    type: SET_PAGE_DATA,
    payload: pageData
  };
};

var SET_PAGE_SETTINGS = "SET_PAGE_SETTINGS";
var setPageProperties = exports.setPageProperties = function setPageProperties(pageProperties) {
  return {
    type: SET_PAGE_SETTINGS,
    payload: pageProperties
  };
};

var SET_ACCESS_STATUS = "SET_ACCESS_STATUS";
var setAccessStatus = exports.setAccessStatus = function setAccessStatus(status) {
  return {
    type: SET_ACCESS_STATUS,
    payload: status
  };
};

var CACHE_DATA = "CACHE_DATA";
var cacheData = exports.cacheData = function cacheData(key, value) {
  return {
    type: CACHE_DATA,
    payload: { key: key, value: value }
  };
};

var CREATE_MESSAGE = "CREATE_MESSAGE";
var createMessage = exports.createMessage = function createMessage(title, description, isClosable) {
  return {
    type: CREATE_MESSAGE,
    payload: { title: title, description: description, isClosable: isClosable }
  };
};

var CLEAR_MESSAGE = "CLEAR_MESSAGE";
var clearMessage = exports.clearMessage = function clearMessage() {
  return {
    type: CLEAR_MESSAGE
  };
};

var HIDE_MESSAGE_START = "HIDE_MESSAGE_START";
var hideMessageStart = exports.hideMessageStart = function hideMessageStart() {
  return {
    type: HIDE_MESSAGE_START
  };
};

var HIDE_MESSAGE_END = "HIDE_MESSAGE_END";
var hideMessageEnd = exports.hideMessageEnd = function hideMessageEnd() {
  return {
    type: HIDE_MESSAGE_END
  };
};

// Action Creators
var settingUpPageData = exports.settingUpPageData = function settingUpPageData(pageBuilder, query) {
  return function (dispatch) {
    return (0, _pageDataBuilder2.default)(pageBuilder, query).then(function (data) {
      dispatch(setPageData(data));
      return data;
    });
  };
};

var settingUpPageProperties = exports.settingUpPageProperties = function settingUpPageProperties(slug) {
  return function (dispatch) {
    return MODEL.getModule(slug).then(function (response) {
      dispatch(setPageProperties(response.data));
      return response.data;
    });
  };
};

// return errors or run callback with filepath
var updateImage = exports.updateImage = function updateImage(token, type, id, image, callback) {
  return function (dispatch) {
    var form = new FormData();
    if (image && form) {
      form.append("image", image);
      form.append("type", type);
      form.append("id", id);
      return MODEL.updateImage(token, id, form).then(function (updatedImageResponse) {
        var _updatedImageResponse = updatedImageResponse.data,
            success = _updatedImageResponse.success,
            filepath = _updatedImageResponse.filepath;

        if (success) {
          MODEL.updateField(token, type, id, {
            field: "image",
            value: filepath
          }).then(function (updatedFieldResponse) {
            var _updatedFieldResponse = updatedFieldResponse.data,
                success = _updatedFieldResponse.success,
                errors = _updatedFieldResponse.errors;

            if (success) {
              dispatch(handleSuccess("Изображение обновлено!", true));
              return callback(filepath);
            } else {
              return dispatch(handleError(errors, "Ошибка при обновлении данных", true));
            }
          });
        } else {
          return dispatch(handleError([], "Ошибка при загрузке", true));
        }
        return false;
      });
    } else {
      return dispatch(handleError(null, "Не найдено изображение", true));
    }
  };
};

// return errors or run callback with filepath
var uploadUnsignedImage = exports.uploadUnsignedImage = function uploadUnsignedImage(token, image, callback) {
  return function (dispatch) {
    if (image && token) {
      var form = new FormData();
      form.append("image", image);
      return MODEL.uploadUnsignedImage(token, form).then(function (response) {
        if (response.data.success) {
          var filepath = response.data.filepath;

          dispatch(handleSuccess("Изображение успешно загружено!"));
          return callback(filepath);
        } else {
          return dispatch(handleError([], "Ошибка при загрузке изображения"));
        }
      });
    } else {
      return dispatch(handleError([], "Изображение не найдено"));
    }
  };
};

var handleSuccess = exports.handleSuccess = function handleSuccess(description) {
  var isClosable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (dispatch) {
    return dispatch(displayMessage("Успех!", description, isClosable));
  };
};

var handleWarn = exports.handleWarn = function handleWarn(description) {
  var isClosable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (dispatch) {
    return dispatch(displayMessage("Внимание!", description, isClosable));
  };
};

var handleError = exports.handleError = function handleError(description) {
  var isClosable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (dispatch) {
    return dispatch(displayMessage("Ошибка!", description, isClosable));
  };
};

var displayMessage = exports.displayMessage = function displayMessage(title, description) {
  var isClosable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return function (dispatch) {
    dispatch(createMessage(title, description, isClosable));
    if (!isClosable) {
      return setTimeout(function () {
        dispatch(hideMessage());
      }, 5000);
    } else {
      return false;
    }
  };
};

var hideMessage = exports.hideMessage = function hideMessage() {
  return function (dispatch) {
    dispatch(hideMessageStart());
    return _promise2.default.resolve(setTimeout(function () {
      dispatch(clearMessage());
    }, 1000)).then(function () {
      dispatch(hideMessageEnd());
    });
  };
};