import express from "express";
import {
  login,
  loginAdminController,
  getUserInfo,
  logout,  // ✅ Agregar logout
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/login-admin", loginAdminController);
router.get("/user-info", getUserInfo);  // ✅ RUTA CORREGIDA
router.post("/logout", logout);  // ✅ NUEVA RUTA

export default router;
