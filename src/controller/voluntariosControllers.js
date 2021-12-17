const Voluntarios = require("../models/voluntariosSchema");
const mongoose = require("mongoose");

const cadastrarVoluntarios = async (request, response) => {
    try {
        const voluntario = await Voluntarios.create(request.body)
        return response.status(201).json({
            message: "Voluntário cadastrado com sucesso!",
            voluntario
        })
    }catch (error) {
        return response.status(400).send({message: error.message})
    }
}



const getAll = async (request, response) => {
    try {
        const voluntario = await Voluntarios.find()
        return response.status(200).json(voluntario)

    }catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}

const getByName = async (request, response) =>{
    const nome = request.query.nome;
    const voluntario = await Voluntarios.find({nome: nome})

    return response.status(200).send(voluntario)
}


const getById = async (request, response) => {
    try {
        const { id } = request.params 
        const voluntario = await Voluntarios.findById(id)

        if (voluntario == undefined || id == " "){
            return response.status(404).json({
                message: "Id inválido"
            })
        } 
        return response.status(200).json(voluntario)
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
}

const atualizarVoluntario = async (request, response) => {
    try {
        const voluntario = await Voluntarios.findById(request.params.id);
        if (voluntario) {
          
            voluntario.nome = request.body.nome || voluntario.nome
            voluntario.rg = request.body.rg || voluntario.rg
            voluntario.email = request.body.email || voluntario.email
            voluntario.numero = request.body.numero || voluntario.numero
            voluntario.endereco = request.body.endereco || voluntario.endereco
            voluntario.ultimaVisita = request.body.ultimaVisita || voluntario.ultimaVisita
           

            const saveVoluntario = await voluntario.save();
            response.status(200).json({
                message: "Usuário atualizado com sucesso",
                saveVoluntario
            })
        }

        response.status(400).json({
            mensagem: "Descupa, mas não conseguimos encontrar esse usuário"
        })
    } catch (error) {
        return response.status(404).send({ message: error.message });
    }
}


const deleteById = async (request, response) => {
    try {
        const voluntario = await Voluntarios.findById(request.params.id)

        if (voluntario == null) {
            return response.status(404).json({message: "Voluntário não encontrado!"})
        }
        await voluntario.remove()
        return response.status(200).json({message: "Voluntário deletado com sucesso!"})
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
} 
    



module.exports = {
    cadastrarVoluntarios,
    getAll,
    getByName,
    getById,
    atualizarVoluntario,
    deleteById
}