import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const mongoURI = process.env.MONGODB_URL;

if (!mongoURI) {
    console.log(mongoURI);
    console.error("❌ Error: MONGO_URI no está definido en .env");
    process.exit(1); // Detener la ejecución si no hay URI
}

export const conectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("❌ Error de conexión a MongoDB:", error);
        process.exit(1);
    }
};

