const Product = require('../models/Product')

const productController = {

    index: (req, res) => {
        Product.find().then((product)=>{
            res.render('products', {
             product: product   
            })
        })
    }

}

module.exports = productController