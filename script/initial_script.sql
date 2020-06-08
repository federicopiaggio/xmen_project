CREATE DATABASE xmen_project;

use xmen_project;

CREATE TABLE xmen 
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    initialHP INT,
    initialATK INT,
    initialDEF INT,
    PRIMARY KEY (id)
);

CREATE TABLE user 
(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(40),
    password VARCHAR(40),
    PRIMARY KEY (id)
);

CREATE TABLE skill (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    initialDMG INT,
    PRIMARY KEY (id)
);

CREATE TABLE xmen_skill (
    id INT NOT NULL AUTO_INCREMENT,
    level INT DEFAULT 1,
    skillDMG INT,
    skillId INT NOT NULL,
    xmenId INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user_xmen (
    id INT NOT NULL AUTO_INCREMENT,
    level INT DEFAULT 1,
    maxHP INT,
    ATK INT,
    DEF INT,
    userId INT NOT NULL,
    xmenId INT NOT NULL,
    PRIMARY KEY (id)
);

