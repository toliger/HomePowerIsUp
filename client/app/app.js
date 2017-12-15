let request = require('request');

// en minutes
var freq_refresh = 15;

var host =	process.env.HOST || "localhost";

var port = process.env.PORT || 8080;

setInterval(function(){
	request.get('http://'+ host + ':' + port+ '/setSignalUp', {
	  'uuid': 'test'
	});
}, freq_refresh * 60 * 1000);
