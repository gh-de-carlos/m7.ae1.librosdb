-- Opción 1: Crea la db bajo el usuario postgres.
-- CREATE DATABASE libros_db;

-- Opción 2: Creo la db bajo mi propio usuario dedicado.
CREATE DATABASE libros_db WITH OWNER = bootcamp_user;

-- Debes comentar si creas la bd bajo el usuario postgres.
SET ROLE bootcamp_user;

\c libros_db;

CREATE TABLE libros (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor TEXT NOT NULL,
  publication_year INT
);

INSERT INTO libros (titulo, autor, publication_year) 
VALUES
('Cien Años de Soledad', 'Gabriel García Márquez', 1967),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605),
('La Sombra del Viento', 'Carlos Ruiz Zafón', 2001);