'use strict';

//dynamic script and style tags
const HTMLPlugin = require('html-webpack-plugin');

//make a separate CSS bundle
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //load this and everything it needs
  entry: `${__dirname}/src/main.js`,

  devtool: 'source-map',

  //stick it into the "path" folder with that file name
  output: {
    //everytime it builds the hash will change so that you always know that you are in the latest build
    //when your browser refreshes it will always get the latest hash and refresh itself with the new codes
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`
  },

  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/src/index.html`
    }),
    new ExtractPlugin('bundle.[hash].css')
  ],

  module: {
    rules: [
      //if it's a .js file and not in node_modules, use the babel-loader
      {
        //$ means 'ends with'
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      //if it's a .scss file
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          //these get loaded in reverse order and the output of one pipes into the other (think of a then)
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap:true
              }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths:[`${__dirname}/src/style`]
              }
            }
          ]
        })
      },
      //if it
    ]
  }
};
