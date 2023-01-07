const checkBalance = (request) => {
    return new Promise((resolve, reject) => {
        console.log("Checking credit with token", req.headers["authorization"]);
        setTimeout(() => {
            reject("Insufficient balance")
        }, 500);
    })
}

const setupBalanceCheck = (app, routes) => {
    routes.forEach(e => {
        if (e.creditCheck) {
            app.use(e.url, (req, res, next) => {
                checkBalance(req).then(() => {
                    next();
                }).catch((err) => {
                    res.status(402).json({ err });
                });
            });
        }
    });
}

module.exports = setupBalanceCheck;