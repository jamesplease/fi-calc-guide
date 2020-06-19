const mk = require('@traptitech/markdown-it-katex');

module.exports = function (config) {
  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    linkify: false,
  };

  config.addFilter('squash', require('./src/utils/squash.js'));
  config.addFilter('summary', require('./src/utils/summary.js'));

  const md = markdownIt(options);
  md.use(mk, { blockClass: 'math-block', errorColor: ' #cc0000' });

  config.setLibrary('md', md);

  config.addFilter('jsmin', function (code) {
    const UglifyJS = require('uglify-js');
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error);
      return code;
    }
    return minified.code;
  });

  config.addLayoutAlias('default', 'layouts/page-layout.njk');
  config.addPassthroughCopy({ 'src/public': '.' });
  config.addPassthroughCopy({ 'src/fonts': 'css' });
  config.addPassthroughCopy({ 'src/css/katex.*.css': 'css' });
  config.addTransform('htmlmin', require('./utils/minify-html.js'));
};
