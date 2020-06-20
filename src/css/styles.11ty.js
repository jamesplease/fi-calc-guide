const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssFilename = require('../utils/css-filename');

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = 'app.css';

module.exports = class {
  data() {
    const rawFilepath = path.join(__dirname, `../_includes/css/${fileName}`);
    const rawCss = fs.readFileSync(rawFilepath);
    const filename = cssFilename();

    return {
      permalink: filename,
      rawFilepath,
      rawCss,
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      // require('postcss-comment'),
      require('precss'),
      require('postcss-import'),
      require('cssnano'),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};
