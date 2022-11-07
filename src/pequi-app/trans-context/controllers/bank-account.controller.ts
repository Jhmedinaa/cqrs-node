import * as express from 'express'
import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet, httpPost, httpPut, next, request, response } from 'inversify-express-utils'
import TYPES from '../../shared/types';
import { BankAccountService } from "../services/bank-account.service";
import { BankAccountCommand } from "../models/entities/commands/bank-accout.command";
import { AccountState } from '../domain/vo/accout.state.vo';

@controller("/bankaccount")
export class BankAccountController extends BaseHttpController  {

    @inject(TYPES.BankAccountService)
    private bankAccountService: BankAccountService

    @httpGet("/")
    public async getAll(@request() req: express.Request, @response() res: express.Response) {
        let accounts = await this.bankAccountService.getAll()
        res.status(200).send({ cuentas: accounts })
    }

    @httpPost("/")
    public async banckAccount(@request() req: express.Request, @response() res: express.Response) {
        try {
            let account = new BankAccountCommand();
            account.accountNo = req.body.accountNo
            account.balance = req.body.balance
            account.user = req.body.user
            account.state = AccountState.ACTIVE.toString()

            await this.bankAccountService.saveAccountBank(account)
            res.status(201).send({ messaje: "Exito!" })
        } catch (e: any) {
            res.status(403).send({ error: "Error al registrar!" })
        }
    }

    @httpPut("/")
    public async updateAccount(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction) {

        let account = new BankAccountCommand();
        account.accountNo = req.body.accountNo
        account.balance = req.body.balance
        account.user = req.body.user
        account.state = req.body.state

        await this.bankAccountService.updateAccountBank(account)
            .catch((err: Error) => {
                res.status(400).json({ error: err.message });
            })
            .then(() => {
                res.status(201).send({ messaje: "Exito al actualizar!" })
            })


    }
}