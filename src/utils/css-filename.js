const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

module.exports = async function () {
  const rawFilepath = path.join(__dirname, `../_includes/css/app.css`);
  const rawCss = await fs.readFileSync(rawFilepath);

  const hash = crypto.createHash('sha256');
  hash.update(rawCss);
  const piece = hash.digest('hex');

  return `css/app-${piece.slice(0, 14)}.css`;
};
