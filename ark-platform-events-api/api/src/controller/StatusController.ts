import {
    controller,
    httpGet,
    request,
    response,
    httpPost
} from "inversify-express-utils";
import { Request, Response } from "express";
import { PROPERTIES } from "../config/properties/properties";
import { HttpStatus } from "../util/constants/HttpStatus";

@controller("/status")
export class StatusController {
    @httpGet("/")
    public async getStatus(@request() req: Request, @response() res: Response) {
        const appStatus = {
            app: PROPERTIES.APP_NAME,
            version: PROPERTIES.VERSION,
            env: PROPERTIES.ENV
        };
        return res.status(HttpStatus.OK).json(appStatus);
    }
}
