"use strict";

// const chalk = require("chalk");
// const cleanCss = require("clean-css");
const fs = require("fs");
// const glob = require("glob");
// const markdownIt = require("markdown-it");
// const moment = require("moment");
// const path = require("path");
// const pluginInjector = require("@infinity-interactive/eleventy-plugin-injector");
// const sass = require("sass");
// const slugify = require("slugify");

module.exports = function (config) {
  // const sassFiles = ["site.scss"];
  // const cssFiles = glob.sync("css/**/*.css");

  // const watchFiles = [...sassFiles, ...cssFiles];

  // config.addPlugin(pluginInjector, {
  //   watch: watchFiles,
  //   inject: (eleventyInstance, options, file) => {
  //     if (file) {
  //       if (file.match(/\.scss$/)) {
  //         _compile_sass(eleventyInstance.outputDir, file);
  //       } else if (file.match(/\.css$/)) {
  //         _minify_css(eleventyInstance.outputDir, file);
  //       } else {
  //         console.error(
  //           chalk.red(`** ERROR: don't know how to process ${file}!`)
  //         );
  //       }
  //     }
  //   },
  // });

  config.setDataDeepMerge(true);

  // modify markdown-it options
  // config.setLibrary(
  //   "md",
  //   markdownIt({
  //     html: true,
  //     linkify: true,
  //     typographer: true,
  //   })
  // );

  // change browser-sync port
  config.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) => {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
  });

  // these directories should just be copied wholesale, not processed
  for (const dir of ["assets"]) {
    config.addPassthroughCopy(dir);
  }
  // for (const file of [
  //   "android-chrome-192x192.png",
  //   "android-chrome-256x256.png",
  //   "apple-touch-icon.png",
  //   "apple-touch-icon-precomposed.png",
  //   "browserconfig.xml",
  //   "favicon.ico",
  //   "favicon-16x16.png",
  //   "favicon-32x32.png",
  //   "john-sj-anderson-resume-20200311.pdf",
  //   "mstile-150x150.png",
  //   "google7bc9d816c08a3a4a.html",
  //   "keybase.txt",
  //   "robots.txt",
  //   "site.webmanifest",
  // ]) {
  //   config.addPassthroughCopy(file);
  // }

  // filters
  //// current year (for footer)
  // config.addShortcode("currentYear", () => moment().format("YYYY"));

  //// https://github.com/11ty/eleventy/issues/278
  // config.addFilter("slugify", (input) =>
  //   slugify(input, {
  //     replacement: "-",
  //     remove: /[#&,+()$~%.'":*?<>{}]/g,
  //     lower: true,
  //   })
  // );

  return { templateFormats: ["md", "html"] };
};

// function _compile_sass(dir, file) {
//   const outputFile = path.join(dir, "css", file.replace(/\.scss$/, ".css"));
//   console.log(chalk.yellow(`Compiling ${outputFile} from ${file}`));

//   _maybeMkdir(outputFile);

//   const renderedSass = sass.renderSync({ file });
//   const renderedCss = renderedSass.css.toString();
//   const minifiedCss = new cleanCss({}).minify(renderedCss).styles;

//   _writeFile(outputFile, minifiedCss);
// }

// function _maybeMkdir(file) {
//   const dir = path.dirname(file);
//   if (!fs.existsSync(dir)) {
//     console.log(chalk.yellow(`-- Creating ${dir} for ${file}`));
//     try {
//       fs.mkdirSync(dir, { recursive: true });
//     } catch (error) {
//       console.error(chalk.red(`** Error making directory:\n${error}`));
//     }
//   }
// }

// function _minify_css(dir, file) {
//   const outputFile = path.join(dir, file);
//   console.log(chalk.yellow(`Minifying ${outputFile} from ${file}`));

//   _maybeMkdir(outputFile);

//   const css = fs.readFileSync(file, "utf8");
//   const minifiedCss = new cleanCss({}).minify(css).styles;

//   _writeFile(outputFile, minifiedCss);
// }

// function _writeFile(file, content) {
//   try {
//     fs.writeFileSync(file, content);
//   } catch (error) {
//     console.error(chalk.red(`** Error writing file:\n${error}`));
//   }
// }
