module.exports = function(app, bdd) {

	app.get('/', function(req, res)
	{
		res.render("index.ejs");
	});
};
