const mongoose = require('mongoose')
        
const categoriesSchema = new mongoose.Schema({
    key: {
        type: String,
        unique: true,
        required: true,
    },
    href: {
        type: String,
        required: true,    
    },
    categoryName: {
        type: String,
        required: true,
    },    
    svg: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Category = mongoose.model('Category', categoriesSchema)

module.exports = Category