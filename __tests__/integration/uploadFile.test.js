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
      .post("/itens/uploadFile")
      .attach('file', '__tests__/tmp/pinguim.jpg')
      .set("Authorization", `Bearer ${user.generateToken()}`);

    console.log(response);
    expect(response.status).toBe(200);
  });
});
