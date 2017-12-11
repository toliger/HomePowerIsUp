$(() => {
	var socket = io.connect('http://localhost:8080');

	socket.emit('connection', "uuid");

	socket.on('message', function(message) {
		 console.log("Server : " + message)
	});

	socket.on('lastupsignal', function(signal) {
		console.log(signal);
		signal = JSON.parse(signal);
		var diffMinutes = Math.ceil(Math.abs(new Date().getTime() - new Date((signal.date - 3600)* 1000).getTime()) / (1000 * 60));
		$('#lastsignal').html("Il y a " + diffMinutes + " minutes");
		if(diffMinutes > 10){
			$('#lastsignal').removeClass("isok").addClass("isnotok")
		}else{
			$('#lastsignal').removeClass("isnotok").addClass("isok")
		}
	});

	socket.emit('lastupsignal');
});
