export function removeDownloadedForUseLinkExtension(document) {
  document.querySelectorAll('a').forEach(el => {
    if (el.innerHTML === 'downloaded for use') {
      const href = el.getAttribute('href');
      const cleanedHref = href.replace('.html', '');

      el.setAttribute('href', cleanedHref);
    }
  });
}

export function removeTrackingIDs(document) {
  removeQueryParam(document, '?trk=microsites-frontend_legal_privacy-policy&lang=en');
}

function removeQueryParam(document, queryParam) {
  document.querySelectorAll('a').forEach(el => {
    const href = el.getAttribute('href');
    const params = new URLSearchParams(href);

    if (params.has(queryParam)) {
      params.delete(queryParam);
      el.setAttribute('href', params.toString());
    }
  });
}

