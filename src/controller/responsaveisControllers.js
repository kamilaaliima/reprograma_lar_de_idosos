const Responsaveis = require("../models/responsaveisSchema")

const cadastrarResponsaveis = async (request, response) => {
    try {
        const responsavel = await Responsaveis.create(request.body)
        return response.status(201).json({
            message: "Responsável cadastrado com sucesso!",
            responsavel
        })
    }catch (error) {
        return response.status(400).send({message: error.message})
    }
}



const getAll = async (request, response) => {
    try {
        const responsavel = await Responsaveis.find()
        return response.status(200).json(responsavel)

    }catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}


const getById = async (request, response) => {
    try {
        const { id } = request.params 
        const responsavel = await Responsaveis.findById(id)

        if (responsavel == undefined || id == " "){
            return response.status(404).json({
                message: "Id inválido"
            })
        } 
        return response.status(200).json(responsavel)
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
}


const updateById = async (request, response) => {
    try {
        const { id } = request.params
        const body = request.body
        const update = { new: true }

        const responsavel = await Responsaveis.findByIdAndUpdate(id, body, update)
        return response.status(200).send(responsavel)
    }catch (error) {
        return response.status(404).send({message: "Responsável não encontrado"})
    }
}


const deleteById = async (request, response) => {
    try {
        const responsavel = await Responsaveis.findById(request.params.id)

        if (responsavel == null) {
            return response.status(404).json({message: "Responsável não encontrado!"})
        }
        await responsavel.remove()
        return response.status(200).json({message: "Responsável deletado com sucesso!"})
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
} 
    



module.exports = {
    cadastrarResponsaveis,
    getAll,
    getById,
    updateById,
    deleteById
}