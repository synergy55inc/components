var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/assets/js/index.js',

  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: path.join(__dirname, './public/assets/js'), loader: 'babel-loader' }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'tmp', 'public/src']
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'underscore'
//      templates: './jst/templates'
    })
  ]
};
