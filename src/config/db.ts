import {Sequelize} from "sequelize-typescript";

export const sequelize = new Sequelize({database: "track", username: "track",
  host: "localhost",
  dialect: "mysql",
  password: "VMGnomad94",
  pool: {
    acquire: 30000,
    max: 5,
    min: 0,
    idle: 10000
  }
});
