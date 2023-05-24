import express from "express";

import {
  createTaskController,
  getAllTaskController,
  getTaskByIdController,
} from "./dependencies";

export const taskRouter = express.Router();

taskRouter.post("/create", createTaskController.run.bind(createTaskController));
taskRouter.get("/", getAllTaskController.run.bind(getAllTaskController));
taskRouter.get("/:id", getTaskByIdController.run.bind(getTaskByIdController));
