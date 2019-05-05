import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";

import Customer from "./customer";

@Table({
  timestamps: false,
  tableName: "customerPerson"
})

export default class CustomerPerson extends Model<CustomerPerson> {
	@AutoIncrement
	@PrimaryKey
	@Column
	public id: number;

	@Column(DataType.TEXT)
	public login: string;

	@Column(DataType.TEXT)
	public password: string;

	@ForeignKey (() => Customer)
	@Column
	public customerId: number;

	@BelongsTo (() => Customer)
	public customer: Customer;

}
