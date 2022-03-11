const htmlmin = require('html-minifier');
const prettier = require('prettier');

module.exports = function (content, outputPath) {
  if (outputPath.endsWith('.html')) {
    if (process.env.ELEVENTY_PRODUCTION) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    } else {
      return prettier.format(content, { parser: 'html' });
    }
  }
  return content;
};
