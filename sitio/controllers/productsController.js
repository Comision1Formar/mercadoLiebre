const dbProducts = require('../data/database') //requiero la base de datos de productos
const dbCategories = require('../data/db_categories')

module.exports = { //exporto un objeto literal con todos los metodos
    listar: function(req, res) {
        res.render('products', {
                title: "Todos los Productos",
                productos: dbProducts
            }) //muestra información de prueba
    },
    detalle: function(req, res) {

        let id = req.params.id;
        let producto = dbProducts.filter(producto => {
            return producto.id == id
        })
        res.render('productDetail', {
            title: "Detalle del Producto",
            id: id,
            producto: producto[0]
        })
    },
    agregar:function(req,res){
        let categoria;
        let sub;
        if (req.query.categoria){
            categoria = req.query.categoria;
            sub = req.query.sub;
        }
        res.render('addProduct',{
            title:"Agregar Producto",
            categorias:dbCategories,
            categoria:categoria,
            sub:sub
        })
    }
}