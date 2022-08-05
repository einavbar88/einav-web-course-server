const express = require('express')
const Category = require('../models/categoryModel')

const router = new express.Router()

router.post('/post-new-category', async (req, res) => {
    try {
        const category = new Category(req.body)
        await category.save()
        res.send(category)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

router.get('/category-by-key/:key', async (req, res) => {
    const { key } = req.params
    try {
        const category = await Category.findOne({ key })
        res.send(category)
    }
    catch (err) {
        res.status(500).send(err)
    }
})


router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find({})
        res.send(categories)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
