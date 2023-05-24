import { Request, Response } from "express";

import { CreateTaskUseCase } from "../../application/usecases/CreateTaskUseCase";
import { Task } from "../../domain/entities/Task";

export class CreateTaskController {
  constructor(readonly createTaskUseCase: CreateTaskUseCase) {}

  async run(req: Request, res: Response) {
    const taskContent = req.body;

    console.log(taskContent);

    const task = await this.createTaskUseCase.run(
      new Task(0, taskContent[0].title, taskContent[0].description)
    );
    res.status(201).json(task);
  }
}
