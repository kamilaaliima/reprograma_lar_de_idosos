const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const index = require("./routes/index")
const residentesRoutes = require("./routes/residentesRoutes")
const funcionariosRoutes = require("./routes/funcionariosRoutes")
const responsaveisRoutes = require("./routes/responsaveisRoutes")
const visitantesRoutes = require("./routes/visitantesRoutes")
const voluntariosRoutes = require("./routes/voluntariosRoutes")
const { deleteById } = require('./controller/funcionariosControllers')

app.use("/",index)
app.use("/",residentesRoutes)
app.use("/", funcionariosRoutes)
app.use("/",responsaveisRoutes)
app.use("/",visitantesRoutes)
app.use("/",voluntariosRoutes)

db.connect()

module.exports = app