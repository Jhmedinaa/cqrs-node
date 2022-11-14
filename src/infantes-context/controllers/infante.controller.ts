import * as express from "express"
import { read } from "fs";
import { inject } from "inversify";
import { BaseHttpController, controller, httpPost, request, response } from "inversify-express-utils";
import { Types } from "../../shared/types";
import { InfanteService } from "../services/infante.service";

@controller("/infantes")
export class InfanteController extends BaseHttpController {

    @inject(Types.InfanteService) infanteService: InfanteService;

    @httpPost("/")
    public async saveInsfante(@request() request: express.Request, @response() response: express.Response ){
            var infante = request.body

            try {
            await this.infanteService.saveInfante(infante)

            response.status(201).send({ mensaje: "Exito!"})
            } catch(e){
             
            response.status(403).send({ mensaje: e})   
            }
    }
    
}