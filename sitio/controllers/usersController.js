let dbProductos = require('../data/database')
module.exports = {
    register:function(req,res){
        res.render('userRegister',{
            title:"Registro de Usuario",
            css: "index.css"
        })
    },
    processRegister:function(req,res){
        res.send('REGISTRANDO USUARIO...')
    },
    login:function(req,res){
        res.render('userLogin',{
            title:"Ingresá a tu cuenta",
            css: "index.css"
        })
    },
    processLogin:function(req,res){
        res.send('INGRESANDO AL SITIO...')

    },
    profile:function(req,res){
        res.render('userProfile',{
            title: "Perfil de usuario",
            productos:dbProductos.filter(producto=>{
                return producto.category != "visited" && producto.category != "in-sale"
            }),
            css:"profile.css"

        })
    }
}