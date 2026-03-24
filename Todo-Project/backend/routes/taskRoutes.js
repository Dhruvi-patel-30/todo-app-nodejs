import express from "express";
import { createTask, getAllTasks, updateTask, deleteTask } from "../controllers/taskControllers.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);


export default router;
