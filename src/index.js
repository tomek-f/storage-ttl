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
