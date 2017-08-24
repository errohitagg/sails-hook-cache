var path = require('path');
var fs = require('fs');

var File = function(sails) {
	
	this.path = undefined;
	
	var self = this;
	
	var initialize = function() {
		
		this.path = sails.config.cache.path;
		if (undefined === path || path.length === 0) {
			sails.log.error("Invalid path provided for cache");
		}
		
		fs.accessSync(this.path, fs.constants.R_OK | fs.constants.W_OK);
	};
	
	this.get = function(key) {
		
		var file = this.path + path.sep + key;
		try {
			return fs.readFileSync(file);
		} catch (e) {
			return undefined;
		}
	};
	
	this.set = function(key, value) {
		
		var file = this.path + path.sep + key;
		try {
			fs.writeFileSync(file, value);
			return true;
		} catch (e) {
			return false;
		}
		
	};
	
	this.check = function(key) {
	
		var file = this.path + path.sep + key;
		try {
			fs.accessSync(file, fs.constants.R_OK);
			return true;
		} catch (e) {
			return false;
		}
		
	};
	
	this.unset = function(key) {
	
		var file = this.path + path.sep + key;
		try {
			fs.unlinkSync(file);
			return true;
		} catch (e) {
			return false;
		}
	};
	
	initialize();
	
	return this;
};

module.exports = function(sails) {

	return File(sails);
};