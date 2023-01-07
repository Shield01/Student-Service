const express = require("express");

const {getStudentList, createStudent}  = require("../controllers/student");

const router = express.Router();

/**
 * @swagger
 * paths:
 *    /students/student_list:
 *       get:
 *         tags:
 *            - StudentList
 *         responses:
 *             '200':
 *                 description: callback successfully processed
 *                 content:
 *                     'application/json':
 *                         schema:
 *                             $ref: '#/components/schemas/GeneralResponse'
 */
router.get("/student_list", getStudentList);

/**
 * @swagger
 * paths:
 *    /students/create_student:
 *       post:
 *         tags:
 *            - StudentList
 *         requestBody:
 *             description: Create a student
 *             content:
 *                 'application/json':
 *                     schema:
 *                         $ref: '#/components/schemas/CreateStudent'
 *         responses:
 *             '200':
 *                 description: callback successfully processed
 *                 content:
 *                     'application/json':
 *                         schema:
 *                             $ref: '#/components/schemas/GeneralResponse'
 */
router.post("/create_student", createStudent);

module.exports = router;