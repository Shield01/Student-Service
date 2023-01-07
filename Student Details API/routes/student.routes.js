const express = require("express");
const { getStudentDetails, createStudentDetails, getStudentDetailsById } = require('../controllers/student.controllers');

const router = express.Router();


/**
 * @swagger
 * paths:
 *    /students:
 *       get:
 *         tags:
 *            - StudentDetails
 *         responses:
 *             '200':
 *                 description: callback successfully processed
 *                 content:
 *                     'application/json':
 *                         schema:
 *                             $ref: '#/components/schemas/GeneralResponse'
 */
router.get("/", getStudentDetails);

/**
 * @swagger
 * paths:
 *    /students/create_student_details:
 *       post:
 *         tags:
 *            - StudentDetails
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

router.post("/create_student_details", createStudentDetails);


/**
 * @swagger
 * paths:
 *    /students/:students_id:
 *       get:
 *          
 *         tags:
 *            - StudentDetails
 *         responses:
 *             '200':
 *                 description: callback successfully processed
 *                 content:
 *                     'application/json':
 *                         schema:
 *                             $ref: '#/components/schemas/GeneralResponse'
 */

router.get("/:student_id", getStudentDetailsById);

module.exports = router;