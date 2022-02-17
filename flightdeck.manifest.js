module.exports = {
  assets: {
    path: './src/assets',
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
  },
  workflow: {
    bs: {
      notify: true,
      open: true,
    },
  },
};
