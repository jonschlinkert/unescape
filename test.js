/*!
 * unescape <https://github.com/jonschlinkert/unescape>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var unescape = require('./');

describe('unescape', function () {
  it('should unescape HTML entities', function () {
    assert.equal(unescape('&#39;'), '\'');
    assert.equal(unescape('&amp;'), '&');
    assert.equal(unescape('&gt;'), '>');
    assert.equal(unescape('&lt;'), '<');
    assert.equal(unescape('&quot;'), '"');
  });
});

describe('characters', function () {
  it('should get an object of HTML entities/characters', function () {
    assert.deepEqual(unescape.chars, {
      '&#39;': '\'',
      '&amp;': '&',
      '&gt;': '>',
      '&lt;': '<',
      '&quot;': '"'
    });
  });
});
