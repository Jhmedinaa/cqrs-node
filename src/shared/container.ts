import { Container } from "inversify";
import { InfanteController } from "../infantes-context/controllers/infante.controller";
import { InfanteRepositoryImpl } from "../infantes-context/respositories/infante.respositoryimpl";
import { InfanteServiceImpl } from "../infantes-context/services/infante.serviceimpl";
import { Types } from "./types";

var container = new Container();

//
container.bind(Types.InfanteRepository).to(InfanteRepositoryImpl)

container.bind(Types.InfanteService).to(InfanteServiceImpl)

container.bind(Types.InfanteController).to(InfanteController).inSingletonScope()

export default container;