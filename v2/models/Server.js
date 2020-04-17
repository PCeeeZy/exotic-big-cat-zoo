function Server() {
    /**
     * Manages communication amongst internal functions through the use of dispatches and payloads.
     * 
     * DESCRIPTION HERE NEEDS TO BE UPDATED
     * 
     * @param {method} this.router - The function that drives server routing.
        * @param {Object} dispatch - The config for routing.
            * @param {string} dispatch.path - The intended target.
            * @param {string} dispatch.method - The intended method.
        * @param {Object} payload - The data necessary to complete dispatch.
     * 
     */
    this.router = function (dispatch, payload) {
        switch (dispatch.path) {
            // this is the initial route. and fallback for failure
            case '/':
                switch (dispatch.method) {
                    case 'GET':
                    default:
                        console.log('im a genius?!?!?')
                        dispatch.path = '/login';
                        dispatch.method = 'GET';
                        this.router(dispatch, payload)
                        break;
                }
                break;
            // this is the login route
            case '/login':
                switch(dispatch.method) {
                    // CREATE - adds new user
                    case 'CREATE':
                        break;
                    // REF - refuses login -- bad login attempt
                    case 'REF':
                        break;
                    // GET - gets questions for user to input
                    case 'GET':
                    default:
                        console.log('i am boris i am invincible')
                        break;
                };
                break;
            // logout route
            case '/logout':
                switch(dispatch.method) {
                    // doesn't matter the method, this will save and end runtime.
                    case 'GET':
                    default:
                        break;
                };
                break;
            // animals route
            case '/animals':
                switch (dispatch.method) {
                    // CREATE adds an animal to the users array
                    case 'CREATE':
                        break;
                    // DEL removes an animal from the users array
                    case 'DEL':
                        break;
                    // GET gets all the data about animals
                    case 'GET':
                    default:
                        break;
                }
                break;
            // generate route --- creates html from user's data
            case '/generate':
                switch (dispatch.method) {
                    // doesn't matter method, we generate
                    case 'GET':
                    default:
                        break;
                }
        }
    }
};
module.exports = Server;