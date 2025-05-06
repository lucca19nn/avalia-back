require("dotenv").config();
const express = require("express");
const cors = require("cors");
const imoveisRoutes = require("./src/routes/imovelRoutes");
const proprietariosRoutes = require("./src/routes/proprietarioRoutes");
const path = require("path");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(express.json());

app.use("/api", reportRoutes);
app.use("/api", imoveisRoutes);
app.use("/api", proprietariosRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});