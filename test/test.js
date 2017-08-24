var file = require('./file');
var unsupported = require('./unsupported');

describe('Cache ::', function() {
	
	describe("File :: ", function() {
		file();
	});
	
	describe("Unsupported :: ", function() {
		unsupported();
	});
	
});