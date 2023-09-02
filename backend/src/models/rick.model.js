import database from "../datasource.js";


const findAll = async () => {
    return await database.query("SELECT * FROM rick_character")
};

const findById = async (id) => {
    return await database.query("SELECT * FROM rick_character WHERE id = ? ", [id])
};

const insertCharacter = async (name, status, gender, species, image ) => {
    return await database.query("INSERT INTO rick_character (name, status, gender, species, image) VALUES (?,?,?,?,?)",
    [name, status, gender, species, image])
}

export { findAll, findById, insertCharacter }