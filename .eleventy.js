// util
const fd = require('./flightdeck.manifest');

// plugins

// common and custom shortcodes, filters, transforms
const addFilters = require('./src/__flightdeck/filters');
const addShortcodes = require('./src/__flightdeck/shortcodes');
const addTransforms = require('./src/__flightdeck/transforms');

const htmlmin = require('html-minifier');

module.exports = function (config) {
  addFilters(config)
  addTransforms(config)
  addShortcodes(config)
  //custom watch targets
  // watch for changes
  config.addWatchTarget(fd.assets.scss.src);

  // copy stuff
  config.addPassthroughCopy(fd.assets.images);

  // layout aliases
  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk'); // consider using nunjucks extend
  config.addLayoutAlias('page', 'layouts/page.njk'); // consider using nunjucks extend

  // add collections

  // //minify html only for in production
  // const isProd = process.env.ELEVENTY_ENV === 'prod';
  // const minifyHtml = function (value, outputPath) {
  //   if (outputPath && outputPath.indexOf('.html') > -1) {
  //     return htmlmin.minify(value, {
  //       collapseWhitespace: true,
  //       collapseInlineTagWhitespace: true,
  //       minifyCSS: true,
  //       removeComments: true,
  //       userShortDoctype: true,
  //     });
  //   }
  // };

  // if (isProd) {
  //   config.addTransform('htmlmin', minifyHtml);
  // }

  // launch browser on start
  config.setBrowserSyncConfig(fd.workflow.bs);

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
