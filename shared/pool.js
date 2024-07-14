const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '#admin@12345',
    database: 'estore',
    port: 3306,
    multipleStatements: true    //Allow to have multiple queries..
});

module.exports = pool;