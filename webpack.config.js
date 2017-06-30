var webpack = require('webpack');

module.exports = {
  entry: './reactApp/app.js',
  output: {
    path: __dirname + "/build",
    filename: "app.bundle.js"
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};