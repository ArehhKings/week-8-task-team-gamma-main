import { Controller } from "./Controller";
import { Router } from "express";
import { AuthSchema } from "./schema";
import { AuthMiddleware } from "../../lib/middleware/AuthMiddleware";

const router = Router();
router.post("/register/user", Controller.signupUser);
router.post("/login", Controller.signin);
router.post("/register/admin", Controller.signupAdmin);
router.post("/send_verification", Controller.sendVerificationCode);
router.post("/verify_code", Controller.verify_code);
router.post("/reset_password/code", Controller.generatePasswordReset);
router.post("/reset_password", Controller.resetPassword);
router.get("/", AuthMiddleware.Authenticate(["admin"]));
export const AuthRouter = router;
