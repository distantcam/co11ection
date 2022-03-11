const fs = require("fs");

module.exports = function (eleventyConfig) {
  // Transforms
  eleventyConfig.addTransform("html", require("./src/_11ty/html-transform"));

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/assets/static": "." });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/");

  // GutHub hosting support
  var pathPrefix = "";
  if (process.env.GITHUB_REPOSITORY) {
    pathPrefix = process.env.GITHUB_REPOSITORY.split("/")[1];
  }

  return {
    dir: {
      input: "src",
    },
    pathPrefix,
  };
};
