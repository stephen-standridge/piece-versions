var webpack = require('webpack');
var VersionFile = require('./webpack-plugin');
var mergeWebpackConfig = require('webpack-config-merger');


module.exports = function makeVersionableConfig(config){
  var pieceNames = config.output.filename.split('/');
  var pieceName = pieceNames[pieceNames.length - 1 ].split('.')[0];
  return mergeWebpackConfig( config, {
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
