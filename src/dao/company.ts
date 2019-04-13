import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
  HasMany
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

  @Unique
  @Column(DataType.TEXT)
  public companyName: string;


  @CreatedAt
  @Column
  public createDate: Date;

  @UpdatedAt
  @Column
  public updateDate: Date;

	@HasMany(() => User)
  users: User[];
}
