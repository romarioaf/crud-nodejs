module.exports = function(app) {

	var listaProdutos = function(req, res){

		var connection = app.infra.connectionFactory();;
		var produtoDao = new app.infra.ProdutoDAO(connection);

		produtoDao.lista (function (err, results) {
			res.render('produtos/lista', {lista: results});

			console.log(err);
		});
		connection.end();

	};

	console.log('Módulo de Rotas carregado.');

	app.get("/produtos", listaProdutos);

	app.get("/produtos/form", function (req, res) {
		res.render('produtos/form');
	});

	app.post("/produtos", function (req, res) {
		
		var produto = req.body;
		console.log(produto);

		var connection = app.infra.connectionFactory();;
		var produtoDao = new app.infra.ProdutoDAO(connection);

		produtoDao.salvar(produto, function (err, results) {
			res.redirect('/produtos');
		});

	});
}