/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            bypassOnDebug: true,
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
          },
        }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ],
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true,
  },
}

