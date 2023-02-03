const Calculator = require('../script');

describe('Tesing calculator display method', () => {
  document.body.innerHTML = `
    <input id="output"/>
  `;

  test('Expect `/` input to be equal `/` output ', () => {
    expect(Calculator.display('/')).toBe('/');
  });

  test('Expect `6789+` input to be equal `6789+` output', () => {
    expect(Calculator.display('6789+')).toBe('6789+');
  });

  test('Expect `1 + 1 / 2` input to be equal `1 + 1 / 2` output', () => {
    expect(Calculator.display('1 + 1 / 2')).toBe('1 + 1 / 2');
  });
});
