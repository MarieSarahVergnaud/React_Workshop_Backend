const datasource = require ("../datasource.js")

const getAllCharacters = (req, res) =>{
    database.query("SELECT * FROM rick_character")
        .then ((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            console.error("An error occured while retrieving data", err)
        })
}

module.exports = {
    getAllCharacters
};