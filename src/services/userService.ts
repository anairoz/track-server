import * as Bluebird from "bluebird";
import HttpException from "../config/HttpException";
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

        if (user && user.email === userEmail && user.password === password && user.company.getEmail() === companyEmail  ) {

            return user;
        } else {
            new HttpException(400, "Such user does not exist");
        }

    }

}
