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
				adapter: "file",
				path: 'cache'
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
	
	it ("sails does not crash with cache:file hook", function() {
		return true;
	});
	
	it ("sails.cache is available", function() {
		assert.notEqual(sails.cache, undefined);
	});
	
	it ("sails.cache.get is a function", function() {
		assert.equal(typeof sails.cache.get, "function");
	});
	
	it ("sails.cache.set is a function", function() {
		assert.equal(typeof sails.cache.set, "function");
	});
	
	it ("sails.cache.check is a function", function() {
		assert.equal(typeof sails.cache.check, "function");
	});
	
	it ("sails.cache.unset is a function", function() {
		assert.equal(typeof sails.cache.unset, "function");
	});
	
	it ("check key (cache-key) which doesn't exists", function() {
		assert.equal(sails.cache.check('cache-key'), false);
	});
	
	it ("get key (cache-key) which doesn't exists", function() {
		assert.equal(sails.cache.get("cache-key"), undefined);
	});
	
	it ("unset key (cache-key) which doesn't exists", function() {
		assert.equal(sails.cache.unset("cache-key"), false);
	});
	
	it ('set key:value => cache-key:cache-value', function() {
		assert.equal(sails.cache.set("cache-key", "cache-value"), true);
	});
	
	it ('check key (cache-key) which exists', function() {
		assert.equal(sails.cache.check("cache-key"), true);
	});
	
	it ('get key (cache-key) which exists', function() {
		assert.equal(sails.cache.get("cache-key"), "cache-value");
	});
	
	it ('unset key (cache-key) which exists', function() {
		assert.equal(sails.cache.unset("cache-key"), true);
	});
};