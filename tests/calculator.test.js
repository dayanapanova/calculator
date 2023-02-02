const Calculator = require('./calculator');

describe('Calculator', () => {
  test('Expect `/` to be equal `/` ', () => {
    expect(Calculator.display('/')).toBe('/');
  });

  test('Expect an emty output', () => {
    expect(Calculator.clearScreen()).toBe('');
  });

  test('Expect 4 + 2 / 2 + 1 to be 6', () => {
    expect(Calculator.complexOperation(4, 2, 1)).toBe(6);
  });
});
