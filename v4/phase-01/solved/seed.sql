use exotic_zoo;

-- I suggest creating user called 'guest' and give them dumb password.
INSERT INTO users (username, password) values ('guest', 'troll');

-- When executed we want this to add at least 1 user and 3 animals to that users zoo.
INSERT INTO animals (userId, name, age, species, image, gender, catchphrase) VALUES (1, 'Tony', 26, 'Tiger', 'https://www.thefactsite.com/wp-content/uploads/2019/02/tony-the-tiger.jpg', 'male', "They'rrrrrr Grrrrrreat"),
(1, 'Sabor', 17, 'Leopard', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Sabor_the_leopard.jpg/250px-Sabor_the_leopard.jpg', 'male', "killed Kala's son.  Not a good dude"),
(1, 'Shere Khan', 204, 'Bengal Tiger', "https://cubsjunglebook.weebly.com/uploads/3/8/9/4/38944083/1677813.png?434", 'male', 'Despite being born with a crippled leg Shere Khan is arrogant and regards himself as the rightful lord of the jungle');