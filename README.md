# Math.cosh <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.cosh` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.cosh
```

## Usage/Examples

```js
console.log(Math.cosh(0)); // 1
console.log(Math.cosh(1)); // 1.5430806348152437
console.log(Math.cosh(-1)); // 1.5430806348152437
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.cosh
[npm-version-svg]: https://versionbadg.es/es-shims/Math.cosh.svg
[deps-svg]: https://david-dm.org/es-shims/Math.cosh.svg
[deps-url]: https://david-dm.org/es-shims/Math.cosh
[dev-deps-svg]: https://david-dm.org/es-shims/Math.cosh/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.cosh#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.cosh.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.cosh.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.cosh.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.cosh
