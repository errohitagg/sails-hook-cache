var assert = require('assert');
var Sails = require('sails').Sails;

module.exports = function() {
	
	var sails;
	
	before(function (done) {
		
		this.timeout(10000);
		
		Sails().lift({
			hooks: {
				"cache": require('../')
			},
			log: {level: "error"},
			cache: {
				enabled: true,
				adapter: "unsupported"
			}
		},function (err, _sails) {
			if (err) {
				return done(err);
			}
			sails = _sails;
			return done();
		});
	});
	
	after(function (done) {
		
		if (sails) {
			return sails.lower(done);
		}
		return done();
	});
	
	it ("sails does not crash with cache:unsupported hook", function() {
		return true;
	});
	
	it ("sails.cache is not available", function() {
		assert.equal(sails.cache, undefined);
	});
};