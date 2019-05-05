import * as Bluebird from "bluebird";
import HttpException from "../config/HttpException";
import Customer from "../dao/customer";
import CustomerPerson from "../dao/customerPerson";
import CustomerService from "./customerService";

export default class PersonService {

    public static findById(id: number): Bluebird<CustomerPerson> {
        return CustomerPerson.findByPk(id, {include: [Customer]});
    }

    public static findAll(): Bluebird<CustomerPerson[]> {
        return CustomerPerson.findAll();
    }

    public static createPerson(customerId: number, personObject: any): Bluebird<CustomerPerson> {
        const person = new CustomerPerson(personObject);
        person.customerId = customerId;
        return person.save();
    }

    public static async loginCheck( login: any, password: any, customerEmail: any) {

        const person = await CustomerPerson.findOne({ where: {login}, include: [Customer]});
        console.log(person);
        if (person && person.login === login && person.password === password && person.customer.getEmail() === customerEmail  ) {

            return person;
        } else {
            console.log(person);
            new HttpException(400, "Such person does not exist");
        }

    }

}
