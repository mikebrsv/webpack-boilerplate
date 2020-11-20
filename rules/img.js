const img = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'img',
        publicPath: '/img'
      }
    }
  ]
};

module.exports = img;