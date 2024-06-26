import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

//setting up the router
const router = express.Router();

router.get("api/auth/login", login);

router.get("api/auth/signup", signup);

router.get("api/auth/logout", logout);

export default router;