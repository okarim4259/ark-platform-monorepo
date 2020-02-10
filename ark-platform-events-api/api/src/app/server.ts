import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { Application } from "express";
import { ApplicationMiddlewareInitializer } from "./app";
import { IOC_MODULE_CONFIG } from "../config/ioc/ioc.config";
import { PROPERTIES } from "../config/properties/properties";
import { initDatabaseConnection } from "../config/database/connection";

export class Server {
    private _expressServer: InversifyExpressServer;
    private _ioc_container: Container;
    private _app: Application;

    constructor() {
        this._app = ApplicationMiddlewareInitializer();
        this._ioc_container = new Container();
    }

    private async _init_server(): Promise<void> {
        await this._ioc_container.loadAsync(IOC_MODULE_CONFIG);
        this._expressServer = new InversifyExpressServer(
            this._ioc_container,
            null,
            PROPERTIES.APP_ROOT_CONTEXT,
            this._app
        );
    }

    public async _start(): Promise<void> {
        await initDatabaseConnection();
        await this._init_server();
        this._expressServer.build().listen(PROPERTIES.PORT, () => {
            console.log(
                `${PROPERTIES.APP_NAME} Initialized in env: ${PROPERTIES.ENV}`
            );
        });
    }
}
