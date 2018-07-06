require('mocha');
const assert = require('assert');
const decode = require('./');

describe('unescape', () => {
  describe('defaults', () => {
    it('should unescape all supported HTML entities', () => {
      assert.equal(decode('&quot;'), '"');
      assert.equal(decode('&#34;'), '"');
      assert.equal(decode('&apos;'), '\'');
      assert.equal(decode('&#39;'), '\'');
      assert.equal(decode('&amp;'), '&');
      assert.equal(decode('&#38;'), '&');
      assert.equal(decode('&gt;'), '>');
      assert.equal(decode('&#62;'), '>');
      assert.equal(decode('&lt;'), '<');
      assert.equal(decode('&#60;'), '<');
      assert.equal(decode('&cent;'), '¢');
      assert.equal(decode('&#162;'), '¢');
      assert.equal(decode('&copy;'), '©');
      assert.equal(decode('&#169;'), '©');
      assert.equal(decode('&euro;'), '€');
      assert.equal(decode('&#8364;'), '€');
      assert.equal(decode('&pound;'), '£');
      assert.equal(decode('&#163;'), '£');
      assert.equal(decode('&reg;'), '®');
      assert.equal(decode('&#174;'), '®');
      assert.equal(decode('&yen;'), '¥');
      assert.equal(decode('&#165;'), '¥');
    });

    it('should support template tag literals', () => {
      assert.equal(decode`&#34;`, '"');
    });

    it('should support template tag literals with variables', () => {
      const chars = '&lt;div&gt;abc&lt;/div&gt;';
      assert.equal(decode`testing ${chars}`, 'testing <div>abc</div>');
      assert.equal(decode`testing ${chars} testing`, 'testing <div>abc</div> testing');
      assert.equal(decode`${chars} testing ${chars}`, '<div>abc</div> testing <div>abc</div>');
    });
  });

  describe('characters', () => {
    it('should get an object of all supported HTML entities', () => {
      assert.deepEqual(decode.chars, {
        '&quot;': '"',
        '&#34;': '"',
        '&#034;': '"',
        '&apos;': '\'',
        '&#39;': '\'',
        '&#039;': '\'',
        '&amp;': '&',
        '&#38;': '&',
        '&#038;': '&',
        '&gt;': '>',
        '&#62;': '>',
        '&#062;': '>',
        '&lt;': '<',
        '&#60;': '<',
        '&#060;': '<',
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
        '&#165;': '¥',
        '&nbsp;': '\n',
        '&#160;': '\n'
      });
    });
  });
});
