import isNumber from './isNumber';

const { parse: fromJson } = JSON;

const getJsonWithTtl = storage => name => {
  const nameStr = name.toString();
  const data = fromJson(storage.getItem(nameStr));
  const ts = Date.now();
  const tsOK = data && data.value && isNumber(data.expiresAt);

  if (!tsOK) {
    return null; // pobieramy i kasujemy tylko jak poprawne dane
  }
  if (data.expiresAt >= ts) {
    return data.value;
  }
  if (data.expiresAt < ts) {
    storage.removeItem(nameStr);
  }

  return null;
};

export default getJsonWithTtl;
