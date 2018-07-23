import getSupport from './getSupport';

test('true', () => {
  expect(getSupport(true)).toBe(true);
});

test('false', () => {
  expect(getSupport(false)).toBe(false);
});

test('object => true', () => {
  expect(getSupport({})).toBe(true);
});
