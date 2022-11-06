import {inject, injectable} from "inversify";
import TYPES from "../../shared/types";
import {BankAccountCommand} from "../models/entities/commands/bank-accout.command";
import {BankAccountCommandRepository} from "../repositories/commands/bank-account.command.repository";
import {BankAccountService} from "./bank-account.service";
import {throws} from "assert";
import { BankAccountQuery } from "../models/entities/query/bank-account.query";
import { BankAccountQueryRepository } from "../repositories/query/bank-account.query.repository";

@injectable()
export class BankAccountServiceImpl implements BankAccountService {
   
    @inject(TYPES.BankAccountCommandRepository)
    private commandRepository: BankAccountCommandRepository

    @inject(TYPES.BankAccountQueryRepository)
    private queryRepository: BankAccountQueryRepository

    public async getAll(): Promise<BankAccountQuery[]> {
        try{
            return await this.queryRepository.getAll()
        }catch(e:any){
            throw new Error(e)
        }
    }

    public async saveAccountBank(bankAccount: BankAccountCommand): Promise<void> {
        try {
            return await this.commandRepository.saveAccountBank(bankAccount)
             .catch((e) => { throw new Error("Error")});
        } catch (e: any) {
            throw new Error("Error al regitrar")
        }
    }

    updateAccountBank(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    deleteAccountBank(): Promise<void> {
        throw new Error("Method not implemented.");
    }

   

}