//schema.ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// defines a table called "Car" with columns "name","color",etc.
export const car = sqliteTable("car", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  color: text("color").notNull(),
  doors: integer("doors").default(1),
  transmission: text("transmission", { enum: ["Automatic", "Manual"] }).default(
    "Automatic"
  ),
});
