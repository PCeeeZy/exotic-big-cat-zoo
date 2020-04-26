-- db = exotic_zoo
DROP DATABASE IF EXISTS exotic_zoo;
CREATE DATABASE exotic_zoo;

use exotic_zoo;

-- Start off by building your mySQL tables.  Remember we want to have a users and animals table in a user has many animals relationship.

-- Users needs columns for id, username, pw
CREATE TABLE users (
    id INT(10) AUTO_INCREMENT NOT NULL,
    username VARCHAR(32) NOT NULL,
    pw VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
);

-- Animals needs columns for id, user.id , name, age, species, image, gender, catchphrase.
CREATE TABLE animals (
    id INT(10) AUTO_INCREMENT NOT NULL,
    userId INT(10),
    name VARCHAR(32) NOT NULL,
    age INT(10),
    species VARCHAR(64),
    image VARCHAR(256),
    gender VARCHAR(16) NOT NULL,
    catchphrase VARCHAR(256) NOT NULL,
    primary key (id)
);