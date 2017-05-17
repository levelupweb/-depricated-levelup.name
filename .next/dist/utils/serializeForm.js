'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (form) {
  var array = {};
  for (var i = 0; i < form.length; i++) {
    var type = form[i].getAttribute('data-type');

    // Отдельно парсим Slug
    if (form[i]['name'] == 'slug') {
      array['slug'] = form[i]['value'];
    } else {
      // Парсим все инпуты
      if (type == 'checkbox') {
        array[form[i]['name']] = form[i]['checked'];
      } else {
        array[form[i]['name']] = form[i]['value'];
      }
    }
  }
  return array;
};