const manageStyles = require('../utils/manage-styles');

module.exports = class {
  async data() {
    const permalink = await manageStyles.getFilename();

    return {
      permalink,
    };
  }

  async render() {
    return await manageStyles.getContents();
  }
};
