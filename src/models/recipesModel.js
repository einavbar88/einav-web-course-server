const mongoose = require('mongoose')
        
const recipesSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        unique: true,
        required: true,
    },
    calories: {
        type: Number,
    },
    servings: {
        type: Number,
        required: true,
    },    
    recipeTime: {
        prep: {
            amount: {type: Number, required: true},
            name: {type: String, required: true},
        },
        cook: {
            amount: {type: Number, required: true},
            name: {type: String, required: true},
        }
    },
    images: [{
        type: String
    }],
    credits: {
        type: String
    },
    recipeScore: {
        type: Number
    },
    difficulty: {
        type: String
    },
    categories: [{
        type: String,
        required: true
    }],
    subTitle: {
        type: String,
        required: true
    },
    ingredients: [{
        ingredient: {         
            type: String,
            required: true        
        },
        comment: {
            type: String
        }
    }],
    instructions: [{
        type: String,
        required: true
    }],
    mainImage: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Recipe = mongoose.model('Recipe', recipesSchema)

module.exports = Recipe