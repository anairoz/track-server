// import bodyParser = require("body-parser");
import express = require("express");
import UserService from "../services/userService";

// app.use(bodyParser());
export const register = (app: express.Application) => {

	app.post("/login", async (req: any, res) => {
		const loginForm = {
			userEmail: req.body.userEmail,
			password: req.body.password,
			companyEmail: req.body.companyEmail
		};
	 if (user || user.email === loginForm.userEmail && user.password === loginForm.password && user.company.email === loginForm.companyEmail) {
            return user;
        } else {
            throw new Error("Such user does not exist");
        }
	});
};
