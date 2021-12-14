const Voluntarios = require("../models/voluntariosSchema")

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
    await Voluntarios.find({nome: nome})

    return response.status(200).send(Voluntarios)
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

const updateById = async (request, response) => {
    try {
        const { id } = request.params
        const body = request.body
        const update = { new: true }

        const voluntario = await Voluntarios.findByIdAndUpdate(id, body, update)
        return response.status(200).send(voluntario)
    }catch (error) {
        return response.status(404).send({message: "Voluntário não encontrado"})
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
    updateById,
    deleteById
}