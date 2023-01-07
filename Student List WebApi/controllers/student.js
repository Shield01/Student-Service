const Student = require("../models/Students");
const { createStudentService } = require("../service")
const studentIdGenerator = require("../utils/studentIdGenerator");

const getStudentList = async (req, res) => {
    console.log("Here", req);
    try {
        const students = await Student.find({}, {firstName : 1, lastName : 1, studentId : 1});
        if (students.length > 0) {
            return res.status(200).send(students);
        } else {
            return res.status(404).send(`No students found`);
        }
    } catch (err) {
        return res.status(500).send("Internal server error");
    }
}

const createStudent = async (req, res) => {
    const { firstName, lastName, phoneNumber, emailAddress, gender, grade, isPhoneNumberVerified } = req.body; 

    const studentId = studentIdGenerator("stu");
    try {
        const task = await Student.create({
            studentId,
            firstName,
            lastName
        });

        const task2 = await createStudentService({
            studentId,
            phoneNumber,
            emailAddress,
            gender,
            grade,
            isPhoneNumberVerified
        });

        if (task2.status === 201) {
            return res.status(201).json({Created : task});
        } else {
            return ("Unable to save to details service");
        }
    } catch (err) {
        return res.status(500).send(err);
    }
}

module.exports = {
    getStudentList,
    createStudent
};