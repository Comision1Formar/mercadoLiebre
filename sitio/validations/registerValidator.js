const {check,validatorResult,body} = require('express-validator');
const dbUsuarios = require('../data/dbUsuarios');

module.exports = [
    check('nombre')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar un nombre válido'),
    
    check('apellido')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar un apellido válido'),
    
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email')
    .custom(function(value){
        for(let index = 0; index < dbUsuarios.length;index++){
            if(dbUsuarios[index].email == value){
                return false
            }
        }
        return true
    })
    .withMessage('Este email ya está registrado'),

    check('pass')
    .isLength({
        min:6,
        max:12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('pass2')
    .custom(function(value,{req}){
        if(value != req.body.pass){
            return false
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden')
]