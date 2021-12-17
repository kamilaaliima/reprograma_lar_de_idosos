const express = require("express")
const router = express.Router();

const controller = require("../controller/visitantesControllers")

router.get("/visitante/all", controller.getAll)
router.get("/visitante/nome", controller.getByName)
router.get("/visitante/:id", controller.getById)

router.post("/visitante/cadastrar", controller.cadastrarVisitantes)

router.put("/visitante/update/:id", controller.updateById)

router.delete("/visitante/delete/:id", controller.deleteById)



module.exports = router