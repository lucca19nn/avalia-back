const imovelModel = require("../models/imovelModels");

const getAllImoveis = async (req, res) => {
    try {
        const { name } = req.query;
        const imoveis = await imovelModel.getAllImoveis(name);
        res.json(imoveis);
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar Imoveis"});
    }
};

const getImovelById = async (req, res) => {
    try {
        const imovel = await imovelModel.getImovelById(req.params.id)
        res.json(imovel)
    } catch (error) {
        res.status(500).json({message: "erro ao buscar Imovel"})
    }
};

const createImovel = async (req, res) => {
    try {
        const { name, proprietario_name } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newImovel = await imovelModel.createImovel(name, proprietario_name, photo);
        res.status(201).json(newImovel);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erro ao criar um novo Imovel" });
    }
};

const updateImovel = async (req, res) => {
    try {
        const { name, proprietario_name } = req.body;
        const imovel = await ImovelModel.updateImovel(req.params.id, name, proprietario_name);
        res.json(imovel);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao editar Imovel' });
    }
}

const deleteImovel = async (req, res) => {
    try {
        const imovel = await imovelModel.deleteImovel(req.params.id);
        res.json(imovel);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao deletar Imovel' });
    }
}

module.exports = { getAllImoveis, getImovelById, createImovel, updateImovel, deleteImovel };