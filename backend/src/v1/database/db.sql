--TABLA LIBROS
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(13) UNIQUE,
    genre VARCHAR(100),
    year SMALLINT,
    stock INT NOT NULL DEFAULT 0
);

--TABLA USUARIOS
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

--DATOS PRUEBA LIBROS
INSERT INTO books (title, author, isbn, genre, year, stock) VALUES ('La Osadia', 'Juan Carlos', '9783161484100', 'Terror', 2014, 100 )
--DATOS PRUEBA USUARIOS
INSERT INTO users (name, surname, email, password)
VALUES ('Guille', 'Apellido', 'guille@example.com', 'hashed_password');