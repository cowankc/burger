DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER PRIMARY KEY AUTO _INCREMENT,
    burger_name VARCHAR(300),
    devoured BOOLEAN DEFAULT FALSE
);