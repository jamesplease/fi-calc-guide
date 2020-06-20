const manageStyles = require('../utils/manage-styles');

module.exports = async function () {
  const filename = await manageStyles.getFilename();

  return {
    appCssFilename: filename,
  };
};
