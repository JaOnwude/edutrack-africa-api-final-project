const request = require('supertest');
const app = require('../server');
const mongodb = require('../db/connect');

describe('Students API', () => {

  // Modern async/await syntax with an explicitly higher timeout threshold
  beforeAll(async () => {
    return new Promise((resolve, reject) => {
      mongodb.initDb((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }, 15000); 

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