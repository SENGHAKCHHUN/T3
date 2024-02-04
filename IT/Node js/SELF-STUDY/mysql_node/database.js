const {createPool} = require('mysql');

const db = createPool({
    host : 'localhost',
    user: 'root',
    password : '',
    database : 'hak_db',
    connectionLimit: 15
})

module.exports = {db};

