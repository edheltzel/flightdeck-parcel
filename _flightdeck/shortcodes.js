/**
 * Most shortcodes are handled by the 11ty plugin Embed Everything.
 * Anything found here are additional shortcodes specific to your project and not found in the plugin.
 */
const copyright = require("./shortcodes/copyright");
const codepen = require("./shortcodes/codepen");

module.exports = (config) => {
  config.addShortcode("copyright", copyright);
  config.addShortcode("codepen", codepen);
};
