import isNumber from './isNumber';

test('integers', () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(-1)).toBe(true);
  expect(isNumber(0)).toBe(true);
  expect(isNumber(-1000)).toBe(true);
  expect(isNumber(1000000)).toBe(true);
  expect(isNumber(3e10)).toBe(true);
  expect(isNumber(Number('1'))).toBe(true);
});

test('floats', () => {
  expect(isNumber(1.1)).toBe(true);
  expect(isNumber(-1.1)).toBe(true);
  expect(isNumber(0.1)).toBe(true);
  expect(isNumber(-1000.433)).toBe(true);
  expect(isNumber(1000000.4)).toBe(true);
  expect(isNumber(3.4e10)).toBe(true);
  expect(isNumber(Number('1.1'))).toBe(true);
});

test('not numbers', () => {
  expect(isNumber(NaN)).toBe(false);
  expect(isNumber(false)).toBe(false);
  expect(isNumber('ddd')).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber()).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(Symbol(1))).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber(Infinity)).toBe(false);
});
