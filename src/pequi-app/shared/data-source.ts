import { DataSource } from "typeorm";
import { BankAccountCommand } from "../trans-context/models/entities/commands/bank-accout.command";
import { BankAccountQuery } from "../trans-context/models/entities/query/bank-account.query";

export const CommandDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "commandbank",
    entities: [BankAccountCommand],
    synchronize: false
})

export const QueryDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "querybank",
    entities: [BankAccountQuery],
    synchronize: true
})