const pool = require("../config/database");

const getAllImoveis = async (name) => {
    if (!name) {
        const result = await pool.query(`SELECT imoveis.*, proprietarios.proprietario_name AS proprietario_name FROM imoveis LEFT JOIN proprietarios ON imoveis.proprietario_name = proprietarios.proprietario_name`
        );
        return result.rows;
    } else {
        const result = await pool.query(`SELECT imoveis.*, proprietarios.proprietario_name AS proprietario_name FROM imoveis LEFT JOIN proprietarios ON imoveis.proprietario_name = proprietarios.proprietario_name WHERE imoveis.name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    }
};

const getImovelById = async (id) => {
    const result = await pool.query(`SELECT imoveis.*, proprietarios.proprietario_name AS proprietario_name FROM imoveis LEFT JOIN proprietarios ON imoveis.proprietario_name = proprietarios.proprietario_name WHERE imoveis.id = $1`, [id]);
    return result.rows[0];
};

const createImovel = async (name, proprietario_name, photo) => {
    const result = await pool.query("INSERT INTO imoveis (name, proprietario_name, photo) VALUES ($1, $2) RETURNING *", [name, proprietario_name, photo]
    );
    return result.rows[0];
};

const updateImovel = async (id, name, proprietario_name, photo) => {
    const result = await pool.query("UPDATE imoveis SET name = $1, proprietario_name = $2 WHERE id = $3 RETURNING *", [name, proprietario_name, id, photo]
    );
    return result.rows[0];
};

const deleteImovel = async (id) => {
    const result = await pool.query(
        "DELETE FROM imoveis WHERE id = $1 RETURNING *", [id]
    );
    return { message: "Imovel deletado com sucesso"};
};

module.exports = {getAllImoveis, getImovelById, createImovel, updateImovel, deleteImovel};