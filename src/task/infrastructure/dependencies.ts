import { CreateTaskUseCase as CreateTaskUseCase } from "../application/usecases/CreateTaskUseCase";
import { GetAllTaskUseCase as GetAllTaskUseCase } from "../application/usecases/GetAllTaskUseCase";
import { GetTaskByIdUseCase as GetTaskByIdUseCase } from "../application/usecases/GetTaskByIdUseCase";
import { CreateTaskController as CreateTaskController } from "./controllers/CreateTaskController";
import { GetAllTaskController as GetAllTaskController } from "./controllers/GetAllTaskController";
import { GetTaskbyIdController } from "./controllers/GetTaskByIdController";
import { CreateTaskImplements } from "./implements/CreateTaskImplements";
import { GetAllTaskImplements as GetAllTaskImplements } from "./implements/GetAllTaskImplements";
import { GetTaskByIdImplements as GetTaskByIdImplements } from "./implements/GetTaskByIdImplements";

const createTaskImplements = new CreateTaskImplements();
const getTaskByIdImplements = new GetTaskByIdImplements();
const getAllTaskImplements = new GetAllTaskImplements();

export const createTaskUseCase = new CreateTaskUseCase(createTaskImplements);
export const getTaskByIdUseCase = new GetTaskByIdUseCase(getTaskByIdImplements);
export const getAllTaskUseCase = new GetAllTaskUseCase(getAllTaskImplements);

export const createTaskController = new CreateTaskController(createTaskUseCase);
export const getTaskByIdController = new GetTaskbyIdController(
  getTaskByIdUseCase
);
export const getAllTaskController = new GetAllTaskController(getAllTaskUseCase);
