import mongoose from "mongoose";

const RecetaSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        required: true 
    },
    ingredientes: { 
        type: String,
         required: true 
    },
    instrucciones: { 
        type: String,
        required: true 
    },
    estado: { 
            type: String,
            default: "activa" 
    },
    fechaCreacion: { 
        type: Date,
        default: Date.now
    },

});

const Receta = mongoose.model('Receta', RecetaSchema);
export default Receta; 