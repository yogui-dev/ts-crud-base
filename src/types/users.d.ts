import { Optional } from "sequelize";
import { User } from "@/models/users.model";

// define los atributos que necesitas para crear un usuario
type UserCreationAttributes = Optional<
  {
    firstName: string;
    lastName?: string;
    email: string;
    phone?: string;
  },
  never
>;
