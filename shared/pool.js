const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '#admin@12345',
//     database: 'estore',
//     port: 3306,
//     multipleStatements: true    //Allow to have multiple queries..
// });

const pool = mysql.createPool({
    host: 'mysql-f082e3d-estore-project.i.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_diGPVbP2N7M1DGf7mr0',
    database: 'estore',
    port: 15404,
    multipleStatements: true    //Allow to have multiple queries..
});

module.exports = pool;
