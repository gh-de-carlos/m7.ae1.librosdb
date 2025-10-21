# M7 AE1 libros DB

## Contexto

Desarrollar una pequeña aplicación en Node.js utilizando Express y PostgreSQL para consultar una base de datos de libros. El objetivo es practicar la conexión a una base de datos PostgreSQL mediante el paquete pg, aplicar pooling, definir credenciales, manejar errores de conexión y hacer consultas simples.

## Instrucciones

### 1. Configura tu proyecto

* Crea una carpeta para el proyecto.
* Inicializa con npm init -y.
* Instala los siguientes paquetes: express, pg, dotenv.
* Crea los siguientes archivos:

```bash
explorador-libros/
├── db/
│   └── pool.js
├── routes/
│   └── libros.js
├── .env
├── server.js
├── package.json
```

### 2. Configura tus credenciales

* En el archivo .env define las variables de entorno:

```bash
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=librosdb
```

### 3. Configura el pool de conexión

* En `/db/pool.js`:

```js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.on('connect', () => {
  console.log('Conectado a PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Error en la conexión con PostgreSQL:', err.message);
});

module.exports = pool;
```

**NOTA**: esto se ha realizado utilizando ES Modules.

### 4. Crea una tabla en tu base de datos

```sql
CREATE TABLE libros (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor TEXT NOT NULL,
  anio INT
);
```

### 5. Implementa una ruta para obtener todos los libros

```js
// Obtener todos los libros
router.get('/', async (req, res) => {
   // Implementar esta ruta
});
```

**NOTA**: El script tiene una pequeña adaptación para utilizar mi propio usuario. Descomenta/comenta las líneas indicadas en el archivo [`/db/script.sql`](./db/script.sql) para utilizar la creación por defecto bajo el usuario postgres.