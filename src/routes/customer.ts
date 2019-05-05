import express = require("express");
import CustomerService from "../services/customerService";
import PersonService from "../services/personService";

export const register = (app: express.Application) => {

    app.post("/customers", async (req: any, res) => {
        res.json(await CustomerService.createCustomer(req.body));
    });

    app.post("/customers/:id/persons", async (req: any, res) => {
        res.json(await PersonService.createPerson(req.params.id, req.body));
    });

};
