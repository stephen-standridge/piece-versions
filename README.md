# pieces

Versioned repository of pieces for formisfunction.io

##package.json
```
  "devDependencies": {
    "webpack": "^1.13.0",
    "ejs": "^2.4.1",
    "lodash": "^4.12.0",    
    "webpack-config-merger": "0.0.5",
  }
```

##webpack.config.production.js
```
var path = require('path');
var makeVersionableConfig = require('./pieces/core/webpack-config');
var mergeWebpackConfig = require('webpack-config-merger');
var config = require('./webpack.config.js')

module.exports = mergeWebpackConfig( config, makeVersionableConfig('name') )
```

