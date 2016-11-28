'use strict';

require('mocha');
var assert = require('assert');
var unescape = require('./');

describe('unescape', function () {
  it('should unescape HTML entities', function () {
    assert.equal(unescape('&apos;'), '\'');
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
      '&apos;': '\'',
      '&#39;': '\'',
      '&amp;': '&',
      '&gt;': '>',
      '&lt;': '<',
      '&quot;': '"'
    });
  });
});
