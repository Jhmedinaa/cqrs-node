import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class InfanteEntity{

    @ObjectIdColumn()
    id:ObjectID

    @Column({
        type: "varchar"
    })
    nombre: String

}