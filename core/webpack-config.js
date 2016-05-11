var webpack = require('webpack');
var VersionFile = require('./webpack-plugin');

module.exports = function makeVersionableConfig(name){
  return {
    output: {
      path: 'pieces/'+name+'/[hash]',
      filename: name+ '.js',
      publicPath: '/'
    },
    plugins: [
      new VersionFile({
        name: name
      })
    ]
  }
};
