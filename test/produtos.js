var http = require('http');
var assert = require('assert');

var express = require('../config/express')();
var requestSupertest = require('supertest')(express);

describe("ProdutosControler", function () {
	it('listagem json com mocha', function (done) {

		var configuracoes = {
			hostname: 'localhost',
			port: '3000',
			path: '/produtos',
			headers: {
				'Accept' : 'application/json'
			}
		};

		http.get(configuracoes, function (res) {
			assert.equal(res.statusCode,200);
			assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
			done();
		});
	});
});

describe("ProdutosControler", function () {
	it('#listagem json com supertest', function (done) {

		requestSupertest.get('/produtos')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);
		});
});

describe("ProdutosControler", function () {
	it('Cadastrar um produto com dados válidos com supertest', function (done) {

		requestSupertest.post('/produtos')
			.send({titulo : "Título", descricao: "Descricção do Produto", preco : 50.00})
			.expect(302, done);
		});
});