const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Anu@123',
    database : 'project'

 

})

module.exports = pool ;