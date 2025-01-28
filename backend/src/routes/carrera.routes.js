import express from "express";
import {
  getCarreras,
  getCarreraById,
  createCarrera,
  updateCarrera,
  deleteCarrera,
} from "../controllers/carrera.controller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/all", authenticateUser, authorize("carreras", "crear"), getCarreras);
router.get("/:id", getCarreraById);
router.post("/register", createCarrera);
router.put("/:id", updateCarrera);
router.delete("/:id", deleteCarrera);

export default router;
