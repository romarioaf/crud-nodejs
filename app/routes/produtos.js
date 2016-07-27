module.exports = function(app) {

	console.log('Módulo de Rotas carregado.');

	app.get("/produtos", function(req, res){

		var connection = app.infra.connectionFactory();;
		var produtoDao = new app.infra.ProdutoDAO(connection);

		produtoDao.lista (function (err, results) {
			res.format({
				html : function () {
					res.render('produtos/lista', {lista: results});
				},
				json : function () {
					res.json(results);		
				}
			});
		});
		connection.end();

	});

	app.get("/produtos/form", function (req, res) {
		res.render('produtos/form');
	});

	app.post("/produtos", function (req, res) {
		
		var produto = req.body;
		console.log(produto);

		var connection = app.infra.connectionFactory();;
		var produtoDao = new app.infra.ProdutoDAO(connection);

		/*
		req.assert('titulo', "Título é obrigatório.").notEmpty();
		req.assert('preco', "Formato inválido.").isFloat();

		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			res.format({
				html : function () {
					res.status(400).render('produtos/form', {validationErros})
				},
				json : function () {
					res.status(400).json(erros);	
				}
			});
		}*/

		produtoDao.salvar(produto, function (err, results) {
			res.redirect('/produtos');
		});

	});

	app.get("/produtos/delete/", function (req, res) {
		console.log(req);
	});
}