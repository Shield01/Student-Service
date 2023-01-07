const tracer = require("./tracing")("todo-service");
const express = require("express");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const routes = require("./routes");
const setupLogging = require(`./logging`);
const setUpProxy = require("./proxy");
const setUpAuth = require("./auth");
const setupRateLimit = require("./rateLimit");
const setupBalanceCheck = require("./balanceCheck");
const specs = require("./swaggerdoc");
const cors = require("cors");
// const swaggerUi = require("swagger-ui-express");

const app = express();

const port = process.env.PORT || 3000;

setupLogging(app);
setUpAuth(app, routes);
setupRateLimit(app, routes);
setupBalanceCheck(app, routes);
setUpProxy(app, routes);

let options = {
  explorer: true,
  swaggerOptions: {
      urls: [
      {
        url: 'http://localhost:3002/docs',
        name: 'Student Details'
      },
      {
        url: 'http://localhost:3001/docs',
        name: 'Student List'
      }
    ]
  }
}

app.use(cors({
    origin: '*'
}));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
app.get("/home", (req, res) => res.send("Hello world"));

const start = () => {
  try {
    tracer.startSpan("api-gateway-started").end();
    app.listen(port, () => console.log(`App is listening at port ${port}`));
  }catch(e){
    console.log(e)
  }
}

start();