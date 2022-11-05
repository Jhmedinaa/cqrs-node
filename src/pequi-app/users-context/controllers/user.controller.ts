import * as express from "express";
import { controller, httpGet, request, response } from "inversify-express-utils";

@controller("/user")
export class UserController {

    @httpGet("/")
    public test(@request() req: express.Request, @response() res: express.Response ):string {
        return Date().toString();
    }
}