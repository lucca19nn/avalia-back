const imovelModel = require("../models/imovelModels");

const getAllImoveis = async (req, res) => {
    try {
        const { name } = req.query;
        const imoveis = await imovelModel.getAllImoveis(name);
        res.json(imoveis);
    } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
        res.status(500).json({ message: "Erro ao buscar imóveis." });
    }
};

const getImovelById = async (req, res) => {
    try {
        const { id } = req.params;
        const imovel = await imovelModel.getImovelById(id);

        if (!imovel) {
            return res.status(404).json({ message: "Imóvel não encontrado." });
        }

        res.json(imovel);
    } catch (error) {
        console.error("Erro ao buscar imóvel por ID:", error);
        res.status(500).json({ message: "Erro ao buscar imóvel." });
    }
};

const createImovel = async (req, res) => {
    try {
        const { name, proprietario_name } = req.body;
        const photo = req.file ? req.file.filename : null;

        if (!name || !proprietario_name) {
            return res.status(400).json({ message: "Nome e proprietário são obrigatórios." });
        }

        const newImovel = await imovelModel.createImovel(name, proprietario_name, photo);
        res.status(201).json(newImovel);
    } catch (error) {
        console.error("Erro ao criar imóvel:", error);
        res.status(500).json({ message: "Erro ao criar imóvel." });
    }
};

const updateImovel = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, proprietario_name } = req.body;

        if (!name || !proprietario_name) {
            return res.status(400).json({ message: "Nome e proprietário são obrigatórios." });
        }

        const updatedImovel = await imovelModel.updateImovel(id, name, proprietario_name);

        if (!updatedImovel) {
            return res.status(404).json({ message: "Imóvel não encontrado para atualização." });
        }

        res.json(updatedImovel);
    } catch (error) {
        console.error("Erro ao atualizar imóvel:", error);
        res.status(500).json({ message: "Erro ao editar imóvel." });
    }
};

const deleteImovel = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedImovel = await imovelModel.deleteImovel(id);

        if (!deletedImovel) {
            return res.status(404).json({ message: "Imóvel não encontrado para exclusão." });
        }

        res.json({ message: "Imóvel deletado com sucesso." });
    } catch (error) {
        console.error("Erro ao deletar imóvel:", error);
        res.status(500).json({ message: "Erro ao deletar imóvel." });
    }
};

module.exports = { getAllImoveis, getImovelById, createImovel, updateImovel, deleteImovel, };