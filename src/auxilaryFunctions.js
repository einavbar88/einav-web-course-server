const { gotScraping } = require('got-scraping');
const cheerio = require('cheerio')

const grabber = async (url) => {
    const recipeHtml = await gotScraping.get({ url })
    const $ = cheerio.load(recipeHtml.body)
    const title = $('.recipe-title-container h1').text()?.trim()
    const timeAndInfo = $('.recipe-cooking-info').text()?.replace(/\s/g, '')
    const subTitle = $('.single-asset-description-block p').text()?.trim()
    const mainImage = $('img.img-responsive.main-icon').attr('src')

    const ingredientsList = $('.recipe-ingredients-section ul li')
    const ingredients = []
    for (const el of ingredientsList) {
        const $$ = cheerio.load(el, null, false)
        ingredients.push({ingredient: $$('.ingredient-description').text()?.trim(), comment: "" })
    }


    const steps = $('.recipe-method-section ul li')
    const instructions = []
    for (const el of steps) {
        const $$ = cheerio.load(el, null, false)
        instructions.push($$('.recipe-method-step-content').text()?.trim())
    }


    return {
        id: title.toLowerCase().replace(/\s/g, '-'),
        title,
        timeAndInfo,
        calories: $('.calories span').text(),
        servings: 4,
        recipeTime: {
            prep: {
              "amount": 0,
              "name": "Prep"
            },
            cook: {
              "amount": 0,
              "name": "Cook"
            }
        },
        images: [],
        credits: 'taste.com.au',
        recipeScore: 4,
        difficulty: "",
        categories: [],
        subTitle,
        ingredients,
        instructions,
        mainImage
    }
}

module.exports = {
    grabber
}