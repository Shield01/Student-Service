const tracer = require("./tracing")("studentlist-service")
const express = require("express");
const cors = require('cors');
const db = require("./Database/dbConnect");
const seeding = require("./Database/seeds");
const studentRoutes = require("./routes/students");
const specs = require("./swaggerdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/home", (req, res) => { res.send("Welcome to student list web service") });

app.use("/students", studentRoutes);

const start = async () => {
    try {
        tracer.startSpan("student-list-service-started").end();
        await seeding();
        app.listen(PORT, () => {
            console.log(`App started at http://localhost:${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();