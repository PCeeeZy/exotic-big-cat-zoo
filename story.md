My goal for this app is sort of changing as I'm building it.  My initial goal was to build a cli for users to see animals at a zoo.  This was kind of cool but I quickly realized it would be more fun if users could have their own zoos and maybe see the animals in everyones collectively.  So its kind of changed and I assume will continue to change as I develop this.

However, I do have some coding goals that I would like to accomplish here.  First--its more practice with try, catch, async, and await.  Secondly, merge functional and OOP.

Anyway, first checkpoint:

![checkpoint snippet](/codeCheckpoints/snippet01-01.jpg)

![checkpoint snippet](/codeCheckpoints/snippet01-02.jpg)

![checkpoint snippet](/codeCheckpoints/snippet01-03.jpg)

![checkpoint snippet](/codeCheckpoints/snippet01-04.jpg)

So I also had this idea to use a dispatch system to manage the users flow.  This will be utilized but will change based on the needs of the program.
Currently the dispatch isnt fully utilized, but I think the foundation of the user object with basic error handling has been started.

I don't like the repetitiveness of my readfile functionality.  I think I'm going to tackle this, the writefile and then construct am animal object with inquirer prompts next.

The JSON file not already existing is a real bummer.  Caused a lot of headaches.  Eventually flipped the table and started over.

Decided to use util.promisify because more familiar.
Helped to use it with this resource i found. https://flaviocopes.com/how-to-check-if-file-exists-node/