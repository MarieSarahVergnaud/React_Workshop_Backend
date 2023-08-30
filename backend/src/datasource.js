const mysql = require('mysql2/promise');

const dotenv = require('dotenv')
dotenv.config()


const database = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
})


database.getConnection((error) => {
    if (error) {
        console.error("Impossible to reach the database", error);
        return;
    }
    console.log("Success, the database has been reached !");
})

module.exports = {
    database
};