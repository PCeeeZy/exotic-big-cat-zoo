const User = require('./User.js');
const Zoo = require('./Zoo.js')

function Payload() {
    this.user = new User();
    this.zoo = new Zoo();
}

module.exports = Payload;