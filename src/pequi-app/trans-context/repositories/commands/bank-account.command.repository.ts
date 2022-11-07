import {BankAccountCommand} from "../../models/entities/commands/bank-accout.command"

export interface BankAccountCommandRepository {

    /**
    registrar nueva cuenta
    */
    saveAccountBank(bankAcount: BankAccountCommand): Promise<void>

    /*
    se utiliza para actualizar
    */
    updateAccountBank(bankAccount: BankAccountCommand): Promise<void>

    /**
    Se utiliza para Eliminar
    */
    deleteAccountBank(bankAcount: BankAccountCommand): Promise<void>

}