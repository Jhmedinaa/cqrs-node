import { injectable } from "inversify";
import { InfanteEntity } from "../models/Infante.entity";

@injectable()
export interface InfanteRepository{

    /**
     * 
     * @param infanteEntity REgistart
     */
    saveInfante(infanteEntity: InfanteEntity): Promise<void>;

    /**
     * Consultar todos
     */
    findAllInfantes():Promise<InfanteEntity[]>

    /**
     * conultar uno
     * @param id 
     */
    finByid(id:string):Promise<InfanteEntity>

    /**
     * Acrtualizar
     * @param infanteEntity 
     */
    updateInfante(infanteEntity: InfanteEntity): Promise<void>;

    /**
     * 
     * @param infanteEntity 
     */
    deleteInfante(id: string): Promise<void>;

}