import { Pool } from "pg";

const config = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "hexagonal_architecture",
  password: "solis2002",
};

export const pool = new Pool(config);
