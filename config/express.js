module.exports = function() {

	console.log('Módulo de configuração do Express carregado.');

	var express = require('express');
	var app = express();
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	return app;
}