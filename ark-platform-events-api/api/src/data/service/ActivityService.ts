import { injectable, inject } from "inversify";
import { TYPE_DEF } from "../../config/ioc/ioc.typedefs";
import { ActivityDao } from "../dao/ActivityDao";
import { ActivityRef } from "../entity/ActivityRef";

@injectable()
export class ActivityService {
    @inject(TYPE_DEF.DAO.ACTIVITY)
    private readonly _activityDao: ActivityDao;

    public async getAllActivityRef(): Promise<ActivityRef[]> {
        return await this._activityDao.getActivityRefs();
    }
}
