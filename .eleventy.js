module.exports = function (eleventyConfig) {


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
