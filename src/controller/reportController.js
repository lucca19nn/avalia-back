const PDFDocument = require('pdfkit');

const imovelModel = require('../models/imovelModels');

const exportPostPDF = async (req, res) => {
    try {
        const users = await imovelModel.getAllImoveis();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=heroes.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text("Relatório de Heróis", { align: "center" });
        doc.moveDown();

        doc.fontSize(12).text("id | nome | editora", { underline: true });
        doc.moveDown(0.5);

        users.forEach((imovel) => {
            doc.text(`${imovel.id} | ${imovel.name} | ${imovel.proprietario}`);
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF" });
    }
};

module.exports = { exportPostPDF }; 