Now we have simple html, simple server, and simple database completed but we want more.

Lets now add some api routes that our front end scripts can then hit so we can test how well everything is working.

**********************************************************

## What kind of DATA routes do we need to manage? List here:






***********************************************************

We are also going to structure our files in what may seem like a overcomplicated way but by doing so we can increase modularity and scalability.  Take a look at this structure.

```
config/
    config.js  --- contains passwords necessary for the connection.js
    connection.js --- manages the connection to the mysql db

controller/
    controller.js --- the root object that will contain all the methods the backend needs to do.  In our case we will access our orm and any other potential modules we may want here.

db/
    shema, queries, seed . sql from last phase

orm/
    db.js --- this is a module we will build that works with our connection js to manage queries to our db.

public/
    css/style.css
    js/script.js
    index.html

routes/
    api/
        the api routes you suggest
        index.js
    index.js

server.js
package.json
```

Think of the controller as the hub for all backend features and tools.  We want to have persistence and store the users and their zoo data quickly and efficiently.  The tool to do this we are going to call an orm for now. It will be represented as the db.js file.  perhaps we want a feature that looks up weather data from a 3rd party api. we would create a weather.js file that manages these queries, working with their api.  

Now imagine our 3rd party weather api no longer works and we find another provider.  Our method structure stays the same along with the controller, it still uses our weather module the same, so we only have to change our queries to satisfy the new api.
Or if we decide we want a different database.  Only thing necessary to fix is the db module or orm.