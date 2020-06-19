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

  // This is an attempt to fix an issue with LaTeX and JSON special characters
  // i.e.; \frac{} causes an error, because \f is invalid JSON.
  var result = replaceAll(plain, '\\', '');

  const lines = result.split('\n');

  const noHeader = lines.length ? lines.slice(1) : lines;
  const removedHeader = noHeader.join('\n');

  // Remove newlines
  result = removedHeader.replace(/\n/g, ' ');

  return `${result.slice(0, 145)}…`;
};
