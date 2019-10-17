const request = require('supertest');

const app = require('../../src/app');
const truncate = require("../utils/truncate");
const factory = require("../factories");


describe("Autentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .get("/itens/uploadFile")
      .attach('file', '../tmp/testeUpload.txt')
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });
});
