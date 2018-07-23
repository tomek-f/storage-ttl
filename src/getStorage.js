import hardLog from '@tomekf/hard-log';

export default function getStorage(storageName = 'localStorage') {
  let storage;

  try {
    storage = global[storageName];
  } catch (err) {
    hardLog.warn('@tomekf/storage-tt: no localStorage', err);
  }

  return storage;
}
