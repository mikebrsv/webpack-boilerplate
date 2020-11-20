const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sass = {
  test: /\.s[ac]ss$/i,
  oneOf: [
    {
      resourceQuery: /^\?vue/,
      use: [
        // 'vue-style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        // 'sass-loader',
        {
          loader: 'sass-loader',
          options: {
            // indentedSyntax: true,
            sassOptions: {
              indentedSyntax: true
            }
          }
        }
      ]
    }, {
      use: [

        // process.env.NODE_ENV !== 'production'
        // // Creates `style` nodes from JS strings
        // ? 'style-loader'
        // : MiniCssExtractPlugin.loader,
        
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    }
  ]

};

module.exports = sass;