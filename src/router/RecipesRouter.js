const express = require('express')
const Recipe = require('../models/recipesModel')

const router = new express.Router()


router.post('/recipe', async (req, res) => {
    try {
        const recipe = new Recipe(req.body)
        await recipe.save()
        res.send(recipe)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

router.post('/recipes', async (req, res) => {
    const recipesList = req.body
    try {
        let counter = 0
        for (const rec of recipesList) {
            const recipe = new Recipe(rec)
            await recipe.save()
            counter++
        }
        res.send(counter)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

router.get('/recipe-by-id/:id', async (req, res) => {
    const { id } = req.params
    try {
        const recipe = await Recipe.findOne({ id })
        res.send(recipe)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

router.get('/random-recipe', async (req, res) => {
    try {
        const count = await Recipe.count()
        const random = Math.floor(Math.random() * count)
        const recipe = await Recipe.findOne().skip(random)
        res.send(recipe)
    }
    catch (err) {
        res.status(500).send(err)
    }
})


router.get('/recipes-by-category/:category', async (req, res) => {
    const { category } = req.params
    try {
        const recipe = await Recipe.find({ categories: { $in: category } })
        res.send(recipe)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
