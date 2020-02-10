import * as RateLimit from "express-rate-limit";
import { HttpStatus } from "./HttpStatus";
export const rateLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  statusCode: HttpStatus.TOO_MANY_REQUESTS
});
