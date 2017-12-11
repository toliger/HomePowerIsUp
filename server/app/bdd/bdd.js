var	mysql = require('promise-mysql'),
		connection = require('./bdd_config.js');

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return this.getFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
};

class bdd{
	constructor(){
	}

	setSignalUp(uuid){
		mysql.createConnection(connection).then(function(conn){
				var result = conn.query('INSERT INTO upsignal(uuid, date) VALUES (\'' + "test"+ '\',\'' + new Date().toMysqlFormat()+ '\')');
				conn.end();
				return result;
		});
	}

	getLastMesures(){
		return { test : 1 };
	}

	getLastSignal(cb){
		mysql.createConnection(connection).then(function(conn){
				var result = conn.query('select id, UNIX_TIMESTAMP(date) AS "date" from upsignal ORDER BY date DESC LIMIT 0,1');
				conn.end();
				return result;
		}).then(function(rows){
		    cb(rows);
		});
	}
}

module.exports = new bdd;
