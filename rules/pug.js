const pug = {
  test: /\.pug$/,
  oneOf: [
    {
      resourceQuery: /^\?vue/,
      use: ['pug-plain-loader']
    }, {
      use: [
        'html-loader?minimize=false',
        'pug-html-loader?pretty=true'
      ]
    }
  ]
};

module.exports = pug;