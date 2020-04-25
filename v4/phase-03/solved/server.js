// DEPENDENCIES
const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 8000;

// EXPRESS INSTANCE
const app = express();

// FILES PERMITTED FOR SERVING FOUND IN PUBLIC FOLDER
app.use(express.static('public'));

// USE URL ENCODING
app.use(express.urlencoded({extended: true}));
// PARSE REQUESTS AS JSON
app.use(express.json());

// ROUTES
app.use(routes);

// APP LISTENER
app.listen(PORT, () => {
    console.log(`Server has started and can be found at http://localhost:${PORT}`)
})