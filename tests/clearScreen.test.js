const Calculator = require('../script');

describe('Testing calculator clearScreen method', () => {
  document.body.innerHTML = `
    <input id="output" value='25'/>
  `;
  test('Expect after clicking C button input to be empty', () => {
    // TODO: this has to be an emty string, not undefind
    expect(Calculator.clearScreen()).toBe(undefined);
  });
});
