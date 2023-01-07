const getStudentDetailsQuery = "SELECT * FROM students";

const createStudentQuery = "INSERT INTO students (studentid, phonenumber, emailaddress, gender, grade, isphonenumberverified) VALUES ($1, $2, $3, $4, $5, $6)";

const getStudentByIdQuery = "SELECT * FROM students WHERE studentid = $1";


module.exports = {
    getStudentDetailsQuery,
    createStudentQuery, 
    getStudentByIdQuery
}