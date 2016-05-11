var fs = require('fs'),
    ejs = require('ejs'),
    uniqBy = require('lodash').uniqBy;

function VersionFile(options) {
    var self = this;
	
    var defaultOptions = {
        outputFile: `./pieces/${options.name}/versions.txt`,
        template: './pieces/core/version.ejs',
        templateString: '',
        extras: {}
    };
	
    //set default config data
    var optionsObject = options || {};
    optionsObject = Object.assign( optionsObject, defaultOptions );
	
	self.options = optionsObject || {};
	
}
	
VersionFile.prototype.apply = function(compiler){
	var self = this;
	
    self.options.currentTime = new Date();

    /*
	 * If we are given a template string in the config, then use it directly.
     * But if we get a file path, fetch the content then use it.
	 */
     compiler.plugin("emit", function(compilation, callback) {
        var hash = compilation.hash;
        self.options.hash = hash;
        self.options.url = 'pieces/'+self.options.name+'/'+hash+'/'+self.options.name+'.js'
        self.options.assets = 'pieces/'+self.options.name+'/'+hash+'/assets'

        if (self.options.templateString){
            self.writeFile(self.options.templateString);
        } else {
            fs.readFile(self.options.template, {encoding: 'utf8'}, function(error, content){

                if(error){
                    throw error;
                    return;
                }

                self.writeFile(content);
            });
        }

          callback();

      });
};

/**
 * Renders the template and writes the version file to the file system.
 * @param templateContent
 */
VersionFile.prototype.writeFile = function(templateContent){
	var self = this;

	fileContent = ejs.render(templateContent, self.options);
    fs.readFile( self.options.outputFile, {encoding: 'utf8'}, function(error, content){
      if(error) throw error

      var oldData = JSON.parse(content || 'null') || {};
      var newData = JSON.parse(fileContent);
      oldData.versions = oldData.versions || [];
      oldData.name = newData.name;
      newData.versions = uniqBy( oldData.versions.concat( newData.versions ), 'hash' );
      
      fs.writeFile( self.options.outputFile, JSON.stringify( newData ), function(error){
        if(error) throw error;
      } )
    });
}

module.exports = VersionFile;
