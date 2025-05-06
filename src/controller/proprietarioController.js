const proprietarioModel = require("../models/proprietarioModels");

const getAllProprietarios = async (req, res) => {
    try {
        const proprietarios = await proprietarioModel.getAllProprietarios();
        res.json(proprietarios);
    } catch (error) {
        console.error("Erro ao buscar todos os proprietários:", error);
        res.status(500).json({ message: "Erro ao buscar proprietários." });
    }
};

const getProprietarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const proprietario = await proprietarioModel.getProprietarioById(id);

        if (!proprietario) {
            return res.status(404).json({ message: "Proprietário não encontrado." });
        }

        res.json(proprietario);
    } catch (error) {
        console.error("Erro ao buscar proprietário por ID:", error);
        res.status(500).json({ message: "Erro ao buscar proprietário." });
    }
};

const createProprietario = async (req, res) => {
    try {
        const { proprietario_name } = req.body;

        if (!proprietario_name) {
            return res.status(400).json({ message: "O nome do proprietário é obrigatório." });
        }

        const newProprietario = await proprietarioModel.createProprietario(proprietario_name);
        res.status(201).json(newProprietario);
    } catch (error) {
        console.error("Erro ao criar proprietário:", error);
        res.status(500).json({ message: "Erro ao criar proprietário." });
    }
};

const updateProprietario = async (req, res) => {
    try {
        const { id } = req.params;
        const { proprietario_name } = req.body;

        if (!proprietario_name) {
            return res.status(400).json({ message: "O nome do proprietário é obrigatório." });
        }

        const updatedProprietario = await proprietarioModel.updateProprietario(id, proprietario_name);

        if (!updatedProprietario) {
            return res.status(404).json({ message: "Proprietário não encontrado." });
        }

        res.json(updatedProprietario);
    } catch (error) {
        console.error("Erro ao editar proprietário:", error);
        res.status(500).json({ message: "Erro ao editar proprietário." });
    }
};

const deleteProprietario = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProprietario = await proprietarioModel.deleteProprietario(id);

        if (!deletedProprietario) {
            return res.status(404).json({ message: "Proprietário não encontrado." });
        }

        res.json({ message: "Proprietário deletado com sucesso." });
    } catch (error) {
        console.error("Erro ao deletar proprietário:", error);
        res.status(500).json({ message: "Erro ao deletar proprietário." });
    }
};

module.exports = { getAllProprietarios, getProprietarioById, createProprietario, updateProprietario, deleteProprietario,
};
