import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { guardarVisitaSupabase } from '../services/supabase.js';

config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());


const router = express.Router();

router.post('/supabase', async (req, res) => {
    try {
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({ error: 'El nombre es requerido.' });
        }

        const data = await guardarVisitaSupabase(nombre);
        res.status(201).json({ mensaje: 'Registro exitoso en Supabase', data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use(router);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
