// Dependencies
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Import

function HTML({ name: ownerName, data, zooName }) {
    this.data = data;
    this.head = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${ownerName}'s Zoo</title>
        
            <link rel="stylesheet" href="style.css">
            
        </head>`;
    this.template = '';
    this.body = `<body>
    <div class="container">
        <h2>The Amazing ${zooName}</h2>
        <div class="row zoo">`;
    this.block = function ({ image, name, species, origin, age, catchphrase, gender }) {
        return `
        <div class="col-sm-12 col-md-6 col-lg-4 animal">
                <img src="${image === '' ? 'http://placehold.it/200/200' : image}" alt="Picture of ${name}">
                <h3>Animal Name: ${name}</h3>
                <ul>
                    <li>
                        Species: 
                        <i>
                            ${species}
                        </i>
                    </li>
                    <li>
                        Origins: <span>${origin}</span>
                    </li>
                    <li>
                        ${catchphrase}
                    </li>
            </ul>
            </div>`
    };
    this.blockBuilder = function (animalArray) {
        for (let animal of animalArray) {
            this.body += this.block(animal);
        }
        this.body += `
                </div>
                </div>
                
            </body>
            </html>`;
        this.template = this.head + this.body;
        this.export();
    };
    this.export = function() {
        fs.writeFile("output/" + zooName + ownerName + uuidv4() + ".html", this.template, function(err) {
            if (err) {
              return console.log(err);
            }
            console.log("Success!");
          })
    };
    this.init = function () {
        this.blockBuilder(this.data);
    };
    this.init();
}

module.exports = HTML;