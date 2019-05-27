'use strict';

require('mocha');
var assert = require('assert');
var decode = require('./');

describe('unescape', function() {
  describe('defaults', function() {
    it('should unescape default HTML entities', function() {
      assert.equal(decode('&quot;'), '"');
      assert.equal(decode('&#34;'), '"');
      assert.equal(decode('&apos;'), '\'');
      assert.equal(decode('&#39;'), '\'');
      assert.equal(decode('&#x27;'), '\'');
      assert.equal(decode('&amp;'), '&');
      assert.equal(decode('&#38;'), '&');
      assert.equal(decode('&gt;'), '>');
      assert.equal(decode('&#62;'), '>');
      assert.equal(decode('&lt;'), '<');
      assert.equal(decode('&#60;'), '<');
    });

    it('should unescape extra HTML entities', function() {
      assert.equal(decode('&cent;', 'extras'), '¢');
      assert.equal(decode('&#162;', 'extras'), '¢');
      assert.equal(decode('&copy;', 'extras'), '©');
      assert.equal(decode('&#169;', 'extras'), '©');
      assert.equal(decode('&euro;', 'extras'), '€');
      assert.equal(decode('&#8364;', 'extras'), '€');
      assert.equal(decode('&pound;', 'extras'), '£');
      assert.equal(decode('&#163;', 'extras'), '£');
      assert.equal(decode('&reg;', 'extras'), '®');
      assert.equal(decode('&#174;', 'extras'), '®');
      assert.equal(decode('&yen;', 'extras'), '¥');
      assert.equal(decode('&#165;', 'extras'), '¥');
    });

    it('should unescape all HTML entities', function() {
      assert.equal(decode('&quot;', 'all'), '"');
      assert.equal(decode('&#34;', 'all'), '"');
      assert.equal(decode('&apos;', 'all'), '\'');
      assert.equal(decode('&#39;', 'all'), '\'');
      assert.equal(decode('&#x27;', 'all'), '\'');
      assert.equal(decode('&amp;', 'all'), '&');
      assert.equal(decode('&#38;', 'all'), '&');
      assert.equal(decode('&gt;', 'all'), '>');
      assert.equal(decode('&#62;', 'all'), '>');
      assert.equal(decode('&lt;', 'all'), '<');
      assert.equal(decode('&#60;', 'all'), '<');
      assert.equal(decode('&cent;', 'all'), '¢');
      assert.equal(decode('&#162;', 'all'), '¢');
      assert.equal(decode('&copy;', 'all'), '©');
      assert.equal(decode('&#169;', 'all'), '©');
      assert.equal(decode('&euro;', 'all'), '€');
      assert.equal(decode('&#8364;', 'all'), '€');
      assert.equal(decode('&pound;', 'all'), '£');
      assert.equal(decode('&#163;', 'all'), '£');
      assert.equal(decode('&reg;', 'all'), '®');
      assert.equal(decode('&#174;', 'all'), '®');
      assert.equal(decode('&yen;', 'all'), '¥');
      assert.equal(decode('&#165;', 'all'), '¥');
    });
  });

  describe('characters', function() {
    it('should get an object of HTML entities/characters', function() {
      assert.deepEqual(decode.chars, {
        '&quot;': '"',
        '&#34;': '"',
        '&apos;': '\'',
        '&#39;': '\'',
        '&#x27;': '\'',
        '&amp;': '&',
        '&#38;': '&',
        '&gt;': '>',
        '&#62;': '>',
        '&lt;': '<',
        '&#60;': '<',
      });
    });

    it('should get extra characters', function() {
      assert.deepEqual(decode.extras, {
        '&cent;': '¢',
        '&#162;': '¢',
        '&copy;': '©',
        '&#169;': '©',
        '&euro;': '€',
        '&#8364;': '€',
        '&pound;': '£',
        '&#163;': '£',
        '&reg;': '®',
        '&#174;': '®',
        '&yen;': '¥',
        '&#165;': '¥'
      });
    });

    it('should get all characters', function() {
      assert.deepEqual(decode.all, {
        '&quot;': '"',
        '&#34;': '"',
        '&apos;': '\'',
        '&#39;': '\'',
        '&#x27;': '\'',
        '&amp;': '&',
        '&#38;': '&',
        '&gt;': '>',
        '&#62;': '>',
        '&lt;': '<',
        '&#60;': '<',
        '&cent;': '¢',
        '&#162;': '¢',
        '&copy;': '©',
        '&#169;': '©',
        '&euro;': '€',
        '&#8364;': '€',
        '&pound;': '£',
        '&#163;': '£',
        '&reg;': '®',
        '&#174;': '®',
        '&yen;': '¥',
        '&#165;': '¥'
      });
    });
  });
});
