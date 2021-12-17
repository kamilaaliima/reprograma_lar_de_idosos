const mongoose = require("mongoose");

const residentesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    
    nome: {
        type: String,
        required: true
    },
    idade:{
        type: String,
        required: true
       
    },
    rg: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    responsavel:{
        type: String,
        required: true
    },
    dataDeInclusao: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("residentes", residentesSchema)