import * as Bluebird from "bluebird";
import Company from "../dao/company";
import User from "../dao/user";

export default class UserService {

    public static findById(id: number): Bluebird<User> {
        return User.findByPk(id, {include: [Company]});
    }

    public static findAll(): Bluebird<User[]> {
        return User.findAll();
    }

}
