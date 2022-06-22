/**
 * Codepen Embeds
 * @param {string} penUrl - codepen url.
 * @param {string} theme - optional: valid values Light, Dark, CustomThemeId -> pro feature - default: default
 * @param {string} tabs - optional: valid values html/html,result/css/css,result/js/js,result - default: result
 * @param {string} height - optional: default: 300

 * @example {% codepen 'url' %}
 */

// module.exports = (penUrl, theme, tabs, height) => {
//   const urlSplit = penUrl.split("/");

//   const profileUrlSplit = urlSplit.filter((string, index) => {
//     return index < urlSplit.length - 2 ? true : false;
//   });

//   const userName = profileUrlSplit[profileUrlSplit.length - 1];
//   const userProfile = profileUrlSplit.join("/");
//   const dataSlugHash = urlSplit[urlSplit.length - 1];

//   return `<p class="codepen" data-default-tab="${
//     tabs ? `${tabs}` : "result"
//   }" data-theme-id="${theme ? `${theme}` : "0"}  data-height="${
//     height ? `${height}` : "300"
//   }"  data-slug-hash="${dataSlugHash}" data-user="${userName}" style="height: 571px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
//     <span><a href="${penUrl}">See the pen</a> (<a href="${userProfile}">@${userName}</a>) on <a href="https://codepen.io">CodePen</a>.</span>
//     </p>
//     <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
// };
module.exports = (url, tabs = "result", height = "500", theme = "") => {
  const path = new URL(url).pathname;
  const id = path.split("/")[3];
  return `<p class="codepen" data-height="${height}" data-theme-id="${theme}" data-default-tab="${tabs}" data-slug-hash="${id}">
    <span><a href="${url}">See the Pen </a></p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;
};
