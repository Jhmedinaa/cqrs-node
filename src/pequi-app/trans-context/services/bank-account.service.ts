import { BankAccountCommand } from "../models/entities/commands/bank-accout.command"
import { BankAccountQuery } from "../models/entities/query/bank-account.query"

export interface BankAccountService{
    //commands
    saveAccountBank(bankAcount: BankAccountCommand): Promise<void> // con el promise se entiende que tenemos un método asincrono 
    updateAccountBank(bankAccount: BankAccountCommand): Promise<void>
    deleteAccountBank(): Promise<void>

    //querys
    getAll():Promise<BankAccountQuery[]>
}