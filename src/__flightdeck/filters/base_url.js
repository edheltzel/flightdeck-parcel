/**
 * Prefixes the given URL with the site's base URL.
 * @example {{ page.url | domain }}
 */
module.exports = (url) => {
  return new URL(url, site.baseUrl).href;
};
