export function useXHelpCenterBaseURL(document) {
  const TwitterHelpCenterBaseURL = 'https://help.twitter.com';
  const XHelpCenterBaseURL = 'https://help.x.com';

  document.querySelectorAll(`a[href^="${TwitterHelpCenterBaseURL}"]`).forEach(link => {
    link.href = link.href.replace(TwitterHelpCenterBaseURL, XHelpCenterBaseURL);
  });

  document.querySelectorAll('a[rel*="nofollow"]').forEach(link => {
    const textNode = document.createTextNode(link.textContent);

    link.parentNode.replaceChild(textNode, link);
  });
}
