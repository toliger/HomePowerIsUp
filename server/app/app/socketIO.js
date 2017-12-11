module.exports = (io, bdd) => {
	io.sockets.on('connection', function (socket) {
    socket.emit('message', 'Socket IO connection UP');

    // Quand le serveur reçoit un signal de type "message" du client
    socket.on('lastupsignal', function (message) {
			bdd.getLastSignal((signal) => {
        socket.emit('lastupsignal', JSON.stringify(signal[0]));
    	});
		});
	});
}
