var path = require('path');
var makeVersionableConfig = require('./makeVersionableConfig');
var config = require('../../webpack.config.js')

module.exports = makeVersionableConfig(config)