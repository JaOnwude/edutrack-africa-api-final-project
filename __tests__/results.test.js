const request = require('supertest');
const app = require('../server');
const mongodb = require('../db/connect');

describe('Results API', () => {

  beforeAll((done) => {
    mongodb.initDb((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  afterAll(async () => {
    await mongodb.closeDb();
  });

  test('GET /results should return all results', async () => {
    const response = await request(app).get('/results');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /results/student/:studentId with invalid student ID should return 400', async () => {
    const response = await request(app).get('/results/student/invalid-student-id');
    expect(response.statusCode).toBe(400);
    expect(response.body).toBe('Must use a valid student id.');
  });
});