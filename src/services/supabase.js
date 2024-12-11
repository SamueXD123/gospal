import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const guardarVisitaSupabase = async (nombre) => {
    try {
        const { data, error } = await supabase.from('visitas').insert([
            { nombre, fecha: new Date() }
        ]);

        if (error) {
            throw new Error(`Error al guardar en Supabase: ${error.message}`);
        }

        return data;
    } catch (error) {
        console.error('Error al guardar la visita:', error);
        throw error;
    }
};
