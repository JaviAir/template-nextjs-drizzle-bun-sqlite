// drizzle.config.ts
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./migrations/drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: process.env.DB_FILE ?? "", // 👈 this could also be a path to the local sqlite file
  },
} satisfies Config;
