'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var startClock = exports.startClock = function startClock(sec) {
	return function (dispatch) {
		return setInterval(function () {
			return dispatch({ type: 'TICK', light: true, ts: Date.now(), seconds: sec++ });
		}, 800);
	};
};