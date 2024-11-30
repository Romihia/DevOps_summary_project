const request = require("supertest");
const express = require("express");
const app = express();

// Mock middleware and routes
app.use(express.json());
app.get("/api/flights", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Flight A", origin: "City A", destination: "City B" },
    { id: 2, name: "Flight B", origin: "City C", destination: "City D" },
  ]);
});
app.post("/api/flights", (req, res) => {
  res.status(201).json({ id: 3, ...req.body });
});
app.put("/api/flights/:id", (req, res) => {
  res.status(200).json({ id: parseInt(req.params.id), ...req.body });
});
app.delete("/api/flights/:id", (req, res) => {
  res.status(204).send();
});

describe("Flight API", () => {
  it("GET /api/flights - should return all flights", async () => {
    const res = await request(app).get("/api/flights");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toHaveProperty("name", "Flight A");
  });

  it("POST /api/flights - should create a new flight", async () => {
    const newFlight = {
      name: "Flight C",
      origin: "City E",
      destination: "City F",
    };
    const res = await request(app).post("/api/flights").send(newFlight);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id", 3);
    expect(res.body).toHaveProperty("name", "Flight C");
  });

  it("PUT /api/flights/:id - should update an existing flight", async () => {
    const updatedFlight = { name: "Updated Flight A" };
    const res = await request(app).put("/api/flights/1").send(updatedFlight);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", "Updated Flight A");
  });

  it("DELETE /api/flights/:id - should delete a flight", async () => {
    const res = await request(app).delete("/api/flights/1");
    expect(res.statusCode).toEqual(204);
  });
});
