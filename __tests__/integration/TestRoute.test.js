const request = require('supertest');
const app = require('../../src/app');

describe('Test Route', () => {
  it('should return proper response', async () => {
    const { status, body } = await request(app).get('/test');

    expect(status).toBe(200);
    expect(body).toBe('{"api":"active"}');
  });
});
