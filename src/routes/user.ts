import express = require("express");
import UserService from "../services/userService";

export const register = (app: express.Application) => {

    app.get("/users", async (req: any, res) => {
        res.json(await UserService.findAll());
    });

};
