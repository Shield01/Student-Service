const { createStudentDetail } = require("./network");

const createStudentService = async (body) => {
    const data = await createStudentDetail(body);
    return data;
}

module.exports = {
    createStudentService
}