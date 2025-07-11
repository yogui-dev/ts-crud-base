import { sequelize } from "@/config/.database/config";
import UserService from "@/services/user.service";
import { UserCreationAttributes } from "@/types/users";

describe("UserService - CRUD", () => {
  let createdUserId: string;

  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Importante: sincroniza todos los modelos antes de testear
  });

  afterAll(async () => {
    await sequelize.close(); // Cierra la conexión una vez que terminan todos los tests
  });

  it("CREATE - debería crear un nuevo usuario", async () => {
    const newUser: UserCreationAttributes = { firstName: "Jorge", lastName: "Arias", email: "jorge@arias.com", phone: "123456789" };
    const created = await UserService.create(newUser);

    expect(created).toHaveProperty("uuid");
    expect(created).toHaveProperty("firstName", "Jorge");

    createdUserId = created.uuid;
  });

  it("READ ALL - debería obtener todos los usuarios", async () => {
    const users = await UserService.get();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });

  it("READ BY ID - debería obtener un usuario por ID", async () => {
    const user = await UserService.find(createdUserId);
    expect(user).toHaveProperty("uuid", createdUserId);
    expect(user).toHaveProperty("firstName", "Jorge");
  });

  it("UPDATE - debería actualizar un usuario", async () => {
    const updatedUser: UserCreationAttributes = { firstName: "Jorge Updated", lastName: "Arias Updated", email: "jorge@arias.com", phone: "123456789" };
    const updated = await UserService.update(createdUserId, updatedUser);
    expect(updated).toHaveProperty("uuid", createdUserId);
    expect(updated).toHaveProperty("firstName", "Jorge Updated");

  });

  it("DELETE - debería eliminar el usuario", async () => {
    const deleted = await UserService.delete(createdUserId);
    expect(deleted).toHaveProperty("success", true);

    const check = await UserService.find(createdUserId);
    expect(check).toBeNull();
  });
});
