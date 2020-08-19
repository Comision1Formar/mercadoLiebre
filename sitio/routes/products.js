const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controller = require('../controllers/productsController') //requiero el controlador que se hará cargo de la lógica

router.get('/', controller.listar) //construyo la ruta que me visualizará información de prueba
router.get('/detail/:id', controller.detalle) // añado la ruta para mostrar los detalles del producto

router.get('/add',controller.agregar);
router.get('/add/form',controller.agregar);
router.post('/add/form',controller.publicar)





module.exports = router //exporto router