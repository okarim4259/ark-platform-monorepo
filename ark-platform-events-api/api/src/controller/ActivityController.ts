import {
    controller,
    httpGet,
    request,
    response
} from "inversify-express-utils";
import { inject } from "inversify";
import { TYPE_DEF } from "../config/ioc/ioc.typedefs";
import { ActivityService } from "../data/service/ActivityService";
import { Request, Response } from "express";
import { ActivityRef } from "../data/entity/ActivityRef";

@controller("/activity")
export class ActivityController {
    @inject(TYPE_DEF.SERVICE.ACTIVITY)
    private readonly _activityService: ActivityService;

    @httpGet("/refs")
    public async getActivityRefs(
        @request() req: Request,
        @response() res: Response
    ) {
        try {
            const refs: ActivityRef[] = await this._activityService.getAllActivityRef();
            return res.status(200).json(refs);
        } catch (err) {
            return res.status(500).json({ ERROR: err });
        }
    }
}
