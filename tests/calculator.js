function display(value) {
  return value;
}

function clearScreen() {
  return '';
}

function complexOperation(a, b, c) {
  return a + b / 2 + c;
}

module.exports = Calculator = {
  display,
  clearScreen,
  complexOperation,
};
