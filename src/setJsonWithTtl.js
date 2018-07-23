import isNumber from '@tomekf/number/dist/is';

const { stringify: toJson } = JSON;

const setJonWithTtl = storage => (name, value, ttlInMilisec = 0) => {
  if (!name || !isNumber(ttlInMilisec)) {
    throw new Error(!name ? '`name` arg needed' : '`ttlInMilisec` arg must be a number');
  }
  storage.setItem(name.toString(), toJson({ value, expiresAt: Date.now() + ttlInMilisec }));
};

export default setJonWithTtl;
