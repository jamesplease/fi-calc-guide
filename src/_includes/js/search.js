var URLSearchParams = new URLSearchParams(window.location.search);
var search = URLSearchParams.get('q');

var resultsEl = document.querySelector('#search-results-list');

function createResult(result) {
  var container = document.createElement('div');
  container.className = 'result_container';

  var summary = document.createElement('div');
  summary.className = 'result_summary';
  summary.innerText = result.item.summary;

  var link = document.createElement('a');
  link.className = 'result_link';
  link.href = result.item.url;
  link.innerText = result.item.title;

  container.appendChild(link);
  container.appendChild(summary);

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

    var summary = document.createElement('div');
    summary.className = 'results_summary';

    var summaryText = result.length
      ? String(result.length) + ' pages were found for "' + search + '".'
      : 'No results were found for "' + search + '".';

    summary.innerText = summaryText;
    resultsEl.appendChild(summary);

    if (result && result.length) {
      result.forEach(function (result) {
        var el = createResult(result);
        resultsEl.appendChild(el);
      });
    }
  });
