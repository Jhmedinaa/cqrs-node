import * as dotenv from 'dotenv'
import { Server } from './shared/server'

export class GuarderiaApp {

    server?: Server

    async start() {
        dotenv.config()
        const port = process.env.PORT || '3000'

        this.server = new Server(port)
        return this.server.listen()
    }
}


try{
    new GuarderiaApp().start();
}catch(e){
    console.error(e);
}

