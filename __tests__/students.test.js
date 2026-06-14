const request = require('supertest');
const app = require('../server');
const mongodb = require('../db/connect');

describe('Students API', () => {

  // Initializes DB before tests run
  beforeAll((done) => {
    mongodb.initDb((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  // This part of the closes connection after tests finish so that Jest doesn't hang
  afterAll(async () => {
    await mongodb.closeDb();
  });

  test('GET /students should return all students', async () => {
    const response = await request(app).get('/students');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /students/:id with invalid ID should return 400', async () => {
    const response = await request(app).get('/students/invalid-id');
    expect(response.statusCode).toBe(400);
  });
});