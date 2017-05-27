'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setQuery = setQuery;
exports.setPageData = setPageData;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = require('../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setQuery(builder, query) {
    return function (dispatch) {
        dispatch({ type: 'SET_QUERY', payload: query });
        dispatch({ type: 'SET_BUILDER', payload: builder });
    };
}

function setPageData(data) {
    return function (dispatch) {
        dispatch({ type: 'SET_DATA', payload: data });
    };
}