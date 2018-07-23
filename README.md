# t@tomekf/storage-ttl

> Custom storage with JSON, TTL and protection against DOM exception when local storage is blocked

## Installation

```bash
npm i @tomekf/storage-ttl # or yarn add @tomekf/storage-ttl
```

## Usage

```js
import { sessionStorage }, localStorage from '@tomekf/storage-ttl';

const ttlInMiliseconds = 1000;

localStorage.setJsonWithTtl('pikok', { longTail: true }, ttlInMiliseconds);

const { longTail } = sessionStorage.getJsonWithTtl('sparrow');
```

## Methods/props

```bash
length
support
originalStorage
setJson
getJson
setJsonWithTtl
getJsonWithTtl
setItem
getItem
removeItem
key
clear
```

## Test

```bash
git clone git@github.com:tomek-f/storage-ttl.git
cd ./storage-ttl
npm i # or yarn
npm test # or yarn test
npm run eslint-src # or yarn (run) eslint-src
```

## Versions

* ES5 CommonJs `@tomekf/storage-ttl/dist/…`
* ES6+ with ESM `@tomekf/storage-ttl/src/…`

## Changelog

[View on github](https://github.com/tomek-f/storage-ttl/blob/master/CHANGELOG.md).
