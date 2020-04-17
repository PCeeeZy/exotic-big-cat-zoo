// DEPENDENCIES
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const chalk = require('chalk');

// IMPORTS
const User = require('./User.js');
const Animal = require('./Animal.js');
const HTML = require('./HTML.js');

// Promisify File System Methods for consistent async await use
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const existFileAsync = util.promisify(fs.access)

async function init() {
    console.log(chalk.green("Welcome to the Paul Exotic Wildlife Rescue!"))
    let client = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "password",
            name: "password",
            message: "enter your password"
        },
        {
            type: "input",
            name: "zooName",
            message: "What is your zoo's name?"
        }
    ]).catch(err => {
        errToExit();
    });

    client["data"] = await existFileAsync('data/userZoos/' + client.name + '.json', fs.F_OK)
        .then(async (fileExists) => {
            let zooString = await readFileAsync('data/userZoos/' + client.name + '.json')
            let { data, name, password } = JSON.parse(zooString);

            if (client.name === name && client.password === password) {
                console.log(chalk.green('Great your login was successful!'));
                return data;
            } else {
                return;
            }

        }).catch(async (noFile) => {
            await writeFileAsync('data/userZoos/' + client.name + '.json', "", "utf8");
            return [];
        });

    let newSession = new User(client);
    await newSession.updateJSON();
    await newSession.dispatch();
};
function errToExit() {
    console.log(chalk.red("Oh no there's been an issue.  Restart the application to continue"))
    break;
}
// USER PROTOTYPES

// this saves the user's info after a change
User.prototype.updateJSON = async function () {
    await
        writeFileAsync('data/userZoos/' + this.name + '.json', JSON.stringify(this, null, 2), "utf8")
            .catch(err => {
                throw new Error(err);
            })
}
// this dispatches the user to the proper question flow based on user needs
User.prototype.dispatch = async function () {
    let { intent } = await inquirer.prompt([
        {
            type: "list",
            name: "intent",
            message: "What would you like to do?",
            choices: [
                'See all my animals',
                'See my animals by species',
                'Add new animal',
                'Remove an animal',
                'Generate HTML',
                "I'm done for now! See ya"
            ]
        }
    ]).catch(err => {
        throw new Error(err);
    });
    switch (intent) {
        case 'See all my animals':
            this.seeAll();
            break;
        case 'See my animals by species':
            this.whichSpecies();
            break;
        case 'Add new animal':
            this.addAnimal();
            break;
        case 'Remove an animal':
            this.removeAnimal();
            break;
        case 'Generate HTML':
            new HTML(this)
            break;
        case "I'm done for now! See ya":
            break;
        default:
            break;
    }
}

// ADD ANIMAL TO ZOO
User.prototype.addAnimal =  async function () {
    console.log(chalk.green('Meow go ahead and tell us about this new cat!'))
    await inquirer.prompt([{
        type: "input",
        message: "What's the pretty kitty's name?",
        name: "name"
    }, {
        type: "input",
        message: "What type of cat are they?",
        name: "species"
    }, {
        type: "input",
        message: "Where are they originally from?",
        name: "origin"
    }, {
        type: "input",
        message: "How old are they?",
        name: "age"
    }, {
        type: "input",
        message: "Do they have a catchphrase?",
        name: "catchphrase"
    }, {
        type: "input",
        message: "Share a url to an image of them or leave this blank",
        name: "image"
    }, {
        message: "Are they a male or female?",
        type: "list",
        name: "gender",
        choices: [
            "Male",
            "Female"
        ]
    }
    ]).then(async (response) => {
        console.log(chalk.yellow(`Great let's get ${response.name} added to your zoo`));
        this.data.push(new Animal(response));
        await this.updateJSON();
        return response.name;
    }).then(async (animalAdded) => {
        console.log(chalk.green(`${animalAdded} was added to your zoo successfully.`));
        await this.dispatch();
    })
}

// REMOVE ANIMAL FROM ZOO :( sad
User.prototype.removeAnimal =  async function () {
    // we know the names of all our animals.  Lets create an array of their options for inquirer to list out.  Then we can use the id to remove it from the zoo's animal list. then lets save
    const choicesForInq = this.data.map(animal => `Name: ${animal.name}, _id: ${animal._id}`)
    await inquirer.prompt([
        {
            type: "list",
            choices: choicesForInq,
            message: "Who's the unlucky kitty?",
            name: "animalToRemove"
        }
    ]).then(async ({animalToRemove}) => {
        let temp = animalToRemove.split(', _id: '); // ["Name: ${animal.name}", "${animal._id}"]
        let config = {
            name: temp[0].split('Name: ')[1],
            _id: temp[1]
        };
        this.data = this.data.filter((animal) => {
            return animal._id != config._id
        })
        await this.updateJSON();
        return config.name
    }).then(async (animalRemoved) => {
        console.log(chalk.green(`${animalRemoved} was removed from your zoo.`));
        await this.dispatch();
    })
}
// list all animals in zoo--perhaps use console.table?
// is there a way to dynamic this to filter by species too? one function to display them all! one langauge to drive them! javascript front and back, in the darkness bind them!
User.prototype.seeAll = async function(speciesToFilter='') {
    console.log(speciesToFilter)
    let filteredResults = this.data.filter((animal) => {
        return animal.species.includes(speciesToFilter)
    })
    console.table(filteredResults)
    await this.dispatch();
}

User.prototype.whichSpecies = async function() {
    let speciesAvailable = [];
    for (let {species} of this.data) {
       (speciesAvailable.includes(species)) ? null : speciesAvailable.push(species)
    }
    console.log(speciesAvailable)
    let {speciesToFilter} = await inquirer.prompt([{
        type: "list",
        choices: speciesAvailable,
        message: "Which species would you like to filter by?",
        name: "speciesToFilter"
    }])
    this.seeAll(speciesToFilter);
}



init();