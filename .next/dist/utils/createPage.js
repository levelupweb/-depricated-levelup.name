"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createPage;
function createPage(options, child, before, after) {
	var res = options;
	res.child = child;
	res.beforeChildren = before;
	res.afterChildren = after;
	return res;
}