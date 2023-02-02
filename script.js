function display(input) {
  document.getElementById('output').value += input;
  return input;
}

function clearScreen() {
  document.getElementById('output').value = '';
}

function solve() {
  let output = document.getElementById('output').value;
  let result = eval(output);
  document.getElementById('output').value = result;
  return result;
}
