let request = require('request');

// en minutes
var freq_refresh = 15;

var host =	'home.oligertimothee.fr';

request.get(`https://${host}/setSignalUp?uuid=test`);

setInterval(() => {
	request.get(`https://${host}/setSignalUp?uuid=test`);
}, freq_refresh * 60 * 1000);

console.log('app start');
