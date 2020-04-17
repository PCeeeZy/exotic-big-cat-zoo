function User({name, password, zooName, data = []}) {
    this.name = name;
    this.password = password;
    this.zooName = zooName;
    this.data = data;
    this.changesSinceLastSave = 0;

    this.changePassword = function() {

    }
}

module.exports = User;