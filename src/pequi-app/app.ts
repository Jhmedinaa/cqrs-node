import * as dotenv from 'dotenv'
import { Server } from './shared/server'

export class PequiApp {

    server?: Server

    async start() {
        dotenv.config()
        const port = process.env.PORT || '3000'

        this.server = new Server(port)
        return this.server.listen()
    }
}


try{
    new PequiApp().start();
}catch(e){
    console.error(e);
}

