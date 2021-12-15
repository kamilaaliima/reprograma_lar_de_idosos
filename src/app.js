require("dotenv-safe").config();
const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./database/mongoConfig");


const index = require("./routes/index")
const residentesRoutes = require("./routes/residentesRoutes")
const funcionariosRoutes = require("./routes/funcionariosRoutes")
const responsaveisRoutes = require("./routes/responsaveisRoutes")
const visitantesRoutes = require("./routes/visitantesRoutes")
const voluntariosRoutes = require("./routes/voluntariosRoutes")



app.use(cors());
app.use(express.json());


app.use("/",index)
app.use("/",residentesRoutes)
app.use("/", funcionariosRoutes)
app.use("/",responsaveisRoutes)
app.use("/",visitantesRoutes)
app.use("/", voluntariosRoutes)

db.connect()

module.exports = app