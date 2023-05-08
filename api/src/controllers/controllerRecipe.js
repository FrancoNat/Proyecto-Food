const axios = require('axios');
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../db');

//Obtengo las recetas de la API

const getApiInfo = async () => {
    const lengthdata = await Recipe.findeAll();
    if(lengthdata.length < 100) {
        const urlApi = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
        );
        await urlApi.data.results.map(async (el) => {
            let recipeCreated = await Recipe.create({
               name: el.title,
               summary: el.summary,
               healthScore: el.healthScore,
               stepbyStep: el.analyzedInstructions[0]?.steps.map((paso) => {
                return `<b>${paso.number}</b>  ${paso.step}`;;
               }),
               image: el.image,
            });
            let dietDb = await Diet.findAll({
                where: {
                    name: el.diets,
                },
            });
            recipeCreated.addDiet(dietDb);
        });
    } else {
        console.log('Los datos de recetas ya estan cargados 202');
    }
};

//Obtengo los Datos de la base de Datos 
const getDbinfo = async () => {
    return await Recipe.findAll({
      include: {
        model: Diet,
        atrributes: ['name'],
        through: {
            atrributes: ['id', 'name']
        },
      },
    });
};

module.exports = {
    getDbinfo,
    getApiInfo,
  };