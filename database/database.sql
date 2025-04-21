CREATE DATABASE BIBLIOTECA;
USE BIBLIOTECA;

    CREATE TABLE LIBRO(
        id                  INT PRIMARY KEY AUTO_INCREMENT,
        titulo              VARCHAR(70),
        autor               VARCHAR(100),
        genero              ENUM('Biografia','Poesia','Drama','Cuento','Fabula'),
        fechaPublicacion    DATE,
        isbn                VARCHAR(50),
        disponible          BOOLEAN
    )ENGINE=INNODB;

INSERT INTO LIBRO(titulo,autor,genero,fechaPublicacion,isbn,disponible)VALUES      
                ('El principito','Antoine de Saint-Exupéry','Drama','1943-04-06','9780156012195',true);
CREATE VIEW vista_libros AS
SELECT 
    id,
    titulo,
    autor,
    genero,
    fechaPublicacion,
    isbn,
    CASE 
        WHEN disponible = 1 THEN 'Disponible'
        WHEN disponible = 0 THEN 'No disponible'
    END AS disponible
FROM LIBRO;
SELECT*FROM LIBRO;