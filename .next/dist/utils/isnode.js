'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNode;
function isNode() {
  if (process.title === 'npm') {
    return true;
    console.log('Не поддерживается данное окружение');
  } else {
    return false;
  }
}