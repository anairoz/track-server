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

    public static async loginCheck( userEmail: any, password: any, companyEmail: any) {

        const user = await User.findOne({ where: {email: userEmail}});

        if (user && user.email === userEmail && user.password === password && user.companyEmail() === companyEmail  ) {
            return user;
        } else {
            throw new Error("Such user does not exist");
        }

    }

}
