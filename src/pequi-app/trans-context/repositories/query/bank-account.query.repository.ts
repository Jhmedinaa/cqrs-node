import { BankAccountQuery } from "../../models/entities/query/bank-account.query";

export interface BankAccountQueryRepository {

    /**
    * Consulta todos
    */
    getAll(): Promise<BankAccountQuery[]>

    /**
    * Consulta una cuenta por su usuario
    */
    findOneByAccount(accountNo: string): Promise<BankAccountQuery | null>
}