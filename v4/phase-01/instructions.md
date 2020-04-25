Start off by building your mySQL tables.  Remember we want to have a users and animals table in a user has many animals relationship.

db = exotic_zoo
table1 = users
table2 = animals

Users needs columns for id, username, pw
Animals needs columns for id, user.id , name, age, species, image, gender, catchphrase.

Then lets build a seed.

When executed we want this to add at least 1 user and 3 animals to that users zoo.

I suggest creating user called 'guest' and give them dumb password.

We might also want to think of the types of queries we are going to need to use.  Remember we want Users will be able to login/logout, as well as add, remove, and edit their animals.