const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

let contents;
let filename;

const manageStyles = {
  async getContents() {
    if (contents) {
      return contents;
    }

    const rawFilepath = path.join(__dirname, `../_includes/css/app.css`);
    const rawCss = fs.readFileSync(rawFilepath);

    const fullContents = await postcss([
      // require('postcss-comment'),
      require('precss'),
      require('postcss-import'),
      require('cssnano'),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);

    contents = fullContents;
    return fullContents;
  },

  async getFilename() {
    if (filename) {
      return filename;
    }

    if (process.env.ELEVENTY_ENV === 'dev') {
      const name = '/css/app.css';
      filename = name;
      return name;
    }

    const contents = await manageStyles.getContents();
    const hash = crypto.createHash('sha256');
    hash.update(contents);
    const piece = hash.digest('hex');

    const name = `/css/app-${piece.slice(0, 14)}.css`;
    filename = name;
    return name;
  },
};

module.exports = manageStyles;
