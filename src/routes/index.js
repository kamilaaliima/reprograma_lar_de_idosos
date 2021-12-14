const express = require("express")
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).json({
        "título": "Reprograma - Lar de idosos - Projeto final.", 
        "version": "1.0.0",
        "mesagem": "Api criada para organizar e facilitar o dia a dia de um lar de idosos.",
        "mensagem": "Seja bem vinde a Api lar de idosos iluminar!"
    })
})

module.exports = router