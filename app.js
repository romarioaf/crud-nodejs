var app = require('./config/express')();

console.log("Tentando iniciar");

app.listen(3000, function () {
	console.log("Servidor Rodando.");
});