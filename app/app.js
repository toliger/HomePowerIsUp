let request = require('request');

// en minutes
var freq_refresh = 15;

var host =	'home.oligertimothee.fr';

var port = 80;

setInterval(() => {
	request.get('https://'+ host + '/setSignalUp?uuid=test');
}, 30 * 60 * 1000);

console.log('app start');
