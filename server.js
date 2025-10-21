import express from 'express';
import dotenv from 'dotenv';
import librosRoutes from './routes/libros.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/libros', librosRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'API de Libros - Sistema de gestión de libros',
    endpoints: {
      'GET /libros': 'Obtener todos los libros'
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

app.listen(PORT, () => {
  console.log(`Servidor con la paila puesta en http://localhost:${PORT}`);
});