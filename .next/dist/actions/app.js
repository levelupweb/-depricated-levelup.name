'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setQuery = setQuery;
exports.setPageData = setPageData;
exports.setPageSettings = setPageSettings;
exports.setAccessError = setAccessError;
exports.getPageBySlug = getPageBySlug;
exports.searchByQuery = searchByQuery;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

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

function searchByQuery(query) {
    return _axios2.default.get(_appConfig2.default.API + 'search/entries/' + query);
}