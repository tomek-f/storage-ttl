import noop from '@tomekf/noop';

import setJsonWithTtl from './setJsonWithTtl';
import getJsonWithTtl from './getJsonWithTtl';
import getSupport from './getSupport';

const { parse: fromJson, stringify: toJson } = JSON;

export const setJson = storage => (name, obj) => storage.setItem(name, toJson(obj));
export const getJson = storage => name => fromJson(storage.getItem(name));
export const length = storage => () => storage.length;

const setItem = storage => (name, obj) => storage.setItem(name, obj);
const getItem = storage => name => storage.getItem(name);
const removeItem = storage => name => storage.removeItem(name);
const key = storage => int => storage.key(int);
const clear = storage => () => storage.clear();

// no support for *Storage.name, *Storage['name'] support for now
const customStorage = (storage, name) => {
  const support = getSupport(storage);
  const storageLength = support ? length(storage) : noop;

  return {
    get length() {
      return storageLength();
    },
    support,
    name,
    originalStorage: storage,
    setJson: support && storage.setItem ? setJson(storage) : noop,
    getJson: support && storage.getItem ? getJson(storage) : noop,
    setJsonWithTtl: support && storage.setItem ? setJsonWithTtl(storage) : noop,
    getJsonWithTtl: support && storage.getItem && storage.removeItem
      ? getJsonWithTtl(storage) : noop,
    setItem: support && storage.setItem ? setItem(storage) : noop,
    getItem: support && storage.getItem ? getItem(storage) : noop,
    removeItem: support && storage.removeItem ? removeItem(storage) : noop,
    key: support && storage.key ? key(storage) : noop,
    clear: support && storage.clear ? clear(storage) : noop,
  };
};

export default customStorage;
