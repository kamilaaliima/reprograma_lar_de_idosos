const express = require("express")
const router = express.Router();

const controller = require("../controller/voluntariosControllers")

router.get("/all", controller.getAll)
router.get("/nome", controller.getByName)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.cadastrarVoluntarios)

router.put("/update/:id", controller.atualizarVoluntario)

router.delete("/delete/:id", controller.deleteById)



module.exports = router