var path = require('path');
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
  }
};
