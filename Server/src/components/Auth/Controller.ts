import { Request, Response } from "express";
import {
  forgotPassword,
  loginSchema,
  option,
  registerUserSchema,
  resetPassword,
  sendVerification,
  verifyCode,
} from "../../lib/helper/validator";
import { AUTH } from "./model";
import { Util } from "../../utils";
import { sendMail } from "../../lib/helper/sendMail";

interface Custom extends Error {
  error: string;
  code: number;
}
export class Controller {
  static async signupUser(req: Request, res: Response) {
    try {
      const validationResult = registerUserSchema.validate(req.body, option);
      if (validationResult.error) {
        return res
          .status(400)
          .json({ error: validationResult.error.details[0].message });
      }
      const { email } = req.body;
      const exist = await AUTH.findOne({ email });
      if (exist) {
        return res.status(400).json({ error: "email already exist" });
      }
      const auth = (await AUTH.create({
        ...req.body,
        role: "user",
      })) as unknown as { [key: string]: string };
      return res
        .status(201)
        .json({ message: "user created successfully", auth });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async signupAdmin(req: Request, res: Response) {
    try {
      const validationResult = registerUserSchema.validate(req.body, option);
      if (validationResult.error) {
        return res
          .status(400)
          .json({ error: validationResult.error.details[0].message });
      }
      const { email } = req.body;
      const exist = await AUTH.findOne({ email });
      if (exist) {
        return res.status(400).json({ error: "email already exist" });
      }
      const auth = (await AUTH.create({
        ...req.body,
        role: "admin",
      })) as unknown as { [key: string]: string };
      return res
        .status(201)
        .json({ message: "user created successfully", auth });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async signin(req: Request, res: Response) {
    try {
      const validationResult = loginSchema.validate(req.body, option);
      if (validationResult.error) {
        return res
          .status(400)
          .json({ error: validationResult.error.details[0].message });
      }
      const { email, password } = req.body;
      //check for user in db and compare passwords
      let user = await AUTH.findOne({ email });
      console.log(user);
      if (!user) return res.status(400).json({ error: "invalid credentials" });
      const isValid = await Util.bcryptDecode(password, user.password);
      if (!isValid)
        return res.status(400).json({ error: "invalid credentials" });
      if (!user.isVerified) {
        return res.status(400).json({ error: "please verify your email" });
      }
      const info = {
        _id: user.id,
        role: user.role,
      };
      const token = await Util.generateToken(info);
      return res
        .status(200)
        .json({ message: "login successfully", user, token });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async sendVerificationCode(req: Request, res: Response) {
    try {
      const validationResult = sendVerification.validate(req.body, option);
      if (validationResult.error) {
        return res
          .status(400)
          .json({ error: validationResult.error.details[0].message });
      }
      const { id, email } = req.body;

      const user = await AUTH.findOne({ _id: id });
      if (!user) return res.status(400).json({ error: "invalid credentials" });
      if (user.email !== email)
        return res.status(400).json({ error: "Invalid credentials" });

      const code = Util.generateCode();

      const expiry = new Date().getTime() + 600000;

      user.verificationCode = code;

      user.emailVerificationExpiration = expiry;

      user.emailVerificationStatus = true;

      await Controller._editAccount({ email: user.email }, user);
      const info = {
        from: "priceblings@gmail.com",
        to: user.email,
        subject: "verification code",
        text: `verification code is ${code}`,
      };

      await sendMail(info);

      return res.status(200).json({ message: `verification code is ${code}` });
    } catch (error) {
      const err = error as Custom;
      return res.status(500).json({ error: err.error });
    }
  }
  static async verify_code(req: Request, res: Response) {
    try {
      const validationResult = verifyCode.validate(req.body, option);
      if (validationResult.error) {
        return res
          .status(400)
          .json({ error: validationResult.error.details[0].message });
      }
      const { email, code } = req.body;
      const user = await AUTH.findOne({ email });

      if (!user) return res.status(400).json({ error: "Invalid credentials" });
      if (user.isVerified)
        return res.status(200).json({ message: "email already verified" });
      if (user.email !== email)
        return res.status(400).json({ error: "Invalid credentials" });
      if (user.verificationCode !== code)
        return res.status(400).json({ error: "Invalid OTP" });
      if (
        user.emailVerificationExpiration &&
        user.emailVerificationExpiration < new Date().getTime()
      )
        return res.status(400).json({ error: "OTP expired" });
      user.emailVerificationStatus = true;
      user.isVerified = true;
      user.emailVerificationExpiration = null
      user.verificationCode =null
      await Controller._editAccount({ email: user.email }, user);
      return res.status(200).json({ message: "email verified successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async generatePasswordReset(req: Request, res: Response) {
    try {
      const validationResult = forgotPassword.validate(req.body, option);
      if (validationResult.error) {
        return res
          .status(400)
          .json({ error: validationResult.error.details[0].message });
      }
      const { email } = req.body;
      console.log(email);
      const user = await AUTH.findOne({ email });
      if (!user) return res.status(400).json({ error: "Invalid credentials" });
      const token = Util.generateCode();
      user.resetPasswordCode = token;
      user.resetPasswordStatus = true;
      const expiry = new Date().getTime() + 600000;
      user.resetPasswordExpiration = expiry;
      await Controller._editAccount({ email: user.email }, user);
      const info = {
        from: "priceblings@gmail.com",
        to: user.email,
        subject: "password reset",
        text: `your password reset code is ${token}`,
      };

      await sendMail(info);
      return res
        .status(200)
        .json({ message: "password reset code has been sent to your mail" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async resetPassword(req: Request, res: Response) {
    try {
      const { email, code, password } = req.body;
      const validation = resetPassword.validate(req.body, option);
      if (validation.error) {
        return res
          .status(400)
          .json({ error: validation.error.details[0].message });
      }
      const user = await AUTH.findOne({ email });
      if (!user) return res.status(400).json({ error: "Invalid credentials" });
      if (user.resetPasswordCode !== Number(code)) {
        return res.status(400).json({ error: "Invalid OTP" });
      }
      if (
        user.resetPasswordExpiration &&
        user.resetPasswordExpiration < new Date().getTime()
      ) {
        return res.status(400).json({ error: "OTP expired" });
      }
      const hash = await Util.bcryptEncoded({ value: password });
      user.password = hash;
      user.resetPasswordStatus = false;
      user.resetPasswordCode = null;
      user.resetPasswordExpiration = null;
      await Controller._editAccount({ email: user.email }, user);
      return res.status(200).json({ message: "password reset successful" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  private static async _editAccount(
    filter: Record<string, unknown>,
    update: any
  ) {
    const user = await AUTH.findOneAndUpdate(filter, update, { new: true });
    if (!user) {
      let info: { [key: string]: string } = {
        error: "user not found",
      };
      throw new Error(info.error);
    }

    return user;
  }
}
