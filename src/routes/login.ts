import express = require("express");
import UserService from "../services/userService";

export const register = (app: express.Application) => {

    app.post("/login", async (req: any, res) => {
        const loginForm = {
            userEmail: req.body.userEmail,
            password: req.body.password,
            companyEmail: req.body.companyEmail
        };
        res.json(await UserService.loginCheck(req.body.userEmail, req.body.password, req.body.companyEmail));

    });
};
