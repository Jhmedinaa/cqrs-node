import { injectable } from "inversify";
import { InfanteEntity } from "../models/Infante.entity";
import { InfanteRepository } from "./infante.repository";

@injectable()
export class InfanteRepositoryImpl implements InfanteRepository{


    async saveInfante(infanteEntity: InfanteEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findAllInfantes(): Promise<InfanteEntity[]> {
        throw new Error("Method not implemented.");
    }
    async finByid(id: string): Promise<InfanteEntity> {
        throw new Error("Method not implemented.");
    }
    async updateInfante(infanteEntity: InfanteEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteInfante(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}