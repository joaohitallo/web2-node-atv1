const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3307,
    user: 'root',
    password: 'Amarelo1*',
    database: 'streaming'
})

module.exports = conexao