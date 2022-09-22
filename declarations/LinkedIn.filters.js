export function removeDownloadedForUseLinkExtenstion(document) {
  document.querySelectorAll('a').forEach(el => {
    if (el.innerHTML === 'downloaded for use') {
      const href = el.getAttribute('href');
      const cleanedHref = href.replace('.html', '');

      el.setAttribute('href', cleanedHref);
    }
  });
}
