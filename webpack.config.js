var path = require('path');
module.exports = {
  entry: './public/assets/js/test/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: path.join(__dirname, 'public/assets/js/test'), loader: 'babel-loader' }
    ]
  }
};
