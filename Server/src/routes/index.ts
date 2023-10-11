import { Router, Request, Response } from "express";
import components from "../components";

const router = Router();

router.use("/auth", components.auth.routes)


export default router