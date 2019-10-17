const request = require("supertest");

const app = require("../../src/app");

describe("valid route not exist", () => {
  it("should error with router not exist", async () => {
    const { status, body } = await request(app).get("/qualquercoisa");

    expect(status).toBe(401);
    expect(body).toHaveProperty("message", "Token not provided");
  });
});
