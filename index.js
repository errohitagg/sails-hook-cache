var defaults = require('./lib/defaults');
var configure = require('./lib/configure');
var initialize = require('./lib/initialize');

module.exports = function cache(sails) {
	
	return {
		defaults : function() {
			return defaults(sails);
		},
		
		configure: function() {
			configure(sails);
		},
		
		initialize: function(next) {
			return initialize(sails.hooks.cache, sails, next);
		}
	};
};