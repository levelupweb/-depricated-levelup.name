'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI = UI;

exports.default = function () {
  window.$ = require('jquery');
  require('../static/css/ui/semantic.min.js');
  var dropdown = require('semantic-ui-dropdown');
  $('.ui.dropdown').dropdown();
};

function UI() {
  require('../static/css/ui/semantic.min.js');
}