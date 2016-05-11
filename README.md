# pieces

Versioned repository of pieces for formisfunction.io

##update your package.json
```
	"scripts": {
    "production": "webpack --config ./pieces/core/webpack.config.production.js"
	},
  "devDependencies": {
    "webpack": "^1.13.0",
    "ejs": "^2.4.1",
    "lodash": "^4.12.0",    
    "webpack-config-merger": "0.0.5",
  }
```

##to run
```
npm run production
```

looks for webpack.config.js and redefines its destination.