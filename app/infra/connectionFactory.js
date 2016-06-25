var mysql = require('mysql');

function createDBconnection () {
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'admin',
			database : 'crud_node'
		});
}

module.exports = function () {
	return createDBconnection;
}