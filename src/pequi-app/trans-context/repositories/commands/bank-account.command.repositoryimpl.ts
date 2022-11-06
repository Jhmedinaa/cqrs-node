import { injectable } from "inversify";
import { CommandDataSource } from "../../../shared/data-source";
import { BankAccountCommand } from "../../models/entities/commands/bank-accout.command";
import { BankAccountCommandRepository } from "./bank-account.command.repository";

@injectable()
export class BankAccountCommandRepositoryImpl implements BankAccountCommandRepository {

    /**
     * Registrar nueva cuenta
     * @param bankAcount Object BanckAccountCommand
     */
    public async saveAccountBank(bankAcount: BankAccountCommand): Promise<void> {
        await CommandDataSource.manager.save(bankAcount)
    }

    /**
     * Actualizar Cuenta Bancarario
     * @param bankAcount Object BanckAccountCommand
     */
    public async updateAccountBank(bankAcount: BankAccountCommand): Promise<void> {
        await CommandDataSource.manager.update(bankAcount)
    }

    deleteAccountBank(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}