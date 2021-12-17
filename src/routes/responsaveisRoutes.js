const express = require("express")
const router = express.Router();

const controller = require("../controller/responsaveisControllers")

router.get("/responsaveis/all", controller.getAll)
router.get("/responsaveis/nome", controller.getByName)
router.get("/responsaveis/:id", controller.getById)

router.post("/responsaveis/cadastrar", controller.cadastrarResponsavel)

router.put("/responsaveis/update/:id", controller.atualizarResponsavel)

router.delete("/responsaveis/delete/:id", controller.deleteById)



module.exports = router