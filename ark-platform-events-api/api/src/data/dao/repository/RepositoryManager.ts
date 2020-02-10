import { Repository, getManager } from "typeorm";
import { ActivityRef } from "../../entity/ActivityRef";

export const ActivityRefRepository = (): Repository<ActivityRef> => {
    return getManager().getRepository(ActivityRef);
};
