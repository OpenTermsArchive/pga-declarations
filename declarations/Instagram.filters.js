export const replaceInfoImageWithEmoji = document => {
  const infoImages = document.querySelectorAll('img[src*="/851547_537948159656190_540847388_n.png?"]');

  infoImages.forEach(infoImage => {
    infoImage.replaceWith('ℹ️');
  });
};

export function removeTrackingIDs(document) {
  document.querySelectorAll('a').forEach(el => {
    const href = el.getAttribute('href');
    const params = new URLSearchParams(href);

    if (params.has('h')) {
      params.set('h', 'removed');
      el.setAttribute('href', params.toString());
    }
  });
}

export function cleanUrls(document) {
  Array.from(document.querySelectorAll('[href="#"]')).map(link => link.removeAttribute('href'));
  const links = document.querySelectorAll('[href*="https://l.instagram.com/?"],[href*="http://l.instagram.com/?"]');

  links.forEach(link => {
    link.href = decodeURIComponent(link.href.replace(/&h=\S*/, '').replace(/(\S*)\?u=(\S*)/, '$2'));
  });
}
