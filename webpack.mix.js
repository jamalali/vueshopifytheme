const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

function TailwindExtractor (content) {
  return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
}

mix.options({ processCssUrls: false });
mix.setPublicPath('./');

mix
  .js('resources/assets/js/app.js', 'assets/app.js').vue()
  .postCss('resources/assets/css/main.css', 'assets/main.css', [
    tailwindcss('./tailwind.config.js')
  ]);

// Can't set subfolder due to Shopify asset deployment limitations.
mix.webpackConfig({
  output: {
    chunkFilename: 'assets/[name].chunk.[contenthash:5].js'
  }
});

if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new PurgecssPlugin({
        // Specify the locations of any files you want to scan for class names.
        paths: glob.sync([
          path.join(__dirname, './**/*.liquid'),
          path.join(__dirname, './**/*.vue')
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,

            // Specify the file extensions to include when scanning for
            // class names.
            extensions: ['html', 'js', 'liquid', 'vue']
          }
        ]
      })

      // To strip all locales except “en”
      //new MomentLocalesPlugin()
    ]
  });
}

mix.extract();
