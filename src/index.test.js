import '@tomekf/storage-mock/dist/auto';

import * as storage from '.';

test('snapshot', () => {
  expect(storage).toMatchSnapshot();
});
