const axios = require('axios');
const { Diet } = require('../db');
const { API_KEY } = procces.env;

module.export = {
    diet: async () => {
        const lengthdata = await Diet.findByPk(1);
        if(!lengthdata) {
            const dietApi = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
            );
            const diet = await dietApi.data.results.map((el) => el.diets);
            let data = diet.flat();
            const typeDiet = [...new Set(data)];

            typeDiet.forEach((el) => {
                Diet.findOrCrete({
                    where: { name: el },
                });
            });
        console.log('Me ha ejecutado' + 1);  
    } else {
        console.log('Los datos de dietas ya están cargados');
    }
},
 recipes: async () => {},
};