const minifyHtml = require("./transforms/minifyHtml");
const isProd = process.env.ENV === "production";

const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

module.exports = (config) => {
  config.setLibrary("md", markdownLib);

  // if (isProd) {
  //   config.addPlugin(minifyHtml);
  // }
};
