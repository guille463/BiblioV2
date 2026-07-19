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
INSERT INTO books (title, author, isbn, genre, year, stock, price) VALUES
('Cien años de soledad', 'Gabriel García Márquez', '9788437604947', 'Realismo mágico', 1967, 15, 21.90),
('El nombre de la rosa', 'Umberto Eco', '9788426403568', 'Misterio', 1980, 8, 19.50),
('1984', 'George Orwell', '9788423342310', 'Distopía', 1949, 22, 14.95),
('Fahrenheit 451', 'Ray Bradbury', '9788445077509', 'Distopía', 1953, 12, 16.00),
('Don Quijote de la Mancha', 'Miguel de Cervantes', '9788420412146', 'Clásico', 1605, 30, 24.90),
('La sombra del viento', 'Carlos Ruiz Zafón', '9788408163381', 'Misterio', 2001, 18, 22.50),
('Rayuela', 'Julio Cortázar', '9788437624839', 'Novela', 1963, 7, 20.00),
('Ficciones', 'Jorge Luis Borges', '9788499089515', 'Relatos', 1944, 10, 15.50),
('Crónica de una muerte anunciada', 'Gabriel García Márquez', '9788497592437', 'Novela', 1981, 14, 13.90),
('El túnel', 'Ernesto Sabato', '9788432248277', 'Novela psicológica', 1948, 9, 12.95),
('Pedro Páramo', 'Juan Rulfo', '9788437605418', 'Realismo mágico', 1955, 11, 14.50),
('La casa de los espíritus', 'Isabel Allende', '9788401352834', 'Realismo mágico', 1982, 16, 21.00),
('Dune', 'Frank Herbert', '9788445013489', 'Ciencia ficción', 1965, 20, 23.90),
('Fundación', 'Isaac Asimov', '9788497599245', 'Ciencia ficción', 1951, 13, 18.50),
('El señor de los anillos', 'J.R.R. Tolkien', '9788445000663', 'Fantasía', 1954, 25, 29.90),
('Juego de tronos', 'George R.R. Martin', '9788496208940', 'Fantasía', 1996, 17, 26.50),
('Drácula', 'Bram Stoker', '9788491052546', 'Terror', 1897, 6, 17.90),
('It', 'Stephen King', '9788497593793', 'Terror', 1986, 19, 25.00),
('Orgullo y prejuicio', 'Jane Austen', '9788491051328', 'Romance', 1813, 21, 16.90),
('Los pilares de la tierra', 'Ken Follett', '9788497345996', 'Histórica', 1989, 24, 27.90);