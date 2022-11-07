import { DataSource } from "typeorm";
import { BankAccountCommand } from "../trans-context/models/entities/commands/bank-accout.command";
import { BankAccountQuery } from "../trans-context/models/entities/query/bank-account.query";

export const CommandDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "jmedina",
    password: "1234",
    database: "commandbank",
    entities: [BankAccountCommand],
    synchronize: false,
    logging: true
})

export const QueryDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "querybank",
    entities: [BankAccountQuery],
    synchronize: true
})