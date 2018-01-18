let request = require('request');

// en minutes
var freq_refresh = 15;

var host =	'home.oligertimothee.fr';

var port = 80;

setInterval(function(){
	request.get('http://'+ host + ':' + port+ '/setSignalUp', {
	  'uuid': 'test'
	});
}, freq_refresh * 60 * 1000);
