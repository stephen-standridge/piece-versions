var path = require('path');
var makeVersionableConfig = require('./makeVersionableConfig');
var mergeWebpackConfig = require('webpack-config-merger');
var config = require('../../webpack.config.js')

module.exports = mergeWebpackConfig( config, makeVersionableConfig('ryb') )