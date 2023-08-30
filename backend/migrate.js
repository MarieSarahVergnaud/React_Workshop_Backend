const dotenv = require('dotenv');
const mysql = require('mysql2')
const fs = require('fs')

dotenv.config();

const database = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
})

database.getConnection((error, connection) => {
    if (error) {
        console.error("Impossible to reach the database", error);
        return;
    }
    console.log("Success, the database has been reached !");

    const sqlFile = fs.readFileSync("./script.sql", "utf-8");

    connection.query(sqlFile, (error) => {
        if (error) {
            console.error("Impossible to add data to the database", error);
            return;
        }
        console.log("Success, the data has been added to the database ")

        connection.release();
    })

})