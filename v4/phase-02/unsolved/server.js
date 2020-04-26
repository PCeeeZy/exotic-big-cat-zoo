const express = require('express');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, function() {
console.log('Server listening on: http://localhost:' + PORT);
});