import getStorage from './getStorage';

test('localStorage ok', () => {
  expect(typeof getStorage()).toEqual('object');
});

test('sessionStorage ok', () => {
  expect(typeof getStorage('sessionStorage')).toEqual('object');
});

test('BS Storage !ok', () => {
  expect(typeof getStorage('BSStorage')).toEqual('undefined');
});
