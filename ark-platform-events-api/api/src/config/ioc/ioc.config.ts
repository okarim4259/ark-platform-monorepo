import { AsyncContainerModule, interfaces } from "inversify";
import {
    LoadControllersAsync,
    bindRepositories,
    bindDAOs,
    bindServices
} from "./ioc.module_loader";

export const IOC_MODULE_CONFIG = new AsyncContainerModule(
    async (bind: interfaces.Bind) => {
        try {
            await LoadControllersAsync();
            bindRepositories(bind);
            bindDAOs(bind);
            bindServices(bind);
        } catch (err) {
            throw new Error("Error Loading IOC Config Module");
        }
    }
);
