let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts("resources/assets/ts/App.tsx", "public/js")
  .react()
  .sass("resources/assets/sass/app.scss", "public/css")
  .browserSync({
    files: [
      "resources/**/*",
      "resources/**/**/*",
      "resources/**/**/**/*",
      "config/**/*",
      "routes/**/*",
      "app/**/*",
      "public/**/*",
    ],
    proxy: {
      target: "http://localhost:80",
    },
  })
  .disableSuccessNotifications()
  .version();
