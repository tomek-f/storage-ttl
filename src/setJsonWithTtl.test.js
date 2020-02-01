import './__fixtures__/Date';

import setJsonWithTtl from './setJsonWithTtl';

const { localStorage } = global;
const setJsonTtl = setJsonWithTtl(localStorage);

test('object snapshot', () => {
  setJsonTtl('yolo', { a: 1 }, 2000);

  expect(localStorage.getItem('yolo')).toMatchSnapshot();
});

test('undefined snapshot', () => {
  setJsonTtl('yolo', undefined, 3000);
  expect(localStorage.getItem('yolo')).toMatchSnapshot();
});

test('null snapshot', () => {
  setJsonTtl('yolo', null, 4000);
  expect(localStorage.getItem('yolo')).toMatchSnapshot();
});

test('number snapshot', () => {
  setJsonTtl('yolo', 1, 5000);
  expect(localStorage.getItem('yolo')).toMatchSnapshot();
});

test('string snapshot', () => {
  setJsonTtl('yolo', 'yolo', 5000);
  expect(localStorage.getItem('yolo')).toMatchSnapshot();
});

test('object snapshot minus ts', () => {
  setJsonTtl('yolo', { a: 1 }, -2000);
  expect(localStorage.getItem('yolo')).toMatchSnapshot();
});

test('object snapshot no ttlInMilisec', () => {
  setJsonTtl('yolo', { a: 1 });
  expect(localStorage.getItem('yolo')).toMatchSnapshot();
});

test('no name error', () => {
  expect(() => setJsonTtl()).toThrow('`name` arg needed');
});

test('bad ttlInMilisec error', () => {
  expect(() => setJsonTtl('a', 1, '1111')).toThrow('`ttlInMilisec` arg must be a number');
});
