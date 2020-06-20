const cssFilename = require('../utils/css-filename');

module.exports = async function () {
  const filename = await cssFilename();

  return {
    appCssFilename: filename,
  };
};
