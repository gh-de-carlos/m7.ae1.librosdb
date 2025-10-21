import express from 'express';
import pool from '../db/pool.js';

const router = express.Router();

// Obtener todos los libros
router.get('/', async (req, res) => {
   try {
       const result = await pool.query('SELECT * FROM libros');
       res.json(result.rows);
   } catch (error) {
       console.error('Error al obtener los libros:', error);
       res.status(500).json({ error: 'Error al obtener los libros' });
   }
});

export default router;