# unescape [![NPM version](https://img.shields.io/npm/v/unescape.svg?style=flat)](https://www.npmjs.com/package/unescape) [![NPM monthly downloads](https://img.shields.io/npm/dm/unescape.svg?style=flat)](https://npmjs.org/package/unescape) [![NPM total downloads](https://img.shields.io/npm/dt/unescape.svg?style=flat)](https://npmjs.org/package/unescape) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/unescape.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/unescape)

> Convert HTML entities to HTML characters, e.g. `&gt;` converts to `>`.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save unescape
```

## Usage

```js
var decode = require('unescape');

console.log(decode('&lt;div&gt;abc&lt;/div&gt;'));
//=> '<div>abc</div>'

// get the default entities directly
console.log(decode.chars);
```

## Characters

For performance, this library only handles the following common entities (split into groups for backward compatibility).

### Default entities

Only the following entities are converted by default.

| **Character** | **Description** | **Entity Name** | **Entity Number** | 
| --- | --- | --- | --- |
| `<` | less than | `&lt;` | `&#60;` |
| `>` | greater than | `&gt;` | `&#62;` |
| `&` | ampersand | `&amp;` | `&#38;` |
| `"` | double quotation mark | `&quot;` | `&#34;` |
| `'` | single quotation mark (apostrophe) | `&apos;` | `&#39;` |

Get the default entities as an object:

```js
console.log(decode.chars);
```

### Extra entities

Only the following entities are converted when `'extras'` is passed as the second argument.

| **Character** | **Description** | **Entity Name** | **Entity Number** |
| `¢` | cent                               | `&cent;`   | `&#162;`  |
| `£` | pound                              | `&pound;`  | `&#163;`  |
| `¥` | yen                                | `&yen;`    | `&#165;`  |
| `€` | euro                               | `&euro;`   | `&#8364;` |
| `©` | copyright                          | `&copy;`   | `&#169;`  |
| `®` | registered trademark               | `&reg;`    | `&#174;`  |
| `·` | middle dot                         | `&middot;` | `&#183;`  |
| `…` | horizontal ellipsis                | `&hellip;` | `&#8230;` |

Example:

```js
// convert only the "extras" characters
decode(str, 'extras');
// get the object of `extras` characters
console.log(decode.extras);
```

### All entities

Convert both the defaults and extras:

```js
decode(str, 'all');
```

Get all entities as an object:

```js
console.log(decode.all);
```

## Alternatives

If you need a more robust implementation, try one of the following libraries:

* [html-entities](https://github.com/mdevils/node-html-entities)
* [ent](https://github.com/substack/node-ent)

## About

### Related projects

* [html-elements](https://www.npmjs.com/package/html-elements): Array of all standard HTML and HTML5 elements. | [homepage](https://github.com/jonschlinkert/html-elements "Array of all standard HTML and HTML5 elements.")
* [html-tag](https://www.npmjs.com/package/html-tag): Generate HTML elements from a javascript object. | [homepage](https://github.com/jonschlinkert/html-tag "Generate HTML elements from a javascript object.")
* [html-toc](https://www.npmjs.com/package/html-toc): Generate a HTML table of contents using cheerio. | [homepage](https://github.com/jonschlinkert/html-toc "Generate a HTML table of contents using cheerio.")
* [is-self-closing](https://www.npmjs.com/package/is-self-closing): Returns true if the given name is a HTML void element or common SVG self-closing… [more](https://github.com/jonschlinkert/is-self-closing) | [homepage](https://github.com/jonschlinkert/is-self-closing "Returns true if the given name is a HTML void element or common SVG self-closing element.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on June 04, 2017._