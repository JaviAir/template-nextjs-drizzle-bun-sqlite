// db.ts
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

export const sqlite = new Database(process.env.DB_FILE);
const db = drizzle(sqlite, { schema });

export default db;
