const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    brand: String,
    image: String,
    type: String,
    price: Number,

})

module.exports = mongoose.model('Product', Product)