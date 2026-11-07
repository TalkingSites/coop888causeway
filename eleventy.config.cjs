module.exports = (eleventyConfig) => {
  const config = require("spaceclub")(eleventyConfig);
  // keeps "Co-operative" on one line in big headings
  eleventyConfig.addFilter("nbhyphen", (s) => String(s).replace(/([\w-]*-[\w-]*)/g, '<span class="nb">$1</span>'));
  return config;
};
