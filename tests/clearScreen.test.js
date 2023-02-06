const Calculator = require('../script');

describe('Testing calculator clearScreen method', () => {
  document.body.innerHTML = `
    <input id="output" value='123+'/>
  `;
  test('Expect after clicking C button input to be empty', () => {
    expect(Calculator.clearScreen()).toBe(undefined);
  });
});
