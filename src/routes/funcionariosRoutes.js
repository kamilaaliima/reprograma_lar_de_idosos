const express = require("express")
const router = express.Router();

const controller = require("../controller/funcionariosControllers")

router.get("/all", controller.getAll)
router.get("/nome", controller.getByName)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.cadastrarFuncionario)

router.put("/update/:id", controller.updateById)

router.delete("/delete/:id", controller.deleteById)



module.exports = router