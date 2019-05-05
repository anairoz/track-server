import express = require("express");
import PersonService from "../services/personService";

export const register = (app: express.Application) => {

    app.post("/login", async (req: any, res) => {

        res.json(await PersonService.loginCheck(req.body.login, req.body.password, req.body.customerEmail));

    });
};
