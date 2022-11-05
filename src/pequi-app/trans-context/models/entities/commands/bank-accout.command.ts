import { Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import { AccountState } from "../../../domain/vo/accout.state.vo";

@Entity()
export class BankAccountCommand  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    balance: number;

    @Column()
    user: string;

    @Column({
        unique: true,
        length: 11
        })
    accountNo: string;

    @Column()
    state: string;


}