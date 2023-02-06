function display(input) {
  document.getElementById('output').value += input;
  return input;
}

function clearScreen() {
  document.getElementById('output').value = '';
}

function solve() {
  let output = document.getElementById('output').value;
  if (output) {
    // This checks if any output is entered.
    try {
      let result = eval(output);
      document.getElementById('output').value = result;
      return result;
    } catch {
      // This will throw an error if invalid operation is entered.
      alert('Please enter a valid operation');
      clearScreen();
      return false;
    }
  }
}

module.exports = Calculator = {
  display,
  clearScreen,
  solve,
};
