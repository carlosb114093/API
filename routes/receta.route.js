const express = require('express');
const { postRecetas,
    getRecetas,
    getReceta,
    updateReceta,
    inactiveReceta,
    deleteReceta,
    searchRecetasByNombre
 } = require ('./../controller/receta.controller');
 

const router = express.Router();

router.get('/recetas', getRecetas);
router.post('/recetas', postRecetas);
router.get('/recetas/:id', getReceta);
router.get('/buscar/:nombre', searchRecetasByNombre); 
router.patch('/recetas/:id', updateReceta);
router.patch('/recetas/inactivar/:id', inactiveReceta);
router.delete('/recetas/:id', deleteReceta);
module.exports= router;

