--TABLA LIBROS
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(13) UNIQUE,
    genre VARCHAR(100),
    year SMALLINT,
    stock INT NOT NULL DEFAULT 0,
    price DECIMAL (10, 2) NOT NULL
);


--DATOS PRUEBA LIBROS
INSERT INTO books (title, author, isbn, genre, year, stock, price)
VALUES ('La Osadia', 'Juan Carlos', '9783161484100', 'Terror', 2014, 100, 20.50);
