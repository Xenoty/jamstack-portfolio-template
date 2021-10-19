const { DateTime } = require("luxon");
// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

    //#region PassThrough

    eleventyConfig.addPassthroughCopy('./src/404.html');
    eleventyConfig.addPassthroughCopy('./src/netlify.toml');
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/content');

    //#endregion

    //#region  Filters

    eleventyConfig.addFilter("projectDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    //#endregion

    //#region plugins

    //  eleventyConfig.addPlugin(syntaxHighlight, {
    //     trim: true,
    // });

    //#endregion

    // base config
    return {
        dir : {
            input : "src",
            output : "public"
        }
    };
}
