import "reflect-metadata";
import express, { Application, Response, Request, Router } from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import compress from "compression"
import cors from "cors"
import errorHandler from "errorhandler"
import { getRouteInfo, InversifyExpressServer } from "inversify-express-utils"
import container from "./container"
import * as prettyjson from "prettyjson";
import { DataSourceG } from "./data-source";

export class Server {

    private express: express.Express
    readonly port: string
    server?: InversifyExpressServer

    constructor(port: string) {
        this.port = port

        //Servidor
        this.express = express()
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use(helmet.xssFilter())
        this.express.use(helmet.noSniff())
        this.express.use(helmet.hidePoweredBy())
        this.express.use(helmet.frameguard({ action: 'deny' }))
        this.express.use(compress())


        //router

        this.server = new InversifyExpressServer(container, null, null, this.express)
    }

    /**
     * Method that contains a server listent.
     *
     * @returns void
     */
    async listen(): Promise<void> {
        return new Promise(resolve => {

            this.server?.build().listen(this.port);

            this.getDataBase();

            const routeInfo = getRouteInfo(container);

            console.log(prettyjson.render({ routes: routeInfo }));
            resolve()
        });
    }

    private async getDataBase() {
        //Conexion con el command data baase
        DataSourceG
            .initialize()
            .then(() => {
                console.log(" Database Started!")
            })
            .catch((err:any) => {
                console.error("Exception in command database", err)
            });

     
    }
}


