-- Users will be able to login/signup, as well as add, remove, and edit their animals.

-- SELECT ALL animals
SELECT * from animals;

-- SELECT ALL user's animals
SELECT * from animals WHERE userId = 1 AND species='Tiger';

-- CHECK login
SELECT * from users WHERE username='guest' AND pw='troll';

-- INSERT user
INSERT INTO users (username, pw) VALUES ('guest', 'troll');

-- INSERT animal
INSERT into animals (userId, name, age, species, image, gender, catchphrase) VALUES (userId, name, age, species, image, gender, catchphrase);

-- UPDATE animal
UPDATE animals SET ? WHERE ?;

-- DELETE animal
DELETE FROM animals WHERE id = ?;

