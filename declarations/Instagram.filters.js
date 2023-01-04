export const replaceInfoImageWithEmoji = document => {
  const infoImages = document.querySelectorAll('img[src*="/851547_537948159656190_540847388_n.png?"]');

  infoImages.forEach(infoImage => {
    infoImage.replaceWith('ℹ️');
  });
};

export function cleanUrls(document) {
  Array.from(document.querySelectorAll('[href="#"]')).map(link => link.removeAttribute('href'));
  const links = document.querySelectorAll('[href*="https://l.instagram.com/?"],[href*="http://l.instagram.com/?"]');

  links.forEach(link => {
    link.href = decodeURIComponent(link.href.replace(/&h=\S*/, '').replace(/(\S*)\?u=(\S*)/, '$2'));
  });
}

export function removeRefParam(document) {
  removeQueryParam(document, 'ref');
}

export function removeHelprefQueryParam(document) {
  removeQueryParam(document, 'helpref');
}

export function removeTrackingIDs(document) {
  removeQueryParam(document, 'h');
}

export function removeTrackingIDsE(document) {
  removeQueryParam(document, 'e');
}

export function removeLocaleQueryParam(document) {
  removeQueryParam(document, 'locale2');
}

export function removeRevisionQueryParam(document) {
  removeQueryParam(document, 'revision');
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

export function removeLinks(document) {
  const elements = document.querySelectorAll('a');

  elements.forEach(element => {
    if (element.hasAttribute('href')) {
      element.removeAttribute('href');
    }
  });
}
