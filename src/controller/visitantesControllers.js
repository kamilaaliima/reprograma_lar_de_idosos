const Visitantes = require("../models/visitantesSchema")

const cadastrarVisitantes = async (request, response) => {
    try {
        const visitante = await Visitantes.create(request.body)
        return response.status(201).json({
            message: "Visitante cadastrado com sucesso!",
            visitante
        })
    }catch (error) {
        return response.status(400).send({message: error.message})
    }
}



const getAll = async (request, response) => {
    try {
        const visitante = await Visitantes.find()
        return response.status(200).json(visitante)

    }catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}

const getByName = async (request, response) =>{
    const nome = request.query.nome;
    await Visitantes.find({nome: nome})

    return response.status(200).send(Visitantes)
}


const getById = async (request, response) => {
    try {
        const { id } = request.params 
        const visitante = await Visitantes.findById(id)

        if (visitante == undefined || id == " "){
            return response.status(404).json({
                message: "Id inválido"
            })
        } 
        return response.status(200).json(visitante)
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
}

const updateById = async (request, response) => {
    try {
        const { id } = request.params
        const body = request.body
        const update = { new: true }

        const visitante = await Visitantes.findByIdAndUpdate(id, body, update)
        return response.status(200).send(visitante)
    }catch (error) {
        return response.status(404).send({message: "Visitante não encontrado!"})
    }
}


const deleteById = async (request, response) => {
    try {
        const visitante = await Visitantes.findById(request.params.id)

        if (visitante == null) {
            return response.status(404).json({message: "Visitante não encontrado!"})
        }
        await visitante.remove()
        return response.status(200).json({message: "Visitante deletado com sucesso!"})
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
} 
    



module.exports = {
    cadastrarVisitantes,
    getAll,
    getByName,
    getById,
    updateById,
    deleteById
}