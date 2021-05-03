const sanitizeHtml = require('sanitize-html');

//
// Generating the search is quite complex.
// It works like this:
//
// 1. The HTML files of every file in the app app are passed here as text
// 2. They are sanitized so that all HTML is removed
// 3. They are sanitized so that they can all exist as values within a JSON document
// 4. This final string is returned from this file
//
// That's step 1.
// Next, these strings are loaded via a Nunjucks template (search.njk) into a dynamically-generated
// JSON document. The `summary` field of this is unescaped, as we escaped the strings here.
// This file is then loaded over the network when the search page loads.
//
module.exports = function (text) {
  var content = new String(text);

  // This ensures that we can render out these strings as HTML directly, without
  // escaping them in the template.
  var sanitized = sanitizeHtml(content, {
    allowedTags: [],
    allowedAttributes: {},
  });

  const lines = sanitized.split('\n');

  const noHeader = lines.length ? lines.slice(1) : lines;
  const removedHeader = noHeader.join('\n');

  // Remove newlines
  sanitized = removedHeader.replace(/\n/g, ' ');

  // First, we sanitize the string so that it is guaranteed to be a valid JSON value
  // using JSON.stringify
  sanitized = JSON.stringify(sanitized)
    // Then, we slice out the quotes that JSON.stringify introduces
    .slice(1, -1);

  const MAX_LENGTH = 145;

  let result;
  if (sanitized.length >= MAX_LENGTH) {
    result = `${sanitized.slice(0, 145)}…`;
  } else {
    result = sanitized;
  }

  return result;
};
