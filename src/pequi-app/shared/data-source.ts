import { DataSource } from "typeorm";
import { BankAccountCommand } from "../trans-context/models/entities/commands/bank-accout.command";

export const CommandDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "commandbank",
    entities: [BankAccountCommand],
    synchronize: false
})