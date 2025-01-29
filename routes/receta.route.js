import express from "express";
import { postRecetas, getRecetas, getReceta, updateReceta, inactiveReceta, deleteReceta, searchRecetasByNombre } from "../controller/receta.controller.js";
 

const router = express.Router();

router.get('/recetas', getRecetas);
router.post('/recetas', postRecetas);
router.get('/recetas/:id', getReceta);
router.get('/buscar/:nombre', searchRecetasByNombre); 
router.patch('/recetas/:id', updateReceta);
router.patch('/recetas/inactivar/:id', inactiveReceta);
router.delete('/recetas/:id', deleteReceta);
export default router; 

