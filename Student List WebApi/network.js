require('dotenv').config();

const axios = require("axios");

const student_details_service = require("./studentDetailsUrl");

const student_details_instance = axios.create({
  baseURL: `${process.env.STUDENT_DETAILS_BASE_URL}`,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const createStudentDetail = async (body) => {
    return await student_details_instance.post(`${process.env.STUDENT_DETAILS_BASE_URL}${student_details_service.create_student}`, body);
}

module.exports = {
    createStudentDetail
}