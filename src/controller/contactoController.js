const {models}=require('../../server')
const contacto = require('../models/contacto')

//traer todos los datos de la tabla



const getAllContactos=async (req,res)=>{
    try{
        const contacto= await models.Contacto.findAll()
    return res.status(200).json(contacto)
    }catch(error){
        return res.status(500).json({
            message: "Error: " + error.message
        })
        
    }
}

const createContacto=async (req,res)=>{
    const {
        nombre,
        apellido,
        email,
        telefono,
        img
    }= req.body

    const data={
        nombre,
        apellido,
        email,
        telefono,
        img
    }
    try {
        const contacto = await models.Contacto.create(data)
        return res.status(200).json({contacto, message: 'Se creo correctamente'})
    } catch (error) {
        return res.status(500).json({
            message: "Error: " + error.message
        })
    }
}

const getContactoById= async (req, res) => {
    const {id}=req.params

    try {
        const contacto = await models.Contacto.findOne({
            where: {
                id: id
            }
        })
        if(!contacto) {
            return res.status(404).json({
                message: "No se encontró el contacto  " 
            })
        }
        return res.status(200).json(contacto)
    } catch (error) {
        return res.status(500).json({
            message: "Error: " + error.message
        })
    }
}


const updateContacto= async (req, res) => {
    const {id}=req.params
    const {
        nombre,
        apellido,
        email,
        telefono,
        img
    }= req.body

    const data={
        nombre,
        apellido,
        email,
        telefono,
        img
    }
    try {
        const contactoExistente = await models.Contacto.findOne({
            where: {
                id: id
            }
        })
        if(!contactoExistente) {
            return res.status(404).json({
                message: "Contacto no encontrado"  
            })
        }
        const contactos = await models.Contacto.update(data,{
            where: {
                id: id
            }
        })
        return res.status(200).json({contactos, message: 'Se actualizo correctamente'})
    } catch (error) {
        return res.status(500).json({
            message: "Error: " + error.message
        })
    }
}

const deleteContacto= async (req, res) => {
    const {id}=req.params

    try {
        const contacto = await models.Contacto.findOne({
            where: {
                id: id
            }
        })
        if(!contacto) {
            return res.status(404).json({
                message: "No se encontró el contacto  " 
            })
        }
        const eliminar= await models.Contacto.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).json({ message: 'Se elimino'})
    } catch (error) {
        return res.status(500).json({
            message: "Error: " + error.message
        })
    }
}
module.exports = {
    getAllContactos,
    createContacto,
    getContactoById,
    updateContacto,
    deleteContacto
}