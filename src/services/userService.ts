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

        const user = await User.findOne({ where: {email: userEmail}, include: [Company]});

        if (user && user.email === userEmail && user.password === password && user.company.email === companyEmail  ) {
            return user;
        } else { try {
            throw new Error("Such user does not exist");
            } catch (e) {
              console.log(e.name + ": " + e.message);
            }
        }

    }

}
