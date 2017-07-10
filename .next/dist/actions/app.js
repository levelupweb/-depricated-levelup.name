'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setQuery = setQuery;
exports.setPageData = setPageData;
exports.setPageSettings = setPageSettings;
exports.setAccessError = setAccessError;
exports.getModule = getModule;
exports.makeSearch = makeSearch;
exports.updateField = updateField;
exports.subscribeToEntry = subscribeToEntry;
exports.updateImage = updateImage;
exports.uploadImage = uploadImage;
exports.handleSuccess = handleSuccess;
exports.handleWarn = handleWarn;
exports.handleError = handleError;
exports.displayMessage = displayMessage;
exports.hideMessage = hideMessage;
exports.createMessage = createMessage;
exports.flushMessage = flushMessage;
exports.unableMessage = unableMessage;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _axiosAuth = require('../utils/axiosAuth.js');

var _app = require('../models/app.js');

var MODEL = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DANGER ZONE: 
// CORE APPLICATION ACTIONS
function setQuery(builder, query) {
  return function (dispatch) {
    dispatch({
      type: 'SET_PAGE_QUERY',
      payload: query
    });
    dispatch({
      type: 'SET_PAGE_BUILDER',
      payload: builder
    });
  };
}

// models
function setPageData(data) {
  return function (dispatch) {
    dispatch({
      type: 'SET_PAGE_DATA',
      payload: data
    });
  };
}

function setPageSettings(data) {
  return function (dispatch) {
    dispatch({
      type: 'SET_PAGE_SETTINGS',
      payload: data
    });
  };
}

function setAccessError() {
  return function (dispatch) {
    dispatch({
      type: 'SET_APP_ACCESSABILITY',
      payload: false
    });
  };
}

// COMMON ACTIONS
function getModule(slug) {
  return MODEL.getModule(slug);
}

function makeSearch(query) {
  return MODEL.makeSearch(query);
}

function updateField(token, type, id, data) {
  return MODEL.updateField(token, type, id, data);
}

function subscribeToEntry(token, type, id) {
  return MODEL.subscribeToEntry(token, type, id);
}

// TODO: handle error, rewrite to actions
function updateImage(token, entryType, entryID, image) {
  if (image) {
    var data = new FormData();
    data.append('image', image);
    data.append('type', entryType);
    data.append('id', entryID);

    return (0, _axiosAuth.axiosAuth)(token, {
      url: 'app/entries/' + entryID + '/upload',
      method: 'POST',
      data: data
    }).then(function (res) {
      if (res.data.success) {
        var path = _appConfig2.default.storage + entryType + 's' + '/' + entryID + '/' + res.data.filename;
        return (0, _extends3.default)({ path: path }, res.data);
      } else {
        return { errors: res.data.errors };
      }
    }).then(function (res) {
      if (res.success) {
        updateField(token, entryType, entryID, {
          field: entryType + 'Image',
          value: res.path
        });
        return res;
      } else {
        return { errors: res.errors };
      }
    });
  } else {
    console.log('Не найдено изображение');
  }
}

// TODO: handle error, rewrite to actions
function uploadImage(token, image) {
  if (image) {
    var data = new FormData();
    data.append('image', image);
    return (0, _axiosAuth.axiosAuth)(token, {
      url: 'app/entries/upload',
      method: 'POST',
      data: data
    }).then(function (res) {
      if (res.data.success) {
        var path = _appConfig2.default.storage + 'temp' + '/' + res.data.filename;
        return (0, _extends3.default)({ path: path }, res.data);
      } else {
        return { errors: res.data.errors };
      }
    });
  } else {
    console.log('Не найдено изображение');
  }
}

// MESSAGE SYSTEM:

function handleSuccess(description, isClosable) {
  return function (dispatch) {
    return dispatch(displayMessage('Успех!', description, isClosable));
  };
}

function handleWarn(description, isClosable) {
  return function (dispatch) {
    return dispatch(displayMessage('Внимание!', description, isClosable));
  };
}

function handleError(description, isClosable) {
  return function (dispatch) {
    return dispatch(displayMessage('Ошибка!', description, isClosable));
  };
}

function displayMessage(title, description, isClosable) {
  return function (dispatch) {
    dispatch(createMessage(title, description, isClosable));
    if (!isClosable) {
      return setTimeout(function () {
        dispatch(hideMessage());
      }, 5000);
    }
  };
}

function hideMessage() {
  return function (dispatch) {
    dispatch(unableMessage());
    return setTimeout(function () {
      dispatch(flushMessage());
    }, 1000);
  };
}

function createMessage(title, description, isClosable) {
  return {
    type: 'CREATE_MESSAGE',
    payload: {
      title: title, description: description, isClosable: isClosable
    }
  };
}

function flushMessage() {
  return {
    type: 'FLUSH_MESSAGE'
  };
}

function unableMessage() {
  return {
    type: 'UNABLE_MESSAGE'
  };
}