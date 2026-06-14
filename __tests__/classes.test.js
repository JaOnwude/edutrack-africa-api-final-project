const request = require('supertest');
const app = require('../server');
const mongodb = require('../db/connect');

describe('Classes API', () => {

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

  test('GET /classes should return all classes', async () => {
    const response = await request(app).get('/classes');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /classes/:id with invalid ID should return 400', async () => {
    const response = await request(app).get('/classes/invalid-id');
    expect(response.statusCode).toBe(400);
    expect(response.body).toBe('Must use a valid class id.');
  });
});