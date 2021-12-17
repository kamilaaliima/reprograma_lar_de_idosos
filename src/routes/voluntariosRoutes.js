const express = require("express")
const router = express.Router();

const controller = require("../controller/voluntariosControllers")

router.get("/voluntario/all", controller.getAll)
router.get("/voluntario/nome", controller.getByName)
router.get("/voluntario/:id", controller.getById)

router.post("/voluntario/cadastrar", controller.cadastrarVoluntarios)
router.put("/voluntario/update/:id", controller.updateById)
router.delete("/voluntario/delete/:id", controller.deleteById)



module.exports = router