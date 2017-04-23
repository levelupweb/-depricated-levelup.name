export default function isNode() {
  if (process.title === 'npm') {
    return true;
    console.log('Не поддерживается данное окружение')
  } else {
    return false;
  }
}