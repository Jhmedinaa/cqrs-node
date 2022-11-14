import { DataSource } from "typeorm";
import { InfanteEntity } from "../infantes-context/models/Infante.entity";

export const DataSourceG = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "guarderiabd",
    entities: [InfanteEntity],
    synchronize: true
})