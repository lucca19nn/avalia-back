const pool = require("../config/database");

const getAllProprietarios = async () => {
    const result = await pool.query("SELECT * FROM proprietarios");
    return result.rows;
};

const getProprietarioById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM proprietarios WHERE id = $1",
        [id]
    );
    return result.rows[0];
};

const createProprietario = async (proprietario_name) => {
    const result = await pool.query(
        "INSERT INTO proprietarios (proprietario_name) VALUES ($1) RETURNING *",
        [proprietario_name]
    );
    return result.rows[0];
};

const updateProprietario = async (id, proprietario_name) => {
    const result = await pool.query(
        "UPDATE proprietarios SET proprietario_name = $1 WHERE id = $2 RETURNING *",
        [proprietario_name, id]
    );
    return result.rows[0];
};

const deleteProprietario = async (id) => {
    const result = await pool.query(
        "DELETE FROM proprietarios WHERE id = $1 RETURNING *",
        [id]
    );
    return result.rows[0]; 
};

module.exports = { getAllProprietarios, getProprietarioById, createProprietario, updateProprietario, deleteProprietario };