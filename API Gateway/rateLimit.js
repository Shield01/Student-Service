const rateLimit = require("express-rate-limit");

const setupRateLimit = (app, routes) => {
    routes.forEach(e => {
        if (e.rateLimit) {
            app.use(e.url, rateLimit(e.rateLimit));
        }
    });
}

module.exports = setupRateLimit;