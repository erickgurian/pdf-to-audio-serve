const request = require("supertest");

const app = require("../../src/app");
const factory = require("../factories");

describe("valid route not exist", () => {
  it("should error with router not exist", async () => {
    const { status, body } = await request(app).get("/qualquerrota");

    expect(status).toBe(401);
    expect(body).toHaveProperty("message", "Token not provided");
  });
  
  it("should be able to access private routes when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .get("/qualquerrota")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(404);
  });
});
