const mk = require('@traptitech/markdown-it-katex');

module.exports = function (config) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  const md = markdownIt(options);
  md.use(mk, {"blockClass": "math-block", "errorColor" : " #cc0000"})

  config.setLibrary("md",md );

  config.addLayoutAlias('default', 'layouts/page-layout.njk');
  config.addPassthroughCopy({ 'src/public': "." });
  config.addPassthroughCopy({ "src/fonts": "css" });
  config.addPassthroughCopy({ "src/css/katex.*.css": "css" });
  config.addTransform("htmlmin", require("./utils/minify-html.js"));
};
