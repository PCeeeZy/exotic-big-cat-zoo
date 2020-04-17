// Dependencies
const {v4: uuidv4} = require('uuid');  //https://www.npmjs.com/package/uuid

function Animal({name, species, origin, age, catchphrase, gender, image}) {
    this.name = name;
    this.species = species;
    this.origin = origin;
    this.age = age;
    this.catchphrase = catchphrase;
    this.image = image;
    this.gender = gender;

    this._id = uuidv4()
}

module.exports = Animal;