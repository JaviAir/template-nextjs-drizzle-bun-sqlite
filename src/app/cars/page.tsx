// cars/page.tsx
import db from "@/db/db";
import { car } from "@/db/schema";
import Link from "next/link";

export default async function Page() {
  const data = await db.select().from(car);

  return (
    <>
      <p>Total cars: {data.length ?? 0}</p>
      {data.map((car) => {
        return (
          <div key={car.id} className="hover:underline">
            <Link href={`cars/${encodeURIComponent(car.id)}`}>{car.name}</Link>
          </div>
        );
      })}
    </>
  );
}
