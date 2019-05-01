import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import User from "./user";

@Table({
  timestamps: true,
  tableName: "company"
})
export default class Company extends Model<Company> {

  @AutoIncrement
  @PrimaryKey
  @Column
  public id: number;

  @Column(DataType.TEXT)
  public name: string;

  @Unique
  @Column(DataType.TEXT)
  public email: string;

  @CreatedAt
  @Column
  public createDate: Date;

  @UpdatedAt
  @Column
  public updateDate: Date;

  @HasMany(() => User)
  public users: User[];

  public getEmail() {
    return this.email;
  }
}
