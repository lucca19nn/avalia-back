const proprietarioModel = require("../models/proprietarioModels");

const getAllProprietarios = async (req, res) => {
    try {
        const proprietarios = await proprietarioModel.getProprietarios();
        res.json(proprietarios);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Proprietarios" });
    }
};

const getProprietarioById = async (req, res) => {
    try {
        const proprietario = await proprietarioModel.getproprietarioById(req.params.id);
        if (!proprietario) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(proprietario);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Proprietario" });
    }
};

const createProprietario = async (req, res) => {
    try {
        const { proprietario_name } = req.body;
        const newProprietario = await proprietarioModel.createProprietario(proprietario_name);
        res.status(201).json(newProprietario);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Proprietario" });
    }
};

const updateProprietario = async (req, res) => {
    try {
        const { proprietario_name } = req.body;
        const proprietario = await proprietarioModel.updateProprietario(req.params.id, proprietario_name);
        if (!proprietario) {
            return res.status(404).json({ message: "Proprietario não encontrado." });
        }
        res.json(proprietario);
    } catch (error) {
        res.status(500).json({ message: "Erro ao editar editora." });
    }
};

const deleteProprietario = async (req, res) => {
    try {
        const proprietario = await proprietarioModel.deleteproprietario(req.params.id);
        if (!proprietario) {
            return res.status(404).json({ message: "Proprietario não encontrado." });
        }
        res.json(proprietario);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Proprietario." });
    }
};

module.exports = { getAllProprietarios, getProprietarioById, createProprietario, updateProprietario, deleteProprietario };