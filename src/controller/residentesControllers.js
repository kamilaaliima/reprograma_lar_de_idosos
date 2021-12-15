const Residentes = require("../models/residentesSchema");
const mongoose = require("mongoose");

const cadastrarResidentes = async (request, response) => {
    try {
        const residente = await Residentes.create(request.body)
        return response.status(201).json({
            message: "Residente cadastrado com sucesso!",
            residente
        })
    }catch (error) {
        return response.status(400).send({message: error.message})
    }
}



const getAll = async (request, response) => {
    try {
        const residente = await Residentes.find()
        return response.status(200).json(residente)

    }catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}

const getByName = async (request, response) =>{
    const nome = request.query.nome;
    await Residentes.find({nome: nome})

    return response.status(200).send(Residentes)
}



const getById = async (request, response) => {
    try {
        const { id } = request.params 
        const residente = await Residentes.findById(id)

        if (residente == undefined || id == " "){
            return response.status(404).json({
                message: "Id inválido"
            })
        } 
        return response.status(200).json(residente)
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
}

const updateById = async (request, response) => {
    try {
        const { id } = request.params
        const body = request.body
        const update = { new: true }

        const residente = await Residentes.findByIdAndUpdate(id, body, update)
        return response.status(200).send(residente)
    }catch (error) {
        return response.status(404).send({message: "Residente não encontrado"})
    }
}


const deleteById = async (request, response) => {
    try {
        const residente = await Residentes.findById(request.params.id)

        if (residente == null) {
            return response.status(404).json({message: "Residente não encontrado!"})
        }
        await residente.remove()
        return response.status(200).json({message: "Residente deletado com sucesso!"})
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
} 
    



module.exports = {
    cadastrarResidentes,
    getAll,
    getByName,
    getById,
    updateById,
    deleteById
}