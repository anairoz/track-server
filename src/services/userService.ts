import * as Bluebird from "bluebird";
import User from "../dao/user";

export default class UserService {

    public static findById(id: number): Bluebird<User> {
        return User.findByPk(id);
    }

    public static findAll(): Bluebird<User[]> {
        return User.findAll();
    }

}
