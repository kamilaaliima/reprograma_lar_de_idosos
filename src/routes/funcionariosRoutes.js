const express = require("express")
const router = express.Router();

const controller = require("../controller/funcionariosControllers")

router.get("/funcionario/all", controller.getAll)
router.get("/funcionario/nome", controller.getByName)
router.get("/funcionario/:id", controller.getById)

router.post("/funcionario/cadastrar", controller.cadastrarFuncionario)

router.put("/funcionario/update/:id", controller.atualizarFuncionario)

router.delete("/funcionario/delete/:id", controller.deleteById)




module.exports = router