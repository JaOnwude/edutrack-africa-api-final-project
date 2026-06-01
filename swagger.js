// const swaggerAutogen = require('swagger-autogen')();

// const doc = {
//   info: {
//     title: 'EduTrack Africa API',
//     description: 'Secondary School Management System for Africa',
//     version: '1.0.0'
//   },
//   host: 'localhost:8080',
//   schemes: ['http']
// };

// const outputFile = './swagger.json';
// const endpointsFiles = ['./routes/index.js'];

// swaggerAutogen(outputFile, endpointsFiles, doc);

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'EduTrack Africa API',
    description: 'Secondary School Management System for Africa',
    version: '1.0.0'
  },
  host: 'cse341-edutrack-africa-api-final-project.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);