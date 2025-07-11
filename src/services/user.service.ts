import { User } from "@/models/users.model";
import { UserCreationAttributes } from "@/types/users";

/**
 * Servicio para interactuar con la logica de negocio de los usuarios.
 *
 * @class UserService
 */
export default class UserService {

    static async create(user: UserCreationAttributes) {
        try {
            const newUser = await User.create(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    static async get() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    static async find(id: string) {
        try {
            const user = await User.findByPk(id);
            if (!user) return null;
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async update(id: string, userData: UserCreationAttributes) {
        try {   
            const user = await this.find(id);
            if (!user) return null;
            user.update(userData);
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id: string) {
        try {

            const user = await this.find(id);
            if (!user) return null;

            const deleted = await user.destroy();
            return { success: deleted };
        } catch (error) {
            throw error;
        }
    }
}
