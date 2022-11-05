import {injectable} from "inversify";
import {CommandDataSource} from "../../../shared/data-source";
import {BankAccountCommand} from "../../models/entities/commands/bank-accout.command";
import {BankAccountCommandRepository} from "./bank-account.command.repository";

@injectable()
export class BankAccountCommandRepositoryImpl implements BankAccountCommandRepository {

    public async saveAccountBank(bankAcount: BankAccountCommand): Promise<void> {
console.log(bankAcount)
        await CommandDataSource.manager.save(bankAcount)
       // .catch((e) => console.log(e))

    }

    updateAccountBank(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    deleteAccountBank(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}