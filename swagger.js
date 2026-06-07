// const swaggerAutogen = require('swagger-autogen')();

// // Dynamic host for local vs production
// const isProduction = process.env.NODE_ENV === 'production';
// const currentHost = isProduction 
//   ? 'cse341-edutrack-africa-api-final-project.onrender.com' 
//   : 'localhost:8080';

// const doc = {
//   info: {
//     title: 'EduTrack Africa API',
//     description: 'Secondary School Management System for Africa',
//     version: '1.0.0'
//   },
//   host: currentHost,
//   schemes: isProduction ? ['https'] : ['http'],
  
//   securityDefinitions: {
//     google_oauth: {
//       type: 'oauth2',
//       authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
//       flow: 'implicit',
//       scopes: {
//         email: 'Access your email address',
//         profile: 'Access your basic profile information'
//       }
//     }
//   },

//   // Define schemas to help Swagger show request bodies for PUT and POST
//   definitions: {
//     Student: {
//       type: 'object',
//       properties: {
//         firstName: { type: 'string', example: 'Chinedu' },
//         lastName: { type: 'string', example: 'Okoro' },
//         admissionNumber: { type: 'string', example: 'SS2025001' },
//         dateOfBirth: { type: 'string', example: '2008-05-15' },
//         gender: { type: 'string', example: 'Male' },
//         class: { type: 'string', example: 'SSS1' },
//         arm: { type: 'string', example: 'A' },
//         parentName: { type: 'string', example: 'Mr. Okoro' },
//         parentPhone: { type: 'string', example: '08012345678' },
//         parentEmail: { type: 'string', example: 'parent@example.com' },
//         address: { type: 'string', example: 'Lagos, Nigeria' },
//         dateAdmitted: { type: 'string', example: '2025-01-10' },
//         status: { type: 'string', example: 'Active' }
//       }
//     },
//     Teacher: {
//       type: 'object',
//       properties: {
//         firstName: { type: 'string', example: 'Ada' },
//         lastName: { type: 'string', example: 'Eze' },
//         employeeId: { type: 'string', example: 'TCH2025001' },
//         subject: { type: 'string', example: 'Mathematics' },
//         email: { type: 'string', example: 'ada.eze@school.edu' },
//         phone: { type: 'string', example: '08098765432' },
//         qualification: { type: 'string', example: 'B.Sc Mathematics' },
//         dateJoined: { type: 'string', example: '2024-09-01' }
//       }
//     }
//   }
// };

// const outputFile = './swagger.json';
// const endpointsFiles = ['./routes/index.js'];

// swaggerAutogen(outputFile, endpointsFiles, doc);


// const swaggerAutogen = require('swagger-autogen')();

// const isProduction = process.env.NODE_ENV === 'production';
// const currentHost = isProduction 
//   ? 'cse341-edutrack-africa-api-final-project.onrender.com' 
//   : 'localhost:8080';

// const doc = {
//   info: {
//     title: 'EduTrack Africa API',
//     description: 'Secondary School Management System for Africa',
//     version: '1.0.0'
//   },
//   host: currentHost,
//   schemes: isProduction ? ['https'] : ['http'],
  
//   securityDefinitions: {
//     google_oauth: {
//       type: 'oauth2',
//       authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
//       flow: 'implicit',
//       scopes: {
//         email: 'Access your email address',
//         profile: 'Access your basic profile information'
//       }
//     }
//   },

  
//   definitions: {
//     Student: {
//       type: 'object',
//       properties: {
//         firstName: { type: 'string', example: 'Chinedu' },
//         lastName: { type: 'string', example: 'Okoro' },
//         admissionNumber: { type: 'string', example: 'SS2025001' },
//         dateOfBirth: { type: 'string', example: '2008-05-15' },
//         gender: { type: 'string', example: 'Male' },
//         class: { type: 'string', example: 'SSS1' },
//         arm: { type: 'string', example: 'A' },
//         parentName: { type: 'string', example: 'Mr. Okoro' },
//         parentPhone: { type: 'string', example: '08012345678' },
//         parentEmail: { type: 'string', example: 'parent@example.com' },
//         address: { type: 'string', example: 'Lagos, Nigeria' },
//         dateAdmitted: { type: 'string', example: '2025-01-10' },
//         status: { type: 'string', example: 'Active' }
//       }
//     },
//     Teacher: {
//       type: 'object',
//       properties: {
//         firstName: { type: 'string', example: 'Ada' },
//         lastName: { type: 'string', example: 'Eze' },
//         employeeId: { type: 'string', example: 'TCH2025001' },
//         subject: { type: 'string', example: 'Mathematics' },
//         email: { type: 'string', example: 'ada.eze@school.edu' },
//         phone: { type: 'string', example: '08098765432' },
//         qualification: { type: 'string', example: 'B.Sc Mathematics' },
//         dateJoined: { type: 'string', example: '2024-09-01' },
//         status: { type: 'string', example: 'Active' }
//       }
//     },
//     Class: {
//       type: 'object',
//       properties: {
//         className: { type: 'string', example: 'SSS1' },
//         arm: { type: 'string', example: 'A' },
//         classTeacherId: { type: 'string', example: '60f7a2b3c4d5e6f7a8b9c0d1' },
//         totalStudents: { type: 'integer', example: 35 },
//         academicSession: { type: 'string', example: '2024/2025' },
//         term: { type: 'string', example: 'First Term' }
//       }
//     },
//     Result: {
//       type: 'object',
//       properties: {
//         studentId: { type: 'string', example: '60f7a2b3c4d5e6f7a8b9c0d1' },
//         classId: { type: 'string', example: '60f7a2b3c4d5e6f7a8b9c0d2' },
//         subject: { type: 'string', example: 'Mathematics' },
//         term: { type: 'string', example: 'First Term' },
//         session: { type: 'string', example: '2024/2025' },
//         testScore: { type: 'integer', example: 28 },
//         examScore: { type: 'integer', example: 52 },
//         totalScore: { type: 'integer', example: 80 },
//         grade: { type: 'string', example: 'A' },
//         remarks: { type: 'string', example: 'Excellent performance' }
//       }
//     }
//   }
// };

// const outputFile = './swagger.json';
// const endpointsFiles = ['./routes/index.js'];

// swaggerAutogen(outputFile, endpointsFiles, doc);

const swaggerAutogen = require('swagger-autogen')();

const isProduction = process.env.NODE_ENV === 'production';
const currentHost = isProduction 
  ? 'cse341-edutrack-africa-api-final-project.onrender.com' 
  : 'localhost:8080';

const doc = {
  info: {
    title: 'EduTrack Africa API',
    description: 'Secondary School Management System for Africa',
    version: '1.0.0'
  },
  host: currentHost,
  schemes: isProduction ? ['https'] : ['http'],
  
  securityDefinitions: {
    google_oauth: {
      type: 'oauth2',
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
      flow: 'implicit',
      scopes: {
        email: 'Access your email address',
        profile: 'Access your basic profile information'
      }
    }
  },
 
  definitions: {
    Student: { type: 'object', properties: { firstName: { type: 'string', example: 'Chinedu' }, lastName: { type: 'string', example: 'Okoro' }, admissionNumber: { type: 'string', example: 'SS2025001' }, dateOfBirth: { type: 'string', example: '2008-05-15' }, gender: { type: 'string', example: 'Male' }, class: { type: 'string', example: 'SSS1' }, arm: { type: 'string', example: 'A' }, parentName: { type: 'string', example: 'Mr. Okoro' }, parentPhone: { type: 'string', example: '08012345678' }, parentEmail: { type: 'string', example: 'parent@example.com' }, address: { type: 'string', example: 'Lagos, Nigeria' }, dateAdmitted: { type: 'string', example: '2025-01-10' }, status: { type: 'string', example: 'Active' }}},
    Teacher: { type: 'object', properties: { firstName: { type: 'string', example: 'Ada' }, lastName: { type: 'string', example: 'Eze' }, employeeId: { type: 'string', example: 'TCH2025001' }, subject: { type: 'string', example: 'Mathematics' }, email: { type: 'string', example: 'ada.eze@school.edu' }, phone: { type: 'string', example: '08098765432' }, qualification: { type: 'string', example: 'B.Sc Mathematics' }, dateJoined: { type: 'string', example: '2024-09-01' }, status: { type: 'string', example: 'Active' }}},
    Class: { type: 'object', properties: { className: { type: 'string', example: 'SSS1' }, arm: { type: 'string', example: 'A' }, classTeacherId: { type: 'string', example: '60f7a2b3c4d5e6f7a8b9c0d1' }, totalStudents: { type: 'integer', example: 35 }, academicSession: { type: 'string', example: '2024/2025' }, term: { type: 'string', example: 'First Term' }}},
    Result: { type: 'object', properties: { studentId: { type: 'string', example: '60f7a2b3c4d5e6f7a8b9c0d1' }, classId: { type: 'string', example: '60f7a2b3c4d5e6f7a8b9c0d2' }, subject: { type: 'string', example: 'Mathematics' }, term: { type: 'string', example: 'First Term' }, session: { type: 'string', example: '2024/2025' }, testScore: { type: 'integer', example: 28 }, examScore: { type: 'integer', example: 52 }, totalScore: { type: 'integer', example: 80 }, grade: { type: 'string', example: 'A' }, remarks: { type: 'string', example: 'Excellent performance' } }}
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);