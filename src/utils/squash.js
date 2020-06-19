/* Source: Eleventyone

https://github.com/philhawksworth/eleventyone/blob/master/src/utils/filters/squash.js

*/

/**
 * Make a search index string by removing duplicated words
 * and removing less useful, common short words
 *
 * @param {String} text
 */

function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

module.exports = function (text) {
  var content = new String(text);

  // remove all html elements
  var re = /(<.+?>)/gi;
  var plain = content.replace(re, '');
  re = /(&.+?;)/gi;
  plain = plain.replace(re, '');

  // remove duplicated words
  var words = plain.split(' ');
  var deduped = [...new Set(words)];
  var dedupedStr = deduped.join(' ');

  // remove short and less meaningful words
  var result = dedupedStr.replace(
    /\b(\.|\,|the|a|an|and|am|all|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi,
    ''
  );

  // This is an attempt to fix an issue with LaTeX and JSON special characters
  // i.e.; \frac{} causes an error, because \f is invalid JSON.
  result = replaceAll(result, '\\', '');

  //remove newlines, and punctuation
  result = result.replace(/\.|\,|\?|-|—|\n/g, '');
  //remove repeated spaces
  result = result.replace(/[ ]{2,}/g, ' ');

  return result;
};
