// src/database.ts
import { Sequelize } from "sequelize-typescript";
import { User } from "../../models/users.model";

import dotenv from "dotenv";
import env from "../env.config";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: env.DB_DIALECT as any,   
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  models: [User],
  logging: false,
});
