const mongoose = require("mongoose");

const funcionariosSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    especialidade: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required:true, 
        lowercase: true
    },
    numero:{
        type: String,
        unique: true,
        required:true, 
        lowercase: true
    },
    endereço: {
        type: String,
        required: true
    },
    dataDeInclusao: {
        type: Date,
        required: true,
        default: new Date
    },
    horarios: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model("funcionarios", funcionariosSchema)