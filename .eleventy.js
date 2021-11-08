const { DateTime } = require("luxon");
// const yaml = require("js-yaml");
// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

    //#region PassThrough

    eleventyConfig.addPassthroughCopy('./src/404.html');
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    eleventyConfig.addPassthroughCopy('./src/markdown.js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/content');

    //#endregion

    //#region  Filters

    eleventyConfig.addFilter("projectDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    //#endregion

    //#region Extensions

    // eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    //#endregion

    // base config
    return {
        dir : {
            input : "src",
            output : "public"
        }
    };
}
