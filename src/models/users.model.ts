import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

@Table({ tableName: "users", timestamps: true })
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  uuid!: CreationOptional<string>;

  @Column({ type: DataType.STRING, allowNull: false, field: "first_name" })
  firstName!: string;

  @Column({ type: DataType.STRING, allowNull: true, field: "last_name" })
  lastName?: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  phone?: string;

  @CreatedAt
  createdAt!: CreationOptional<Date>;

  @UpdatedAt
  updatedAt!: CreationOptional<Date>;
}
