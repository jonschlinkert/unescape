/*!
 * unescape <https://github.com/jonschlinkert/unescape>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */


'use strict';


/**
 * Convert HTML entities to HTML characters.
 *
 * @param  {String} `str` String with HTML entities to un-escape.
 * @return {String}
 */

var unescape = module.exports = function (str) {
  if (str == null) return '';

  var re = new RegExp('(' + Object.keys(chars)
    .join('|') + ')', 'g');

  return String(str).replace(re, function (match) {
    return chars[match];
  });
};


var chars = unescape.chars = {
  '&#39;': '\'',
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"'
};
