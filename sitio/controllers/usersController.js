let dbProductos = require('../data/database')
module.exports = {
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