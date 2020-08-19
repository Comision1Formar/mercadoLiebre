const dbProducts = require('../data/database') //requiero la base de datos de productos
const dbCategories = require('../data/db_categories');
const fs = require('fs');
const path = require('path');

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
    },
    publicar:function(req,res){
        let lastID = 1;
        dbProducts.forEach(producto=>{
            if(producto.id > lastID){
                lastID = producto.id
            }
        })
    
        let newProduct = {
            id:lastID + 1,
            name:req.body.name,
            price:Number(req.body.price),
            discount:Number(req.body.discount),
            category:req.body.category,
            description:req.body.description,
            image:"default-image.png"
        }
        dbProducts.push(newProduct);
        
        fs.writeFileSync(path.join(__dirname,"..","data","productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')

        res.redirect('/products')
    }
}