// Dependencies
const Server = require('./models/Server.js');
const Dispatch = require('./models/Dispatch.js');
const Payload = require('./models/Payload.js');
const db = require('./data/index.js');
console.log(db)

const app = new Server;
app.router(new Dispatch, new Payload())