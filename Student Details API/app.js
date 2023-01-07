const tracer = require("./tracing")("student-details-service")
const express = require("express");
const db = require("./Database/connectDb");
const studentRoutes = require("./routes/student.routes");
const specs = require("./swaggerdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/home", (req, res) => { res.send("Welcome to student details web service") });

app.use("/students", studentRoutes);

const start = async () => {
    try {
        tracer.startSpan("student-details-service-started").end();
        app.listen(PORT, () => {
            console.log(`App started at http://localhost:${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();