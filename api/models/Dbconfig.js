'user strict';
const mysql = require('mysql');
const config = require('./Config');

//local mysql db connection
let connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
