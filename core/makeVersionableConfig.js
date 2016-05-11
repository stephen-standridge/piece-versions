var webpack = require('webpack');
var VersionFile = require('./webpack-plugin');
var mergeWebpackConfig = require('webpack-config-merger');


module.exports = function makeVersionableConfig(config){
  var pieceName = config.output.filename.split('.')[0];

  return mergeWebpackConfig( config, {
    watch: false,
    output: {
      path: 'pieces/dist/'+pieceName+'/[hash]',
      filename: pieceName+ '.js',
      publicPath: '/'
    },
    plugins: [
      new VersionFile({
        name: pieceName
      })
    ]
  } )
};
