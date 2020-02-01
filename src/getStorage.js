const consoleError = console.error.bind(console);

export default function getStorage(storageName = 'localStorage') {
  let storage;

  try {
    storage = global[storageName];
  } catch (err) {
    consoleError('@tomekf/storage-tt: no localStorage', err);
  }

  return storage;
}
