const mySql = require('mysql2');

const pool = mySql.createPool({
    host:'localhost',
    user:'root',
    database:"node-complete1",
    password:''
});

module.exports = pool.promise();