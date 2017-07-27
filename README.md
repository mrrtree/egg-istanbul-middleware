# egg-istanbul-middleware

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-istanbul-middleware.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-istanbul-middleware
[travis-image]: https://img.shields.io/travis/eggjs/egg-istanbul-middleware.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-istanbul-middleware
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-istanbul-middleware.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-istanbul-middleware?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-istanbul-middleware.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-istanbul-middleware
[snyk-image]: https://snyk.io/test/npm/egg-istanbul-middleware/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-istanbul-middleware
[download-image]: https://img.shields.io/npm/dm/egg-istanbul-middleware.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-istanbul-middleware

<!--
Description here.
-->

## Install

```bash
$ npm i egg-istanbul-middleware --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.istanbulMiddleware = {
  enable: true,
  package: 'egg-istanbul-middleware',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.istanbulMiddleware = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
