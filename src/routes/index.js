const {Router}= require('express')

const router=Router()

//la variable con los metodos de ruteos
const contactosRoutes=require('./contactos.routes')
router.use('/api/contacto', contactosRoutes)
module.exports = router