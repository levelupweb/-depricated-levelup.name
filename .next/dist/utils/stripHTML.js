"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.strip = strip;
function strip(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}