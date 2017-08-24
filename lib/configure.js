module.exports = function(sails) {
	
	if (!sails.config.cache.enabled) {
		return;
	}
	
	switch(sails.config.cache.adapter) {
		case "file":
			var file = require("../engine/file");
			sails.config.cache.engine = file(sails);
			break;
			
		default:
			sails.log.error(sails.config.cache.adapter + " not supported");
			break;
	}
	
	sails.cache = sails.config.cache.engine;
};