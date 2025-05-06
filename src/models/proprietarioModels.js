const pool = require("../config/database")

const getAllProprietarios = async () => {
    const result = await pool.query("SELECT * FROM proprietarios");
    return result.rows;
};

const getProprietarioById = async (id) => {
    const result = await pool.query("SELECT * FROM proprietarios WHERE id = $1", [id]);
    return result.rows[0];
};

const createProprietario = async (proprietario_name) => {
    const result = await pool.query(
        "INSERT INTO proprietarios (proprietario_name) VALUES ($1, $2) RETURNING *",
        [proprietario_name]
    );
    return result.rows[0];
};

const updateProprietario = async (id, proprietario_name) => {
    const result = await pool.query(
        "UPDATE proprietarios SET publisher_name = $1 = $2 WHERE id = $3 RETURNING *", 
        [proprietario_name, id]
    );
    return result.rows[0];
};

const deleteProprietario = async (id) => {
    const result = await pool.query(
        "DELETE FROM proprietarios WHERE id = $1 RETURNING *",
        [id]
    );
    return { message: "Proprietario deletado com sucesso"};
};

module.export = { getAllProprietarios, getProprietarioById, createProprietario, updateProprietario, deleteProprietario };