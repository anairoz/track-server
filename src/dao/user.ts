import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import Company from "./company";

@Table({
  timestamps: true,
  tableName: "user"
})
export default class User extends Model<User> {

  @AutoIncrement
  @PrimaryKey
  @Column
  public id: number;

  @Unique
  @Column(DataType.TEXT)
  public email: string;

  @Column
  public phone: string;

  @Column
  public password: string;

  @Column
  public firstName: string;

  @Column
  public lastName: string;

  @Column
  public role: string;

  @CreatedAt
  @Column
  public createDate: Date;

  @UpdatedAt
  @Column
  public updateDate: Date;

  @ForeignKey (() => Company)
  @Column
  public companyId: number;

  @BelongsTo (() => Company)
  public company: Company;

  public isUserAdmin(): boolean {
    return this.role === "admin";
  }

}
