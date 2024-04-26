// cars/[color]/page.tsx
import db from "@/db/db";
import { car } from "@/db/schema";
import { eq } from "drizzle-orm";

const getData = async (slug: number) => {
  const data = await db.select().from(car).where(eq(car.id, slug));
  return data;
};

export default async function Page({ params }: any) {
  const data = await getData(params.slug);
  return (
    <>
      <div className="underline text-xl">
        Car id: {params.slug ?? "undefined"}
      </div>
      <ol>
        {data.map((car, index) => {
          return (
            <div key={index}>
              <li>Name: {car.name}</li>
              <li>Color: {car.color}</li>
              <li>Number of doors: {car.doors}</li>
              <li>Transmission Type: {car.transmission}</li>
            </div>
          );
        })}
      </ol>
    </>
  );
}
