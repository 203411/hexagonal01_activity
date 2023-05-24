import { Task as Task } from "../entities/Task";

export interface GetTaskByIdRepository {
  getById(taskId: number): Promise<Task | null>;
}

export interface CreateTaskRepository {
  createTask(task: Task): Promise<Task | null>;
}

export interface GetAllTaskRepository {
  getAll(): Promise<Task[] | null>;
}
