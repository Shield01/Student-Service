const express = require("express");

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