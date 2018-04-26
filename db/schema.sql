CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);