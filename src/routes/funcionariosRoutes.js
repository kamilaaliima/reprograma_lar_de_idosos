const express = require("express")
const router = express.Router();

const controller = require("../controller/funcionariosControllers")

router.get("/funcionarios/all", controller.getAll)
router.get("/funcionarios/nome", controller.getByName)
router.get("/funcionarios/:id", controller.getById)

router.post("/funcionarios/cadastrar", controller.cadastrarFuncionario)

router.put("/funcionarios/update/:id", controller.atualizarFuncionario)

router.delete("funcionarios/delete/:id", controller.deleteById)



module.exports = router