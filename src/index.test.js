import * as storage from '.';

test('snapshot', () => {
  expect(storage).toMatchSnapshot();
});
