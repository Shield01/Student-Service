const pool = require("../Database/connectDb");
const { getStudentDetailsQuery, createStudentQuery, getStudentByIdQuery } = require("../Queries/student.queries");

const getStudentDetails = (req, res) => {
    pool.query(getStudentDetailsQuery, (err, results) => {
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.status(200).send(results.rows);
        }
    })
}

const createStudentDetails = (req, res) => {
    const { studentId, phoneNumber, emailAddress, gender, grade, isPhoneNumberVerified } = req.body;
    pool.query(createStudentQuery, [studentId, phoneNumber, emailAddress, gender, grade, isPhoneNumberVerified], (err, results) => {
        if (err) {
            console.log(err);
            throw err;
        } else {
            return res.status(201).send(`New student created`);
        }
    })
}

const getStudentDetailsById = (req, res) => {
    const { student_id } = req.params;
    
    pool.query(getStudentByIdQuery, [student_id], (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        } else {
            return res.status(200).json(result.rows);
        }
    })
}

module.exports = {
    getStudentDetails,
    createStudentDetails,
    getStudentDetailsById
}