// Removes excluded items from the search results
module.exports = function (arr) {
  return arr.filter((item) => !item.data.excludeFromSearch);
};
