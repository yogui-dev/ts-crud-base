import dotenv from 'dotenv';
import { config } from 'dotenv';
import path from 'path';

// Load environment variables from .env file
config({ path: path.resolve(process.cwd(), '.env') });

// Define the interface for environment variables
interface EnvVariables {
  NODE_ENV: string;
  PORT: number;
  DB_URL: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASS: string;
  DB_DIALECT: string | undefined;
}

// Create and export the environment variables with types
export const env: EnvVariables = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000', 10),
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/ts-crud-base',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: parseInt(process.env.DB_PORT || '3306', 10),
  DB_NAME: process.env.DB_NAME || 'ts-crud-base',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '',
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
};


export default env;
