var express = require('express');
var load = require('express-load');	

module.exports = function() {

	var app = express();	

	console.log('Módulo de configuração do Express carregado.');


	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	load('routes', {cwd: 'app'})
		.then('infra')
		.into(app);

	return app;
}