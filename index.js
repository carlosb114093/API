const express = require('express');
const app = express();
const PORT = 3000;

//Middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.json());

//Simulación de base de datos
let recetas = [];

//Ruta GET: Obtener todas las recetas
app.get('/recetas',(req,res) =>{
res.json(recetas);    
});

//Ruta POST: Crear una nueva receta
app.post('/recetas',(req,res) =>{
    const {nombre, ingredientes,instrucciones} = req.body;   

    //validar que los campos esenciales esten presentes
    if(!nombre || !ingredientes || !instrucciones){
     return res.status(400).json({ mensaje: "Nombre,Ingredientes e instrucciones son requeridos"});   
    }

    const nuevaReceta = {
    id: recetas.length+1,
    nombre,
    ingredientes,
    instrucciones    
    };

    recetas.push(nuevaReceta);
    res.status(201).json(nuevaReceta);
    });

//ruta GET: Obtener una receta por ID
app.get('/recetas/:id',(req,res)=>{
    const{id} =req.params;   
    const receta= recetas.find(r => r.id === parseInt(id));
    
    if(!receta){
      return res.status(404).json({mensaje: 'Receta no encontrada'});   
    }

    res.json(receta);    
});


app.put('/recetas/:id',(req, res) =>{
const { id }=req.params;
const {nombre, ingredientes, instrucciones} = req.body;

const receta =recetas.find(r => r.id === parseInt(id));

if(!receta){
  return res.status(404).json({mensaje: 'Receta no encontrada'});
}

receta.nombre = nombre;
receta.ingredientes = ingredientes;
receta.instrucciones = instrucciones;
res.json(receta);
});

//Ruta DELETE :Eliminar una receta por ID
app.delete('/recetas/:id',(req,res)=>{
    const {id} = req.params;
    const index = recetas.findIndex(r => r.id === parseInt(id));

    if (index === -1){
      return res.status(404).json({mensaje: 'Receta no encontrada'});  
    }

    recetas.splice(index, 1);
    res.status(200).json({mensaje:`Receta encontrada con ID ${id}`});
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
   
  });
  




