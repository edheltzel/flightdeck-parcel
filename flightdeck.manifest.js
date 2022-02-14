// const htmlmin = require('html-minifier');

module.exports = {
  assets: './assets/',
  sass: {
    src: './src/_scss/**/*.scss',
    dest: './_site/assets/css',
  },
  js: {
    src: './src/assets/js/',
    dest: './_site/assets/css',
  },
  img{
    src: './src/assets/images',
    dest: './src/assets/images', //11ty addPassthroughCopy will move this
  }
  bs: {
    notify: true,
    open: true,
  },
};
