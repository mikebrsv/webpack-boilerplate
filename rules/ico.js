const ico = {
  test: /\.(ico)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: '/',
        publicPath: '/img'
      }
    }
  ]
};

module.exports = ico;