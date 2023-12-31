const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Acá tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;



const productsController = {
    'list': (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('list.ejs', {products})
            })
    },
    'detail':(req,res)=>{
db.Product.findByPk(
    req.params.id,
)
.then(product=>{
    res.render('detail.ejs',{product})
})
},
add:(req,res)=>{
    let proProducts = db.Product.findAll();
    Promise
    .all([proProducts])
    .then(([allProducts])=>{
res.render(path.resolve(__dirname, '..', 'views',  'add'), {allProducts})})
.catch(error => res.send(error))
    
},
create:(req,res)=>{
    Products.create({
        articulo: req.body.articulo,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen: req.body.imagen
    })
    .then(()=>{
        return res.redirect('/products/list');
    })
    .catch(error=>res.send(error));
},
edit:(req,res)=>{
let productId= req.params.id;
    let promProducts= [Products.findByPk(productId)];
    Promise.all(promProducts)
        .then(([Product]) => {
            Product.release_date = moment(Product.release_date).format('L');
            return res.render(path.resolve(__dirname, '..', 'views', 'edit'), { Product });
        })
        .catch(error => res.send(error))
},
'update':(req,res)=>{
    let productId=req.params.id;
    Products.update(
        {
            articulo: req.body.articulo,
            modelo: req.body.modelo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen: req.body.imagen
        },
        {
            where: { id: productId }
        })
.then(()=>{
    return res.redirect('/products/list');    
})
.catch(error=>res.send(error))
},
'delete':(req,res)=>{
    let productId= req.params.id;
  Products.findByPk(productId)
  .then(Product=>{
    return res.render(path.resolve(__dirname, '..', 'views',  'delete'), {Product})
  })
  .catch(error=>res.send(error))
},
"destroy": function (req, res){
    let productId = req.params.id;
    Products.destroy({where: {id:productId}}) //, force: true
    .then(() =>{Products.count().then(c => {
        if (c === 0) {
            return Products.sequelize.query('ALTER TABLE products AUTO_INCREMENT = 1')
            .then(() => {
                return res.redirect('/products/list');
            })
        } else {
            return res.redirect('/products/list');
        }
    });
}).catch(error => res.send(error))
}
        // return res.redirect('/products') })
        // .catch(error => res.send(error))
 


}

module.exports = productsController;