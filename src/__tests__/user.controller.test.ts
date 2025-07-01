import request from "supertest";
import { setupApp, TestServer } from "./test-utils";
import UserController from "../controllers/user.controller";
import express from "express";

describe("UserController", () => {
  let server: TestServer;
  let app: express.Express;

  beforeAll(async () => {
    app = setupApp();

    // RED: Puedes comentar estas rutas para ver fallos y avanzar por el ciclo TDD
    app.get("/users", UserController.get);
    app.get("/users/:id", UserController.find);
    app.post("/users", UserController.create);
    app.put("/users/:id", UserController.update);
    app.delete("/users/:id", UserController.delete);

    server = new TestServer(app);
    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  describe("GET /users", () => {
    it("🔴 debe devolver una lista de usuarios (RED)", async () => {
      const response = await request(app).get("/users");

      expect(response.status).toBe(200); // Cambiar a 500 si aún no implementas
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("id");
      expect(response.body[0]).toHaveProperty("name");
    });
  });

  describe("GET /users/:id", () => {
    it("🔴 debe devolver un usuario por ID (RED)", async () => {
      const userId = 1;
      const response = await request(app).get(`/users/${userId}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", userId);
      expect(response.body).toHaveProperty("name");
    });
  });

  describe("POST /users", () => {
    it("🔴 debe crear un nuevo usuario (RED)", async () => {
      const newUser = { name: "Nuevo Usuario" };
      const response = await request(app).post("/users").send(newUser);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name", newUser.name); // Asegúrate de devolver el nombre ingresado
    });
  });

  describe("PUT /users/:id", () => {
    it("🔴 debe actualizar un usuario existente (RED)", async () => {
      const userId = 1;
      const updatedUser = { name: "Nombre Actualizado" };
      const response = await request(app)
        .put(`/users/${userId}`)
        .send(updatedUser);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", userId);
      expect(response.body).toHaveProperty("name", updatedUser.name);
    });
  });

  describe("DELETE /users/:id", () => {
    it("🔴 debe eliminar un usuario existente (RED)", async () => {
      const userId = 1;
      const response = await request(app).delete(`/users/${userId}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", userId);
      expect(response.body).toHaveProperty("deleted", true); // Mejor explícito para tests
    });
  });
});
