// src/database.ts
import { Sequelize } from "sequelize-typescript";
import { User } from "../../models/users.model";

import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT as any, // puedes hacer una validación aquí si quieres
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [User],
  logging: false,
});
