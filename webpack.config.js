const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fonts = require('./rules/fonts.js');
const ico = require('./rules/ico.js');
const img = require('./rules/img.js');
const pug = require('./rules/pug.js');
const sass = require('./rules/sass.js');
const vue = require('./rules/vue.js');

module.exports = {
  // mode: 'development',
  mode: 'production',

  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
    // splitChunks: {
    //   chunks: 'all',
    // }
  },

  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },

  module: {
    rules: [
      fonts,
      ico,
      img,
      pug,
      sass,
      vue,
    ],
  },

  plugins: [

    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pug/index.pug',
      minify: false,
      inject: false,
    }),

    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/pug/about.pug',
      minify: false,
      inject: false,
    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),

  ]
};
