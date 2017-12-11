let request = require('request');

// en minutes
var freq_refresh = 15;

setInterval(function(){
	request.get('http://localhost:8080/setSignalUp', {
	  'uuid': 'test'
	});
}, freq_refresh * 60 * 1000);
