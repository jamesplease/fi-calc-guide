const URLSearchParams = new URLSearchParams(window.location.search);
const search = URLSearchParams.get('q');

const resultsEl = document.querySelector('#search-results-list');
const searchInputElement = document.querySelector('.header_searchInput');

searchInputElement.value = search;

function createResult(result) {
  const container = document.createElement('div');
  container.className = 'result_container';

  const summary = document.createElement('div');
  summary.className = 'result_summary';
  summary.innerText = result.item.summary;

  const link = document.createElement('a');
  link.className = 'result_link';
  link.href = result.item.url;

  const title = result.item.url === '/' ? 'Home' : result.item.title;
  link.innerText = title;

  container.appendChild(link);
  container.appendChild(summary);

  return container;
}

fetch('/search.json')
  .then((res) => res.json())
  .then((siteIndex) => {
    const options = {
      includeScore: true,
      keys: ['title', 'index'],
    };

    const fuse = new Fuse(siteIndex, options);
    const result = fuse.search(search);

    const summary = document.createElement('div');
    summary.className = 'results_summary';

    const summaryText = result.length
      ? String(result.length) + ' pages were found for "' + search + '".'
      : 'No results were found for "' + search + '".';

    summary.innerText = summaryText;
    resultsEl.appendChild(summary);

    if (result && result.length) {
      result.forEach((result) => {
        const el = createResult(result);
        resultsEl.appendChild(el);
      });
    }
  });
