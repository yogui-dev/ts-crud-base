import UserService from "@/services/user.service";

describe("UserService - CRUD", () => {
  let createdUserId: number;

  it("CREATE - debería crear un nuevo usuario", async () => {
    const newUser = { name: "Jorge" };
    const created = await UserService.create(newUser);

    expect(created).toHaveProperty("id");
    expect(created).toHaveProperty("name", "Jorge");

    createdUserId = created.id;
  });

  it("READ ALL - debería obtener todos los usuarios", async () => {
    const users = await UserService.get();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });

  it("READ BY ID - debería obtener un usuario por ID", async () => {
    const user = await UserService.find(createdUserId);
    expect(user).toHaveProperty("id", createdUserId);
    expect(user).toHaveProperty("name");
  });

  it("UPDATE - debería actualizar un usuario", async () => {
    const updatedUser = { name: "Jorge Updated" };
    const updated = await UserService.update(createdUserId, updatedUser);
    expect(updated).toHaveProperty("id", createdUserId);
    expect(updated).toHaveProperty("name", "Jorge Updated");
  });

  it("DELETE - debería eliminar el usuario", async () => {
    const deleted = await UserService.delete(createdUserId);
    expect(deleted).toHaveProperty("success", true);

    const check = await UserService.find(createdUserId);
    expect(check).toBeNull(); // o undefined si lo manejas así
  });
});
