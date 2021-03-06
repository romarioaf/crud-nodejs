var express = require('express');
var load = require('express-load');	
var bodyParser = require('body-parser');

module.exports = function() {

	var app = express();

    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    //midleware
    app.use(bodyParser.urlencoded({extended : true}));//é aplicada antes da requisição chegar na função
    app.use(bodyParser.json());

    load('routes',{cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}