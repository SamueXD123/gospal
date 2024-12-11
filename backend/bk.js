import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
const port = 4000;

// Middleware para parsear el body en formato JSON
app.use(express.json());
app.use(cors());
// Conexión a la base de datos
mongoose.connect('mongodb+srv://jerlibGnzlz:jm151619@backendcoderhouse.hvsk3vk.mongodb.net/visitas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.log('Error de conexión:', err));

// Esquema de la base de datos (Modelo)
const visitaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

const Visita = mongoose.model('Visita', visitaSchema);

// Ruta para manejar el POST de los registros
app.post('/registro', async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ error: 'El nombre es requerido.' });
        }

        // Crear una nueva visita en la base de datos
        const nuevaVisita = new Visita({ nombre });

        // Guardar la visita en la base de datos
        await nuevaVisita.save();

        res.status(201).json({ mensaje: 'Registro exitoso', visita: nuevaVisita });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la visita.' });
    }
});

// Arrancar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
