import {Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID } from "typeorm"

@Entity()
export class BankAccountQuery{

    @ObjectIdColumn()
    id:ObjectID

    @Column()
    balance: number

    @Column()
    accountNo:string

    @Column()
    user:string

    @Column()
    state:string
}