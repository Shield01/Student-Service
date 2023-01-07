const Keycloak = require('keycloak-connect');
const session = require("express-session");

const setUpAuth = (app, routes) => {
    let memoryStore = new session.MemoryStore();
    let keyCloak = new Keycloak({ store: memoryStore });

    app.use(session({
        secret: '<RANDOM GENERATED TOKEN>',
        resave: false,
        saveUninitialized: true,
        store: memoryStore
    }));

    app.use(keyCloak.middleware());

    routes.forEach(e => {
        if (e.auth) {
            app.use(e.url, keyCloak.protect(), (req, res, next) => {
                next();
            })
        }
    });
}

module.exports = setUpAuth;