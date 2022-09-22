export function removeLinks(document) {
  Array.from(document.querySelectorAll('[href]')).map(link =>
    link.removeAttribute('href'));
}
