const express = require('express')
const cors = require('cors')
const recipeRouter = require('./router/RecipesRouter')
const categoriesRouter = require('./router/CategoriesRouter')
const app = express()
const port = process.env.PORT || 33201

require('./db/mongodb')

app.use(express.json())
app.use(cors())
app.use(recipeRouter)
app.use(categoriesRouter)

app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
