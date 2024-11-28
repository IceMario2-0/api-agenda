const express= require('express')
const contactoController = require('../controller/contactoController.js')
const router=express.Router()

router.get('/',contactoController.getAllContactos)

router.post('/',contactoController.createContacto)
router.get('/:id',contactoController.getContactoById)
router.put('/:id',contactoController.updateContacto)
router.delete('/:id',contactoController.deleteContacto)

module.exports = router