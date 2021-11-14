const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    //#region PassThrough

    eleventyConfig.addPassthroughCopy('./src/404.html');
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    eleventyConfig.addPassthroughCopy('./src/markdown.js');
    eleventyConfig.addPassthroughCopy('./src/popupNotification.js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/content');

    //#endregion

    //#region  Filters

    eleventyConfig.addFilter("projectDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    //#endregion

    // base config
    return {
        dir : {
            input : "src",
            output : "public"
        }
    };
}
