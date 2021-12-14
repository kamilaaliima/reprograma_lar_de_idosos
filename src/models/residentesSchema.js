const mongoose = require("mongoose"); //conectar com o banco

const residentesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    idade:{
        type: Date,
        required: true,
        default: new Date
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
        type: Date,
        required: true,
        default: new Date
    }

});

module.exports = mongoose.models("residente", residentesSchema)