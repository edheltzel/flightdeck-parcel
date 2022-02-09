const fd = require('./flightdeck.manifest');
module.exports = function (eleventyConfig) {
  // watch for changes
  eleventyConfig.addWatchTarget(fd.sass.src);

  // copy stuff
  eleventyConfig.addPassthroughCopy('./src/assets/css');
  eleventyConfig.addPassthroughCopy('./src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');

  // add collections

  // workflow
  eleventyConfig.setBrowserSyncConfig(fd.bs);
  return {
    dir: {
      input: 'src',
      output: '_site', // default
    },
  };
};
