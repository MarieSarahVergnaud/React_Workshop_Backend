
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
    ('Abadango Cluster Princess', 'Alive', 'Female', 'Alien', 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'),
    ('Beth Smith','Alive','Female','Human','https://rickandmortyapi.com/api/character/avatar/4.jpeg'),
    ('Jerry Smith','Alive','Male','Human','https://rickandmortyapi.com/api/character/avatar/5.jpeg'),
    ('Abadango Cluster Princess','Alive','Female','Alien','https://rickandmortyapi.com/api/character/avatar/6.jpeg'),
    ('Abradolf Lincler','unknown','Male','Human','https://rickandmortyapi.com/api/character/avatar/7.jpeg'),
    ('Adjudicator Rick','Dead','Male','Human','https://rickandmortyapi.com/api/character/avatar/8.jpeg'),
    ('Alien Morty','unknown','Male','Alien','https://rickandmortyapi.com/api/character/avatar/14.jpeg'),
    ('Alien Rick','unknown','Male','Alien','https://rickandmortyapi.com/api/character/avatar/15.jpeg'),
    ('Amish Cyborg','Dead','Male','Alien','https://rickandmortyapi.com/api/character/avatar/16.jpeg'),
    ('Antenna Morty','Alive','Male','Human','https://rickandmortyapi.com/api/character/avatar/18.jpeg'),
    ('Ants in my Eyes Johnson','unknown','Male','Human','https://rickandmortyapi.com/api/character/avatar/20.jpeg');
