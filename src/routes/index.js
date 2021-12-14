const express = require("express")
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).json({
        "título": "Api Lar de idosos", 
        "version": "1.0.0",
        "mesagem": "Api criada para organizar e facilitar o dia a dia de um lar de idosos.",
        "mensagem": "Olá, bom te ver aqui!"
    })
})

module.exports = router