import express from "express";
import mongoose from "mongoose";
import { newUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/new", newUser)
export default router;