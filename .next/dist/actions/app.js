'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setQuery = setQuery;
exports.setPageData = setPageData;
exports.setPageSettings = setPageSettings;
exports.setAccessError = setAccessError;
exports.getPageBySlug = getPageBySlug;
exports.makeSearch = makeSearch;
exports.updateField = updateField;
exports.updateImage = updateImage;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _axiosAuth = require('../utils/axiosAuth.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setQuery(builder, query) {
    return function (dispatch) {
        dispatch({ type: 'SET_PAGE_QUERY', payload: query });
        dispatch({ type: 'SET_PAGE_BUILDER', payload: builder });
    };
}

function setPageData(data) {
    return function (dispatch) {
        dispatch({ type: 'SET_PAGE_DATA', payload: data });
    };
}

function setPageSettings(data) {
    return function (dispatch) {
        dispatch({ type: 'SET_PAGE_SETTINGS', payload: data });
    };
}

function setAccessError() {
    return function (dispatch) {
        dispatch({ type: 'SET_APP_ACCESSABILITY', payload: false });
    };
}

function getPageBySlug(slug) {
    return _axios2.default.get(_appConfig2.default.API + 'page/entries/' + slug);
}

function makeSearch(query) {
    return _axios2.default.get(_appConfig2.default.API + 'search/entries/' + query);
}

// Обновление любого поля любого типа записей
function updateField(token, entryType, entryID, data) {
    return (0, _axiosAuth.axiosAuth)(token, {
        url: entryType + '/entries/' + entryID + '/updatefield',
        method: 'POST',
        data: data
    });
}

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