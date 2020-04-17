function Zoo() {
    this.name = '';
    this._id = ''
    this.animals = [];
    this.updateName = function(newName) {
        this.name = newName
    };
    this.newAnimal = function(animalData) {
        this.animals.push(animalData)
    }
    this.removeAnimal = function({_id}) {
        this.animals = this.animals.filter(animal => animal._id != _id)
    }

}

module.exports = Zoo;