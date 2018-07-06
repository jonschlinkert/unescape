let regexCache = null;
const charSets = {
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
};

/**
 * Transforms charactersets to regex for string replacement
 * @param {String} type Type of chars to parse, either `default`, `extra` or `all`
 * @param {String} chars Character set to parse
 */
const toRegex = (chars) => {
  if (regexCache) {
    return regexCache;
  }
  const keys = Object.keys(chars).join('|');
  const regex = new RegExp('(?=(' + keys + '))\\1', 'g');
  regexCache = regex;
  return regex;
};

/**
 * Convert HTML entities to HTML characters.
 * @param  {String} `str` String with HTML entities to un-escape.
 * @return {String}
 */
const unescape = (strings, ...values) => {
  const regex = toRegex(charSets);
  let str = '';

  if (typeof (strings) === 'object') {
    strings.forEach((string, i) => {
      if (values[i]) {
        values[i] = values[i].replace(regex, (m) => {
          return charSets[m];
        });
      } 
      string = string.replace(regex, (m) => {
        return charSets[m];
      });
      str += string + (values[i] || '');
    });
  } else {
    str = strings.replace(regex, (m) => {
      return charSets[m];
    });
  }

  return str;
};

/**
 * Expose charSets
 */

unescape.chars = charSets.default;
unescape.extras = charSets.extras;

/**
 * Expose `unescape`
 */

module.exports = unescape;
