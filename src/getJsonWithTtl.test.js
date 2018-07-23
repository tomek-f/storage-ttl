import '@tomekf/storage-mock/dist/auto';
import './__fixtures__/Date';

import setJsonWithTtl from './setJsonWithTtl';
import getJsonWithTtl from './getJsonWithTtl';

const { localStorage } = global;
const setJsonTtl = setJsonWithTtl(localStorage);
const getJsonTtl = getJsonWithTtl(localStorage);
const fiveSec = 5000;
const { stringify: toJson } = JSON;

afterEach(() => {
  localStorage.removeItem('yolo');
});

test('+5s', () => {
  setJsonTtl('yolo', { a: 1 }, fiveSec);
  expect(getJsonTtl('yolo')).toEqual({ a: 1 });
});

test('-5s', () => {
  setJsonTtl('yolo', { a: 1 }, -fiveSec);
  expect(getJsonTtl('yolo')).toEqual(null); // this deletes key
  expect(localStorage.getItem('yolo')).toEqual(null);
  expect(localStorage.yolo).toEqual(null);
});

test('bad data #1', () => {
  localStorage.setItem('yolo', null);
  expect(getJsonTtl('yolo')).toEqual(null);
});

test('bad data #2', () => {
  localStorage.setItem('yolo', 111);
  expect(getJsonTtl('yolo')).toEqual(null);
});

test('bad data #3', () => {
  localStorage.setItem('yolo', toJson({ a: 1 }));
  expect(getJsonTtl('yolo')).toEqual(null);
});

test('bad data #4', () => {
  localStorage.setItem('yolo', toJson({ value: null }));
  expect(getJsonTtl('yolo')).toEqual(null);
});

test('bad data #4', () => {
  localStorage.setItem('yolo', toJson({ value: null }));
  expect(getJsonTtl('yolo')).toEqual(null);
});

test('bad data #5', () => {
  localStorage.setItem('yolo', toJson({ value: 1, expiresAt: 'not a number for sure' }));
  expect(getJsonTtl('yolo')).toEqual(null);
});
