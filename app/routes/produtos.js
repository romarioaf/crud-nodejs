module.exports = function(app) {

	console.log('Módulo de Rotas carregado.');

	app.get("/produtos", function(req, res){

		var connection = app.infra.connectionFactory();;
		var produtoDao = new app.infra.ProdutoDAO(connection);

		produtoDao.lista (function (err, results) {
			res.render('produtos/lista', {lista: results});

			console.log(err);
		});
		connection.end();

	});
}