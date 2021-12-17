const mongoose = require("mongoose");

const funcionariosSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

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
        
        required:true, 
        lowercase: true
    },
    endereco: {
        type: String,
        required: true
    },
    dataDeInclusao: {
        type: String,
        required: true
    
    },
    horarios: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model("funcionario", funcionariosSchema)