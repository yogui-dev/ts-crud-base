// src/models/User.ts
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "users", timestamps: true })
export class User extends Model<User> {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  uuid!: string;

  @Column({ type: DataType.STRING, allowNull: false, field: "first_name" })
  firstName!: string;

  @Column({ type: DataType.STRING, allowNull: true, field: "last_name" })
  lastName?: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  phone?: string;
}
