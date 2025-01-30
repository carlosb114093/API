import Receta from '../models/receta.js';
export const postRecetas = async (req, res) => {
    try {
        const nuevaReceta = new Receta(req.body);
        const recetaGuardada = await nuevaReceta.save();
        res.status(201).json(recetaGuardada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Obtener todas las recetas (GET)
export const getRecetas = async (req, res) => {
    try {
        const recetas = await Receta.find();
        res.json(recetas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una receta por ID (GET)
export const getReceta = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        if (!receta) {
            return res.status(404).json({ error: 'Receta no encontrada' });
        }
        res.json(receta);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const searchRecetasByNombre = async (req, res) => {
    try {
        const nombre = req.params.nombre; // Obtiene el nombre desde los parámetros de la URL
        const recetas = await Receta.find({ nombre: { $regex: nombre, $options: 'i' } }); // Búsqueda insensible a mayúsculas y minúsculas
        
        if (recetas.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron recetas con ese nombre' });
        }

        res.json(recetas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una receta por ID (PATCH)
export const updateReceta = async (req, res) => {
    try {
        const recetaActualizada = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recetaActualizada) {
            return res.status(404).json({ error: 'Receta no encontrada' });
        }
        res.json(recetaActualizada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Eliminación lógica de una receta (PATCH)
export const inactiveReceta = async (req, res) => {
    try {
        const recetaInactivada = await Receta.findByIdAndUpdate(req.params.id, { estado: 'Inactiva' }, { new: true });
        if (!recetaInactivada) {
            return res.status(404).json({ error: 'Receta no encontrada' });
        }
        res.json({ mensaje: 'Receta marcada como inactiva', receta: recetaInactivada });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar una receta por ID (DELETE)
export const deleteReceta = async (req, res) => {
    try {
        const recetaEliminada = await Receta.findByIdAndDelete(req.params.id);
        if (!recetaEliminada) {
            return res.status(404).json({ error: 'Receta no encontrada' });
        }
        res.json({ mensaje: 'Receta eliminada correctamente', receta: recetaEliminada });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

