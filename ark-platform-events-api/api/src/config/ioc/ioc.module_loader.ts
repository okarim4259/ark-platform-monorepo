import { interfaces } from "inversify";
import { Repository } from "typeorm";
import { ActivityRef } from "../../data/entity/ActivityRef";
import { TYPE_DEF } from "./ioc.typedefs";
import { ActivityRefRepository } from "../../data/dao/repository/RepositoryManager";
import { ActivityDao } from "../../data/dao/ActivityDao";
import { ActivityService } from "../../data/service/ActivityService";

export const LoadControllersAsync = () => {
    require("../../controller/statusController");
    require("../../controller/ActivityController");
};

export const bindRepositories = (bind: interfaces.Bind): void => {
    bind<Repository<ActivityRef>>(TYPE_DEF.REPO.ACTIVITY).toDynamicValue(() => {
        return ActivityRefRepository();
    });
};

export const bindDAOs = (bind: interfaces.Bind): void => {
    bind<ActivityDao>(TYPE_DEF.DAO.ACTIVITY).to(ActivityDao);
};

export const bindServices = (bind: interfaces.Bind): void => {
    bind<ActivityService>(TYPE_DEF.SERVICE.ACTIVITY).to(ActivityService);
};
