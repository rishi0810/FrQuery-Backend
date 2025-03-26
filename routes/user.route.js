import { Router } from "express";
import {
  handlesignup,
  handlelogin,
  handlelogout,
} from "../controller/user.control.js";

const router = Router();

router.post("/signup", handlesignup);
router.post("/login", handlelogin);
router.get("/logout", handlelogout);

export default router;
