webpackHotUpdate(5,{

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.handleSuccess = handleSuccess;
exports.handleWarn = handleWarn;
exports.handleError = handleError;
exports.displayMessage = displayMessage;
exports.hideMessage = hideMessage;
exports.createMessage = createMessage;
exports.flushMessage = flushMessage;
exports.unableMessage = unableMessage;
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\www\\Levelup.name\\actions\\message.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\www\\Levelup.name\\actions\\message.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hYmJiNDlhZTc5ZmQ0YmU3MDdkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9tZXNzYWdlLmpzP2Q5MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN1Y2Nlc3MoZGVzY3JpcHRpb24sIGlzQ2xvc2FibGUpIHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRyZXR1cm4gZGlzcGF0Y2goZGlzcGxheU1lc3NhZ2UoXHJcblx0XHRcdCfQo9GB0L/QtdGFIScsIGRlc2NyaXB0aW9uLCBpc0Nsb3NhYmxlXHJcblx0XHQpKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVdhcm4oZGVzY3JpcHRpb24sIGlzQ2xvc2FibGUpIHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRyZXR1cm4gZGlzcGF0Y2goZGlzcGxheU1lc3NhZ2UoXHJcblx0XHRcdCfQktC90LjQvNCw0L3QuNC1IScsIGRlc2NyaXB0aW9uLCBpc0Nsb3NhYmxlXHJcblx0XHQpKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGRlc2NyaXB0aW9uLCBpc0Nsb3NhYmxlKSB7XHJcblx0cmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG5cdFx0cmV0dXJuIGRpc3BhdGNoKGRpc3BsYXlNZXNzYWdlKFxyXG5cdFx0XHQn0J7RiNC40LHQutCwIScsIGRlc2NyaXB0aW9uLCBpc0Nsb3NhYmxlXHJcblx0XHQpKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgaXNDbG9zYWJsZSkge1xyXG5cdHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuXHRcdGRpc3BhdGNoKGNyZWF0ZU1lc3NhZ2UodGl0bGUsIGRlc2NyaXB0aW9uLCBpc0Nsb3NhYmxlKSlcclxuXHRcdGlmKCFpc0Nsb3NhYmxlKSB7XHJcblx0XHRcdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaChoaWRlTWVzc2FnZSgpKVxyXG5cdFx0XHR9LCA1MDAwKSBcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTWVzc2FnZSgpIHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh1bmFibGVNZXNzYWdlKCkpXHJcblx0XHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKGZsdXNoTWVzc2FnZSgpKVxyXG5cdFx0fSwgMTAwMClcclxuXHR9IFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZSh0aXRsZSwgZGVzY3JpcHRpb24sIGlzQ2xvc2FibGUpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NSRUFURV9NRVNTQUdFJyxcclxuXHRcdHBheWxvYWQ6IHtcclxuXHRcdFx0dGl0bGUsIGRlc2NyaXB0aW9uLCBpc0Nsb3NhYmxlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmx1c2hNZXNzYWdlKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnRkxVU0hfTUVTU0FHRSdcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmFibGVNZXNzYWdlKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnVU5BQkxFX01FU1NBR0UnXHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvbWVzc2FnZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBUUE7QUFRQTtBQVdBO0FBU0E7QUFTQTtBQU1BO0FBM0RBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFEQTs7QUFHQTs7QUFBQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBREE7O0FBSUE7QUFGQTtBQUlBO0FBQ0E7QUFEQTs7QUFJQTtBQUZBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=