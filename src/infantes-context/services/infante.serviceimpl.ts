import { inject, injectable } from "inversify";
import { Types } from "../../shared/types";
import { InfanteEntity } from "../models/Infante.entity";
import { InfanteRepository } from "../respositories/infante.repository";
import { InfanteService } from "./infante.service";

@injectable()
export class InfanteServiceImpl implements InfanteService {


    @inject(Types.InfanteRepository) private infanteRepository: InfanteRepository

    async saveInfante(infanteEntity: InfanteEntity): Promise<void> {

        this.infanteRepository.saveInfante(infanteEntity)
            .catch((e) => { throw new Error("Error al registrar") });
    }

    
    findAllInfantes(): Promise<InfanteEntity[]> {
        throw new Error("Method not implemented.");
    }
    finByid(id: string): Promise<InfanteEntity> {
        throw new Error("Method not implemented.");
    }
    updateInfante(infanteEntity: InfanteEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteInfante(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}