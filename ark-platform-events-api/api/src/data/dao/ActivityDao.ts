import { injectable, inject } from "inversify";
import { TYPE_DEF } from "../../config/ioc/ioc.typedefs";
import { Repository } from "typeorm";
import { ActivityRef } from "../entity/ActivityRef";

@injectable()
export class ActivityDao {
    @inject(TYPE_DEF.REPO.ACTIVITY)
    private readonly _activityRepository: Repository<ActivityRef>;

    public async getActivityRefs(): Promise<ActivityRef[]> {
        return await this._activityRepository.find();
    }
}
