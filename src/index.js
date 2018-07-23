// tu jest export z obiektu pko i funkcje pomocnicze
// mamy dodatkowe metody setJSON i getJSON (również *WithTTL, które ma expire date)
// i zabezpieczenie przed błędem jak użytkownik zablokuje zapisywanie danych witryny...
// ...na chrome (na pewno 57) wywala się jak zablokowane zapisywanie danych witryn
// *WithTTL format { value: data, expiresAt: timestamp }, org. https://github.com/liesislukas/localstorage-ttl/blob/master/index.js

import customStorage from './customStorage';
import getStorage from './getStorage';
import getSupport from './getSupport';

const local = getStorage();
const session = getStorage('sessionStorage');

export const localStorageSupport = getSupport(local);
export const sessionStorageSupport = getSupport(session);
export const storageSupport = localStorageSupport && sessionStorageSupport;

const localStorage = customStorage(local, 'localStorage++');

export const sessionStorage = customStorage(session, 'sessionStorage++');

export default localStorage;
