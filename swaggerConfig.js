const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'AuthMathGateway-Arithmetic Operations API',
      version: '1.0.0',
      description: 'A simple API to perform arithmetic operations with JWT authentication',
      contact: {
        name: 'Sarath K', 
        email: 'amssarath@gmail.com', 
      },
    },
    servers: [
      {
        url: 'http://localhost:3001/api', 
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
 
  apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi: require('swagger-ui-express'),
  specs,
};
