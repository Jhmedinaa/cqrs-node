import { BankAccountQuery } from "../../models/entities/query/bank-account.query";

export interface BankAccountQueryRepository {

    /**
    * Consulta todos
    */
    getAll(): Promise<BankAccountQuery[]>

    /**
    * Consulta una cuenta por su usuario
    */
    findOneByUserName(): Promise<BankAccountQuery[]>
}