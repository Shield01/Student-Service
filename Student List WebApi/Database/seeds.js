const mongoose = require("mongoose");
const student = require("../models/Students");
require('dotenv').config();
const url = process.env.MONGODB_URI;

const connect = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
}

const seedData = [
    {
        studentId: "Seed1",
        firstName: "Timi",
        lastName: "Agba dev",
    },
    {
        studentId: "Seed2",
        firstName: "The boss",
        lastName: "Superior dev"
    },
    {
        studentId: "Seed3",
        firstName: "Hussein",
        lastName: "King"
    },
    {
        studentId: "Seed4",
        firstName: "Emmanuel",
        lastName: "Osinnowo"
    }
]

function seed() {
    connect(url);

    const seedDb = async () => {
        await student.deleteMany({});
        await student.insertMany(seedData);
    }
}

module.exports = seed;