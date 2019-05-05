import * as Bluebird from "bluebird";
import HttpException from "../config/HttpException";
import Customer from "../dao/customer";

export default class CustomerService {

	public static createCustomer(customerObject: any): Bluebird<Customer> {
		const customer = new Customer(customerObject);
		return customer.save();
	}

	public static findById(id: number): Bluebird<Customer> {
        return Customer.findByPk(id);
    }
}
