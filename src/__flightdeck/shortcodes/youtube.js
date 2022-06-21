/**
 * YouTube Embeds
 * @param {string} videoURL - youtube url.
 * @param {string} title - optional: any custom title
 * @returns {string} - title attribute is prepended with "YouTube video player" regardless
 * @example {% youtube "https://www.youtube.com/watch?v=1_47KVJV8DU", "The Song That Doesn't End" %}
 *
 */
module.exports = (videoURL, title) => {
  const url = new URL(videoURL);
  const videoId = url.searchParams.get("v");
  return `<iframe class="shortcode__youtube" src="https://www.youtube-nocookie.com/embed/${videoId}" title="${
    title ? ` for ${title}` : ""
  }" frameborder="0" allowfullscreen></iframe>`;
};
