const express = require('express');
const path = require("path");
const cors = require("cors");
const app = express();

//Configuraciones
app.set("port", process.env.PORT || 4000);

//Middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.disable("x-powered-by");

//Rutas
app.use("/api/number", require("./routes/NumbersRouter"));

module.exports = { app };