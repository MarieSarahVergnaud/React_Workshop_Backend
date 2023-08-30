
CREATE DATABASE IF NOT EXISTS `rick_and_morty_db`;

USE `rick_and_morty_db`;

DROP TABLE IF EXISTS `rick_character`;

CREATE TABLE IF NOT EXISTS `rick_character`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `status`VARCHAR(35) NOT NULL,
    `gender` VARCHAR(35) NOT NULL,
    `species` VARCHAR(35) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `rick_character` (name, status, gender, species, image) VALUES
    ('Rick Sanchez', 'Alive', 'Male', 'Human', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'),
    ('Morty Smith', 'Alive', 'Male', 'Human', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'),
    ('Summer Smith', 'Alive', 'Female', 'Human', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'),
    ('Abadango Cluster Princess', 'Alive', 'Female', 'Alien', 'https://rickandmortyapi.com/api/character/avatar/6.jpeg');
