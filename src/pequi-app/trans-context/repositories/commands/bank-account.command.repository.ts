import { BankAccountCommand } from "../../models/entities/commands/bank-accout.command"

export interface BankAccountCommandRepository{
    saveAccountBank(bankAcount: BankAccountCommand): Promise<void> 
    updateAccountBank(): Promise<void>
    deleteAccountBank(): Promise<void>

}