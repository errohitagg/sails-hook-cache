module.exports = function(sails) {
	
	var defaults = {
		cache: {
			enabled: false,
			adapter: null,
			connection: null
		}
	};
	
	return defaults;
};