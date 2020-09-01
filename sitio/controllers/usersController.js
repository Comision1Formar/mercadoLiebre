let dbProductos = require('../data/database');
let dbUsuarios = require('../data/dbUsuarios');

const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = {
    register:function(req,res){
        res.render('userRegister',{
            title:"Registro de Usuario",
            css: "index.css"
        })
    },
    processRegister:function(req,res){
       let errors = validationResult(req);
       let lastID = dbUsuarios.length;

       if(errors.isEmpty()){
           let nuevoUsuario = {
               id:lastID +1,
               nombre: req.body.nombre,
               apellido: req.body.apellido,
               email: req.body.email,
               ciudad: req.body.ciudad,
               pass:bcrypt.hashSync(req.body.pass,10),
               rol:"user"
           };
           dbUsuarios.push(nuevoUsuario);
           fs.writeFileSync(path.join(__dirname,'..','data','dbUsuarios.json'),JSON.stringify(dbUsuarios),'utf-8');
           res.render('userLogin',{
            title:"Gracias por registrarte, ingresá a tu cuenta",
            css: "index.css"
           });
       }else{
           res.render('userRegister',{
            title:"Registro de Usuario",
            css: "index.css",
            errors:errors.mapped(),
            old:req.body
           })
       }
    },
    login:function(req,res){
        res.render('userLogin',{
            title:"Ingresá a tu cuenta",
            css: "index.css"
        })
    },
    processLogin:function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){

        }else{
            res.render('userLogin',{
                title:"Ingresá a tu cuenta",
                css: "index.css",
                errors:errors.mapped(),
                old:req.body
               })
        }
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