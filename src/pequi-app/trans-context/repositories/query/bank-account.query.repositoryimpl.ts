import { injectable } from "inversify";
import { QueryDataSource } from "../../../shared/data-source";
import { BankAccountQuery } from "../../models/entities/query/bank-account.query";
import { BankAccountQueryRepository } from "./bank-account.query.repository";

@injectable()
export class BankAccountQueryRepositoryImpl 
            implements BankAccountQueryRepository {
   
    public async getAll(): Promise<BankAccountQuery[]> {
        return await QueryDataSource.manager.find(BankAccountQuery);
    }

}