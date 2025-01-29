const mongoose = require('mongoose');
// Conexión a MongoDB
const conectDB =async()=>{
  try{  
    const con =await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recetasDB')
    console.log("Conectado a MongoDB");  
  } catch(error){    
    console.error('Error al conectar a MongoDB:', error)
    process.exit(1);
  }
        
}    

module.exports = {conectDB}