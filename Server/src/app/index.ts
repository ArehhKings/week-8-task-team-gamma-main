import express,{json, urlencoded, Response,Request, NextFunction} from "express"
import cors from "cors"
import helmet from "helmet"
import logger  from "morgan"
import createError from "http-errors"
import routes  from "../routes"

const app = express()

app.use(cors())
app.use(helmet())
app.use(json())
app.use(urlencoded({extended:true}))
app.use(logger("dev"))
app.use(routes)


app.use((req, res, next) => {
    next(createError(404));
  });
app.use((err:createError.HttpError, req: Request, res: Response, next: NextFunction) =>{
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
})

export default app
