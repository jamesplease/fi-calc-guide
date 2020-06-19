var URLSearchParams = new URLSearchParams(window.location.search);
var search = URLSearchParams.get('q');

var resultsEl = document.querySelector('#search-results-list');

function createResult(result) {
  var container = document.createElement('div');
  container.className = 'result_container';

  // var title = document.createElement('div');
  // title.className = 'result_title';
  // title.innerText = result.item.title;

  var link = document.createElement('a');
  link.href = result.item.url;
  link.innerText = result.item.title;

  // container.appendChild(title);
  container.appendChild(link);

  return container;
}

fetch('/search.json')
  .then(function (res) {
    return res.json();
  })
  .then(function (siteIndex) {
    var options = {
      includeScore: true,
      // Search in `author` and in `tags` array
      keys: ['title', 'index'],
    };

    var fuse = new Fuse(siteIndex, options);
    var result = fuse.search(search);

    console.log('got it', result[0]);

    const summary = document.createElement('div');
    summary.className = 'results_summary';
    summary.innerText = `${result.length} pages were found for "${search}".`;
    resultsEl.appendChild(summary);

    if (result && result.length) {
      result.forEach(function (result) {
        var el = createResult(result);
        resultsEl.appendChild(el);
      });
    }
  });
