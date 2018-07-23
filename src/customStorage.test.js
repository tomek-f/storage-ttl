import '@tomekf/storage-mock/dist/auto';

import customStorage from './customStorage';
import getStorage from './getStorage';

// only snapshots and setJson, getJson and length tested, other are native (mocked) methods and/or tested elsewhere

test('snapshot localStorage', () => {
  expect(customStorage(getStorage(), 'ls++')).toMatchSnapshot();
});

test('snapshot sessionStorage', () => {
  expect(customStorage(getStorage('sessionStorage'), 'ss++')).toMatchSnapshot();
});

test('snapshot BSStorage', () => {
  expect(customStorage(getStorage('BSStorage'), 'BSs++')).toMatchSnapshot();
});

const myStorage = customStorage(getStorage(), 'myStorage');

test('setJson and getJson', () => {
  myStorage.setJson('a', { b: 2, c: 3 });
  expect(myStorage.getJson('a')).toEqual({ b: 2, c: 3 });
});

test('length', () => {
  expect(myStorage.length).toBe(1);
  myStorage.setItem('b', true);
  myStorage.setItem('c', 'fff');
  expect(myStorage.length).toBe(3);
});
