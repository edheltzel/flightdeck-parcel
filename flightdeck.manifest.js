const path = require('path');
const assetPath = '/assets/';
const inputDest = './src';
const buildDest = './_site';

module.exports = {
  input: inputDest,
  output: buildDest,
  assets: assetPath,

  css: {
    scss: {
      src: '_scss',
    },
    src: 'css',
    dest: 'css',
  },
  js: {
    src: 'js',
    dest: 'js',
  },
  images: {
    src: 'images',
    dest: 'images',
  },
  fonts: {
    src: 'fonts',
    dest: 'fonts',
  },
};
