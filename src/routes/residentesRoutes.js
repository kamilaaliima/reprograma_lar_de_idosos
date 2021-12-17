const express = require("express")
const router = express.Router();

const controller = require("../controller/residentesControllers")

router.get("/residentes/all", controller.getAll)
router.get("/residentes/nome", controller.pesquisarPorNome)
router.get("/residentes/:id", controller.getById)

router.post("/residentes/cadastrar", controller.cadastrarResidentes)

router.put("/residentes/update/:id", controller.alterarResidente)

router.delete("/residentes/delete/:id", controller.deleteById)



module.exports = router