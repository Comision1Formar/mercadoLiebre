const {check,validatorResult,body} = require('express-validator');
const dbUsuarios = require('../data/dbUsuarios');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('pass')
    .isEmpty()
    .withMessage('Debes ingresar una contraseña'),

    body('email')
    .custom(function(value){
        dbUsuarios.forEach(usuario => {
            if(usuario.email != value){
                result = false
            }
        })
        if(result == false){
            return false
        }else{
            return true
        }
    })
    .withMessage('El usuario no está registrado')
]