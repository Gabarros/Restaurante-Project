const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'gabriel',
    database: 'saboroso',
    password: 'Gab.1711'
  });

  module.exports = connection;