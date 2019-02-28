const path = require('path');

module.exports = {
    entry: './client/main.jsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './client/dist')
    },
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      contentBase: '/',
      hot: true
    },
    module: {
      rules: [
        {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,
        query: {
          presets: ['react', 'env'],
          }
        },
        {
        test: /\.scss$/, 
        use: [
          "style-loader", //compiles styles
          "css-loader", //compiles css
          "sass-loader", //compiles scss
        ]
      } 
      ]
    },
}