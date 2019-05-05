import express = require("express");
import PersonService from "../services/personService";

export const register = (app: express.Application) => {

    app.get("/persons", async (req: any, res) => {
        res.json(await PersonService.findAll());
    });

    app.get("/persons/:id", async (req: any, res) => {
        res.json(await PersonService.findById(req.params.id));
    });

};
