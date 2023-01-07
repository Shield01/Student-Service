const swaggerJsDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
    title: "Student Details Microservice",
    version: "0.1.0",
    description: "API Documentation for Student Details Microservice",
    versions: "0.0.1",
    },
    servers: [
        {
            url: "http://localhost:3002",
            description: "Local Environment"
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