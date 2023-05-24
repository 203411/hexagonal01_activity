import bodyParser from "body-parser";
import express from "express";

import * as db from "./task/infrastructure/database/db-createTable";
import { taskRouter } from "./task/infrastructure/TaskRouter";
import { userRouter } from "./user/infrastructure/UserRouter";

const app = express();

db.createTable();

app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});
