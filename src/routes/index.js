const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send({
        "titulo": "Api lar de idosos",
        "version":"1.0.0",
        "mensagem": "Seja bem vinde a Api lar de idosos! Api criada para organizar e facilitar o dia a dia de um lar de idosos."
    })
})

module.exports = router