const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const axios = require('axios');
//const { API_KEY } = procces.env;
const router = Router();
const model = require('../controllers/controllerRecipe')
const { recipes } = require('../controllers/RecetasApi')

// GET | /recipes/name?="..."
// Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarla independientemente de mayúsculas o minúsculas.
// Si no existe la receta, debe mostrar un mensaje adecuado.
// Debe buscar tanto las de la API como las de la base de datos.
//Listar todas las dietas y buscar por nombre 

router.get('/all', async (req, res) =>{
    const name = req.query.name;
    let recipeTotal = await model.getDbinfo();
    if(name) {
        let recipeName = await recipeTotal.filter((el) =>
          el.name.toLowerCase().includes(name.toString().toLocaleLowerCase())
        );
        recipeName.length
        ? res.status(200).send(recipeName)
        : res
            .status(404)
            .send(
                'No existe Receta que contenga ese nombre: ' + name.toLocaleLowerCase()
            );
    } else {
        res.status(200).send(recipeTotal);
    }
});

/*-------------BUSCO MIS RECETAS POR ID------------------------*/
// GET | /recipes/:idRecipe
// Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
// La receta es recibida por parámetro (ID).
// Tiene que incluir los datos de los tipos de dietas asociados a la receta.
// Debe funcionar tanto para las recetas de la API como para las de la base de datos.

router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    let recipeTotal = await model.getDbinfo();
    /* const recipeTotal = await Recipe.findByPk(id); */
    /* res.status(200).send(recipeTotal); */
    if(id) {
        let recipeId = await recipeTotal.filter((el) => el.id == id);
        recipeId.length
        ? res.status(200).json(recipeId)
        : res.status(404).send('No se encontró la receta con el id: ' + id);
    }
});


/*----------------------Agregar recetas-------------------------------*/
// POST | /recipes
// Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).

router.post('/', async (req, res) => {
    const { name, summary, healthScore, stepbyStep, image, createIndb, diet } = req.body;
    if(!name || !summary) {
        res.status(404).send('Los datos name y summary son requeridos');
    } else {
        try {
            let recipeCreated = await Recipe.create({
                name, 
                summary, 
                healthScore, 
                stepbyStep, 
                image, 
                createIndb,
            });
            let dietDb = await Diet.findAll({
                where: {
                    name: diet,
                },
            });
            recipeCreated.addDiet(dietDb);// Agregó la dieta al modelo Recipe
            res.send('Receta creada con éxito');
        } catch (error) {
            res.status(404).send(error + 'Error al crear la receta')
        }
    }
});

module.exports = router;