// Importar módulos
const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const conect =require('../config/bd');
//Importar rutas
const recetaRoutes = require('../routes/receta.route')
// Inicializar la aplicación
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
app.use(cors());

//Base de datos
conect.conectDB();
// Rutas CRUD
app.use('/', recetaRoutes);
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
