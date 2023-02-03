const Calculator = require('../script');

describe('Testing calculator solve method case one', () => {
  document.body.innerHTML = `
    <input id="output" value='1 + 1 * 4'/>
  `;
  test('Expect after clicking = button 1 + 1 * 4 to be equal 5', () => {
    expect(Calculator.solve()).toBe(5);
  });
});

describe('Testing calculator solve method case two', () => {
  document.body.innerHTML = `
      <input id="output" value='(1 + 5) / 2 + 2'/>
    `;
  test('Expect after clicking = button (1 + 5) / 2 + 2 to be equal 5', () => {
    expect(Calculator.solve()).toBe(5);
  });
});
