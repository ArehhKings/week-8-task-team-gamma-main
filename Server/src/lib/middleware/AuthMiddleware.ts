import { NextFunction, Response, Request } from "express";
import { Util } from "../../utils";
import { AUTH } from "../../components/Auth/model";
import dayjs from "dayjs";

export class AuthMiddleware {
  static Authenticate =
    (role: string[]) => async (req: any, res: Response, next: NextFunction) => {
      try {
        const token = req.headers["authorization"];
        if (!token) {
          res.status(401).json({ error: "no token provided" });
        } else {
          const verify = await Util.verify(token);
          if (verify === "token expired") {
            res.status(401).json({ error: "token expired" });
          } else {
            const {
              role: userRole,
              _id,
              exp,
            } = verify as Record<string, string>;
            const now = dayjs().unix();
            console.log(now);
            if (Number(exp) < Number(now)) {
              return res
                .status(401)
                .json({ error: "token expired pls login again" });
            }
            if (role.includes(userRole)) {
              const user = await AUTH.findOne({ _id });
              req.user = user?._id;

              next();
            } else {
              res.status(401).json({ error: "unauthorized" });
            }
          }
        }
      } catch (error) {
        // console.log(error);
      }
    };
}
