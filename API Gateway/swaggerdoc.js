const swaggerJsDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
    title: "API Gateway",
    version: "0.1.0",
    description: "API Documentation for API Gateway ",
    versions: "0.0.1",
    },
  servers: [
        {
            url: "http://localhost:3000/student_list_service",
            description: "Student List Service"
        },
        {
            url: "http://localhost:3000/student_details_service",
            description: "Student Details Service"
        }
    ],
    components: {
        schemas: {
            CreateStudent: {
                type: "object",
                properties: {
                    firstName: { type: "string" },
                    lastName: { type: "string" },
                    phoneNumber: { type: "string" },
                    emailAddress: { type: "string" },
                    gender: { type: "string" },
                    password: { type: "string" },
                    grade: { type: "string" },
                    lastLoginDate: { type: "date" },
                    isPhoneNumberVerified: {type: "boolean"}
                },
            },
            GeneralResponse: {
                type: "object",
                properties: {
                    status: { type: "boolean" },
                    message: { type: "string" },
                    data: { type: "object" },
                    statusCode: {type: "string"},
                },
            }
        },
        parameters: {},
        securitySchemes: {
      bearer: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    }
}

const options = { swaggerDefinition, apis: ["./routes/**.js"] };

module.exports = swaggerJsDoc(options);