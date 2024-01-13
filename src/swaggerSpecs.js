import swaggerJSDOC from 'swagger-jsdoc';
import __dirname from 'dirname';

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "titulo_del_proyecto",
            version: "1.0.0",
            description: "API de titulo_del_proyecto",
        },
    },
    apis: [`${__dirname}/docs/*.yaml`],
}

export const swaggerSetup = swaggerJSDOC(swaggerOptions);