const pool = require("../config/database");

const getAllImoveis = async (name) => {
    let query = `SELECT imoveis.*, proprietarios.proprietario_name AS proprietario_name FROM imoveis LEFT JOIN proprietarios ON imoveis.proprietario_name = proprietarios.proprietario_name
    `;
    const values = [];
    if (name) {
        query += ` WHERE imoveis.name ILIKE $1`;
        values.push(`%${name}%`);
    }
    const result = await pool.query(query, values);
    return result.rows;
};

const getImovelById = async (id) => {
    const result = await pool.query(`SELECT imoveis.*, proprietarios.proprietario_name AS proprietario_name FROM imoveis LEFT JOIN proprietarios ON imoveis.proprietario_name = proprietarios.proprietario_name WHERE imoveis.id = $1`,
        [id] 
    );
    return result.rows[0];
};

const createImovel = async (name, proprietario_name, photo) => {
    const result = await pool.query(
        `INSERT INTO imoveis (name, proprietario_name, photo) VALUES ($1, $2, $3) RETURNING *`,
        [name, proprietario_name, photo]
    );
    return result.rows[0];
};

const updateImovel = async (id, name, proprietario_name, photo) => {
    const result = await pool.query(
        `UPDATE imoveis SET name = $1, proprietario_name = $2, photo = $3 WHERE id = $4 RETURNING *`,
        [name, proprietario_name, photo, id]
    );
    return result.rows[0];
};

const deleteImovel = async (id) => {
    const result = await pool.query(
        `DELETE FROM imoveis WHERE id = $1 RETURNING *`, [id]
    );
    return result.rows[0]; 
};


module.exports = { getAllImoveis, getImovelById, createImovel, updateImovel, deleteImovel };