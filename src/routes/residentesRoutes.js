const express = require("express")
const router = express.Router();

const controller = require("../controller/residentesControllers")

router.get("/", controller.getAll)
router.get("/nome", controller.getByName)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.cadastrarResidentes)

router.put("/:id", controller.updateById)

router.delete("/:id", controller.deleteById)



module.exports = router