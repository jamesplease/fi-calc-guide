module.exports = function (config) {
  config.addLayoutAlias('default', 'layouts/page-layout.njk');
  config.addPassthroughCopy({ 'src/public': "." });
  config.addTransform("htmlmin", require("./utils/minify-html.js"));
};
