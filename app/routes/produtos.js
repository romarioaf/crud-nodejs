var dbConnection = require('../infra/connectionFactory');

module.exports = function(app) {

	console.log('Módulo de Rotas carregado.');

	app.get("/produtos", function(req, res){

		var mysql = require('mysql');
		var connection = connectionFactory();

		connection.query('select * from livros', function (err, results) {
			res.render('produtos/lista', {lista: results});

			console.log(err);

		});
		connection.end();

	});
}