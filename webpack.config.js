const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

function htmlPublish() {
  return new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html'
  });
}

module.exports = {
  entry: {
    main: './demo/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'built'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['babel-plugin-transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader?sourceMap=true' ])
      },
      {
        test: /\.tpl$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $ : 'jquery',
      Backbone : 'backbone',
      Mn : 'backbone.marionette',
      _ : 'underscore'
    }),
    extractCSS,
    htmlPublish(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['./ga', 'jquery', 'backbone'],
      filename: 'vendor',
      minChunks: Infinity
    })
  ],

  devtool: 'source-map',
  devServer: { inline: true, port: 3000 },
  resolve: {
    alias: {
      demo: path.resolve(__dirname, 'demo')
    }
  }
};
