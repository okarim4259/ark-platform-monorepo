if (!process.env.NODE_ENV) {
    require("dotenv").config();
}
import "reflect-metadata";
import { Server } from "./app/server";

(async () => {
    try {
        const server = new Server();
        server._start();
    } catch (err) {
        console.log(err);
    }
})();
