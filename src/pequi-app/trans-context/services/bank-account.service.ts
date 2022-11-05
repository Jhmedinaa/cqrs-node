import { BankAccountCommand } from "../models/entities/commands/bank-accout.command"

export interface BankAccountService{
    saveAccountBank(bankAcount: BankAccountCommand): Promise<void> // con el promise se entiende que tenemos un método asincrono 
    updateAccountBank(): Promise<void>
    deleteAccountBank(): Promise<void>

}