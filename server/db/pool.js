const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host : 'localhost',
    user : 'root',
<<<<<<< HEAD
    password : 'Anu@123',
    database : 'project'
=======
    password : 'manager',
    database : 'project_mern'
>>>>>>> main




})

module.exports = pool ;