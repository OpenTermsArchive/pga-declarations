export function useXHelpCenterBaseURL(document) {
  const TwitterHelpCenterBaseURL = 'https://help.twitter.com';
  const XHelpCenterBaseURL = 'https://help.x.com';

  document.querySelectorAll(`a[href^="${TwitterHelpCenterBaseURL}"]`).forEach(link => {
    link.href = link.href.replace(TwitterHelpCenterBaseURL, XHelpCenterBaseURL);
  });
}
