//seed.ts
import db from "./db";
import { car } from "./schema";

await db.insert(car).values([
  { name: "cool car", color: "red" },
  { name: "fancy car", color: "silver", doors: 4, transmission: "Manual" },
]);
console.log(`Seeding complete.`);
const result = await db.select().from(car);
console.log("Rows affected: ", result.length); // Ex. Rows affected: 2
