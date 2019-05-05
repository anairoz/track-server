import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import httpErrors from "http-errors";
// @ts-ignore
import * as contextService from "request-context";
import {sequelize} from "./config/db";
import errorMiddleware from "./config/ErrorHandler";
import logger from "./config/logger";
// import * as routes from "./routes/user";
import * as customer from "./routes/customer";
import * as login from "./routes/login";

sequelize.authenticate() // check connection
    .then(() => {
        logger.log("info", "Connection has been established successfully.");
    })
    .catch((err: Error) => {
        logger.log("info", "Unable to connect to the database:", err);
    });

sequelize.addModels([__dirname + "/dao"]);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());

customer.register(app);
login.register(app);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(httpErrors(404));
});

// error handler
app.use(errorMiddleware);

app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    logger.log("info", `Server started by link http://localhost:3000/`);
});

module.exports = app;
