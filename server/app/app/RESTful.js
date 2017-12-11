module.exports = function(app, bdd) {

	// Create alert
	app.get('/setSignalUp', function(req, res) {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ code: bdd.setSignalUp(req.params.uuid) }, null, 3))
	});

	// Get alert_list
	app.get('/getLastSignal', function(req, res) {
		res.setHeader('Content-Type', 'application/json');
		bdd.getLastSignal((signal) => {
			res.send(JSON.stringify({ signal : signal }), null, 3);
		});
	});
};
