module.exports = (config) => {
  /**
   * Get the current year - copyright
   * @example {% year %}
   */
  config.addShortcode(
    "copyright",
    () => `&copy; ${new Date().getFullYear()} &nbsp;`
  );
  /**
   * Embed Youtube Url
   * @example title is optional
   * {% youtube "https://www.youtube.com/watch?v=1_47KVJV8DU", "The Song That Doesn't End" %}
   * @returns <iframe class="yt-shortcode" src="https://www.youtube-nocookie.com/embed/1_47KVJV8DU" title="YouTube video player for The Song That Doesn't End" frameborder="0" allowfullscreen=""></iframe>
   */
  config.addShortcode("youtube", (videoURL, title) => {
    const url = new URL(videoURL);
    const videoId = url.searchParams.get("v");
    return `<iframe class="shortcode__youtube" src="https://www.youtube-nocookie.com/embed/${videoId}" title="${
      title ? ` for ${title}` : ""
    }" frameborder="0" allowfullscreen></iframe>`;
  });
};
