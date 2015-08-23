[![NPM Version](http://img.shields.io/npm/v/dom-add-class.svg?style=flat)](https://npmjs.org/package/dom-add-class)
[![Build Status](http://img.shields.io/travis/royriojas/dom-add-class.svg?style=flat)](https://travis-ci.org/royriojas/dom-add-class)

# dom-add-class
Add classes to a given element or set of elements

## Install

```bash
npm i --save dom-add-class
```

## Usage

```javascript
var addClass = require('dom-add-class');
var sektor = require('sektor');
var boxes = sektor('.box');

// add several classes
// to several elements
addClass(box, 'demo class added');

// won't add duplicated classes
addClass(box, 'repeated repeated classes'); // will only add 'repeated classes'
```

## License

[MIT](./LICENSE)

## [Changelog](./changelog.md)
