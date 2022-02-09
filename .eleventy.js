module.exports = function (eleventyConfig) {
  // watch for changes
  eleventyConfig.addWatchTarget('./src/_scss');

  // copy stuff
  eleventyConfig.addPassthroughCopy('./src/assets/css');

  // workflow
  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });
  return {
    dir: {
      input: 'src',
      output: '_site', // default
    },
  };
};
