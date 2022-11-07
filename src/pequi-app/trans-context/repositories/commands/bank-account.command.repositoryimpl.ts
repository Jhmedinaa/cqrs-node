import { injectable } from "inversify";
import { EntityManager, Repository } from "typeorm";
import { CommandDataSource } from "../../../shared/data-source";
import { AccountState } from "../../domain/vo/accout.state.vo";
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
        await CommandDataSource.manager.save(bankAcount)
    }

    /**
     * Inactivar Cuenta
     * @param id number int
     */
    public async deleteAccountBank(bankAcount: BankAccountCommand): Promise<void> {
        await CommandDataSource.createQueryBuilder()
            .update(BankAccountCommand)
            .set(bankAcount)
    }

}