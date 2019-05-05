import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";

import CustomerPerson from "./customerPerson";

@Table({
  timestamps: true,
  tableName: "customer"
})

export default class Customer extends Model<Customer> {
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

	@HasMany(() => CustomerPerson)
	public persons: CustomerPerson[];

	public getEmail(): string {
		return this.email;
	}
}
