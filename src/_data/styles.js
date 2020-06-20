const cssFilename = require('../utils/css-filename');

module.exports = function () {
  const filename = cssFilename();

  return {
    appCssFilename: filename,
  };
};
