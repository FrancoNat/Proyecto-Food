const { Router } = require('express');
const recetas = require('./recipes.routes');
const dietas = require('./diet.routes')
// Importar todos los routers;
// Ejemplo:j const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recetas) // Contiene todas las rutas de recipes.
router.use('/diet', dietas) // Contiene todas las rutas de Diets.

module.exports = router;
