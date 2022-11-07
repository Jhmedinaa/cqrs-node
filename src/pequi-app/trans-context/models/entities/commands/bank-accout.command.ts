import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";
import { AccountState } from "../../../domain/vo/accout.state.vo";

@Entity()
export class BankAccountCommand  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    balance: number;

    @Column()
    user: string;

    @Column({
        unique: true,
        length: 11
        })
    accountNo: string;

    @Column({
        type: "enum",
        enum: AccountState,
        default: AccountState.ACTIVE
    })
    state: string;


}