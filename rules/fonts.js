const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts',
        publicPath: '/fonts'
      }
    }
  ]
};

module.exports = fonts;