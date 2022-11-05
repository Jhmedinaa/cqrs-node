import { Container } from "inversify";
import { BankAccountController } from "../trans-context/controllers/bank-account.controller";
import { BankAccountCommandRepository } from "../trans-context/repositories/commands/bank-account.command.repository";
import { BankAccountCommandRepositoryImpl } from "../trans-context/repositories/commands/bank-account.command.repositoryimpl";
import { BankAccountService } from "../trans-context/services/bank-account.service";
import { BankAccountServiceImpl } from "../trans-context/services/bank-account.serviceimpl";
import { UserController } from "../users-context/controllers/user.controller";
import TYPES from "./types";

var container = new Container();

container.bind(TYPES.UserController).to(UserController).inSingletonScope();

//Trans
container
    .bind<BankAccountCommandRepository>(TYPES.BankAccountCommandRepository)
    .to(BankAccountCommandRepositoryImpl);

container
    .bind<BankAccountService>(TYPES.BankAccountService)
    .to(BankAccountServiceImpl)

container
    .bind(TYPES.BankAccountController)
    .to(BankAccountController).inSingletonScope()

export default container;